#!/usr/bin/env node
// Minimal static site generator for Lolly.
// Run: node docs/build.ts            build the /info pages once
//      node docs/build.ts --watch    rebuild on every change under docs/ (used by dev:web)
// Output: shells/web/public/info/
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, watch } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateOgImages } from './og-image.ts';
import { LANGS, LANG_META } from '../engine/src/lang.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const outDir = resolve(repoRoot, 'shells/web/public/info');

type Lang = (typeof LANGS)[number];

// Canonical site origin — used for absolute URLs in social/Open Graph tags.
// Social crawlers (Slack, X, Facebook, LinkedIn, iMessage) require absolute og:image URLs.
const SITE_URL = 'https://lolly.tools';
const REPO_URL = 'https://github.com/lolly-tools/lolly';
// "Founded by SUSE" badge — reused at the same size in the hero, the social-proof
// block, and the footer. Always links to suse.com in a new window.
const FOUNDED_BY = `<a class="founded-badge" href="https://www.suse.com" target="_blank" rel="noopener" aria-label="Founded by SUSE"><img src="/info/founded-by.svg" alt="Founded by SUSE"></a>`;
const OG_IMAGE = `${SITE_URL}/og.png`;
// webp, not avif: og:logo consumers (and GitHub-style scrapers) don't decode avif.
const OG_LOGO = `${SITE_URL}/info/icon.webp`;
const SITE_DESCRIPTION = 'Lolly: constraint-first, template-driven platform for generating production-ready creative and content assets at scale.';
// Landing-page <title>/share title — the brand tagline (matches the web shell's
// index.html). Other pages use "<page title> — Lolly", so this is landing-only.
const LANDING_TITLE = 'Lolly — assets that stay the same so everything else can change';

// Tool count for the hero badge — read from the generated catalog index so it
// tracks the real number of tools rather than drifting as a hand-edited literal.
const TOOL_COUNT = JSON.parse(
  readFileSync(resolve(repoRoot, 'catalog/tools/index.json'), 'utf8')
).tools.length;

type Pathway = 'quickstart' | 'builders' | 'creators' | 'operators';

interface Page {
  slug: string;
  title: string;
  src: string;
  isLanding?: boolean;
  // Which pathway this page belongs under — drives the docs sidebar + which top-nav
  // link is highlighted. Omitted only for the landing page.
  pathway?: Pathway;
  // True for the four pathway landing pages (quickstart + the three hubs).
  isHub?: boolean;
}

// A retired slug that now redirects to its new home. Emitted as a tiny meta-refresh
// stub so inbound links + bookmarks keep resolving after the IA rebuild.
interface Stub { slug: string; target: string; }
const stubs: Stub[] = [
  // Old front-door entry; the friendly start is now the Quickstart primary article.
  { slug: 'getting-started', target: '/info/quickstart.html' },
];

const pages: Page[] = [
  { slug: 'index',            title: 'Lolly',     src: 'site.md',            isLanding: true },

  // ── Primary article ──────────────────────────────────────────────────────
  { slug: 'quickstart',       title: 'Quickstart', src: 'quickstart.md', pathway: 'quickstart', isHub: true },

  // ── Pathway hubs ─────────────────────────────────────────────────────────
  { slug: 'creators',         title: 'Lolly for Creators',  src: 'creators.md',  pathway: 'creators',  isHub: true },
  { slug: 'builders',         title: 'Lolly for Builders',  src: 'builders.md',  pathway: 'builders',  isHub: true },
  { slug: 'operators',        title: 'Lolly for Operators', src: 'operators.md', pathway: 'operators', isHub: true },

  // ── Creators pathway ─────────────────────────────────────────────────────
  { slug: 'using',            title: 'Using Lolly',       src: 'using.md',        pathway: 'creators' },
  { slug: 'brand-studio',     title: 'The Brand Studio',  src: 'brand-studio.md', pathway: 'creators' },
  { slug: 'profile',          title: 'Profiles',          src: 'profile.md',      pathway: 'creators' },
  { slug: 'design-import',    title: 'Import a design (Figma, Penpot, Illustrator, InDesign)', src: 'design-import.md', pathway: 'creators' },
  { slug: 'exporting',        title: 'Exporting & Formats', src: 'exporting.md',  pathway: 'creators' },
  { slug: 'positioning',      title: 'How Lolly compares', src: 'positioning.md', pathway: 'creators' },

  // ── Builders pathway ─────────────────────────────────────────────────────
  { slug: 'overview',         title: 'Overview',          src: 'overview.md',        pathway: 'builders' },
  { slug: 'design-tokens',    title: 'Design Tokens',     src: 'design-tokens.md',   pathway: 'builders' },
  { slug: 'authoring-tools',  title: 'Authoring Tools',   src: 'authoring-tools.md', pathway: 'builders' },
  { slug: 'authoring-assets', title: 'Authoring Assets',  src: 'authoring-assets.md', pathway: 'builders' },
  { slug: 'host-api',         title: 'Host API',          src: 'host-api.md',        pathway: 'builders' },
  { slug: 'url-mode',         title: 'URL Mode',          src: 'url-mode.md',        pathway: 'builders' },
  { slug: 'cli',              title: 'CLI',               src: 'cli.md',             pathway: 'builders' },
  { slug: 'tui',              title: 'TUI',               src: 'tui.md',             pathway: 'builders' },
  { slug: 'mcp',              title: 'MCP Server',        src: 'mcp.md',             pathway: 'builders' },
  { slug: 'ai-agents',        title: 'AI Agents',         src: 'ai-agents.md',       pathway: 'builders' },
  { slug: 'extension',        title: 'Browser Extension', src: 'extension.md',       pathway: 'builders' },
  { slug: 'build-guide',      title: 'Build Guide',       src: 'build-guide.md',     pathway: 'builders' },
  { slug: 'deployment',       title: 'Deployment',        src: 'deployment.md',      pathway: 'builders' },
  { slug: 'configuration',    title: 'Configuration',     src: 'configuration.md',   pathway: 'builders' },
  { slug: 'content-credentials-identity', title: 'Content Credentials Identity', src: 'content-credentials-identity.md', pathway: 'builders' },
  { slug: 'data-transfer',    title: 'Data Transfer',     src: 'data-transfer.md',   pathway: 'builders' },
  { slug: 'about',            title: 'About',             src: '../README.md',       pathway: 'builders' },

  // ── Operators pathway ────────────────────────────────────────────────────
  { slug: 'adoption-governance', title: 'Adoption & Governance', src: 'adoption-governance.md', pathway: 'operators' },
  { slug: 'privacy',          title: 'Privacy Policy',    src: 'privacy.md',         pathway: 'operators' },
];

// Top-nav links, grouped into clusters. Each inner array renders as one cluster
// (tight spacing); clusters are separated by a divider (see .nav-group CSS). Home
// is intentionally omitted — the brand wordmark already links to /info/index.html.
interface NavLink {
  label: string;
  href: string;
}

// Simplified top nav: the one primary article + the three pathways. Each nav link
// maps to a pathway (via NAV_PATHWAY below) so the hub highlights on any child page,
// not only on the hub itself.
const NAV: NavLink[][] = [
  [ { label: 'Quickstart',    href: '/info/quickstart.html' } ],
  [ { label: 'For Creators',  href: '/info/creators.html' },
    { label: 'For Builders',  href: '/info/builders.html' },
    { label: 'For Operators', href: '/info/operators.html' } ],
];
// href → pathway, so a child page (e.g. host-api) lights up its hub's nav link.
const NAV_PATHWAY: Record<string, Pathway> = {
  '/info/quickstart.html': 'quickstart',
  '/info/creators.html':   'creators',
  '/info/builders.html':   'builders',
  '/info/operators.html':  'operators',
};

// The docs sidebar, per pathway. Each group is a labelled cluster of links; the
// first item of the first group is the pathway hub itself. Slugs must exist in
// `pages` (or `stubs`). A page can appear in more than one pathway's sidebar
// (e.g. Content Credentials is builder + operator) — its own `pathway` only picks
// which sidebar renders when you're viewing it.
interface SideItem { slug: string; label: string; }
interface SideGroup { label: string; items: SideItem[]; }
const SIDEBARS: Record<Pathway, { title: string; groups: SideGroup[] }> = {
  quickstart: {
    title: 'Quickstart',
    groups: [
      { label: 'Start here', items: [ { slug: 'quickstart', label: 'Quickstart' } ] },
      { label: 'Then pick a path', items: [
        { slug: 'creators',  label: 'For Creators' },
        { slug: 'builders',  label: 'For Builders' },
        { slug: 'operators', label: 'For Operators' } ] },
    ],
  },
  creators: {
    title: 'For Creators',
    groups: [
      { label: 'Creators', items: [
        { slug: 'creators',   label: 'Why Lolly' },
        { slug: 'quickstart', label: 'Quickstart' } ] },
      { label: 'Make things', items: [
        { slug: 'using',         label: 'Using Lolly' },
        { slug: 'brand-studio',  label: 'The Brand Studio' },
        { slug: 'profile',       label: 'Your profile' },
        { slug: 'design-import', label: 'Import a design' },
        { slug: 'exporting',     label: 'Exporting & formats' } ] },
      { label: 'Compare', items: [
        { slug: 'positioning', label: 'How Lolly compares' } ] },
    ],
  },
  builders: {
    title: 'For Builders',
    groups: [
      { label: 'Builders', items: [
        { slug: 'builders',   label: 'Overview' },
        { slug: 'quickstart', label: 'Quickstart' } ] },
      { label: 'Architecture', items: [
        { slug: 'overview',      label: 'Architecture' },
        { slug: 'design-tokens', label: 'Design Tokens' } ] },
      { label: 'Author tools', items: [
        { slug: 'authoring-tools',  label: 'Authoring Tools' },
        { slug: 'authoring-assets', label: 'Authoring Assets' },
        { slug: 'host-api',         label: 'Host API' },
        { slug: 'url-mode',         label: 'URL Mode' } ] },
      { label: 'Run & integrate', items: [
        { slug: 'cli',       label: 'CLI' },
        { slug: 'tui',       label: 'TUI' },
        { slug: 'mcp',       label: 'MCP Server' },
        { slug: 'ai-agents', label: 'AI Agents' },
        { slug: 'extension', label: 'Chrome Extension' } ] },
      { label: 'Ship & operate', items: [
        { slug: 'build-guide',   label: 'Build Guide' },
        { slug: 'deployment',    label: 'Deployment' },
        { slug: 'configuration', label: 'Configuration' } ] },
      { label: 'Trust & data', items: [
        { slug: 'content-credentials-identity', label: 'Content Credentials' },
        { slug: 'data-transfer', label: 'Data Transfer' },
        { slug: 'about',         label: 'About' } ] },
    ],
  },
  operators: {
    title: 'For Operators',
    groups: [
      { label: 'Operators', items: [
        { slug: 'operators',  label: 'Overview' },
        { slug: 'quickstart', label: 'Quickstart' } ] },
      { label: 'Adopt & govern', items: [
        { slug: 'adoption-governance', label: 'Adoption & Governance' },
        { slug: 'deployment',    label: 'Deployment' },
        { slug: 'configuration', label: 'Configuration' } ] },
      { label: 'Trust', items: [
        { slug: 'content-credentials-identity', label: 'Content Credentials' },
        { slug: 'privacy', label: 'Privacy Policy' } ] },
    ],
  },
};

const ICONS = {
  developers:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  marketers:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  journalists: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  media:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>`,
  ai:          `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  security:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  platform:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  tool:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  sales:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
};

// Per-bullet benefit icons
const S2 = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
const BICONS = {
  repeat:       `<svg viewBox="0 0 24 24" ${S2}><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  image:        `<svg viewBox="0 0 24 24" ${S2}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  cpu:          `<svg viewBox="0 0 24 24" ${S2}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
  unlock:       `<svg viewBox="0 0 24 24" ${S2}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  layers:       `<svg viewBox="0 0 24 24" ${S2}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  zap:          `<svg viewBox="0 0 24 24" ${S2}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  alertTriangle:`<svg viewBox="0 0 24 24" ${S2}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  settings:     `<svg viewBox="0 0 24 24" ${S2}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  barChart:     `<svg viewBox="0 0 24 24" ${S2}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  sliders:      `<svg viewBox="0 0 24 24" ${S2}><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  download:     `<svg viewBox="0 0 24 24" ${S2}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  refreshCw:    `<svg viewBox="0 0 24 24" ${S2}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  tool:         `<svg viewBox="0 0 24 24" ${S2}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  lock:         `<svg viewBox="0 0 24 24" ${S2}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  star:         `<svg viewBox="0 0 24 24" ${S2}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  checkCircle:  `<svg viewBox="0 0 24 24" ${S2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  trendingDown: `<svg viewBox="0 0 24 24" ${S2}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
  database:     `<svg viewBox="0 0 24 24" ${S2}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  gitCommit:    `<svg viewBox="0 0 24 24" ${S2}><circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/></svg>`,
  server:       `<svg viewBox="0 0 24 24" ${S2}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  minusCircle:  `<svg viewBox="0 0 24 24" ${S2}><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  shield:       `<svg viewBox="0 0 24 24" ${S2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  alertCircle:  `<svg viewBox="0 0 24 24" ${S2}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  arrowRight:   `<svg viewBox="0 0 24 24" ${S2}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  stopwatch:    `<svg viewBox="0 0 24 24" ${S2}><circle cx="12" cy="13" r="7"/><polyline points="12 10 12 13 14 13"/><line x1="9.5" y1="3" x2="14.5" y2="3"/><line x1="12" y1="3" x2="12" y2="6"/></svg>`,
  buildings:    `<svg viewBox="0 0 24 24" ${S2}><rect x="2" y="10" width="8" height="11"/><rect x="14" y="5" width="8" height="16"/><line x1="1" y1="21" x2="23" y2="21"/><line x1="5" y1="14" x2="5" y2="14"/><line x1="5" y1="17" x2="5" y2="17"/><line x1="17" y1="9" x2="17" y2="9"/><line x1="17" y1="13" x2="17" y2="13"/><line x1="17" y1="17" x2="17" y2="17"/></svg>`,
};

function getBulletIcon(raw: string) {
  const t = raw.toLowerCase();
  if (t.includes('compliance') || t.includes('risk'))                    return BICONS.alertTriangle;
  if (t.includes('governance') || t.includes('enforce'))                  return BICONS.shield;
  if (t.includes('self-host'))                                             return BICONS.server;
  if (t.includes('never leaves') || t.includes('air-gap'))               return BICONS.lock;
  if (t.includes('lock what'))                                            return BICONS.lock;
  if (t.includes('infrastructure') || t.includes('deploy'))               return BICONS.server;
  if (t.includes('vendor') || t.includes('lock-in'))                     return BICONS.minusCircle;
  if (t.includes('data') && t.includes('visual'))                         return BICONS.barChart;
  if (t.includes('data') && (t.includes('belongs') || t.includes('directly'))) return BICONS.database;
  if (t.includes('deterministic') || t.includes('version-controlled') || t.includes('auditable')) return BICONS.gitCommit;
  if (t.includes('reproducible') || t.includes('same inputs'))            return BICONS.repeat;
  if (t.includes('source of truth') || t.includes('permutation'))         return BICONS.layers;
  if (t.includes('execute logic') || t.includes('logic inside'))          return BICONS.cpu;
  if (t.includes('codebase') || t.includes('media out'))                  return BICONS.image;
  if (t.includes('bottleneck') || t.includes('tedious') || t.includes('instantly')) return BICONS.zap;
  if (t.includes('operationalize') || t.includes('production'))           return BICONS.settings;
  if (t.includes('style') || t.includes('publication'))                   return BICONS.sliders;
  if (t.includes('print') || t.includes('screen-ready') || t.includes('format')) return BICONS.download;
  if (t.includes('reusable') || t.includes('recurring'))                  return BICONS.refreshCw;
  if (t.includes('author tool') || t.includes('not files'))               return BICONS.tool;
  if (t.includes('frontier') || t.includes('ceiling'))                    return BICONS.star;
  if (t.includes("doesn't drift") || t.includes('quality'))               return BICONS.checkCircle;
  if (t.includes('token') || t.includes('fraction'))                      return BICONS.trendingDown;
  if (t.includes('critical information') || t.includes('incident'))       return BICONS.alertCircle;
  if (t.includes('zero lock'))                                             return BICONS.unlock;
  if (t.includes('wait on nothing') || t.includes('on the road'))         return BICONS.stopwatch;
  if (t.includes('army') || t.includes('global campaign'))                return BICONS.buildings;
  return BICONS.arrowRight;
}

// Per-feature platform icons
const PICONS = {
  star:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  devices: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  offline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>`,
  layers:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  film:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>`,
  zap:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  link:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  folder:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  canvas:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 7.07 17 2.51-7.42L21 11.09z"/></svg>`,
  shield:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
};

function getPlatformIcon(title: string) {
  const t = title.toLowerCase();
  // Specific feature keywords first, so a word like "free" in "Free-canvas layout"
  // doesn't shadow the more specific canvas/link/folder icons.
  if (t.includes('credential') || t.includes('authentic') || t.includes('provenance')) return PICONS.shield;
  if (t.includes('link') || t.includes('share'))       return PICONS.link;
  if (t.includes('organise') || t.includes('folder') || t.includes('bulk')) return PICONS.folder;
  if (t.includes('canvas') || t.includes('layout'))    return PICONS.canvas;
  if (t.includes('offline'))                           return PICONS.offline;
  if (t.includes('everywhere') || t.includes('works')) return PICONS.devices;
  if (t.includes('free') || t.includes('open'))        return PICONS.star;
  if (t.includes('format') || t.includes('huge'))      return PICONS.layers;
  if (t.includes('production') || t.includes('quality') || t.includes('studio')) return PICONS.film;
  return PICONS.zap;
}

function getIcon(h2: string) {
  const t = h2.toLowerCase();
  if (t.includes('develop')) return ICONS.developers;
  if (t.includes('market'))  return ICONS.marketers;
  if (t.includes('journal')) return ICONS.journalists;
  if (t.includes('media') || t.includes('creative')) return ICONS.media;
  if (t.includes('ai') || t.includes('agent'))       return ICONS.ai;
  if (t.includes('sales'))                           return ICONS.sales;
  if (t.includes('it') || t.includes('security'))    return ICONS.security;
  if (t.includes('platform')) return ICONS.platform;
  return ICONS.tool;
}

function tabLabel(h2: string) {
  const t = h2.toLowerCase();
  if (t.startsWith('ai'))                              return 'AI';
  if (t.startsWith('it') || t.includes('security'))   return 'IT & Sec';
  if (t.includes('media') || t.includes('creativ'))   return 'Creatives';
  if (t.includes('journal'))                          return 'Press';
  return h2.split(/[\s,&]+/)[0]!;
}

function toSlug(h2: string) {
  const t = h2.toLowerCase();
  if (t.includes('journal'))                          return 'press';
  if (t.includes('media') || t.includes('creativ'))  return 'creatives';
  if (t.startsWith('ai') || t.includes('agent'))     return 'ai';
  if (t.startsWith('it') || t.includes('security'))  return 'it';
  return t.split(/\W+/)[0]!;
}

// ── Markdown helpers ──────────────────────────────────────────────────────────

function esc(s: string) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inline(text: string) {
  let s = esc(text);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // Images before links, or the link regex eats `[alt](url)` and strands the `!`.
  s = s.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');
  // External links (absolute http/https) open in a new tab; internal/relative links
  // (other /info pages, #anchors) stay in place.
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, url) =>
    /^https?:\/\//i.test(url)
      ? `<a href="${url}" target="_blank" rel="noopener">${label}</a>`
      : `<a href="${url}">${label}</a>`);
  return s;
}

function parseCells(line: string) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|'))   s = s.slice(0, -1);
  return s.split('|').map(c => c.trim());
}

