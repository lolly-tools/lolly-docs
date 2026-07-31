// SPDX-License-Identifier: MPL-2.0
/**
 * Count what a committed docs screenshot is actually MADE of, at build time, so the
 * credential line can state it rather than assert it.
 *
 * The claim the /info screenshots make is that they are documents, not pictures:
 * real <path> geometry that zooms, diffs and re-renders. "12,400 paths in 41 KB" is
 * that claim in a form a reader can check against the file they were just served —
 * and against the PNG they would otherwise have been sent. A raster baseline has no
 * such structure, and says so instead of borrowing the sentence.
 *
 * Counted with regexes over the file text, never a DOM. These files reach 500 KB
 * (one is 6.8 MB) and the docs build re-runs on every save under --watch, so parsing
 * 95 MB of SVG into a tree twenty-seven times over would cost more than every other
 * part of the build put together. Start tags are all that is being counted, XML
 * escapes any literal `<` in text, and the numbers are self-evidently approximate to
 * one decision (see the metadata strip below) that is documented rather than hidden.
 *
 * Cached on path+size+mtime like docs/shot-provenance.ts, for the same reason: a
 * 27-locale build asks for the same ~320 files once per locale.
 *
 * Total by construction. Anything unreadable — a missing file, a permissions error,
 * bytes that do not look like markup — returns null, and the caller simply leaves
 * the facts off the line. A credential must never be the thing that breaks a build.
 */
import { readFileSync, statSync } from 'node:fs';

export interface ShotAnatomy {
  /** 'vector' when the shapes could be counted; 'raster' for a PNG/JPEG baseline. */
  kind: 'vector' | 'raster';
  /** <path> elements. 0 on a raster. */
  paths: number;
  /** <g> elements. 0 on a raster. */
  groups: number;
  /** Every element in the drawing, the <svg> root included. 0 on a raster. */
  elements: number;
  /** The committed file's size on disk, in bytes. */
  bytes: number;
}

const cache = new Map<string, ShotAnatomy | null>();

/** The anatomy of one committed shot, or null if it cannot be read. */
export function readShotAnatomy(path: string): ShotAnatomy | null {
  let key: string;
  let bytes: number;
  try {
    const st = statSync(path);
    // A directory has a size too, and reporting it as "10 KB of raster" would be a
    // confident answer to a question nobody asked.
    if (!st.isFile()) return null;
    bytes = st.size;
    key = `${path}:${st.size}:${st.mtimeMs}`;
  } catch {
    return null;
  }
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  const out = count(path, bytes);
  cache.set(key, out);
  return out;
}

// A start tag, and nothing else: `</g>` starts with a slash, `<!--` with a bang and
// `<?xml` with a question mark, so none of them are elements. XML escapes any `<` in
// text content, so a stray angle bracket in a screenshot's own words cannot inflate
// the count.
const EL_RE = /<[a-z][a-z0-9:-]*[\s/>]/gi;
const PATH_RE = /<path[\s/>]/gi;
const GROUP_RE = /<g[\s/>]/gi;
const METADATA_RE = /<metadata\b[\s\S]*?<\/metadata>/gi;

function count(path: string, bytes: number): ShotAnatomy | null {
  if (!path.endsWith('.svg')) return { kind: 'raster', paths: 0, groups: 0, elements: 0, bytes };
  let text: string;
  try {
    text = readFileSync(path, 'utf-8');
  } catch {
    return null;
  }
  // The C2PA manifest lives in <metadata> as base64. It is packaging, not drawing,
  // and counting its two wrapper elements would make the smallest shots look like
  // they contain more than they do.
  const art = text.replace(METADATA_RE, '');
  const elements = (art.match(EL_RE) ?? []).length;
  if (!elements) return null;   // not markup we can read; say nothing rather than "0 paths"
  return {
    kind: 'vector',
    paths: (art.match(PATH_RE) ?? []).length,
    groups: (art.match(GROUP_RE) ?? []).length,
    elements,
    bytes,
  };
}
