# Install Lolly

Lolly runs in a browser with nothing to install, and it also ships as a real app
for the machine in front of you. This page is the one list of every packaged
build: what each one is, how to install it, and how to check you got the file we
made.

The app is the same either way. Same tools, same brand packs, same files out -
the packaged builds add native file dialogs, a home in your application menu and
a copy that keeps working with the network unplugged.

> **The first tagged release is not out yet.** The build pipeline for every
> package below is written, tested and in the repository, and the artifacts
> appear here the moment a `v*` tag is cut. Until then each section gives you the
> build-it-yourself route, which produces the same file from the same source.
> If you want the app right now and do not want to build it, use
> [the web app](/) - it needs no install at all.

---

## macOS

**Apple silicon (M1 and later), `.dmg`.**

Download the disk image, open it, and drag Lolly to Applications. Nothing else
is needed - the app carries its own engine and tool catalogue.

- **File:** `Lolly_<version>_aarch64.dmg`
- **From:** [the releases page](https://github.com/lolly-tools/lolly/releases)
- **Intel Macs:** not published. Tauri does not cross-compile, so an
  `x86_64-apple-darwin` build has to run on Intel hardware or a rosetta CI
  runner; if you need one, build it yourself with the steps below.

Build it yourself:

```bash
git clone --recurse-submodules https://github.com/lolly-tools/lolly.git
cd lolly && npm install
npm run build:desktop
# → shells/tauri-desktop/src-tauri/target/release/bundle/macos/
```

Full prerequisites are in the [Build Guide](/info/build-guide.html).

---

## Tumbleweed

**openSUSE Tumbleweed, `.rpm`, from the Open Build Service.**

Adding the repository is the route to prefer over a one-off file: the package is
signed, `zypper` checks that signature on every install, and updates arrive with
the rest of your system.

```bash
sudo zypper addrepo --refresh \
  https://download.opensuse.org/repositories/home:/lolly/openSUSE_Tumbleweed/ lolly
sudo zypper refresh
sudo zypper install lolly-desktop
```

`zypper` asks you to trust the repository key the first time. Compare its
fingerprint against the one shown on the project page before you accept it.

The package is built on OBS from prebuilt source tarballs rather than from a
plain checkout, because an OBS build is offline and this app needs the network
during its frontend build. The reasons and the exact mechanism are in
`shells/tauri-desktop/rpm/README.md`.

---

## Leap

**openSUSE Leap 16, `.rpm`, from the same project.**

```bash
sudo zypper addrepo --refresh \
  https://download.opensuse.org/repositories/home:/lolly/openSUSE_Leap_16.0/ lolly
sudo zypper refresh
sudo zypper install lolly-desktop
```

**Leap 15.6 is not a target.** The dependency tree needs Rust 1.88 or newer and
15.6's default toolchain is older, so supporting it would mean pinning a second
Rust toolchain into the project and maintaining two build stories. Tumbleweed
ships 1.97.1 and Leap 16 is current; those two are the supported pair. On 15.6,
use the Flatpak below.

---

## Flatpak

**Any Linux distribution, `.flatpak`.**

The Flatpak is the right choice on Fedora, Debian, Ubuntu, Arch, Leap 15.6, an
immutable desktop, or anything else that is not one of the two RPM targets. It
brings its own runtime, so it does not care what your distribution ships.

From Flathub, once the submission is accepted:

```bash
flatpak install flathub tools.lolly.Desktop
flatpak run tools.lolly.Desktop
```

From a downloaded single-file bundle:

```bash
flatpak install --user ./Lolly.flatpak
```

The app id is `tools.lolly.Desktop` and the runtime is `org.gnome.Platform`
version 49. The bundle is produced by `.github/workflows/flatpak.yml` on every
`v*` tag; the manifest and the local build steps are in
`shells/tauri-desktop/flatpak/README.md`.

---

## Android

**Phone and tablet, `.apk`, installed directly.**

No store account, and no store. Download the APK, open it, and allow your
browser or file manager to install applications this once. Android will ask -
that prompt is the system working correctly, not a warning about this file.

- **File:** `lolly-<version>.apk`
- **Minimum:** Android 8.0
- **Architecture:** `arm64-v8a`

Check the file before installing it. Every release publishes a `SHA256SUMS`
file next to the artifacts:

```bash
sha256sum lolly-1.0.0.apk
```

Compare the result with the line for that filename. If they differ, do not
install it.

Build it yourself from `shells/tauri-mobile` with `npm run build:android`; the
Android SDK and NDK prerequisites are in the
[Build Guide](/info/build-guide.html).

---

## Everything else

| Surface | How you get it | Notes |
|---|---|---|
| **Web** | [Open it](/) | Nothing to install. Add it to your home screen or dock and it keeps working with the network unplugged. |
| **Windows** | `.msi` or an NSIS `.exe` | Built by `npm run build:desktop` on Windows. Not yet published as a signed release. |
| **iOS** | `.ipa` | Needs an Apple developer identity to sign with, so there is no download to hand out. See [Building for iOS](/info/ios-build.html). |
| **Linux, other** | `.deb`, `.AppImage` | Both fall out of the same desktop build. The Flatpak above is the supported Linux package. |
| **Terminal** | `npm run cli` | The same engine, headless. See [the CLI guide](/info/cli.html). |
| **Terminal, interactive** | `npm run tui` | A full-screen terminal interface. See [the TUI guide](/info/tui.html). |
| **Browser extension** | Load unpacked | See [Browser Extension](/info/extension.html). |
| **Your own server** | Self-host the web shell | A static bundle behind any web server, including an air-gapped one. See [Deployment](/info/deployment.html). |

---

## Checking what you downloaded

Every published artifact ships with a `SHA256SUMS` file. Download both, then:

```bash
sha256sum --check --ignore-missing SHA256SUMS
```

A line reading `OK` means the file on your disk is byte-for-byte the file the
build produced. A mismatch means it changed somewhere between there and here,
and the answer is always to download it again rather than to install it anyway.

The files Lolly itself makes carry their own seal, which is a separate and
stronger check - see [Verify It Yourself](/info/verify-yourself.html).

---

## Which one should I pick?

- **You are on a Mac.** The DMG.
- **You are on Tumbleweed or Leap 16.** The RPM repository, so updates arrive
  with the rest of your system.
- **You are on any other Linux.** The Flatpak.
- **You are on a phone.** The APK on Android; the web app on iOS.
- **You do not want to install anything.** [The web app](/). It is the same
  application, and you can add it to your dock or home screen.
- **You are rolling this out to other people.** Read
  [Deployment](/info/deployment.html) first - it covers the three delivery
  postures and which package suits each one.