function mdToHtml(md: string) {
  const lines = md.split('\n');
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i]!;

    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i]!.startsWith('```')) { code.push(lines[i]!); i++; }
      i++;
      out.push(`<pre><code${lang ? ` class="language-${esc(lang)}"` : ''}>${esc(code.join('\n'))}</code></pre>`);
      continue;
    }

    const hm = line.match(/^(#{1,4}) (.+)/);
    if (hm) {
      const lvl = hm[1]!.length, text = hm[2]!;
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      out.push(`<h${lvl} id="${id}">${inline(text)}</h${lvl}>`);
      i++; continue;
    }

    if (line.startsWith('> ')) {
      const ql: string[] = [];
      while (i < lines.length && lines[i]!.startsWith('> ')) { ql.push(lines[i]!.slice(2)); i++; }
      out.push(`<blockquote>${ql.map(l => `<p>${inline(l)}</p>`).join('')}</blockquote>`);
      continue;
    }

    if (/^-{3,}$/.test(line.trim())) { out.push('<hr>'); i++; continue; }

    if (line.includes('|') && i + 1 < lines.length && /^\|?[-|: ]+\|/.test(lines[i + 1]!)) {
      const headers = parseCells(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i]!.trim().startsWith('|')) { rows.push(parseCells(lines[i]!)); i++; }
      out.push('<div class="table-wrap"><table>');
      out.push('<thead><tr>' + headers.map(c => `<th>${inline(c)}</th>`).join('') + '</tr></thead>');
      out.push('<tbody>' + rows.map(r => '<tr>' + r.map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') + '</tbody>');
      out.push('</table></div>');
      continue;
    }

    if (/^\s*[-*] /.test(line)) {
      out.push('<ul>');
      while (i < lines.length && /^\s*[-*] /.test(lines[i]!)) {
        out.push(`<li>${inline(lines[i]!.replace(/^\s*[-*] /, ''))}</li>`); i++;
      }
      out.push('</ul>'); continue;
    }

    if (/^\d+\. /.test(line)) {
      out.push('<ol>');
      while (i < lines.length && /^\d+\. /.test(lines[i]!)) {
        out.push(`<li>${inline(lines[i]!.replace(/^\d+\. /, ''))}</li>`); i++;
      }
      out.push('</ol>'); continue;
    }

    if (line.trim() === '') { i++; continue; }

    const para: string[] = [];
    while (
      i < lines.length && lines[i]!.trim() !== '' &&
      !lines[i]!.startsWith('#') && !lines[i]!.startsWith('```') &&
      !lines[i]!.startsWith('> ') && !/^\s*[-*] /.test(lines[i]!) &&
      !/^\d+\. /.test(lines[i]!) && !/^-{3,}$/.test(lines[i]!.trim()) &&
      !(lines[i]!.includes('|') && i + 1 < lines.length && /^\|?[-|: ]+\|/.test(lines[i + 1]!))
    ) { para.push(lines[i]!); i++; }
    if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`);
    else i++;
  }

  return out.join('\n');
}

// ── FAQ source ────────────────────────────────────────────────────────────────
// FAQs are authored in docs/faq.md so they can be maintained without touching this
// build script. Each `##` heading is a question; the lines beneath it (up to the
// next `##`) are the answer, in the same lightweight markdown the rest of the site
// uses. Everything before the first `##` (title + maintainer notes) is ignored.
function loadFaqs(lang: Lang = 'en') {
  const localized = lang !== 'en' ? resolve(__dirname, 'i18n', lang, 'faq.md') : null;
  const md = readFileSync(localized && existsSync(localized) ? localized : resolve(__dirname, 'faq.md'), 'utf8');
  const faqs: { q: string; a: string }[] = [];
  let cur: { q: string; a: string[] } | null = null;
  for (const line of md.split('\n')) {
    const m = line.match(/^##\s+(.+)/);
    if (m) {
      if (cur) faqs.push({ q: cur.q, a: cur.a.join('\n').trim() });
      cur = { q: m[1]!.trim(), a: [] };
    } else if (cur) {
      cur.a.push(line);
    }
  }
  if (cur) faqs.push({ q: cur.q, a: cur.a.join('\n').trim() });
  return faqs;
}

// ── Landing content files (docs/site/*.{json,md}) ────────────────────────────
// The landing page's copy — headings, leads, card text — lives in these files so
// editing it never touches this build script. Bespoke SVG icons/illustrations
// stay in code (SITE_ICONS below) since they're graphics, not content a
// non-developer edits; content files reference them by string key.
// Locale-aware: a `docs/i18n/<lang>/site/<name>` translation is used when present,
// else the English source at `docs/site/<name>` (fallback, not a 404 — same
// contract as resolvePageSrc/loadFaqs).
function siteContentPath(name: string, lang: Lang): string {
  if (lang !== 'en') {
    const localized = resolve(__dirname, 'i18n', lang, 'site', name);
    if (existsSync(localized)) return localized;
  }
  return resolve(__dirname, 'site', name);
}
function loadSiteJson(name: string, lang: Lang = 'en'): any {
  return JSON.parse(readFileSync(siteContentPath(name, lang), 'utf8'));
}
function loadSiteMd(name: string, lang: Lang = 'en'): string {
  return readFileSync(siteContentPath(name, lang), 'utf8');
}
// `\n` in a JSON string field becomes a literal <br> — the convention every
// multi-line heading/copy field in docs/site/*.json uses.
const br = (s: string) => esc(s).replace(/\n/g, '<br>');

const SITE_ICON_S = `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
const SITE_ICON_S18 = `fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;

// Every bespoke icon the landing content files reference by key. Consolidates
// what used to be a dozen scattered `IC_*`/local-array consts inside
// buildLandingContent so a content file can name an icon without any code nearby.
const SITE_ICONS: Record<string, string> = {
  // why-section frustrations
  anxiety: `<svg viewBox="0 0 24 24" ${SITE_ICON_S18}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  bottleneck: `<svg viewBox="0 0 24 24" ${SITE_ICON_S18}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  cloudDependence: `<svg viewBox="0 0 24 24" ${SITE_ICON_S18}><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 8.4"/><path d="M13 16H7a4 4 0 0 1-.9-7.9"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  // assure section
  assureCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>`,
  assureEyeOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.9 4.24A9.1 9.1 0 0 1 12 4c7 0 10 8 10 8a13.2 13.2 0 0 1-1.67 2.68"/><path d="M6.6 6.6A13.5 13.5 0 0 0 2 12s3 8 10 8a9.7 9.7 0 0 0 5.4-1.6"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  assureScan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>`,
  assureServer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="6" rx="2"/><rect x="2" y="15" width="20" height="6" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  // import section — flow steps + points
  importFlowFile: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  importFlowCanvas: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  importFlowMix: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  importFlowRender: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  importPointEdit: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  importPointShield: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  importPointGrid: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
  // whats-a-tool features
  toolFeatureStar: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  toolFeaturePeople: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
  toolFeatureCode: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  toolFeatureMonitor: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  toolFeatureShuffle: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`,
  toolFeatureNested: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1.5"/></svg>`,
  // about-section items
  aboutAnimals: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><circle cx="6" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><circle cx="10" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="14" cy="12" r="1" fill="currentColor" stroke="none"/><ellipse cx="12" cy="15.5" rx="2" ry="1.5"/></svg>`,
  aboutGem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`,
  // everywhere-section surfaces + delivery models
  surfaceWeb: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  surfaceMacos: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>`,
  surfaceLinux: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  surfaceIos: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  surfaceAndroid: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><polyline points="9 2 9 7 15 7 15 2"/></svg>`,
  surfaceCli: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  // TUI = the CLI's terminal prompt (chevron + command line), but framed in a
  // box with a divider (title bar) — the CLI icon, drawn as a full-screen app.
  surfaceTui: `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/><polyline points="7 12 10 15 7 18"/><line x1="13" y1="18" x2="17" y2="18"/></svg>`,
  modelDeploy: `<svg class="everywhere-model-icon" viewBox="0 0 24 24" ${SITE_ICON_S}><path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  modelServe: `<svg class="everywhere-model-icon" viewBox="0 0 24 24" ${SITE_ICON_S}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  modelHybrid: `<svg class="everywhere-model-icon" viewBox="0 0 24 24" ${SITE_ICON_S}><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  // Bespoke landing illustrations (site-style inline SVG), referenced by qol.json/assure.json.
  // Sound: flowing sound waves + musical notes — the "assistive sound / focus beat" motif.
  illusSound: `<svg viewBox="0 0 300 150" role="img" aria-label="Sound waves with musical notes" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="sndGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#008657"/><stop offset="1" stop-color="#30ba78"/></linearGradient></defs>
  <path d="M0 105 Q37.5 138 75 105 T150 105 T225 105 T300 105" fill="none" stroke="#90ebcd" stroke-width="3" stroke-opacity=".45" stroke-linecap="round"/>
  <path d="M0 96 Q37.5 61 75 96 T150 96 T225 96 T300 96" fill="none" stroke="url(#sndGrad)" stroke-width="5" stroke-linecap="round"/>
  <g fill="#008657">
    <ellipse cx="70" cy="60" rx="8" ry="5.5" transform="rotate(-20 70 60)"/>
    <rect x="76.5" y="28" width="3" height="34" rx="1.5"/>
    <path d="M79.5 28 q15 5 9 22 q2 -11 -9 -15 Z"/>
  </g>
  <g fill="#30ba78">
    <ellipse cx="150" cy="54" rx="8" ry="5.5" transform="rotate(-20 150 54)"/>
    <ellipse cx="190" cy="45" rx="8" ry="5.5" transform="rotate(-20 190 45)"/>
    <rect x="156.5" y="24" width="3" height="32" rx="1.5"/>
    <rect x="196.5" y="15" width="3" height="32" rx="1.5"/>
    <path d="M156.5 24 L199.5 15 L199.5 23 L156.5 32 Z"/>
  </g>
</svg>`,
  // Bulk: nested project folders/cards rendered into one zip package.
  illusBulk: `<svg viewBox="0 0 300 150" role="img" aria-label="Nested project folders rendered into a single zip" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="48" width="70" height="84" rx="10" fill="#0c322c" opacity=".12" transform="rotate(-10 59 90)"/>
  <rect x="30" y="42" width="70" height="84" rx="10" fill="#fff" stroke="#90ebcd" stroke-width="2" transform="rotate(-5 65 84)"/>
  <rect x="36" y="36" width="70" height="84" rx="10" fill="#fff" stroke="#30ba78" stroke-width="2"/>
  <rect x="46" y="48" width="50" height="30" rx="5" fill="#30ba78" opacity=".85"/>
  <rect x="46" y="84" width="50" height="6" rx="3" fill="#d8ede4"/>
  <rect x="46" y="96" width="34" height="6" rx="3" fill="#d8ede4"/>
  <path d="M120 88 H154" stroke="#5a7067" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M147 80 L157 88 L147 96" stroke="#5a7067" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="178" y="40" width="86" height="92" rx="12" fill="#30ba78"/>
  <rect x="178" y="40" width="86" height="30" rx="12" fill="#008657"/>
  <rect x="178" y="56" width="86" height="14" fill="#008657"/>
  <line x1="221" y1="70" x2="221" y2="124" stroke="#f0fbf5" stroke-width="2.5" stroke-dasharray="5 5"/>
  <circle cx="221" cy="78" r="3" fill="#008657"/>
  <rect x="214" y="82" width="14" height="16" rx="3" fill="#f0fbf5"/>
</svg>`,
  // Checker: a Lolly export carrying a verified Content Credential — a credential
  // card (framed image + manifest) with a glowing shield-check. The signature.
  illusCheck: `<svg viewBox="0 0 300 220" role="img" aria-label="A Lolly export carrying a verified Content Credential" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#30ba78" stop-opacity=".5"/><stop offset="1" stop-color="#30ba78" stop-opacity="0"/></radialGradient>
    <clipPath id="cImg"><rect x="54" y="40" width="150" height="90" rx="10"/></clipPath>
  </defs>
  <circle cx="214" cy="170" r="60" fill="url(#cGlow)"/>
  <rect x="40" y="26" width="180" height="160" rx="18" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" stroke-width="1.5"/>
  <rect x="54" y="40" width="150" height="90" rx="10" fill="#0a2621"/>
  <g clip-path="url(#cImg)">
    <circle cx="172" cy="66" r="14" fill="#fe7c3f"/>
    <path d="M54 130 V102 L92 68 L128 108 L152 84 L204 128 V130 Z" fill="#30ba78" opacity=".9"/>
  </g>
  <rect x="54" y="142" width="130" height="8" rx="4" fill="rgba(255,255,255,.16)"/>
  <rect x="54" y="158" width="92" height="8" rx="4" fill="rgba(255,255,255,.1)"/>
  <path d="M214 116 l34 12 v24 c0 26 -16 40 -34 47 c-18 -7 -34 -21 -34 -47 v-24 z" fill="#30ba78" stroke="#0a2621" stroke-width="2.5"/>
  <path d="M198 152 l11 11 l19 -22" fill="none" stroke="#0a2621" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};
function siteIcon(key: string): string {
  const svg = SITE_ICONS[key];
  if (!svg) console.warn(`⚠  docs/site: unknown icon key "${key}"`);
  return svg ?? '';
}

// ── Landing page special renderer ─────────────────────────────────────────────

// The audience-card icons and internal slug/anchor wiring are matched from ENGLISH
// keywords (getIcon/toSlug). A translated landing page has translated headings, which
// match nothing: every card falls through to the default monitor icon, and non-Latin
// headings (CJK/Arabic) slug to empty strings that collide and break tab activation.
// The cards are authored in the same order in every locale, so key the icon + slug off
// the ENGLISH heading at the same index. The visible tab LABEL still uses the translated
// heading — only the presentational icon and the wiring are shared across locales.
let _enAudienceH2: string[] | null = null;
function englishAudienceH2s(): string[] {
  if (_enAudienceH2) return _enAudienceH2;
  try {
    const enMd = readFileSync(resolve(__dirname, 'site.md'), 'utf-8');
    _enAudienceH2 = enMd.split(/\n---\n/).slice(1, -1).map(
      s => s.split('\n').find(l => l.startsWith('## '))?.slice(3).trim() ?? '',
    );
  } catch {
    _enAudienceH2 = [];
  }
  return _enAudienceH2;
}

function buildLandingContent(md: string, lang: Lang = 'en') {
  const rawSections = md.split(/\n---\n/);
  const heroSection      = rawSections[0]!;
  const audienceSections = rawSections.slice(1, -1);
  const tailSection      = rawSections[rawSections.length - 1]!;

  const heroSubtitle = heroSection.split('\n')
    .filter(l => l.trim() && !l.startsWith('#'))
    .map(l => esc(l.trim())).join('<br>').trim();

  function parseAudienceCard(section: string) {
    const lines = section.split('\n');
    const h2 = lines.find(l => l.startsWith('## '))?.slice(3).trim() ?? '';
    const h3 = lines.find(l => l.startsWith('### '))?.slice(4).trim() ?? '';
    const bullets = lines.filter(l => /^- /.test(l)).map(l => l.slice(2).trim());
    // Extract first prose paragraph after the h3
    let intro = '';
    const h3Idx = lines.findIndex(l => l.startsWith('### '));
    if (h3Idx >= 0) {
      for (let j = h3Idx + 1; j < lines.length; j++) {
        const l = lines[j]!.trim();
        if (!l) continue;
        if (l.startsWith('#') || l.startsWith('-') || l.startsWith('`')) break;
        intro = l; break;
      }
    }
    let inCode = false, codeLang = '', codeLines: string[] = [];
    const codeBlocks: { lang: string; code: string }[] = [];
    for (const l of lines) {
      if (l.startsWith('```') && !inCode)  { inCode = true; codeLang = l.slice(3); codeLines = []; }
      else if (l.startsWith('```') && inCode) { inCode = false; codeBlocks.push({ lang: codeLang, code: codeLines.join('\n') }); }
      else if (inCode) codeLines.push(l);
    }
    return { h2, h3, intro, bullets, codeBlocks };
  }

  const cardData = audienceSections.map(s => parseAudienceCard(s));

  // English heading per card, for locale-stable icons + slugs. For English this IS the
  // card's own heading; for every other locale it's the same-index English heading.
  const enH2 = lang === 'en' ? cardData.map(c => c.h2) : englishAudienceH2s();
  const iconOf = (i: number, h2: string) => getIcon(enH2[i] ?? h2);
  const slugOf = (i: number, h2: string) => toSlug(enH2[i] ?? h2);

  // Tab strip with header
  const audienceChrome = loadSiteJson('audience-chrome.json', lang) as { title: string; subtitle: string };
  const tabsHtml = `<div class="audience-header reveal">
  <img src="/info/mascots/quoll.png" alt="" class="audience-mascot" aria-hidden="true">
  <div class="audience-header-text">
    <h2 class="audience-title">${esc(audienceChrome.title)}</h2>
    <p class="audience-sub">${esc(audienceChrome.subtitle)}</p>
  </div>
</div>
<div class="audience-tabs" role="tablist" aria-label="Who is it for?">
${cardData.map(({ h2 }, i) => `  <button class="audience-tab" role="tab" aria-selected="${i === 0 ? 'true' : 'false'}" data-panel="${i}" data-slug="${slugOf(i, h2)}">
    <span class="tab-icon">${iconOf(i, h2)}</span>
    <span class="tab-label">${esc(tabLabel(h2))}</span>
  </button>`).join('\n')}
</div>`;

  // Cards as full-width panels (two-column on desktop)
  const cardsHtml = cardData.map(({ h2, h3, intro, bullets, codeBlocks }, i) => `<div class="audience-card${i === 0 ? ' tab-active' : ''}" id="${slugOf(i, h2)}" data-panel="${i}">
  <div class="card-main">
    <div class="card-icon">${iconOf(i, h2)}</div>
    <div class="card-audience">${esc(h2)}</div>
    <div class="card-tagline">${inline(h3)}</div>
    ${intro ? `<p class="card-intro">${inline(intro)}</p>` : ''}
    ${codeBlocks[0] ? `<pre><code class="language-${esc(codeBlocks[0]!.lang)}">${esc(codeBlocks[0]!.code)}</code></pre>` : ''}
  </div>
  <ul class="card-benefits">${bullets.map(b => `<li><span class="bullet-icon">${getBulletIcon(b)}</span><span>${inline(b)}</span></li>`).join('')}</ul>
</div>`).join('\n');

  // Parse platform features and "What's a tool?" from tail. Locate the two `## `
  // headings ("The Creator", "The Tools" in the English source) by ORDINAL
  // POSITION, not literal English text — a translated tail section keeps the
  // same two headings in the same order, but with translated text, so a
  // startsWith('## The Tools')-style match would find nothing (findIndex → -1)
  // for every non-English locale and silently drop the whole whats-a-tool
  // section (whatsLines.length gates it) instead of falling back to English.
  const tailLines  = tailSection.split('\n');
  const tailH2Indices = tailLines.map((l, i) => (l.startsWith('## ') ? i : -1)).filter(i => i >= 0);
  const platformIdx = tailH2Indices[0] ?? -1;
  const whatsIdx    = tailH2Indices[1] ?? -1;

  const platformFeatures = tailLines
    .slice(platformIdx + 1, whatsIdx >= 0 ? whatsIdx : undefined)
    .filter(l => l.startsWith('**'))
    .map(l => {
      const m = l.match(/^\*\*([^*]+)\*\*\.?\s*(.*)/);
      return m ? { title: m[1]!, desc: m[2]! } : null;
    // filter(Boolean) drops the nulls but doesn't narrow the type; cast to the non-null shape.
    }).filter(Boolean) as { title: string; desc: string }[];

  const whatsLines = whatsIdx >= 0
    ? tailLines.slice(whatsIdx + 1).filter(l => l.trim() && !l.startsWith('#'))
    : [];

  // Platform feature renderer. A bullet whose description is a "·"-separated chip
  // list still renders as chips (kept for flexibility); everything else — including
  // the formats bullet, now a plain "creates N / ingests N" fact — renders as prose.
  // The full format breakdown lives in its own Formats section, not this box.
  function renderPlatformFeature(f: { title: string; desc: string }, idx = 0) {
    const isChipList = f.desc.includes('·') &&
      (f.title.toLowerCase().includes('format') || f.title.toLowerCase().includes('huge'));
    const body = isChipList
      ? `<div class="format-chips">${f.desc.split(/\s·\s|·/).map(fmt => `<span class="format-chip">${esc(fmt.trim())}</span>`).join('')}</div>`
      : `<p>${inline(f.desc)}</p>`;
    return `<div class="platform-feature reveal reveal-${(idx % 6) + 1}">
  <div class="platform-feature-icon">${getPlatformIcon(f.title)}</div>
  <strong>${esc(f.title)}</strong>
  ${body}
</div>`;
  }

  const whatsATool = loadSiteJson('whats-a-tool.json', lang) as {
    heading: string; lead: string;
    anatomy: { file: string; name: string; desc: string }[];
    features: { icon: string; title: string; desc: string }[];
    tryNow: { title: string; desc: string; cta: string; href: string };
  };
  const ANATOMY_HTML = `<div class="tool-anatomy reveal reveal-1">
  ${whatsATool.anatomy.map((p, i) => `${i > 0 ? '<div class="tool-plus">+</div>' : ''}
  <div class="tool-part">
    <div class="tool-part-file">${esc(p.file)}</div>
    <div class="tool-part-name">${esc(p.name)}</div>
    <div class="tool-part-desc">${inline(p.desc)}</div>
  </div>`).join('\n  ')}
</div>`;

  const TAB_JS = `<script>
(function(){
  var tabs=document.querySelectorAll('.audience-tab');
  var panels=document.querySelectorAll('.audience-card');
  function activate(idx){
    tabs.forEach(function(t,i){t.setAttribute('aria-selected',i===idx?'true':'false');});
    panels.forEach(function(p,i){p.classList.toggle('tab-active',i===idx);});
  }
  function activateBySlug(slug){
    var found=false;
    tabs.forEach(function(t,i){if(t.dataset.slug===slug){activate(i);found=true;}});
    return found;
  }
  // Activate from hash on load
  var hash=location.hash.slice(1);
  if(hash) activateBySlug(hash);
  else activateBySlug('marketers');
  // Click: activate and push slug to hash
  tabs.forEach(function(tab,idx){
    tab.addEventListener('click',function(){
      activate(idx);
      history.replaceState(null,'','#'+tab.dataset.slug);
    });
  });
  // Browser back/forward
  window.addEventListener('hashchange',function(){
    activateBySlug(location.hash.slice(1));
  });
  // Nav: transparent over hero, solid after
  (function(){
    var nav=document.querySelector('nav');
    var hero=document.querySelector('.hero');
    function updateNav(){
      var heroBottom=hero?hero.getBoundingClientRect().bottom:0;
      nav.classList.toggle('nav-solid',heroBottom<=0);
    }
    window.addEventListener('scroll',updateNav,{passive:true});
    updateNav();
  })();
})();
</script>`;

  const everywhere = loadSiteJson('everywhere.json', lang) as {
    heading: string; copy: string;
    surfaces: { icon: string; label: string }[];
    modelsIntro: string;
    models: { n: string; icon: string; label: string; desc: string }[];
  };

  // Frequently asked questions — rendered as native <details> accordions (no JS,
  // keyboard-accessible, works offline). Answers are markdown; blank lines split
  // paragraphs. Add or edit an item in docs/faq.md (see loadFaqs above).
  const FAQ_CHEVRON = `<svg viewBox="0 0 24 24" ${SITE_ICON_S}><polyline points="6 9 12 15 18 9"/></svg>`;
  const FAQS = loadFaqs(lang);

  // Each question gets a stable slug id (same rule as markdown headings, prefixed
  // `faq-`) so other surfaces can deep-link straight to it — e.g. the app's gallery
  // "Utilities" strip links to #faq-what-makes-utilities-different-from-tools. The
  // FAQ_JS script below opens the matching <details> and scrolls it into view.
  const faqSlug = (q: string) =>
    'faq-' + q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const faqHtml = `<section class="faq-section" id="faq">
  <div class="faq-inner reveal">
    <h2>Questions &amp; answers</h2>
    <p class="faq-lead">The things people ask most.</p>
    <div class="faq-list">
      ${FAQS.map(f => `<details class="faq-item" id="${faqSlug(f.q)}">
        <summary class="faq-q"><span>${inline(f.q)}</span><span class="faq-chevron">${FAQ_CHEVRON}</span></summary>
        <div class="faq-a">${mdToHtml(f.a)}</div>
      </details>`).join('\n      ')}
    </div>
  </div>
</section>`;

  // Deep-link an individual FAQ open: a #faq-… fragment (on load or via history
  // back/forward) opens that <details> and scrolls it into view. A bare #faq still
  // relies on the browser's native scroll to the section. No dependency on TAB_JS.
  const FAQ_JS = `<script>
(function(){
  function openFaq(){
    var id = decodeURIComponent(location.hash.slice(1));
    if(!id) return;
    var el = document.getElementById(id);
    if(el && el.tagName === 'DETAILS' && el.classList.contains('faq-item')){
      el.open = true;
      requestAnimationFrame(function(){ el.scrollIntoView({behavior:'smooth', block:'start'}); });
    }
  }
  openFaq();
  window.addEventListener('hashchange', openFaq);
})();
</script>`;

  // ── "Bring your existing design files" segment ──────────────────────────────
  // The good-news import story: finished Figma / Penpot / Illustrator / InDesign
  // files land as editable, on-brand layouts that anyone can reuse and mix with
  // tools. They all arrive through Layout Studio's "Import a design" button —
  // natively (.fig / .penpot / .ai / .pdf / .idml) or as an SVG export (the wide
  // door: almost any design app exports SVG).
  const importData = loadSiteJson('import.json', lang) as {
    eyebrow: string; heading: string; lead: string;
    sources: { mono: string; name: string; fmt: string; color: string }[];
    flow: { icon: string; title: string; desc: string }[];
    points: { icon: string; title: string; desc: string }[];
    cta: string; ctaHref: string;
  };
  const IMPORT_HTML = `<section class="import-section">
  <div class="import-inner">
    <div class="import-lede reveal">
      <span class="import-eyebrow">${esc(importData.eyebrow)}</span>
      <h2>${esc(importData.heading)}</h2>
      <p class="import-lead">${inline(importData.lead)}</p>
    </div>
    <div class="import-sources reveal reveal-1">
      ${importData.sources.map(s => `<div class="import-source">
        <span class="import-badge" style="--b:${s.color}">${esc(s.mono)}</span>
        <strong>${esc(s.name)}</strong>
        <span class="import-fmt">${esc(s.fmt)}</span>
      </div>`).join('\n      ')}
    </div>
    <div class="import-flow reveal reveal-2">
      ${importData.flow.map((f, i) => `<div class="import-step">
        <div class="import-step-icon">${siteIcon(f.icon)}</div>
        <strong>${esc(f.title)}</strong>
        <p>${esc(f.desc)}</p>
      </div>${i < importData.flow.length - 1 ? '<span class="import-arrow" aria-hidden="true">→</span>' : ''}`).join('\n      ')}
    </div>
    <div class="import-points reveal reveal-3">
      ${importData.points.map(p => `<div class="import-point">
        <div class="import-point-icon">${siteIcon(p.icon)}</div>
        <strong>${esc(p.title)}</strong>
        <p>${esc(p.desc)}</p>
      </div>`).join('\n      ')}
    </div>
    <div class="import-cta-row reveal reveal-4">
      <a href="${esc(localizeHref(lang, importData.ctaHref))}" class="import-more">${esc(importData.cta)}</a>
    </div>
  </div>
</section>`;

  // ── Bespoke landing illustrations (site-style inline SVG) ──────────────────
  // Sound: flowing sound waves + musical notes — the "assistive sound / focus
  // beat" motif, in the brand green→teal.
  const ILLUS_SOUND = `<svg viewBox="0 0 300 150" role="img" aria-label="Sound waves with musical notes" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="sndGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#008657"/><stop offset="1" stop-color="#30ba78"/></linearGradient></defs>
  <path d="M0 105 Q37.5 138 75 105 T150 105 T225 105 T300 105" fill="none" stroke="#90ebcd" stroke-width="3" stroke-opacity=".45" stroke-linecap="round"/>
  <path d="M0 96 Q37.5 61 75 96 T150 96 T225 96 T300 96" fill="none" stroke="url(#sndGrad)" stroke-width="5" stroke-linecap="round"/>
  <g fill="#008657">
    <ellipse cx="70" cy="60" rx="8" ry="5.5" transform="rotate(-20 70 60)"/>
    <rect x="76.5" y="28" width="3" height="34" rx="1.5"/>
    <path d="M79.5 28 q15 5 9 22 q2 -11 -9 -15 Z"/>
  </g>
  <g fill="#30ba78">
    <ellipse cx="150" cy="54" rx="8" ry="5.5" transform="rotate(-20 150 54)"/>
    <ellipse cx="190" cy="45" rx="8" ry="5.5" transform="rotate(-20 190 45)"/>
    <rect x="156.5" y="24" width="3" height="32" rx="1.5"/>
    <rect x="196.5" y="15" width="3" height="32" rx="1.5"/>
    <path d="M156.5 24 L199.5 15 L199.5 23 L156.5 32 Z"/>
  </g>
</svg>`;

  // Bulk: nested project folders/cards rendered into one zip package.
  const ILLUS_BULK = `<svg viewBox="0 0 300 150" role="img" aria-label="Nested project folders rendered into a single zip" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="48" width="70" height="84" rx="10" fill="#0c322c" opacity=".12" transform="rotate(-10 59 90)"/>
  <rect x="30" y="42" width="70" height="84" rx="10" fill="#fff" stroke="#90ebcd" stroke-width="2" transform="rotate(-5 65 84)"/>
  <rect x="36" y="36" width="70" height="84" rx="10" fill="#fff" stroke="#30ba78" stroke-width="2"/>
  <rect x="46" y="48" width="50" height="30" rx="5" fill="#30ba78" opacity=".85"/>
  <rect x="46" y="84" width="50" height="6" rx="3" fill="#d8ede4"/>
  <rect x="46" y="96" width="34" height="6" rx="3" fill="#d8ede4"/>
  <path d="M120 88 H154" stroke="#5a7067" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M147 80 L157 88 L147 96" stroke="#5a7067" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="178" y="40" width="86" height="92" rx="12" fill="#30ba78"/>
  <rect x="178" y="40" width="86" height="30" rx="12" fill="#008657"/>
  <rect x="178" y="56" width="86" height="14" fill="#008657"/>
  <line x1="221" y1="70" x2="221" y2="124" stroke="#f0fbf5" stroke-width="2.5" stroke-dasharray="5 5"/>
  <circle cx="221" cy="78" r="3" fill="#008657"/>
  <rect x="214" y="82" width="14" height="16" rx="3" fill="#f0fbf5"/>
</svg>`;

  // Checker: a Lolly export carrying a verified Content Credential — a credential
  // card (framed image + manifest) with a glowing shield-check. The signature.
  const ILLUS_CHECK = `<svg viewBox="0 0 300 220" role="img" aria-label="A Lolly export carrying a verified Content Credential" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cGlow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#30ba78" stop-opacity=".5"/><stop offset="1" stop-color="#30ba78" stop-opacity="0"/></radialGradient>
    <clipPath id="cImg"><rect x="54" y="40" width="150" height="90" rx="10"/></clipPath>
  </defs>
  <circle cx="214" cy="170" r="60" fill="url(#cGlow)"/>
  <rect x="40" y="26" width="180" height="160" rx="18" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" stroke-width="1.5"/>
  <rect x="54" y="40" width="150" height="90" rx="10" fill="#0a2621"/>
  <g clip-path="url(#cImg)">
    <circle cx="172" cy="66" r="14" fill="#fe7c3f"/>
    <path d="M54 130 V102 L92 68 L128 108 L152 84 L204 128 V130 Z" fill="#30ba78" opacity=".9"/>
  </g>
  <rect x="54" y="142" width="130" height="8" rx="4" fill="rgba(255,255,255,.16)"/>
  <rect x="54" y="158" width="92" height="8" rx="4" fill="rgba(255,255,255,.1)"/>
  <path d="M214 116 l34 12 v24 c0 26 -16 40 -34 47 c-18 -7 -34 -21 -34 -47 v-24 z" fill="#30ba78" stroke="#0a2621" stroke-width="2.5"/>
  <path d="M198 152 l11 11 l19 -22" fill="none" stroke="#0a2621" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  const qol = loadSiteJson('qol.json', lang) as { panels: { illustration: string; heading: string; desc: string }[] };
  const QOL_HTML = `<section class="qol-section">
  <div class="qol-inner">
    ${qol.panels.map((p, i) => `<div class="qol-panel reveal${i > 0 ? ` reveal-${i}` : ''}">
      <div class="qol-illus">${siteIcon(p.illustration)}</div>
      <div class="qol-text">
        <h3>${esc(p.heading)}</h3>
        <p>${inline(p.desc)}</p>
      </div>
    </div>`).join('\n    ')}
  </div>
</section>`;

  const assure = loadSiteJson('assure.json', lang) as {
    eyebrow: string; heading: string; lead: string; illustration: string;
    checks: { title: string; desc: string }[];
    cards: { icon: string; title: string; desc: string }[];
    cta: string; ctaHref: string;
  };
  const ASSURE_HTML = `<section class="assure-section">
  <div class="assure-inner">
    <div class="assure-lede reveal">
      <span class="assure-eyebrow">${esc(assure.eyebrow)}</span>
      <h2>${br(assure.heading)}</h2>
      <p class="assure-lead">${inline(assure.lead)}</p>
    </div>
    <div class="assure-main reveal reveal-1">
      <div class="assure-checker">${siteIcon(assure.illustration)}</div>
      <ul class="assure-checks">
        ${assure.checks.map(c => `<li><span class="assure-check-ic">${siteIcon('assureCheck')}</span><div><strong>${esc(c.title)}</strong><span>${inline(c.desc)}</span></div></li>`).join('\n        ')}
      </ul>
    </div>
    <div class="assure-grid reveal reveal-2">
      ${assure.cards.map(c => `<div class="assure-card"><span class="assure-card-ic">${siteIcon(c.icon)}</span><strong>${esc(c.title)}</strong><p>${inline(c.desc)}</p></div>`).join('\n      ')}
    </div>
    <div class="assure-cta reveal reveal-3"><a href="${esc(localizeHref(lang, assure.ctaHref))}">${esc(assure.cta)}</a></div>
  </div>
</section>`;

  // Dedicated Formats section — the full in/out breakdown, chips grouped by what
  // each format is (vector / raster / motion / …). The engine box only states the
  // counts; this section is the detail.
  // Six formats round-trip — Lolly both READS and WRITES them — so they appear in BOTH
  // columns. Mark those chips (⇄ + filled style) so the overlap reads as intentional
  // rather than accidental duplication. Matched on the exact chip token, so the export-only
  // "CMYK PDF" variant is NOT marked — only plain "PDF" round-trips.
  const ROUNDTRIP = new Set(['PDF', 'SVG', 'TIFF', 'AVIF', 'CSV', 'JSON']);
  const fmtChips = (list: string) =>
    `<div class="format-chips">${list.split(/\s·\s|·/).map(fmt => {
      const f = fmt.trim();
      const rt = ROUNDTRIP.has(f.toUpperCase());
      return `<span class="format-chip${rt ? ' format-chip--rt' : ''}"${rt ? ' title="Round-trips — Lolly reads and writes this format"' : ''}>${rt ? '<span class="rt-mark" aria-hidden="true">⇄</span>' : ''}${esc(f)}</span>`;
    }).join('')}</div>`;
  const fmtGroup = (cat: string, list: string) =>
    `<div class="formats-group"><span class="formats-cat">${esc(cat)}</span>${fmtChips(list)}</div>`;
  const formats = loadSiteJson('formats.json', lang) as {
    heading: string; lead: string;
    ingestsLabel: string; ingestsCount: string; exportsLabel: string; exportsCount: string;
    ingests: { category: string; list: string }[];
    exports: { category: string; list: string }[];
  };
  const RT_INLINE_HTML = `<span class="rt-inline"><span class="rt-mark" aria-hidden="true">⇄</span>&nbsp;round-trip</span>`;
  const FORMATS_HTML = `<section class="formats-section">
  <div class="formats-inner">
    <div class="formats-head reveal">
      <h2>${esc(formats.heading)}</h2>
      <p>${inline(formats.lead).replace('{roundtrip}', RT_INLINE_HTML)}</p>
    </div>
    <div class="formats-cols">
      <div class="formats-col reveal reveal-1">
        <div class="formats-col-top"><span class="formats-dir">${esc(formats.ingestsLabel)}</span><span class="formats-num">${esc(formats.ingestsCount)}</span></div>
        ${formats.ingests.map((g: { category: string; list: string }) => fmtGroup(g.category, g.list)).join('\n        ')}
      </div>
      <div class="formats-col reveal reveal-2">
        <div class="formats-col-top"><span class="formats-dir">${esc(formats.exportsLabel)}</span><span class="formats-num">${esc(formats.exportsCount)}</span></div>
        ${formats.exports.map((g: { category: string; list: string }) => fmtGroup(g.category, g.list)).join('\n        ')}
      </div>
    </div>
  </div>
</section>`;

  // ── "Why we built Lolly" + old-way vs Lolly-way matrix ──────────────────────
  // The emotional hook for the people who actually have to adopt Lolly — the
  // non-designers. Names the three everyday frustrations, then puts the old way
  // and the Lolly way literally side by side (friction → relief), left vs right.
  const why = loadSiteJson('why.json', lang) as {
    eyebrow: string; heading: string; lead: string;
    frustrations: { icon: string; title: string; desc: string }[];
    matrix: { pain: string; relief: string }[];
  };
  const WHY_MATRIX_HTML = `<section class="why-section">
  <div class="why-inner">
    <div class="why-lede reveal">
      <span class="why-eyebrow">${esc(why.eyebrow)}</span>
      <h2>${br(why.heading)}</h2>
      <p class="why-lead">${inline(why.lead)}</p>
    </div>
    <div class="why-frustrations reveal reveal-1">
      ${why.frustrations.map(f => `<div class="why-frustration"><span class="why-frustration-ic">${siteIcon(f.icon)}</span><strong>${esc(f.title)}</strong><p>${inline(f.desc)}</p></div>`).join('\n      ')}
    </div>
    <div class="matrix reveal reveal-2" role="table" aria-label="The old way compared with the Lolly way">
      <div class="matrix-head matrix-head--old" role="columnheader">The old way</div>
      <div class="matrix-head matrix-head--new" role="columnheader">The Lolly way</div>
      ${why.matrix.map(r => `<div class="matrix-cell matrix-cell--old" role="cell"><span class="matrix-mark" aria-hidden="true">✕</span><span>${esc(r.pain)}</span></div>
      <div class="matrix-cell matrix-cell--new" role="cell"><span class="matrix-mark" aria-hidden="true">✓</span><span>${esc(r.relief)}</span></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

  const heroChrome = loadSiteJson('hero-chrome.json', lang) as {
    pilotTag: string; pilotText: string; pilotAriaLabel: string;
    ctas: { href: string; label: string; class: string }[];
    trustChips: string[]; toolCountSuffix: string;
  };
  const pathways = loadSiteJson('pathways.json', lang) as {
    title: string; lead: string;
    cards: { href: string; icon: string; eyebrow: string; name: string; desc: string; cta: string }[];
  };
  const platformChrome = loadSiteJson('platform-chrome.json', lang) as { whatsLabel: string; heading: string; tagline: string };
  const socialProof = loadSiteJson('social-proof.json', lang) as {
    heading: string; date: string; descClassed1: string; descPlain: string; descClassed2: string;
    creditPrefix: string; creditLinkLabel: string; creditLinkHref: string;
  };
  const aboutItems = loadSiteJson('about-items.json', lang) as { icon: string; desc: string }[];
  // about.md: heading / lead paragraph / subheading, 3 blocks split on a blank line
  // (kept a dedicated parse rather than mdToHtml so the lead paragraph keeps its
  // `.about-lead` styling class, which generic markdown has no way to express).
  const aboutMdBlocks = loadSiteMd('about.md', lang).trim().split(/\n\s*\n/);
  const aboutMd = {
    heading: (aboutMdBlocks[0] ?? '').replace(/^#+\s*/, '').trim(),
    lead: (aboutMdBlocks[1] ?? '').trim(),
    subheading: (aboutMdBlocks[2] ?? '').replace(/^#+\s*/, '').trim(),
  };
  return `
<section class="hero">
  <canvas id="heroCanvas" aria-hidden="true"></canvas>
  <div class="hero-inner">
  <div class="hero-heading">
    <h1 class="hero-logo-h1"><a href="${esc(localizeHref(lang, '/'))}" class="hero-logo-link" aria-label="Open Lolly — browse all tools"><img src="/info/icon.avif" alt="Lolly" class="hero-logo"></a></h1>
  </div>
  <div class="hero-details">
    <span class="hero-pilot" aria-label="${esc(heroChrome.pilotAriaLabel)}"><span class="hero-pilot-tag">${esc(heroChrome.pilotTag)}</span><span class="hero-pilot-text">${esc(heroChrome.pilotText)}</span></span>
    <p class="subtitle">${heroSubtitle}</p>
    <div class="hero-cta">
      ${heroChrome.ctas.map(c => `<a href="${esc(localizeHref(lang, c.href))}" class="${esc(c.class)}">${esc(c.label)}</a>`).join('\n      ')}
    </div>
    <div class="hero-trust">
      ${heroChrome.trustChips.map(c => `<span>${esc(c)}</span>`).join('\n      <span class="trust-dot">·</span>\n      ')}
      <span class="trust-dot">·</span>
      <span>${TOOL_COUNT} ${esc(heroChrome.toolCountSuffix)}</span>
    </div>
    <div class="hero-founded">${FOUNDED_BY}</div>
  </div>
  </div>

</section>
<section class="pathways-section reveal">
  <div class="pathways-inner">
    <h2 class="pathways-title">${esc(pathways.title)}</h2>
    <p class="pathways-lead">${inline(pathways.lead)}</p>
    <div class="pathways-grid">
      ${pathways.cards.map(c => `<a class="pathway-card" href="${esc(c.href)}">
        <span class="pathway-ic" aria-hidden="true">${(ICONS as Record<string, string>)[c.icon] ?? ''}</span>
        <span class="pathway-eyebrow">${esc(c.eyebrow)}</span>
        <span class="pathway-name">${esc(c.name)}</span>
        <span class="pathway-desc">${esc(c.desc)}</span>
        <span class="pathway-go">${esc(c.cta)}</span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>${WHY_MATRIX_HTML}
<section class="audience-section">
  ${tabsHtml}
  <div class="audience-panels">
    ${cardsHtml}
  </div>
</section>
<div class="platform-whats-wrap">
<div class="whats-label">${esc(platformChrome.whatsLabel)}</div>
<section class="platform-section">
  <div class="platform-inner">
    <div class="platform-header reveal">
      <h2>${esc(platformChrome.heading)}</h2>
      <p class="platform-tagline">${esc(platformChrome.tagline)}</p>
    </div>
    <div class="platform-features">
      ${platformFeatures.map((f, i) => renderPlatformFeature(f, i)).join('\n      ')}
    </div>
  </div>
</section>
${whatsLines.length ? `<section class="whats-a-tool">
  <div class="whats-inner">
  <h2 class="reveal">${esc(whatsATool.heading)}</h2>
  <p class="tool-lead reveal reveal-1">${br(whatsATool.lead)}</p>
  ${ANATOMY_HTML}
  <div class="tool-features">
    ${whatsATool.features.map((f, i) => `<div class="tool-feature reveal reveal-${((i + 1) % 6) + 1}">
      <div class="tool-feature-icon">${siteIcon(f.icon)}</div>
      <strong>${esc(f.title)}</strong>
      <p>${inline(f.desc)}</p>
    </div>`).join('\n    ')}
  </div>
  <div class="try-now-callout">
    <div class="try-now-text">
      <strong>${esc(whatsATool.tryNow.title)}</strong>
      <p>${esc(whatsATool.tryNow.desc)}</p>
    </div>
    <a href="${esc(localizeHref(lang, whatsATool.tryNow.href))}" class="btn btn-primary">${esc(whatsATool.tryNow.cta)}</a>
  </div>
  </div>
</section>` : ''}
</div>
${FORMATS_HTML}
${QOL_HTML}
${ASSURE_HTML}
${IMPORT_HTML}
<section class="everywhere-section">
  <div class="everywhere-inner reveal">
    <div class="everywhere-copy-col">
      <h2>${br(everywhere.heading)}</h2>
      <p class="everywhere-copy">${br(everywhere.copy)}</p>
      <div class="everywhere-chips">
        ${everywhere.surfaces.map(s => `<span class="everywhere-chip">${siteIcon(s.icon)}<span>${esc(s.label)}</span></span>`).join('')}
      </div>
    </div>
    <img src="/info/mascots/quokka.png" class="quokka" alt="" class="everywhere-mascot">
  </div>
  <div class="everywhere-models reveal">
    <p class="everywhere-models-intro">${esc(everywhere.modelsIntro)}</p>
    <div class="everywhere-models-grid">
      ${everywhere.models.map(m => `
      <div class="everywhere-model">
        <div class="everywhere-model-main">
          <span class="everywhere-model-num">Option ${esc(m.n)}</span>
          ${siteIcon(m.icon)}
          <h3>${esc(m.label)}</h3>
        </div>
        <p>${esc(m.desc)}</p>
      </div>`).join('')}
    </div>
  </div>
</section>
<section class="social-proof">
  <div class="social-proof-inner reveal">
    <h2>${esc(socialProof.heading)}</h2>
    <p class="social-proof-date">${esc(socialProof.date)}</p>
    <p class="social-proof-desc">${esc(socialProof.descClassed1)}</p> <p>${esc(socialProof.descPlain)}</p>
    <p class="social-proof-desc">${esc(socialProof.descClassed2)}</p>
  </div>
  <div class="social-proof-founded">${FOUNDED_BY}</div>
  <p class="social-proof-credit">${esc(socialProof.creditPrefix)} <a href="${esc(socialProof.creditLinkHref)}" target="_blank" rel="noopener"> ${esc(socialProof.creditLinkLabel)}</a></p>
</section>
<section class="about-section">
  <div class="about-inner reveal">
    <div class="about-header">
      <img src="/info/mascots/koala.png" alt="" class="about-mascot" aria-hidden="true">
      <div class="about-header-text">
        <h2>${esc(aboutMd.heading)}</h2>
        <p class="about-lead">${inline(aboutMd.lead)}</p>
      </div>
    </div>

    <h3>${esc(aboutMd.subheading)}</h3>
    <div class="about-items">
      ${aboutItems.map(it => `<div class="about-item">
        <div class="about-item-icon">${siteIcon(it.icon)}</div>
        <p>${inline(it.desc)}</p>
      </div>`).join('\n      ')}
    </div>

  </div>
</section>
<section class="opensource-section">
  <div class="opensource-inner reveal">
    ${mdToHtml(loadSiteMd('opensource.md', lang))}
  </div>
</section>
${faqHtml}
${TAB_JS}
${FAQ_JS}`;
}

// ── HTML template ─────────────────────────────────────────────────────────────

const CSS = `
/* Self-hosted SUSE variable fonts — same-origin /catalog/fonts/ (no CDN egress; mirrors shells/web/src/styles/fonts.css). */
@font-face{font-family:'SUSE';src:url('/catalog/fonts/webfonts/SUSE[wght].woff2') format('woff2-variations');font-weight:100 900;font-style:normal;font-display:swap}
@font-face{font-family:'SUSE';src:url('/catalog/fonts/webfonts/SUSE-Italic[wght].woff2') format('woff2-variations');font-weight:100 900;font-style:italic;font-display:swap}
@font-face{font-family:'SUSE Mono';src:url('/catalog/fonts/webfonts/SUSEMono[wght].woff2') format('woff2-variations');font-weight:100 900;font-style:normal;font-display:swap}
@font-face{font-family:'SUSE Mono';src:url('/catalog/fonts/webfonts/SUSEMono-Italic[wght].woff2') format('woff2-variations');font-weight:100 900;font-style:italic;font-display:swap}
:root{--green:#30ba78;--dark:#0c322c;--orange:#fe7c3f;--navy:#192072;--blue:#2453ff;--light:#90ebcd;--pale:#f0fbf5;--text:#1d2726;--muted:#5a7067;--border:#d8ede4;--col-cap:38rem}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'SUSE',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--text);background:#fff;line-height:1.65}
a{color:var(--green);text-decoration:none}
a:hover{text-decoration:underline}
/* Safety net for inline icon SVGs: every one carries only a viewBox (no width/height),
   so without a scoped size rule it balloons to the CSS default 300×150 — or stretches to
   fill a flex/grid parent — and reads as an unfinished giant glyph. Default them to a
   text-sized square; sized contexts (.icon-*, .assure-card-ic, illustrations, …) override
   this with a more specific selector. Keeps a missing/renamed rule from ever ballooning. */
svg{width:1em;height:1em;flex:none}
code{font-family:'SUSE Mono','SF Mono','Fira Code',monospace;font-size:.875em;background:#eef5f0;padding:.15em .35em;border-radius:3px}
pre{background:#f6f6f6;color:#0d1f17;padding:1.25rem 1.5rem;border-radius:8px;overflow-x:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:.875rem;line-height:1.5;margin-bottom:1.25rem; box-shadow: inset 0 .2rem .4rem #0002, 0 1px #fff2}
pre code{background:none;padding:0;color:inherit;font-size:1em}
h1,h2,h3,h4{line-height:1.25;font-weight:700}
h2{font-size:2rem;letter-spacing:0;font-weight:900;text-transform:uppercase}
p{margin-bottom:2rem}
ul{padding-left:1.25rem;margin-bottom:1rem}
li{margin-bottom:.35rem}
blockquote{border-left:0; box-shadow:0 0 0 1px #30ba7825, inset 0 1px #fff3, inset 0 -1px #0001, 0 .1rem 2.4rem #30ba7855;  border-radius: 2em; padding: 1.5rem 2.25rem;background:var(--pale);margin-bottom:2rem}
blockquote p{margin:0}
hr{border:none;border-top:1px solid var(--border);margin:2rem 0}
strong{font-weight:600}

/* Nav */
nav{display:flex;align-items:center;gap:.25rem;padding:0 1.5rem;height:3.75rem;background:transparent;position:fixed;width:100%;top:0;z-index:100;overflow-x:auto;transition:background .25s}
nav.nav-solid{background:#0c322c}
.brand{display:inline-flex;align-items:center;gap:.5rem;font-weight:800;color:var(--pale);font-size:1.05rem;white-space:nowrap;margin-right:.75rem;letter-spacing:-.01em;text-transform:uppercase}
.brand:hover{color:var(--light);text-decoration:none}
.brand-icon{width:1.5rem;height:1.5rem;border-radius:5px;flex-shrink:0;object-fit:contain}
nav .gap{flex:1}
/* The <label> wrapping the icon + <select> is the WHOLE hit area — a generous
   pill, matching .nav-theme-toggle's footprint — not just the select's own tight
   text box. Clicking/tapping the icon activates the select exactly like clicking
   the text does (native label→control delegation), and since hover/focus is
   styled on the label, the icon (fill="currentColor") and the select text pick up
   the SAME colour change together via inheritance — no separate icon hover rule. */
.nav-lang-picker-wrap{display:inline-flex;align-items:center;gap:.4rem;padding:.45rem .75rem .45rem .6rem;border-radius:2em;color:rgba(255,255,255,.55);cursor:pointer;transition:color .12s,background .12s}
.nav-lang-picker-wrap:hover,.nav-lang-picker-wrap:focus-within{color:#fff;background:rgba(255,255,255,.1)}
.nav-lang-picker-wrap .lang-switch-icon{width:16px;height:16px;flex-shrink:0;pointer-events:none}
.nav-lang-picker{background:transparent;color:inherit;border:none;font-size:.8125rem;cursor:pointer;padding:0}
.nav-lang-picker option{color:#000}
nav a:not(.brand):not(.nav-launch){color:rgba(255,255,255,.55);font-size:.8125rem;padding:.25rem .5rem;white-space:nowrap;border-radius:2em;transition:color .12s}
nav a:not(.brand):not(.nav-launch):hover{color:#fff;text-decoration:none}
nav a.active:not(.nav-launch){color:#fff}
/* Top-nav clusters: tight within a group, a thin divider between groups. */
nav .nav-group{display:inline-flex;align-items:center;gap:.0625rem}
nav .nav-group + .nav-group{margin-left:.5rem;padding-left:.625rem;border-left:1px solid rgba(255,255,255,.18)}
.nav-launch{background:var(--green);color:var(--dark)!important;padding:.375rem 1rem;border-radius:6px;font-weight:700;font-size:.875rem;white-space:nowrap;margin-left:.5rem;transition:background .15s}
.nav-launch:hover{background:var(--light);text-decoration:none!important}

/* Language FAB menu — popup language selector matching the app UX */
.lang-fab-wrap{display:inline-flex}
.lang-fab{background:none;border:none;padding:.45rem .6rem;border-radius:2em;color:rgba(255,255,255,.55);cursor:pointer;transition:color .12s,background .12s;width:32px;height:32px;display:flex;align-items:center;justify-content:center}
.lang-fab:hover{color:#fff;background:rgba(255,255,255,.1)}
.lang-fab svg{width:24px;height:24px}
.lang-menu{position:fixed;top:auto;right:1.5rem;margin-top:0;background:rgba(12,50,44,.98);border:1px solid rgba(255,255,255,.15);border-radius:8px;min-width:200px;box-shadow:0 8px 32px rgba(0,0,0,.24);z-index:101;backdrop-filter:blur(8px)}
.lang-menu[hidden]{display:none}
.lang-menu-list{display:flex;flex-direction:column;max-height:calc(100vh - 7.5rem);overflow-y:auto}
.lang-menu-item{background:none;border:none;display:flex;align-items:center;gap:.5rem;width:100%;padding:.625rem 1rem;color:rgba(255,255,255,.7);text-align:left;cursor:pointer;transition:background .12s,color .12s;font-size:.8125rem;font-family:inherit}
.lang-menu-item:hover{background:rgba(255,255,255,.08);color:#fff}
.lang-menu-item[aria-pressed=true]{background:rgba(48,186,120,.15);color:#fff}
.lang-menu-flags{display:inline-flex;gap:.2em;min-width:2em}
.lang-menu-name{flex:1}

/* Hero */
.hero{background:#1c4a2e;color:#fff;padding:7rem 1.5rem 6rem;text-align:center;position:relative;overflow:hidden;min-height:50vh;user-select:none;-webkit-user-select:none}
/* Double-clicking the hero backdrop shouldn't highlight the heading/subtitle/trust copy; buttons keep normal selection. */
.hero .btn{user-select:auto;-webkit-user-select:auto}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 90% 55% at 50% -5%,rgba(48,186,120,.13) 0%,transparent 65%);pointer-events:none}
#heroCanvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;mix-blend-mode:color-dodge;opacity:.6}
.hero h1{font-size:clamp(2.75rem,6vw,5rem);letter-spacing:-.04em;line-height:1.05;margin-bottom:1.5rem;color:#fff;position:relative;padding-left:.3em;font-weight:200}
.hero-logo-h1{margin:0 0 1.5rem;padding:0;line-height:0;position:relative}
.hero-logo-link{display:block;width:clamp(180px,32vw,340px);margin:0 auto;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 0.5em 1em #0004,0 .1em .2em #0003}
.hero-logo-link:hover,.hero-logo-link:focus-visible{transform:translateY(-3px) scale(1.02);box-shadow:0 0.9em 1.6em #0006,0 .15em .3em #0004;outline:none}
.hero-logo-link:active{transform:translateY(-1px) scale(1.0)}
.hero-logo{display:block;width:100%;height:auto;position:relative;border-radius:50%}
.hero .subtitle{font-size:clamp(.9375rem,1.8vw,1.125rem);max-width:560px;margin:0 auto 2.75rem;color:rgba(255,255,255,.8);line-height:1.85;position:relative}
.hero-cta{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;position:relative;margin-bottom:2.5rem}
.hero-trust{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:.5rem;position:relative}
.hero-trust span{font-size:.8rem;line-height:1;color:rgba(255,255,255,.5);letter-spacing:.02em}
.trust-dot{color:rgba(255,255,255,.18)!important}
.btn{display:inline-flex;align-items:center;padding:2rem 3rem;border-radius:1rem;font-weight:700;font-size:1rem;transition:all .18s ease;box-shadow:0 .2em 1em #0002}
.btn-primary{background:rgba(48,186,120,.72);color:#000;mix-blend-mode:plus-lighter}
.btn-primary:hover{background:var(--light);text-decoration:none;transform:translateY(-2px);box-shadow:0 8px 28px rgba(48,186,120,.35)}
.btn-secondary{background:rgba(255,255,255,.05);color:#fff;border:1px solid rgba(255,255,255,.22);position:relative}
.btn-secondary:hover{background:rgba(255,255,255,.1);text-decoration:none;transform:translateY(-1px)}
/* Glass baseline — frosted blur so the buttons read as glass even where the JS
   liquid-displacement filter can't render. The buildGlass script overrides this
   inline with the refractive filter where it's supported. */
.btn-primary,.btn-secondary{-webkit-backdrop-filter:blur(3px) saturate(1.45);backdrop-filter:blur(3px) saturate(1.45)}
.btn-quickstart{background:rgba(254,124,63,.82);color:#0c322c}
.btn-quickstart:hover{background:var(--orange);box-shadow:0 8px 28px rgba(254,124,63,.4)}

/* Three-door pathways band — sits directly under the hero on the landing page. */
.pathways-section{background:var(--dark);padding:4rem 1.5rem}
.pathways-inner{max-width:1080px;margin:0 auto;text-align:center}
.pathways-title{color:#fff;font-size:2rem;margin:0 0 .5rem}
.pathways-lead{color:rgba(255,255,255,.7);font-size:1.0625rem;max-width:40rem;margin:0 auto 2.5rem}
.pathways-lead a{color:var(--light);font-weight:600}
.pathways-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;text-align:start}
.pathway-card{display:flex;flex-direction:column;gap:.5rem;padding:1.75rem;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);transition:transform .18s ease,border-color .18s ease,background .18s ease}
.pathway-card:hover{text-decoration:none;transform:translateY(-3px);border-color:var(--green);background:rgba(255,255,255,.08)}
.pathway-ic{align-self:flex-start;display:inline-flex;align-items:center;justify-content:center;width:2.75rem;height:2.75rem;margin-bottom:.35rem;border-radius:12px;color:#fff;background:linear-gradient(163deg,hsl(150 66% 51%),hsl(154 58% 33%));border:1px solid hsl(0 0% 100% / .3);box-shadow:inset 0 1px 0 hsl(0 0% 100% / .45),0 6px 16px -6px hsl(151 57% 40% / .75);transition:box-shadow .18s ease,transform .18s ease}
.pathway-ic svg{width:1.45rem;height:1.45rem}
.pathway-card:hover .pathway-ic{transform:translateY(-1px);box-shadow:inset 0 1px 0 hsl(0 0% 100% / .5),0 9px 22px -6px hsl(151 57% 40% / .9)}
.pathway-eyebrow{font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;font-weight:700;color:white;}
.pathway-name{font-size:1.375rem;font-weight:700;color:var(--green)}
.pathway-desc{font-size:.9375rem;line-height:1.55;color:rgba(255,255,255,.68);flex:1}
.pathway-go{font-size:.9375rem;font-weight:600;color:var(--light);margin-top:.5rem}
@media(max-width:820px){.pathways-grid{grid-template-columns:1fr}}

/* Audience section */
.audience-section{}
.audience-header{background:linear-gradient(180deg,var(--pale) 0%,#fff 100%)}
.audience-title{font-size:2.5rem;color:var(--dark);margin:0}
.audience-sub{color:var(--muted);font-size:.9375rem;margin-top:.5rem;margin-bottom:0}
.audience-tabs{display:flex;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;gap:.625rem;padding:1rem 1.5rem 1.5rem;background:#fff;border-bottom:2px solid var(--border);max-width:1400px;margin:0 auto}
.audience-tabs::-webkit-scrollbar{display:none}
.audience-tab{display:inline-flex;flex:1;flex-direction:column;align-items:center;gap:.4rem;padding:1.75rem 1.125rem;border:2px solid var(--border);background:#fff;cursor:pointer;border-radius:12px;min-width:5.5rem;color:var(--muted);transition:all .15s;font-family:'SUSE',inherit}
.audience-tab .tab-icon{width:1.5rem;height:1.5rem}
.audience-tab .tab-icon svg{width:100%;height:100%}
.audience-tab .tab-label{font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.09em;white-space:nowrap}
.audience-tab[aria-selected=true]{background:var(--dark);color:var(--green);border-color:var(--dark);box-shadow:0 3px 12px rgba(12,50,44,.2)}
.audience-tab:hover:not([aria-selected=true]){border-color:var(--green);color:var(--dark);background:var(--pale)}

/* Audience panels — full-width, two-column on desktop */
.audience-panels{display:block;margin-bottom:2em}
.audience-card{display:none}
.audience-card.tab-active{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);
  gap:2.5rem 5rem;
  align-items:start;
  padding:3.75rem 3.5rem;
  max-width:1400px;
  margin:0 auto;
}
.card-main{min-width:0;overflow:hidden}
.card-icon{width:2.5rem;height:2.5rem;color:var(--green);margin-bottom:1.25rem}
.card-icon svg{width:100%;height:100%}
.card-audience{font-size:.6875rem;text-transform:uppercase;letter-spacing:.14em;color:var(--green);font-weight:700;margin-bottom:.375rem}
.card-tagline{font-size:1.5rem;font-weight:800;color:var(--dark);margin-bottom:.75rem;line-height:1.2;letter-spacing:-.02em}
.card-intro{font-size:.9375rem;color:var(--muted);line-height:1.75;margin-bottom:1.5rem}
.card-main pre{font-size:.8rem;margin-top:0;margin-bottom:0;white-space:pre-wrap;overflow-wrap:anywhere;box-sizing:border-box}
.card-main pre::-webkit-scrollbar{display:none}
.card-benefits{display:grid;grid-template-columns:1fr 1fr;gap:4em;padding-left:0;list-style:none;margin:0;padding-top:.25rem}
.card-benefits li{display:flex;align-items:flex-start;gap:.75rem;font-size:.9375rem;line-height:1.6;color:var(--text)}
.card-benefits li:last-child{margin-bottom:0}
.bullet-icon{width:3em;height:3em;display:block;margin:1em 0;color:var(--green);flex-shrink:0}
.bullet-icon svg{width:100%;height:100%}
.card-benefits strong{font-weight:700;color:var(--dark)}

/* Platform + What's a tool — side by side on desktop */
.platform-whats-wrap{position:relative;display:flex;align-items:stretch}
.platform-whats-wrap .platform-section,.platform-whats-wrap .whats-a-tool{flex:1;min-width:0}
.whats-label{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);z-index:10;border-radius:3rem;padding:.85rem 2rem;font-weight:700;font-size:1.0625rem;white-space:nowrap;box-shadow:0 6px 20px rgba(0,0,0,.18);     background: var(--muted);    color: var(--pale);}

/* Platform */
.platform-section{background:linear-gradient(20deg,#0c322c 0%,#008657 100%);color:#fff;padding:4.5rem 3.5rem}
.platform-inner{max-width:var(--col-cap);margin-left:auto;margin-right:0}
.platform-header{text-align:center;margin-bottom:2.75rem}
.platform-section h2{margin-bottom:.5rem}
.platform-tagline{color:rgba(255,255,255,.8);font-size:1.0625rem;margin:0;letter-spacing:.01em}
.platform-features{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;margin-bottom:1.75rem}
.platform-feature{background:rgba(255,255,255,.025);padding:1.625rem 1.5rem;display:flex;flex-direction:column;gap:.5rem;transition:background .15s}
.platform-feature:hover{background:#00000033}
.platform-feature-icon{width:1.75rem;height:1.75rem;color:var(--green);margin-bottom:.375rem}
.platform-feature-icon svg{width:100%;height:100%}
.platform-feature strong{font-size:.9375rem;font-weight:700;line-height:1.3}
.platform-feature p{color:rgba(255,255,255,.45);font-size:.85rem;margin:0;line-height:1.6}
.platform-feature:last-child:nth-child(odd){grid-column:1 / -1}
.format-chips{display:flex;flex-wrap:wrap;gap:.375rem;margin-top:.125rem}
.format-chip{display:inline-flex;align-items:center;background:rgba(48,186,120,.12);color:var(--green);font-size:.72rem;font-family:'SUSE Mono','SF Mono',monospace;font-weight:600;padding:.2em .55em;border-radius:1em;letter-spacing:.04em;border:0}
/* Round-trip formats (read AND written): filled so the in/out overlap reads as intentional. */
.format-chip--rt{background:var(--green);color:#fff}
.rt-mark{font-family:'SUSE',sans-serif;font-weight:700;letter-spacing:0;margin-right:.32em;line-height:1}
.rt-inline{color:var(--green);font-weight:600;white-space:nowrap}
.rt-inline .rt-mark{margin-right:.1em}
/* Dedicated Formats section — categorised in/out chips */
.formats-section{background:#fff;padding:5.5rem 2rem;border-top:1px solid var(--border)}
.formats-inner{max-width:1080px;margin:0 auto}
.formats-head{margin-bottom:2.75rem}
.formats-head h2{color:var(--dark);font-size:2rem;margin:0 0 .6rem}
.formats-head p{color:var(--muted);font-size:1.05rem;line-height:1.65;margin:0;max-width:42rem}
.formats-cols{display:grid;grid-template-columns:1fr 1fr;gap:3rem}
.formats-col-top{display:flex;align-items:baseline;gap:.7rem;padding-bottom:.85rem;margin-bottom:1.5rem;border-bottom:2px solid var(--border)}
.formats-dir{font-size:1.1rem;font-weight:800;color:var(--dark)}
.formats-num{font-size:.72rem;font-weight:700;color:var(--green);background:rgba(48,186,120,.12);padding:.2em .65em;border-radius:1em;font-family:'SUSE Mono','SF Mono',monospace;letter-spacing:.02em}
.formats-group{display:flex;gap:1rem;align-items:baseline;margin-bottom:1.1rem}
.formats-group:last-child{margin-bottom:0}
.formats-cat{flex:0 0 5rem;font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);padding-top:.25rem}
.formats-group .format-chips{flex:1;min-width:0}
@media(max-width:768px){.formats-cols{grid-template-columns:1fr;gap:2.25rem}.formats-group{flex-direction:column;gap:.45rem}.formats-cat{flex:none}.formats-section{padding:4rem 1.25rem}}

/* QoL pair — sound + bulk, side by side */
.qol-section{background:var(--pale);padding:5.5rem 2rem}
.qol-inner{max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:1.75rem}
.qol-panel{background:#fff;border:1px solid var(--border);border-radius:20px;padding:2.5rem 2.25rem;box-shadow:0 4px 20px rgba(12,50,44,.06);display:flex;flex-direction:column;gap:1.5rem}
.qol-illus{height:150px;display:flex;align-items:center;justify-content:center}
.qol-illus svg{width:100%;height:100%;max-width:300px}
.qol-panel h3{color:var(--dark);font-size:1.4rem;margin:0}
.qol-panel p{color:var(--muted);font-size:1rem;line-height:1.7;margin:0}
.qol-panel p strong{color:var(--dark);font-weight:700}
@media(max-width:768px){.qol-inner{grid-template-columns:1fr;gap:1.25rem}.qol-section{padding:3.5rem 1.25rem}}

/* Assurance / provenance — the trust band */
.assure-section{background:linear-gradient(155deg,#061816 0%,#0c322c 55%,#0a3b30 100%);color:#fff;padding:6.5rem 2rem}
.assure-inner{max-width:1080px;margin:0 auto}
.assure-lede{max-width:46rem;margin-bottom:3.5rem}
.assure-eyebrow{display:inline-block;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--light);margin-bottom:1rem}
.assure-section h2{font-size:2.5rem;line-height:1.08;color:#fff;margin:0 0 1.25rem}
.assure-lead{font-size:1.12rem;line-height:1.75;color:rgba(255,255,255,.72);margin:0}
.assure-lead strong{color:#fff;font-weight:700}
.assure-lead a{color:var(--light);text-decoration:underline;text-underline-offset:2px}
.assure-main{display:grid;grid-template-columns:minmax(0,300px) 1fr;gap:3.5rem;align-items:center;margin-bottom:3.5rem}
.assure-checker{display:flex;justify-content:center}
.assure-checker svg{width:100%;max-width:300px;height:auto}
.assure-checks{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1.5rem}
.assure-checks li{display:flex;gap:1rem;align-items:flex-start}
.assure-check-ic{width:1.7rem;height:1.7rem;flex-shrink:0;color:var(--green);margin-top:.05rem}
.assure-check-ic svg{width:100%;height:100%}
.assure-checks strong{display:block;color:#fff;font-size:1.05rem;font-weight:700;margin-bottom:.25rem}
.assure-checks li>div>span{color:rgba(255,255,255,.6);font-size:.92rem;line-height:1.55;display:block}
.assure-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;margin-bottom:2.25rem}
.assure-card{background:rgba(255,255,255,.03);padding:1.9rem 1.6rem;transition:background .15s}
.assure-card:hover{background:rgba(255,255,255,.06)}
.assure-card-ic{display:block;width:1.7rem;height:1.7rem;color:var(--light);margin-bottom:.85rem}
.assure-card-ic svg{width:100%;height:100%}
.assure-card strong{display:block;color:#fff;font-size:1rem;margin-bottom:.45rem}
.assure-card p{color:rgba(255,255,255,.55);font-size:.88rem;line-height:1.6;margin:0}
.assure-cta a{color:var(--green);font-weight:700;text-decoration:none;font-size:1.02rem}
.assure-cta a:hover{text-decoration:underline}
@media(max-width:768px){.assure-section{padding:4.5rem 1.25rem}.assure-section h2{font-size:1.95rem}.assure-main{grid-template-columns:1fr;gap:2.25rem}.assure-checker svg{max-width:240px}.assure-grid{grid-template-columns:1fr}}
.dark .qol-section{background:#061816}
.dark .qol-panel{background:rgba(255,255,255,.035);border-color:rgba(255,255,255,.1);box-shadow:none}
.dark .qol-panel h3,.dark .qol-panel p strong{color:#fff}
.dark .qol-panel p{color:rgba(255,255,255,.6)}

/* Everywhere section */
.everywhere-section{padding:5rem 2rem;background:var(--dark);color:#fff}
.everywhere-inner{display:flex;align-items:center;gap:4rem;max-width:1400px;margin:0 auto}
.everywhere-copy-col{flex:1;text-align:start}
.everywhere-mascot{width:20vw;max-width:420px;flex-shrink:0}
.everywhere-section h2{color:#fff;margin-bottom:1rem}
.everywhere-copy{font-size:1.125rem;line-height:1.75;color:rgba(255,255,255,.65);margin-bottom:3rem}
.everywhere-chips{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:1rem}
@media(max-width:768px){.everywhere-inner{flex-direction:column}.everywhere-mascot{width:60vw;max-width:280px}.everywhere-copy-col{text-align:center}.everywhere-chips{justify-content:center}}
.everywhere-chip{display:inline-flex;flex-direction:column;align-items:center;gap:.625rem;padding:1.25rem 1.75rem;background:rgba(255,255,255,.05);border-radius:14px;color:#fff;font-size:.95rem;font-weight:700;min-width:7rem;transition:background .2s}
.everywhere-chip:hover{background:rgba(255,255,255,.09)}
.everywhere-chip svg{width:2rem;height:2rem;color:var(--green);flex-shrink:0}
.everywhere-chip span{letter-spacing:.02em}
.everywhere-models{max-width:1400px;margin:4rem auto 0}
.everywhere-models-intro{text-align:center;color:#fff;font-size:1rem;margin:0 0 2rem}
.everywhere-models-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.everywhere-model{position:relative;display:flex;align-items:stretch;gap:1.5rem;padding:3.5rem 1.75rem 2rem;background:rgba(255,255,255,.05);border-radius:18px;transition:background .2s,border-color .2s}
.everywhere-model:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16)}
.everywhere-model-main{flex:0 0 2em;min-width:0}
.everywhere-model-num{position:absolute;top:-1rem;left:50%;transform:translateX(-50%);ox-shadow: inset 0 0 0 .25px #0002, inset 0 1px 1.5px #fff9, 0 .2rem .4rem #0002;
    text-shadow: 0 1px .5px #fff2;width:fit-content;font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--dark);background:rgba(48,186,120,1.14);padding:.32rem .7rem;border-radius:999px;margin:0}
.everywhere-model-icon{width:2.25rem;height:2.25rem;color:var(--green);display:block;margin-bottom:.9rem}
.everywhere-model h3{color:var(--green);font-size:1.2rem;margin:0;}
.everywhere-model p{flex:1;min-width:0;font-size:.95rem;line-height:1.65;color:rgba(255,255,255,.6);margin:0;padding-left:1.5rem}
@media(max-width:768px){.everywhere-models-grid{grid-template-columns:1fr;gap:2rem}.everywhere-models{margin-top:2.5rem}}

/* What's a tool */
.whats-a-tool{padding:4.5rem 3.5rem;background:var(--border)}
.whats-inner{max-width:var(--col-cap);margin-right:auto;margin-left:0}
.whats-a-tool .whats-inner>h2{color:var(--dark);font-size:2rem;margin-bottom:.625rem;text-align:center}
.tool-lead{max-width:100%;margin:0 0 2rem;font-size:1.0625rem;line-height:1.8;color:var(--muted);text-align:center}
.tool-anatomy{display:flex;flex-wrap:wrap;gap:.75rem;max-width:100%;margin:0 0 2rem;justify-content:center;align-items:center}
.tool-part{background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;text-align:center;flex:1;min-width:110px;box-shadow:0 2px 8px rgba(12,50,44,.07);transition:box-shadow .15s}
.tool-part:hover{box-shadow:0 4px 16px rgba(12,50,44,.12)}
.tool-part-file{font-family:'SUSE Mono','SF Mono',monospace;font-size:.75rem;background:#eef5f0;color:var(--dark);padding:.2em .55em;border-radius:4px;display:inline-block;margin-bottom:.5rem;font-weight:600}
.tool-part-name{font-weight:700;color:var(--dark);font-size:.8125rem;margin-bottom:.2rem}
.tool-part-desc{font-size:.73rem;color:var(--muted);line-height:1.45}
.tool-plus{font-size:1.5rem;color:var(--border);font-weight:300;flex-shrink:0;align-self:center}
.tool-features{display:grid;grid-template-columns:repeat(2,1fr);gap:.75rem;margin-bottom:1.75rem}
.tool-feature{background-color:#fff6;border:1px solid var(--border);border-radius:12px;padding:1.25rem 1.375rem;display:flex;flex-direction:column;gap:.35rem;transition:box-shadow .15s}
.tool-feature:hover{box-shadow:0 4px 16px rgba(12,50,44,.1)}
.tool-feature-icon{width:1.375rem;height:1.375rem;color:var(--green);margin-bottom:.25rem;flex-shrink:0}
.tool-feature-icon svg{width:100%;height:100%}
.tool-feature strong{font-size:.9rem;color:var(--dark);font-weight:700;line-height:1.25}
.tool-feature p{font-size:.8rem;color:var(--muted);line-height:1.55;margin:0}
/* Floats at the bottom seam where the two columns meet (relative to .platform-whats-wrap). */
.try-now-callout{position:absolute;left:50%;bottom:0;transform:translate(-50%,50%);z-index:10;width:min(92%,640px);background:#01564a;border-radius:14px;padding:1.5rem 1.75rem;display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;box-shadow: 0 10px 30px rgba(0,0,0,.2), inset 0 .06rem .1rem #fff2}
.try-now-text{flex:1;min-width:0}
.try-now-text strong{color:var(--green);font-size:.9375rem;display:block;margin-bottom:.35rem;font-weight:700}
.try-now-text p{color:#fff;font-size:.85rem;line-height:1.6;margin:0}

/* Design import segment ("bring your existing files") */
.import-section{background:linear-gradient(180deg,#fff 0%,var(--pale) 100%);padding:7rem 2rem 5rem}
.import-inner{max-width:1080px;margin:0 auto}
.import-lede{text-align:center;max-width:46rem;margin:0 auto 3rem}
.import-eyebrow{display:inline-block;font-size:.6875rem;text-transform:uppercase;letter-spacing:.14em;font-weight:700;color:var(--green);background:rgba(48,186,120,.1);padding:.4em .9em;border-radius:2em;margin-bottom:1.25rem}
.import-section h2{color:var(--dark);margin-bottom:1.25rem}
.import-lead{font-size:1.0625rem;line-height:1.8;color:var(--muted);margin:0}
.import-lead strong{color:var(--dark);font-weight:700}
.import-sources{display:grid;grid-template-columns:repeat(5,1fr);gap:1rem;margin-bottom:1.75rem}
.import-source{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem 1rem;transition:box-shadow .15s,transform .15s}
.import-source:hover{box-shadow:0 8px 24px rgba(12,50,44,.1);transform:translateY(-2px)}
.import-badge{display:inline-flex;align-items:center;box-shadow:inset 0 0 0 1px #0002, inset 0 1.25px 2px #fff9,  0 .2rem .4rem #0002;justify-content:center;width:2.75rem;height:2.75rem;border-radius:12px;background:var(--b,#30ba78);color:#fff;font-weight:800;font-size:.9rem;letter-spacing:-.01em}
.import-source strong{color:var(--dark);font-size:.95rem;font-weight:700}
.import-fmt{font-family:'SUSE Mono','SF Mono',monospace;font-size:.72rem;color:var(--muted);letter-spacing:.02em}
.import-flow{display:flex;align-items:stretch;gap:.5rem;margin-bottom:2.75rem}
.import-step{flex:1;min-width:0;background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem 1.25rem;text-align:center}
.import-step-icon{width:1.75rem;height:1.75rem;color:var(--green);margin:0 auto .75rem}
.import-step-icon svg{width:100%;height:100%}
.import-step strong{display:block;color:var(--dark);font-size:.9rem;margin-bottom:.35rem}
.import-step p{font-size:.8rem;color:var(--muted);line-height:1.55;margin:0}
.import-arrow{align-self:center;color:var(--green);flex-shrink:0;font-size:1.4rem;font-weight:300;line-height:1}
.import-points{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-bottom:2.5rem}
.import-point{background:rgba(255,255,255,.6);border:1px solid var(--border);border-radius:14px;padding:1.75rem 1.5rem}
.import-point-icon{width:2rem;height:2rem;color:var(--green);margin-bottom:.9rem}
.import-point-icon svg{width:100%;height:100%}
.import-point strong{display:block;color:var(--dark);font-size:1rem;margin-bottom:.5rem}
.import-point p{font-size:.875rem;color:var(--muted);line-height:1.65;margin:0}
.import-cta-row{text-align:center}
.import-more{display:inline-flex;align-items:center;gap:.4rem;font-weight:700;color:var(--green);font-size:.95rem}
.import-more:hover{text-decoration:none;color:var(--dark)}
@media(max-width:820px){
  .import-sources{grid-template-columns:repeat(2,1fr)}
  .import-points{grid-template-columns:1fr}
  .import-flow{flex-direction:column}
  .import-arrow{transform:rotate(90deg)}
}
@media(max-width:480px){
  .import-section{padding:4.5rem 1.25rem 3.5rem}
}

/* Docs layout */
.docs-wrap{display:grid;grid-template-columns:220px 1fr;max-width:1180px;margin:0 auto;min-height:calc(100vh - 3.5rem - 60px)}
.docs-sidebar{padding:2rem 1.25rem;border-right:1px solid var(--border);position:sticky;top:3.75rem;height:calc(100vh - 3.75rem);overflow-y:auto}
.sidebar-label{font-size:.6875rem;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);font-weight:700;margin:1.5rem 0 .5rem}
.sidebar-label:first-child{margin-top:0}
.sidebar-home{display:block;font-size:.8125rem;color:var(--muted)!important;margin-bottom:1rem;padding:0!important}
.sidebar-home:hover{color:var(--green)!important;background:none!important}
.sidebar-pathway{font-size:.9375rem;font-weight:700;color:var(--dark);margin-bottom:.75rem;padding-bottom:.75rem;border-bottom:1px solid var(--border)}
.docs-sidebar a{display:block;padding:.3rem .5rem;font-size:.875rem;color:var(--text);border-radius:5px}
.docs-sidebar a:hover{color:var(--green);background:var(--pale);text-decoration:none}
.docs-sidebar a.active{color:var(--green);font-weight:600;background:var(--pale)}
.docs-content{padding:6rem 3.5rem;min-width:0}
.docs-content img{max-width:min(100%,340px);height:auto}
.docs-content h2{font-size:1.5rem;font-weight:700;letter-spacing:normal;text-transform:none;border-top:1px solid var(--border);padding-top:2rem;margin-top:2.5rem;margin-bottom:.75rem;color:var(--dark)}
.docs-content h2:first-of-type{border-top:none;padding-top:0;margin-top:0}
.docs-content h3{font-size:1.15rem;margin-top:1.75rem;margin-bottom:.5rem;color:var(--dark)}
.docs-content h4{font-size:1rem;margin-top:1.25rem;margin-bottom:.35rem;color:var(--muted)}
.docs-content ul,.docs-content ol{margin-bottom:1rem}
.docs-content h1{font-size:3rem;color:var(--dark);line-height:1.15;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid var(--border); font-weight:300;}

/* Table */
.table-wrap{overflow-x:auto;margin-bottom:2rem;box-shadow: 0 0 0 1px #00000009, 0 .2rem .4rem #00000018; border-radius: 1.5em;}
table{border-collapse:collapse;width:100%;font-size:.875rem}
thead tr th:first-child{border-radius: 1em 0 0 0}
thead tr th:last-child{border-radius: 0 1em 0 0}
th,td{padding:.55rem .9rem;text-align:start;border:1px solid var(--border)}
th{background:var(--pale);font-weight:600;color:var(--dark)}
tr:nth-child(even) td{background:#fafffe}

/* Mascots */
.audience-header{display:flex;align-items:center;justify-content:center;gap:2rem;padding:4rem 3rem 1.75rem}
.audience-header-text{text-align:start}
.audience-mascot{width:clamp(200px,26vw,430px);flex-shrink:0;filter:drop-shadow(0 6px 20px rgba(12,50,44,.18))}
@media(max-width:900px){.audience-mascot{width:clamp(160px,22vw,280px)}}
@media(max-width:600px){.audience-header{flex-direction:column;gap:1rem;padding:2.5rem 1.25rem 1.25rem}.audience-header-text{text-align:center}.audience-mascot{width:clamp(140px,44vw,220px)}}
.social-proof-mascot{position:absolute;right:4%;top:50%;transform:translateY(-50%);width:clamp(90px,12vw,180px);pointer-events:none;filter:drop-shadow(0 8px 20px rgba(12,50,44,.18))}
.footer-inner{display:flex;align-items:center;justify-content:center;gap:1rem}
.footer-mascot{width:2.75rem;flex-shrink:0;filter:drop-shadow(0 2px 6px rgba(0,0,0,.18))}
@media(max-width:768px){
  .social-proof-mascot{display:none}
}

/* Social proof */
.social-proof{padding:4rem 0 3rem;background:#fff;overflow:hidden;position:relative}
.social-proof-inner{text-align:center;padding:0 1.5rem 2.5rem;max-width:50rem;margin:0 auto}
.social-proof h2{font-size:2rem;color:var(--dark);margin-bottom:.375rem}
.social-proof-date{font-size:.8125rem;color:var(--green);font-weight:600;margin-bottom:.625rem;letter-spacing:.02em;text-transform:uppercase}
.social-proof-desc{color:var(--muted);font-size:.9375rem;line-height:1.6}
/* "Founded by SUSE" badge — same size everywhere it appears (hero, social proof, footer) */
.founded-badge{display:inline-block;line-height:0}
.founded-badge img{display:block;width:10em;max-width:100%;height:auto}
.social-proof-founded{margin:1.5rem 0 0;text-align:center}
.hero-founded{margin-top:2rem}
.social-proof-credit{text-align:center;color:var(--muted);font-size:.875rem;margin-top:1.75rem;padding:0 1.5rem}
.social-proof-credit a{color:var(--green);font-weight:600;text-decoration:none}
.social-proof-credit a:hover{text-decoration:underline}

/* About section */
.about-section{padding:5rem 1.5rem;background:var(--dark);color:#fff}
.about-inner{max-width:960px;margin:0 auto}
.about-header{display:flex;align-items:center;gap:3rem;margin-bottom:3.5rem}
.about-header-text{flex:1;min-width:0}
.about-mascot{width:clamp(200px,26vw,360px);flex-shrink:0;filter:drop-shadow(0 16px 40px rgba(0,0,0,.5))}
.about-section h2{color:#fff;margin-bottom:1rem}
.about-section h3{font-size:.75rem;font-weight:800;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.16em;margin:3rem 0 1.25rem;text-align:center}
.about-lead{font-size:1.0625rem;color:rgba(255,255,255,.7);line-height:1.85;margin:0}
.about-items{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}
.about-item{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem 1.75rem;display:flex;flex-direction:row;align-items:flex-start;gap:1.125rem}
.about-item-icon{width:3.25rem;height:3.25rem;flex-shrink:0;color:var(--green)}
.about-item-icon svg{width:100%;height:100%}
.about-item p{color:rgba(255,255,255,.6);line-height:1.8;font-size:.9375rem;margin:0}
.about-item strong{color:#fff;font-weight:700}
.opensource-section{padding:5rem 2rem;background:var(--pale);text-align:center}
.opensource-inner{max-width:720px;margin:0 auto}
.opensource-section h2{margin-bottom:1.25rem}
.opensource-section p{color:var(--muted);font-size:1.0625rem;line-height:1.8}

/* FAQ */
.faq-section{padding:5rem 2rem;background:#fff}
.faq-inner{margin:0 auto; max-width: calc(var(--col-cap) * 1.4);}
.faq-section h2{text-align:center;margin-bottom:.5rem}
.faq-lead{text-align:center;color:var(--muted);font-size:1.0625rem;margin-bottom:2.5rem}
.faq-list{display:flex;flex-direction:column;gap:.75rem}
.faq-item{border:1px solid var(--border);border-radius:12px;background:var(--pale);overflow:hidden;transition:box-shadow .15s,border-color .15s}
.faq-item[open]{border-color:var(--green);box-shadow:0 4px 16px rgba(12,50,44,.08)}
.faq-q{display:flex;align-items:center;justify-content:space-between;gap:1.25rem;padding:1.25rem 1.5rem;font-weight:700;color:var(--dark);font-size:1.0625rem;line-height:1.4;cursor:pointer;list-style:none}
.faq-q::-webkit-details-marker{display:none}
.faq-q:hover{color:var(--green)}
.faq-chevron{flex-shrink:0;width:1.25rem;height:1.25rem;color:var(--green);transition:transform .2s}
.faq-chevron svg{width:100%;height:100%}
.faq-item[open] .faq-chevron{transform:rotate(180deg)}
.faq-a{padding:0 1.5rem 1.4rem;color:var(--muted);line-height:1.75}
.faq-a p{margin-bottom:.75rem}
.faq-a p:last-child{margin-bottom:0}
@media(max-width:800px){
  .about-header{flex-direction:column;text-align:center;gap:1.75rem}
  .about-mascot{width:clamp(160px,44vw,260px)}
  .about-items{grid-template-columns:1fr}
}
.quokka{max-width:320px;}
@media(max-width:768px){.quokka{max-height:260px;width:auto;max-width:60vw}}
/* Footer */
footer{border-top:1px solid var(--border);padding:2rem 1.5rem;text-align:center;color:var(--muted);font-size:.8125rem;background:var(--pale)}
footer a{color:var(--muted);text-decoration:underline}
footer a:hover{color:var(--dark)}
footer .founded-badge{margin-top:.5rem}

/* Hamburger */
.nav-hamburger{display:none;background:none;border:none;cursor:pointer;color:rgba(255,255,255,.65);width:2.25rem;height:2.25rem;align-items:center;justify-content:center;border-radius:5px;padding:.3rem;flex-shrink:0}
.nav-hamburger:hover{color:#fff;background:rgba(255,255,255,.1)}
.nav-hamburger svg{width:1.25rem;height:1.25rem;pointer-events:none}
.nav-hamburger .icon-close{display:none}
.nav-hamburger.open .icon-menu{display:none}
.nav-hamburger.open .icon-close{display:block}
.nav-mobile-menu{display:none;position:fixed;top:3.75rem;left:0;right:0;background:var(--dark);border-bottom:1px solid rgba(255,255,255,.1);padding:1rem 1.5rem 1.5rem;z-index:99;flex-direction:column;gap:.125rem}
.nav-mobile-menu.open{display:flex}
.nav-mobile-menu a{color:rgba(255,255,255,.7);font-size:.9375rem;padding:.625rem .625rem;border-radius:6px;display:block;text-decoration:none}
.nav-mobile-menu a:hover{color:#fff;background:rgba(255,255,255,.07)}
.nav-mobile-menu a.active{color:var(--green);font-weight:600}
.nav-mobile-menu .nav-launch{background:var(--green);color:var(--dark)!important;font-weight:700;text-align:center;margin-top:.75rem;padding:.75rem;border-radius:8px}
.nav-mobile-menu .nav-launch:hover{background:var(--light)}

/* Mobile */
@media(max-width:900px){
  .platform-whats-wrap{flex-direction:column}
  .whats-label{display:none}
  .platform-section{padding:4rem 2rem}
  .whats-a-tool{padding:4rem 2rem}
  .platform-inner,.whats-inner{max-width:760px;margin:0 auto}
  .tool-lead{max-width:640px;margin:0 auto 2rem}
  .tool-anatomy{max-width:720px;margin:0 auto 2rem}
  .platform-features{grid-template-columns:repeat(2,1fr)}
}
/* Collapse the top nav to a hamburger before its links overflow into a horizontal
   scroll. The full link row needs ~1032px; collapse at 1100px for a cross-browser /
   font-fallback margin. (The docs grid + content keep reflowing at 768px below.) */
@media(max-width:1100px){
  nav{overflow-x:visible}
  nav a:not(.brand){display:none}
  nav .nav-group{display:none}
  .nav-hamburger{display:flex}
}
@media(max-width:768px){
  .docs-wrap{grid-template-columns:1fr}
  .docs-sidebar{position:static;height:auto;border-right:none;border-bottom:1px solid var(--border);padding:1rem}
  .docs-content{padding:1.5rem 1rem}
  .audience-card.tab-active{
    display:flex;flex-direction:column;
    gap:2rem;padding:2.5rem 1.25rem;
  }
  .audience-header{padding:3rem 1rem 1.25rem}
  .audience-title{font-size:1.875rem}
  .audience-tabs{display:flex;flex-wrap:wrap;justify-content:center;overflow-x:visible;gap:.375rem;padding:.625rem .75rem .875rem}
  .audience-tab{flex:0 0 calc(25% - .375rem);min-width:0;padding:.625rem .375rem}
  .tool-anatomy{gap:.5rem}
  .tool-plus{display:none}
  .tool-part{min-width:110px}
}
@media(max-width:480px){
  .platform-features{grid-template-columns:1fr}
  .tool-features{grid-template-columns:1fr}
  .card-benefits{grid-template-columns:1fr}
  .audience-tab{flex-basis:calc(33.333% - .375rem)}
  .try-now-callout{position:static;transform:none;width:auto;margin-top:1.75rem;flex-direction:column;align-items:stretch}
  .try-now-callout .btn{text-align:center;justify-content:center}
}

/* Hero entrance */
@keyframes heroUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.hero-heading{animation:heroUp .7s ease both .22s}
.hero .subtitle{animation:heroUp .65s ease both .38s}
.hero-cta{animation:heroUp .65s ease both .52s}
.hero-trust{animation:heroUp .65s ease both .65s}
.hero-inner{display:flex;align-items:center;gap:4rem;max-width:1400px;margin:0 auto;width:100%}
.hero-heading{margin-bottom:1.5rem;position:relative}
.hero h1{margin-bottom:0;text-align:start;letter-spacing:0;font-weight:100}
.hero-details{flex:1;text-align:start}
.hero .subtitle{margin-left:0;max-width:none}
.hero-cta{justify-content:flex-start}
.hero-trust{justify-content:flex-start}
@media(max-width:600px){.hero-inner{flex-direction:column;text-align:center}.hero-heading{flex-direction:column;gap:1rem;align-items:center}.hero h1{text-align:center;font-size:clamp(2rem,10vw,4rem)}.hero-details{text-align:center}.hero-cta{justify-content:center}.hero-trust{justify-content:center}}

/* Scroll reveal */
.reveal{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease}
.reveal.visible{opacity:1;transform:none}
.reveal-1{transition-delay:.05s}
.reveal-2{transition-delay:.15s}
.reveal-3{transition-delay:.25s}
.reveal-4{transition-delay:.35s}
.reveal-5{transition-delay:.45s}
.reveal-6{transition-delay:.55s}
/* Mobile: snappier reveals — drop the stagger and shorten the fade so content
   doesn't lag behind the scroll (the observer also triggers earlier on mobile). */
@media(max-width:768px){
  .reveal{transition-duration:.3s}
  .reveal-1,.reveal-2,.reveal-3,.reveal-4,.reveal-5,.reveal-6{transition-delay:0s}
}
@media(prefers-reduced-motion:reduce){
  .hero h1,.hero .subtitle,.hero-cta,.hero-trust{animation:none}
  .reveal,.reveal.visible{opacity:1;transform:none;transition:none}
}

/* Theme toggle */
.nav-theme-toggle{background:none;border:none;cursor:pointer;color:rgba(255,255,255,.65);width:2rem;height:2rem;display:flex;align-items:center;justify-content:center;border-radius:5px;padding:.25rem;flex-shrink:0;margin-left:.25rem}
.nav-theme-toggle:hover{color:#fff;background:rgba(255,255,255,.1)}
.nav-theme-toggle svg{width:1.1rem;height:1.1rem;pointer-events:none}
.nav-theme-toggle .icon-sun{display:none}
.dark .nav-theme-toggle .icon-moon{display:none}
.dark .nav-theme-toggle .icon-sun{display:block}

/* Dark mode */
/* Content links use --green, which reads on both the light and dark pine
   surfaces, so the dark theme needs no separate link colour. */
.dark{--text:#cce8da;--muted:#7aaa90;--border:#1b3d2c;--pale:#0d2419}
.dark body{background:#061816}
.dark .audience-section{border-bottom-color:var(--border)}
.dark .audience-header{background:linear-gradient(180deg,#0a1f16 0%,#061816 100%)}
.dark .audience-title{color:var(--text)}
.dark .audience-tabs{background:#061816;border-bottom-color:var(--border)}
.dark .audience-tab{background:#112a1e}
.dark .audience-tab[aria-selected=true]{background:var(--dark);color:var(--green);border-color:rgba(48,186,120,.4);box-shadow:0 3px 12px rgba(0,0,0,.4)}
.dark .audience-tab:hover:not([aria-selected=true]){color:var(--green);background:#0d2419}
.dark .card-tagline{color:var(--text)}
.dark .card-intro{color:var(--muted)}
.dark .social-proof{background:#061816}
.dark .social-proof h2{color:var(--text)}
.dark .social-proof-desc{color:var(--muted)}
.dark .faq-section{background:#061816}
.dark .faq-section h2{color:var(--text)}
.dark .faq-item{background:#0d2419}
.dark .faq-q{color:var(--text)}
.dark .card-benefits strong{color:var(--text)}
.dark .tool-part{background:#112a1e}
.dark .tool-part-file{background:#0d2419}
.dark .tool-part-name{color:var(--text)}
.dark .whats-a-tool .whats-inner>h2{color:var(--text)}
.dark .tool-feature{background:#112a1e}
.dark .tool-feature strong{color:var(--text)}
.dark .import-section{background:linear-gradient(180deg,#061816 0%,var(--pale) 100%)}
.dark .import-section h2{color:var(--text)}
.dark .import-source,.dark .import-step{background:#112a1e}
.dark .import-point{background:#0d2419}
.dark .import-source strong,.dark .import-step strong,.dark .import-point strong{color:var(--text)}
.dark tr:nth-child(even) td{background:#0d2419}
.dark footer{border-top-color:var(--border)}
.dark .docs-content h1,.dark .docs-content h2,.dark .docs-content h3{color:var(--text)}
.dark th{color:var(--text)}
/* Code in dark mode: the base code/pre rules hardcode light backgrounds, so in
   dark mode inline code became light-text-on-light-bg (invisible). Give chips a
   dark surface + light text, and the pre block a dark box. The third rule keeps
   code inside pre background-free — .dark .docs-content code would otherwise
   out-specify the base "pre code background none" reset. */
.dark .docs-content code{background:#112a1e;color:var(--text)}
.dark .docs-content pre{background:#0d2419;color:var(--text);border:1px solid var(--border)}
.dark .docs-content pre code{background:none;color:inherit}
/* ── Pilot / prototype disclaimer badge (in the dark hero) ─────────────────── */
.hero-pilot{display:inline-flex;align-items:center;gap:.5rem;margin-bottom:1.1rem;padding:.32rem .34rem .32rem .5rem;border:1px solid rgba(254,124,63,.5);background:rgba(254,124,63,.12);border-radius:999px;text-decoration:none;font-size:.8125rem;color:#ffd9c4;transition:background .15s,border-color .15s}
.hero-pilot:hover{background:rgba(254,124,63,.22);border-color:rgba(254,124,63,.8)}
.hero-pilot-tag{background:var(--orange);color:#2a0f04;font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:.66rem;padding:.22em .62em;border-radius:999px}
.hero-pilot-text{padding-right:.35rem}
@media(max-width:600px){.hero-pilot-text{font-size:.74rem}}
/* ── Why we built Lolly + old-way vs Lolly-way matrix ─────────────────────── */
.why-section{padding:5rem 1.5rem;background:var(--pale)}
.why-inner{max-width:1080px;margin:0 auto}
.why-lede{text-align:center;max-width:44rem;margin:0 auto 2.5rem}
.why-eyebrow{display:inline-block;font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:var(--green);margin-bottom:.75rem}
.why-section h2{font-size:clamp(1.8rem,4vw,2.5rem);color:var(--dark);line-height:1.12;margin-bottom:1rem}
.why-lead{color:var(--muted);font-size:1.0625rem;line-height:1.7}
.why-frustrations{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:2.5rem}
.why-frustration{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.5rem 1.375rem;text-align:center}
.why-frustration-ic{display:inline-flex;width:2.75rem;height:2.75rem;align-items:center;justify-content:center;border-radius:50%;background:rgba(254,124,63,.12);color:var(--orange);margin-bottom:.75rem}
.why-frustration-ic svg{width:1.4rem;height:1.4rem}
.why-frustration strong{display:block;color:var(--dark);margin-bottom:.35rem;font-size:1.0625rem}
.why-frustration p{color:var(--muted);font-size:.9rem;line-height:1.55}
.matrix{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;align-items:stretch}
.matrix-head{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:.8rem;padding:.85rem 1.1rem;border-radius:10px;text-align:center}
.matrix-head--old{background:rgba(90,112,103,.14);color:var(--muted)}
.matrix-head--new{background:var(--green);color:#04231a}
.matrix-cell{display:flex;gap:.7rem;align-items:flex-start;padding:1rem 1.15rem;border-radius:12px;font-size:.95rem;line-height:1.5}
.matrix-cell--old{background:#fff;border:1px solid var(--border);color:var(--muted)}
.matrix-cell--new{background:#fff;border:1px solid rgba(48,186,120,.4);color:var(--text);box-shadow:0 2px 10px rgba(48,186,120,.08)}
.matrix-mark{flex-shrink:0;width:1.35rem;height:1.35rem;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;font-size:.78rem;font-weight:800;margin-top:.05rem}
.matrix-cell--old .matrix-mark{background:rgba(90,112,103,.16);color:var(--muted)}
.matrix-cell--new .matrix-mark{background:var(--green);color:#04231a}
@media(max-width:720px){.why-frustrations{grid-template-columns:1fr}.matrix{grid-template-columns:1fr;gap:.5rem}.matrix-head{display:none}.matrix-cell--old{margin-top:.5rem}}
/* Dark-theme surfaces for the pale Why section. */
.dark .why-section{background:#061816}
.dark .why-section h2{color:var(--text)}
.dark .why-frustration{background:#112a1e}
.dark .why-frustration strong{color:var(--text)}
.dark .matrix-cell--old{background:#0d2419}
.dark .matrix-cell--new{background:#112a1e}

/* RTL correctness (Arabic pages get dir="rtl" on <html>): code is Latin and
   always reads LTR — isolate it so surrounding RTL prose doesn't scramble
   leading/trailing punctuation. Mirrors the SPA's parts/rtl.css. */
[dir="rtl"] pre,[dir="rtl"] code,[dir="rtl"] kbd,[dir="rtl"] samp{direction:ltr;text-align:left;unicode-bidi:isolate}
`.trim();

const THEME_SVG_MOON = `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const THEME_SVG_SUN  = `<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const THEME_TOGGLE   = `<button class="nav-theme-toggle" aria-label="Toggle dark mode" title="Toggle dark/light mode">${THEME_SVG_MOON}${THEME_SVG_SUN}</button>`;

const THEME_INIT_SCRIPT = `<script>(function(){var c=localStorage.getItem('theme'),s=window.matchMedia('(prefers-color-scheme:dark)').matches;if(c==='dark'||(c!=='light'&&s))document.documentElement.classList.add('dark');})();</script>`;

const THEME_INTERACT_SCRIPT = `<script>(function(){var btn=document.querySelector('.nav-theme-toggle');if(!btn)return;btn.addEventListener('click',function(){var d=document.documentElement.classList.toggle('dark');localStorage.setItem('theme',d?'dark':'light');});window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(e){if(!localStorage.getItem('theme'))document.documentElement.classList.toggle('dark',e.matches);});})();</script>`;

const HAM_BTN = `<button class="nav-hamburger" id="navHamburger" aria-label="Toggle navigation" aria-expanded="false"><svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg><svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`;

const SCROLL_REVEAL_SCRIPT = `<script>(function(){var els=document.querySelectorAll('.reveal');if(!els.length)return;
  // Mobile is trigger-happy: a positive bottom rootMargin pre-reveals elements as
  // they approach (so they're faded in by the time you reach them), with threshold 0.
  // Desktop keeps a subtler trigger just inside the viewport.
  var eager=window.matchMedia('(max-width:768px)').matches;
  var opts=eager?{threshold:0,rootMargin:'0px 0px 20% 0px'}:{threshold:0.1,rootMargin:'0px 0px -32px 0px'};
  var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},opts);
  els.forEach(function(el){io.observe(el);});})();</script>`;

const LIQUID_GLASS_SCRIPT = `<script>(function(){
  // Adapted from shuding/liquid-glass (https://github.com/shuding/liquid-glass)
  var ns='http://www.w3.org/2000/svg';
  var xl='http://www.w3.org/1999/xlink';

  function smoothStep(a,b,t){t=Math.max(0,Math.min(1,(t-a)/(b-a)));return t*t*(3-2*t);}
  function len(x,y){return Math.sqrt(x*x+y*y);}
  function rrSDF(x,y,w,h,r){var qx=Math.abs(x)-w+r,qy=Math.abs(y)-h+r;return Math.min(Math.max(qx,qy),0)+len(Math.max(qx,0),Math.max(qy,0))-r;}

  function buildGlass(btn,idx){
    var rect=btn.getBoundingClientRect();
    var W=Math.round(rect.width)||180,H=Math.round(rect.height)||48;
    var id='lg'+idx;

    var canvas=document.createElement('canvas');
    canvas.width=W;canvas.height=H;
    var ctx=canvas.getContext('2d');
    var n=W*H,raw=new Float32Array(n*2),maxS=0;

    for(var i=0;i<n;i++){
      var px=i%W,py=Math.floor(i/W);
      var ux=(px+0.5)/W-0.5,uy=(py+0.5)/H-0.5;
      var d=rrSDF(ux,uy,0.3,0.2,0.55);
      var disp=smoothStep(0.8,0,d-0.15);
      var sc=smoothStep(0,1,disp);
      var dx=ux*sc-ux,dy=uy*sc-uy;
      raw[i*2]=dx;raw[i*2+1]=dy;
      if(Math.abs(dx)>maxS)maxS=Math.abs(dx);
      if(Math.abs(dy)>maxS)maxS=Math.abs(dy);
    }
    maxS=(maxS*0.5)||0.01;

    var img=new Uint8ClampedArray(n*4);
    for(var i=0;i<n;i++){
      img[i*4]  =Math.round((raw[i*2]  /maxS+0.5)*255);
      img[i*4+1]=Math.round((raw[i*2+1]/maxS+0.5)*255);
      img[i*4+2]=0;img[i*4+3]=255;
    }
    ctx.putImageData(new ImageData(img,W,H),0,0);

    var svg=document.createElementNS(ns,'svg');
    svg.setAttribute('width','0');svg.setAttribute('height','0');
    svg.setAttribute('aria-hidden','true');
    svg.setAttribute('class','lg-svg');
    svg.style.cssText='position:absolute;top:0;left:0;pointer-events:none;overflow:hidden';

    var defs=document.createElementNS(ns,'defs');
    var filter=document.createElementNS(ns,'filter');
    filter.setAttribute('id',id);
    filter.setAttribute('filterUnits','userSpaceOnUse');
    filter.setAttribute('color-interpolation-filters','sRGB');
    filter.setAttribute('x','0');filter.setAttribute('y','0');
    filter.setAttribute('width',String(W));filter.setAttribute('height',String(H));

    var feImg=document.createElementNS(ns,'feImage');
    feImg.setAttribute('result','map');
    feImg.setAttribute('x','0');feImg.setAttribute('y','0');
    feImg.setAttribute('width',String(W));feImg.setAttribute('height',String(H));
    feImg.setAttribute('preserveAspectRatio','none');
    var mapUrl=canvas.toDataURL();
    feImg.setAttribute('href',mapUrl);            // modern feImage href
    feImg.setAttributeNS(xl,'href',mapUrl);       // legacy xlink fallback (older engines)

    var feDisp=document.createElementNS(ns,'feDisplacementMap');
    feDisp.setAttribute('in','SourceGraphic');feDisp.setAttribute('in2','map');
    feDisp.setAttribute('xChannelSelector','R');feDisp.setAttribute('yChannelSelector','G');
    // 2x displacement so the refraction visibly bends whatever passes behind the
    // button (format chips, the lollipop) instead of only whispering at the edge.
    var REFRACTION_BOOST=2;
    feDisp.setAttribute('scale',String((maxS*2*W*REFRACTION_BOOST).toFixed(2)));

    filter.appendChild(feImg);filter.appendChild(feDisp);
    defs.appendChild(filter);svg.appendChild(defs);
    document.body.appendChild(svg);

    var bf='url(#'+id+') blur(0.4px) contrast(1.15) brightness(1.07) saturate(1.2)';
    // Apply synchronously. The filter auto-re-renders when its feImage map finishes
    // loading, so there's no need to defer — and NOT via img.decode(), which never
    // resolves in a hidden/throttled tab and would leave the glass unapplied.
    btn.style.backdropFilter=bf;
    btn.style.webkitBackdropFilter=bf;
  }

  function paint(){
    // Clear any filters from a previous pass so a re-run (e.g. after webfonts change
    // the button size) rebuilds cleanly instead of stacking duplicate-id filters.
    document.querySelectorAll('svg.lg-svg').forEach(function(s){ s.remove(); });
    document.querySelectorAll('.btn-primary,.btn-secondary').forEach(function(btn,i){
      try{ buildGlass(btn,i); }catch(e){ if(window.console)console.warn('liquid-glass failed',e); }
    });
  }
  // Two rAFs so layout has settled and the buttons have their final size; re-run once
  // on full load as a belt-and-braces guard for a cold image cache.
  requestAnimationFrame(function(){ requestAnimationFrame(paint); });
  window.addEventListener('load', paint);
})();</script>`;

const HERO_CANVAS_SCRIPT = `<script>(function(){
  var canvas=document.getElementById('heroCanvas');
  if(!canvas)return;
  var ctx=canvas.getContext('2d');
  // Every distinct file extension Lolly can export — vector, print, raster, video,
  // markup, structured data and bundles (kept in step with docs/exporting.md).
  var exts=['.SVG','.EMF','.EPS','.DXF','.PDF','.TIFF','.PPTX','.PNG','.JPG','.WEBP','.AVIF','.GIF','.WEBM','.MP4','.HTML','.MD','.TXT','.CSV','.JSON','.ICS','.VCF','.ICO','.ZIP'];
  // Headline formats appear ~2x as often as the rest: listing them again weights
  // them double in the pick pool (each favored ext is in the pool twice).
  var extPool=exts.concat(['.PDF','.SVG','.PNG','.MP4','.PPTX']);
  var floaters=[], fragments=[];
  // Ambient chip population scales with canvas width so wide heroes aren't sparse
  // and narrow/mobile ones aren't crowded.
  function targetFloaters(){ return Math.max(5, Math.min(14, Math.round(cw/100))); }
  // Logical (CSS-pixel) canvas size. The backing store is scaled by devicePixelRatio
  // so the animation stays crisp on HiDPI/Retina displays instead of being a 1x
  // bitmap the browser upscales; all motion math below stays in these logical units.
  var dpr=Math.max(1, window.devicePixelRatio||1);
  var cw=800, ch=400;

  function resize(){
    dpr=Math.max(1, window.devicePixelRatio||1);
    cw=canvas.parentElement.offsetWidth||800;
    ch=canvas.parentElement.offsetHeight||400;
    canvas.width=Math.round(cw*dpr);
    canvas.height=Math.round(ch*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function rand(a,b){return a+Math.random()*(b-a);}

  // Bake one chip (filled box + label) into an offscreen sprite. Both the ambient
  // floaters and the click-burst fragments reuse this, so the chip look lives in
  // one place; callers add their own motion fields. Pre-compositing also lets a
  // chip fade as a single group instead of each layer fading over the bg.
  function makeChip(){
    var ext=extPool[Math.floor(Math.random()*extPool.length)];
    var fs=rand(10,22);
    var weight='700';
    ctx.font=weight+' '+fs+'px SUSE,sans-serif';
    var tw=ctx.measureText(ext).width;
    var px=fs*0.75,py=fs*0.75;
    var w=tw+px*2, h=fs+py*2, r=Math.round(fs*0.38);
    var spr=document.createElement('canvas');
    spr.width=Math.ceil(w*dpr); spr.height=Math.ceil(h*dpr);
    var sx=spr.getContext('2d');
    sx.scale(dpr,dpr);
    sx.lineJoin='round';
    rr(sx,0,0,w,h,r);
    // Borderless: a solid fill (hero background) so overlapping chips occlude each
    // other cleanly instead of letting labels behind them bleed through. The chips
    // read apart via the soft drop shadow cast at blit time (see drawChip).
    sx.fillStyle='#1c4a2e'; sx.fill();
    sx.fillStyle='#30ba78';
    sx.font=weight+' '+fs+'px SUSE,sans-serif';
    // Centre on the actual glyph box, not the em box: these labels are all-caps
    // with no descenders, so a 'middle' baseline leaves them riding high with a
    // gap at the bottom. Offset the baseline by half the ink height to balance.
    sx.textAlign='center'; sx.textBaseline='alphabetic';
    var m=sx.measureText(ext);
    var asc=m.actualBoundingBoxAscent||fs*0.7, desc=m.actualBoundingBoxDescent||0;
    sx.fillText(ext,w/2,h/2+(asc-desc)/2);
    return{spr:spr,w:w,h:h};
  }

  // Ambient chip: drifts up from below the canvas, anti-gravity, with a gentle
  // leaf-like sway. The tilt tracks the horizontal sway so it reads as floating,
  // not spinning. initial=true spreads the first batch across the full height so
  // the hero isn't empty on load; otherwise it starts just below the bottom edge.
  function makeFloater(initial){
    var c=makeChip();
    var x=rand(c.w*0.6, cw-c.w*0.6);
    var y=initial ? rand(-c.h, ch) : ch+c.h+rand(0,ch*0.35);
    return{
      spr:c.spr, w:c.w, h:c.h,
      baseX:x, x:x, y:y, vy:rand(-0.95,-0.45),
      swayPhase:rand(0,Math.PI*2), swayFreq:rand(0.006,0.016), swayAmp:rand(6,20),
      rot:0, tilt:rand(0.18,0.79)
    };
  }

  // Click burst: a chip flung outward from (x,y); drag + gravity + fade in tick().
  function makeFragment(x,y,angle){
    var c=makeChip();
    var spd=rand(4.5,11.0);
    return{
      spr:c.spr, w:c.w, h:c.h,
      x:x,y:y,
      vx:Math.cos(angle)*spd, vy:Math.sin(angle)*spd,
      rot:rand(-0.5,0.5), vrot:rand(-0.022,0.022),
      alpha:rand(0.8,1.0), life:1
    };
  }

  function explodeAt(x,y){
    var count=Math.floor(rand(12,18));
    for(var i=0;i<count;i++){
      var angle=(i/count)*Math.PI*2+rand(-0.3,0.3);
      var f=makeFragment(x,y,angle);
      f.vx*=1.5; f.vy*=1.5;
      fragments.push(f);
    }
  }

  function rr(c,x,y,w,h,r){
    c.beginPath();c.moveTo(x+r,y);c.lineTo(x+w-r,y);
    c.arcTo(x+w,y,x+w,y+r,r);c.lineTo(x+w,y+h-r);
    c.arcTo(x+w,y+h,x+w-r,y+h,r);c.lineTo(x+r,y+h);
    c.arcTo(x,y+h,x,y+h-r,r);c.lineTo(x,y+r);
    c.arcTo(x,y,x+r,y,r);c.closePath();
  }

  // Blit a chip sprite. No drop shadow: per-frame shadowBlur forces a separate blur
  // pass on every chip every frame, which dominated the hero's render cost. The
  // chips' solid fill already occludes cleanly, so overlapping chips still read apart.
  function drawChip(c,alpha){
    ctx.save();
    ctx.translate(c.x,c.y); ctx.rotate(c.rot); ctx.globalAlpha=alpha;
    ctx.drawImage(c.spr,-c.w/2,-c.h/2,c.w,c.h);
    ctx.restore();
  }

  function tick(){
    ctx.clearRect(0,0,cw,ch);

    // Fragments: drag + gravity, fade out
    for(var i=fragments.length-1;i>=0;i--){
      var f=fragments[i];
      f.vx*=0.972; f.vy=f.vy*0.972+0.03;
      f.x+=f.vx; f.y+=f.vy; f.rot+=f.vrot;
      f.life-=0.0045;
      if(f.life<=0){fragments.splice(i,1);continue;}
      // Hold the chip at full opacity for most of its life, then fall off a cliff
      // over the last ~18%. A linear fade leaves chips semi-transparent the whole
      // time, so their solid fill goes translucent and overlapping chips bleed
      // through (muddy). Squaring the tail makes the late drop bite harder.
      var t=f.life/0.18, fade=t>=1?1:t*t;
      drawChip(f, f.alpha*fade);
    }

    // Floaters: drift up, sway, fade at the top/bottom edges, recycle off-top.
    for(var i=floaters.length-1;i>=0;i--){
      var fl=floaters[i];
      fl.swayPhase+=fl.swayFreq;
      fl.y+=fl.vy;
      fl.x=fl.baseX+Math.sin(fl.swayPhase)*fl.swayAmp;
      fl.rot=Math.sin(fl.swayPhase)*fl.tilt;
      // No fade: chips ride in fully opaque from below the bottom edge, and the
      // canvas edge simply clips them as they pass the top. Drop once fully above.
      if(fl.y<-fl.h){ floaters.splice(i,1); continue; }
      drawChip(fl, 1);
    }

    // Replenish to the responsive target (also restocks after a resize grows it).
    while(floaters.length<targetFloaters()) floaters.push(makeFloater(false));

    requestAnimationFrame(tick);
  }

  new ResizeObserver(resize).observe(canvas.parentElement);
  resize();
  var hero=canvas.parentElement;
  document.addEventListener('pointerdown',function(e){
    if(!hero.contains(e.target))return;
    var rect=canvas.getBoundingClientRect();
    explodeAt(e.clientX-rect.left,e.clientY-rect.top);
  });
  while(floaters.length<targetFloaters()) floaters.push(makeFloater(true));
  tick();
})();</script>`;

const HAMBURGER_SCRIPT = `<script>(function(){var ham=document.getElementById('navHamburger');var menu=document.getElementById('navMobileMenu');if(!ham||!menu)return;ham.addEventListener('click',function(){var open=menu.classList.toggle('open');ham.classList.toggle('open',open);ham.setAttribute('aria-expanded',open?'true':'false');});menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');ham.classList.remove('open');ham.setAttribute('aria-expanded','false');});});document.addEventListener('click',function(e){if(!menu.contains(e.target)&&!ham.contains(e.target)){menu.classList.remove('open');ham.classList.remove('open');ham.setAttribute('aria-expanded','false');}});})();</script>`;

// ── i18n: site chrome (nav/sidebar/footer labels) + per-locale page sources ──
//
// A flat {EnglishSource: Translated} catalog per language (docs/i18n/<lang>/
// site.json), generated by `npm run translate -- --corpus site` (see
// plans/localize.md §8) — the same English-as-key, identity-fallback contract
// as the SPA's i18n.ts. Page BODY content follows the same fallback: a
// docs/i18n/<lang>/<slug>.md sidecar is used when present, else the page ships
// in English inside the localized chrome rather than 404ing.
function loadSiteCatalog(lang: Lang): Record<string, string> {
  if (lang === 'en') return {};
  const p = resolve(__dirname, 'i18n', lang, 'site.json');
  if (!existsSync(p)) return {};
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return {}; }
}
// Set once per locale pass in build(); read by every t() call during that pass.
let activeCatalog: Record<string, string> = {};
function t(s: string): string { return activeCatalog[s] ?? s; }

function resolvePageSrc(page: Page, lang: Lang): string {
  if (lang !== 'en') {
    const localized = resolve(__dirname, 'i18n', lang, `${page.slug}.md`);
    if (existsSync(localized)) return localized;
  }
  return resolve(__dirname, page.src);
}

// English lives at /info/<slug>.html (unprefixed, unchanged URLs); every other
// locale lives under /info/<lang>/<slug>.html.
function localeHref(lang: Lang, slug: string): string {
  const file = slug === 'index' ? 'index.html' : `${slug}.html`;
  return lang === 'en' ? `/info/${file}` : `/info/${lang}/${file}`;
}
function hrefToSlug(href: string): string {
  return href.replace(/^\/info\//, '').replace(/\.html$/, '');
}

// Rewrite an href authored in the (always-English) landing-page JSON content —
// either "/" (the app root) or an internal "/info/<slug>.html" page — to the
// equivalent URL for `lang`, so a Spanish landing page's CTAs/links don't dump
// the visitor back into English. The app root gets a `?lang=` query override
// (a session-only override the SPA's initI18n reads at the top of its
// precedence chain — see shells/web/src/main.ts/i18n.ts) since, unlike /info,
// it has no per-locale path to link to instead.
function localizeHref(lang: Lang, href: string): string {
  if (href === '/') return lang === 'en' ? '/' : `/?lang=${lang}`;
  const m = href.match(/^\/info\/([\w-]+)\.html$/);
  return m ? localeHref(lang, m[1]!) : href;
}

// Language-switcher indicator (~/Build/language-icon.svg), inlined with
// fill="currentColor" so it themes with the surrounding nav text. Same markup
// as shells/web/src/i18n.ts's LANG_ICON_SVG — duplicated (not imported) since
// this static-site generator has no shared module boundary with the SPA.
const LANG_ICON_SVG = `<svg class="lang-switch-icon" viewBox="0 0 440.332 510.236" fill="currentColor" aria-hidden="true"><path d="m311.768 445.719 12.531 20.615c-31.404 20.067-66.19 30.034-103.148 33.127h-16.436c-3.287 0-19.54-2.008-20.088-2.008-6.026-.913-12.235-2.009-17.896-3.287q-15.34-3.562-30.68-9.315c-7.487-2.739-15.34-6.391-22.28-9.86-3.469-1.644-6.573-3.287-9.86-5.296-1.096-.548-6.94-4.748-9.862-4.748-3.287 0-5.297 2.556-5.297 5.295 0 1.644.184 3.106 2.375 4.566 12.418 8.218 25.566 14.426 38.166 19.174 6.94 2.74 14.063 5.296 21.367 7.305 4.2 1.278 8.948 2.558 13.33 3.47 5.662 1.279 11.689 2.375 17.35 3.288 6.392.913 13.15 1.643 19.541 2.191 36.8 0 80.597-5.566 122.537-30.498 1.721-1.243 4.493-2.286 6.744-3.758l11.428 18.801 15.725-45.576z"/><path d="m639.838 180.403-40.768-12.976V48.363c0-3.47-2.557-5.843-5.844-5.843-2.556 0-84.917 28.306-91.492 30.68-22.334 7.444-86.798 29.733-86.798 29.733-1.034.297-2.638.787-4.741 1.449L252.855 48.85a1.826 1.826 0 0 0-2.435 1.722v106.724c-24.405 8.17-41.808 14.02-42.701 14.335-1.644.548-4.2.913-5.662 2.922-.73.73-.913 2.009-1.278 2.922v306.982c0 .365.183.547.183.73 1.095 2.374 3.104 3.835 5.296 3.835 2.739 0 208.367-69.03 212.933-70.856.215-.072.458-.24.697-.438L638.73 487.48a1.826 1.826 0 0 0 2.38-1.74V182.143c0-.795-.514-1.5-1.272-1.74M410.973 409.4l-199.054 66.29V182.04l199.054-66.29ZM587.93 55.668v108.213l-164.492-52.354Zm-20.243 329.6-10.52-38.43-60.517-18.341-13.013 31.304-29.292-8.886 62.178-152.587 28.508 8.636 51.939 187.188zm-183.723-51.715c-1.658-.602-35.965-14.814-40.828-17.142-3.98-1.914-13.737-6.04-18.328-7.913 12.931-19.938 21.094-34.984 22.18-37.276 2.012-4.193 15.699-30.976 16.018-32.625.31-1.67.7-7.843.399-9.31-.302-1.495-5.32 1.38-12.134 3.69-6.824 2.3-19.794 10.735-24.803 11.793-5.027 1.048-21.094 7.135-29.316 9.863s-23.773 7.475-30.17 9.202c-6.406 1.728-11.998 1.865-15.581 2.951 0 0 .477 5.019 1.428 6.523.94 1.505 4.33 5.194 8.27 6.224 3.942 1.037 10.465.62 13.436-.058 2.97-.69 8.114-3.204 8.804-4.301.698-1.116-.36-4.553.814-5.592 1.186-1.028 16.843-4.688 22.755-6.474 5.911-1.817 28.54-9.61 31.607-9.213-.971 3.223-19.173 39.276-25.035 50.032-5.864 10.755-39.926 58.07-47.177 66.408-5.505 6.338-18.843 22.558-23.463 26.218 1.165.322 9.425-.387 10.93-1.318 9.377-5.777 24.996-25.22 30.026-31.142 14.949-17.532 28.083-35.947 38.497-51.75h.011c2.03.845 18.434 14.21 22.714 17.173 4.281 2.96 21.173 12.385 24.833 13.948 3.66 1.583 17.725 8.068 18.317 5.873.591-2.213-2.544-15.154-4.204-15.784m-106.167-120.33c-1.118-1.098 1.455 8.968 5.036 12.59 6.35 6.405 11.31 7.23 13.95 7.337 5.844.233 13.056-1.456 17.338-3.25 4.144-1.769 11.405-5.476 14.153-10.883.583-1.156 2.173-3.097 1.174-7.893-.757-3.689-3.106-4.98-5.97-4.775-2.863.193-11.532 2.505-15.725 3.794-4.194 1.273-12.834 3.903-16.6 4.72-3.756.814-12.038-.379-13.356-1.64" transform="translate(-200.78 -42.52)"/><path d="m529.556 247.883-21.718 52.496 39.929 12.104z" transform="translate(-200.78 -42.52)"/></svg>`;

// The persistent, combined language picker — same control, same options, on
// every /info page and (via the shared `lang` localStorage key — see i18n.ts's
// initI18n) on the app itself. Renders as a FAB button that opens a menu, matching
// the app's UX. The menu lists all languages by speaking population (largest first)
// with flags and native names. Clicking a language navigates to that locale's version
// of the current page and saves the choice to localStorage.
function langPickerHtml(lang: Lang, slug: string): string {
  const flags = (code: Lang): string => {
    const flagCodes = LANG_META[code].flags ?? [];
    if (!flagCodes.length) return '';
    const flagEmoji = (cc: string): string => {
      const s = String(cc ?? '').trim().toUpperCase();
      if (!/^[A-Z]{2}$/.test(s)) return '';
      if (s === 'AU') return '🐨';
      const RI = 0x1f1e6;
      const A = 'A'.charCodeAt(0);
      return String.fromCodePoint(RI + s.charCodeAt(0) - A, RI + s.charCodeAt(1) - A);
    };
    return `<span class="lang-menu-flags" aria-hidden="true">${flagCodes.map(flagEmoji).join('')}</span>`;
  };
  const options = LANGS.map(l =>
    `<button type="button" class="lang-menu-item" data-lang="${l}" data-href="${esc(localeHref(l, slug))}" aria-pressed="${l === lang}">${flags(l)}<span class="lang-menu-name">${esc(LANG_META[l].nativeName)}</span></button>`,
  ).join('');
  return `<div class="lang-fab-wrap"><button type="button" class="lang-fab" aria-label="${esc(t('Language'))}" aria-haspopup="menu" aria-expanded="false" title="${esc(t('Language'))}">${LANG_ICON_SVG}</button><div class="lang-menu" role="menu" aria-label="${esc(t('Language'))}" hidden><div class="lang-menu-list" role="none">${options}</div></div></div>`;
}
const LANG_PICKER_SCRIPT = `<script>
(function(){
  const trigger = document.querySelector('.lang-fab');
  const menu = document.querySelector('.lang-menu');
  if (!trigger || !menu) return;
  let isOpen = false;
  function positionMenu() {
    const rect = trigger.getBoundingClientRect();
    menu.style.top = (rect.bottom + 8) + 'px';
  }
  function close() {
    if (!isOpen) return;
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    isOpen = false;
    document.removeEventListener('pointerdown', onOutside);
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', positionMenu);
  }
  function open() {
    if (isOpen) return;
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    isOpen = true;
    positionMenu();
    setTimeout(() => document.addEventListener('pointerdown', onOutside), 0);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', positionMenu);
  }
  function onOutside(e) {
    if (!menu.contains(e.target) && !trigger.contains(e.target)) close();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
    if (!['ArrowUp', 'ArrowDown'].includes(e.key)) return;
    const items = [...menu.querySelectorAll('.lang-menu-item')];
    const i = items.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    const step = e.key === 'ArrowDown' ? 1 : -1;
    items[(i + step + items.length) % items.length].focus();
  }
  trigger.addEventListener('click', () => isOpen ? close() : open());
  menu.addEventListener('click', e => {
    const btn = e.target.closest('.lang-menu-item');
    if (!btn) return;
    try { localStorage.setItem('lang', btn.dataset.lang); } catch(err) {}
    location.href = btn.dataset.href;
  });
})();
</script>`;

function buildNav(lang: Lang, slug: string, activeHref: string, isLanding: boolean | undefined, activePathway?: Pathway) {
  const link = (n: NavLink) => {
    const isActive = n.href === activeHref || NAV_PATHWAY[n.href] === activePathway;
    return `<a href="${localeHref(lang, hrefToSlug(n.href))}"${isActive ? ' class="active"' : ''}>${esc(t(n.label))}</a>`;
  };
  // Desktop: one <span class="nav-group"> per cluster, dividers come from CSS.
  const groups = NAV.map(group => `<span class="nav-group">${group.map(link).join('')}</span>`).join('');
  // Mobile menu: a single flat vertical list (clusters collapse to plain rows).
  const mobileLinks = NAV.flat().map(link).join('');
  const navClass = isLanding ? '' : ' class="nav-solid"';
  const launch = esc(t('Launch App ↗'));
  const launchHref = esc(localizeHref(lang, '/'));
  return `<nav${navClass}><a href="${localeHref(lang, 'index')}" class="brand">Lolly</a>${groups}<div class="gap"></div>${langPickerHtml(lang, slug)}${THEME_TOGGLE}${HAM_BTN}<a href="${launchHref}" class="nav-launch">${launch}</a></nav>
<div class="nav-mobile-menu" id="navMobileMenu">${mobileLinks}<a href="${launchHref}" class="nav-launch">${launch}</a></div>`;
}

const FOOTER = () => `<footer><p>Lolly — <a href="${REPO_URL}">${esc(t('Open Source'))}</a></p><p>${esc(t('Questions? Contact Andy Fitzsimon —'))} <a href="mailto:fitzy@suse.com">fitzy@suse.com</a></p>${FOUNDED_BY}</footer>`;

// Docs sidebar for a page, driven by its pathway. Falls back to the builders
// sidebar for any non-landing page without an explicit pathway.
function buildSidebar(lang: Lang, page: Page, activeHref: string) {
  const pathway: Pathway = page.pathway ?? 'builders';
  const sb = SIDEBARS[pathway];
  const groups = sb.groups.map(g => {
    const links = g.items.map(it => {
      const href = `/info/${it.slug}.html`; // logical (English) href — identity only
      return `<a href="${localeHref(lang, it.slug)}"${href === activeHref ? ' class="active"' : ''}>${esc(t(it.label))}</a>`;
    }).join('\n    ');
    return `<div class="sidebar-label">${esc(t(g.label))}</div>\n    ${links}`;
  }).join('\n    ');
  return `<aside class="docs-sidebar">
    <a href="${localeHref(lang, 'index')}" class="sidebar-home">${esc(t('← Home'))}</a>
    <div class="sidebar-pathway">${esc(t(sb.title))}</div>
    ${groups}
  </aside>`;
}

function wrapPage(lang: Lang, page: Page, content: string, ogSlugs: Set<string>) {
  const activeHref = page.slug === 'index' ? '/info/index.html' : `/info/${page.slug}.html`; // logical (English) — identity only
  const isLanding  = page.isLanding;

  // A page with its own generated card (subtitle = its title) points share tags at
  // it; the landing page and any page that failed generation keep the canonical og.png.
  // OG cards are generated once, in English, and shared across locales (see build()).
  const ogImage    = (!isLanding && ogSlugs?.has(page.slug)) ? `${SITE_URL}/info/og/${page.slug}.png` : OG_IMAGE;
  const ogImageAlt = isLanding ? 'Lolly — creative tools with the rules built in' : `Lolly — ${page.title}`;

  const body = isLanding ? content : `
<div class="docs-wrap">
  ${buildSidebar(lang, page, activeHref)}
  <main class="docs-content">
    ${content}
  </main>
</div>`;

  const pageTitle  = isLanding ? LANDING_TITLE : `${t(page.title)} — Lolly`;
  const localeUrl  = `${SITE_URL}${localeHref(lang, page.slug)}`;
  const alternates = LANGS.map(l =>
    `<link rel="alternate" hreflang="${LANG_META[l].htmlLang}" href="${esc(`${SITE_URL}${localeHref(l, page.slug)}`)}">`,
  ).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${esc(`${SITE_URL}${localeHref('en', page.slug)}`)}">`;

  return `<!doctype html>
<html lang="${LANG_META[lang].htmlLang}"${LANG_META[lang].dir ? ` dir="${LANG_META[lang].dir}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(SITE_DESCRIPTION)}">
<link rel="canonical" href="${esc(localeUrl)}">
${alternates}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Lolly">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(SITE_DESCRIPTION)}">
<meta property="og:url" content="${esc(localeUrl)}">
<meta property="og:image" content="${esc(ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(ogImageAlt)}">
<meta property="og:logo" content="${esc(OG_LOGO)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(pageTitle)}">
<meta name="twitter:description" content="${esc(SITE_DESCRIPTION)}">
<meta name="twitter:image" content="${esc(ogImage)}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<link rel="preload" as="font" type="font/woff2" crossorigin href="/catalog/fonts/webfonts/SUSE[wght].woff2">
${THEME_INIT_SCRIPT}
<style>${CSS}</style>
</head>
<body>
${buildNav(lang, page.slug, activeHref, isLanding, page.pathway)}
${body}
${FOOTER()}
${THEME_INTERACT_SCRIPT}
${HAMBURGER_SCRIPT}
${LANG_PICKER_SCRIPT}
${SCROLL_REVEAL_SCRIPT}
${isLanding ? HERO_CANVAS_SCRIPT : ''}
${isLanding ? LIQUID_GLASS_SCRIPT : ''}
</body>
</html>`;
}

// ── Build all pages ───────────────────────────────────────────────────────────

function build() {
  // Ensure output dirs exist and copy static assets (icons).
  mkdirSync(outDir, { recursive: true });
  // icon.avif is the site icon (hero logo); icon.webp is the compatibility copy the
  // GitHub README and overview doc hotlink (GitHub doesn't decode avif). A missing
  // source is a broken landing page, so warn loudly instead of swallowing it.
  for (const f of ['icon.avif', 'icon.webp']) {
    try { copyFileSync(resolve(repoRoot, f), resolve(outDir, f)); }
    catch { console.warn(`⚠  docs/site: ${f} missing at repo root — /info/${f} will 404`); }
  }
  try { copyFileSync(resolve(repoRoot, 'founded-by.svg'), resolve(outDir, 'founded-by.svg')); } catch {}

  // Which pages actually have a generated OG card *on disk* right now. Derived from
  // the filesystem rather than generateOgImages()'s return value so the share-tag
  // wiring is correct even when generation ran in a different process (a stale or
  // duplicate `--watch`), and so a page only points at its own card when the PNG
  // truly exists — otherwise it falls back to the canonical og.png.
  const ogSlugs = new Set(
    pages
      .filter((p) => !p.isLanding && p.slug && existsSync(resolve(outDir, 'og', `${p.slug}.png`)))
      .map((p) => p.slug),
  );

  // English at /info/, every other locale mirrored under /info/<lang>/ — same
  // page set, same slugs, translated chrome + (where a docs/i18n/<lang>/<slug>.md
  // sidecar exists) translated body; otherwise the English body ships inside the
  // localized chrome rather than 404ing. See plans/localize.md §8.
  const sitemapUrls: Array<{ slug: string; isLanding?: boolean }> = [];
  for (const lang of LANGS) {
    activeCatalog = loadSiteCatalog(lang);
    const localeOutDir = lang === 'en' ? outDir : resolve(outDir, lang);
    mkdirSync(localeOutDir, { recursive: true });

    for (const page of pages) {
      const srcPath = resolvePageSrc(page, lang);
      let md: string;
      try {
        md = readFileSync(srcPath, 'utf-8');
      } catch {
        if (lang === 'en') console.warn(`⚠  Skipping ${page.slug}: ${srcPath} not found`);
        continue;
      }

      const content = page.isLanding ? buildLandingContent(md, lang) : mdToHtml(md);
      const html    = wrapPage(lang, page, content, ogSlugs);
      const outFile = page.slug === 'index' ? 'index.html' : `${page.slug}.html`;
      writeFileSync(resolve(localeOutDir, outFile), html, 'utf-8');
      console.log(`✓  ${localeHref(lang, page.slug)}`);
      if (lang === 'en') sitemapUrls.push({ slug: page.slug, isLanding: page.isLanding });
    }
  }
  activeCatalog = {};

  // Redirect stubs for retired slugs — keep inbound links + bookmarks resolving.
  // English-only: these are legacy URLs, never linked from the localized nav tree.
  for (const s of stubs) {
    const dest = esc(s.target);
    const stub = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Moved — Lolly</title>
<link rel="canonical" href="${SITE_URL}${dest}">
<meta http-equiv="refresh" content="0; url=${dest}">
<meta name="robots" content="noindex">
<script>location.replace(${JSON.stringify(s.target)});</script>
</head>
<body>Redirecting to <a href="${dest}">${dest}</a>…</body>
</html>`;
    writeFileSync(resolve(outDir, `${s.slug}.html`), stub, 'utf-8');
    console.log(`↪  /info/${s.slug}.html → ${s.target}`);
  }

  // Sitemap — every page × every locale, with hreflang alternates so search
  // engines route each locale to the language it actually serves.
  const urlEntries = sitemapUrls.map(({ slug }) => {
    const alternates = LANGS.map(l =>
      `      <xhtml:link rel="alternate" hreflang="${LANG_META[l].htmlLang}" href="${esc(`${SITE_URL}${localeHref(l, slug)}`)}"/>`,
    ).join('\n');
    return LANGS.map(lang => `  <url>\n    <loc>${esc(`${SITE_URL}${localeHref(lang, slug)}`)}</loc>\n${alternates}\n  </url>`).join('\n');
  }).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries}\n</urlset>\n`;
  writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap, 'utf-8');
  console.log(`✓  /info/sitemap.xml (${sitemapUrls.length} pages × ${LANGS.length} locales)`);

  console.log(`\nSite built → shells/web/public/info/`);
}

// Per-page OG share images depend only on the page titles + brand assets (never the
// docs markdown), so they're rasterised once here and reused by every build()
// (including incremental --watch rebuilds). `ogSlugs` names the slugs that got their
// own card; the rest fall back to og.png. Best-effort — a missing @resvg/resvg-js
// (or any rasterise error) just yields an empty set, leaving every page on og.png.
const ogGenerated = await generateOgImages(pages, outDir, repoRoot, (m) => console.log(m));
const ogExpected = pages.filter((p) => !p.isLanding && p.slug && p.title).length;
if (ogExpected > 0 && ogGenerated.size < ogExpected) {
  const onDisk = pages.filter(
    (p) => !p.isLanding && p.slug && existsSync(resolve(outDir, 'og', `${p.slug}.png`)),
  ).length;
  console.warn(
    `⚠  og: generated ${ogGenerated.size}/${ogExpected} per-page share cards (${onDisk} present on disk).` +
      (onDisk === 0
        ? ' Every /info page will use the fallback og.png — is @resvg/resvg-js installed for this platform?'
        : ''),
  );
}

build();

// ── Watch mode ────────────────────────────────────────────────────────────────
// `node docs/build.ts --watch` rebuilds whenever a docs source changes, so the
// /info pages stay current during `npm run dev:web`. Sources are everything under
// docs/ (the markdown, faq.md, and src/*.svg) plus the repo-root README.md (the
// About page). Output goes to shells/web/public/ — outside docs/ — so a rebuild
// never re-triggers the watcher.
if (process.argv.includes('--watch')) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const scheduleRebuild = (label: string) => {
    clearTimeout(timer!);
    timer = setTimeout(() => {
      console.log(`\n↻  ${label} changed — rebuilding /info…`);
      try { build(); } catch (err) { console.error('✗  Rebuild failed:', (err as Error).message); }
    }, 120);
  };
  // fs.watch types the filename as string | Buffer | null; it's a string here.
  watch(__dirname, { recursive: true }, (_event, file) => scheduleRebuild((file || 'docs') as string));
  try { watch(resolve(repoRoot, 'README.md'), () => scheduleRebuild('README.md')); } catch {}
  console.log('\n👀  Watching docs/ for changes — Ctrl+C to stop.');
}
