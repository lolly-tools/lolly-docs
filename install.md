# Install Lolly

Lolly runs in a browser with nothing to install, and it also ships as a real app
for the machine in front of you. This page is the one list of every packaged
build: what each one is, how to install it, and how to check you got the file we
made.

The app is the same either way. Same tools, same brand packs, same files out -
the packaged builds add native file dialogs, a home in your application menu and
a copy that keeps working with the network unplugged.

> **Direct downloads are live.** Every packaged build below links straight to the
> file on `lolli.li`. Each platform has a stable `lolly-latest.*` link that always
> points at the newest build, alongside versioned files that never change. Signed
> system repositories (openSUSE OBS, Flathub) are planned and will land here when
> they do; until then these direct files - and the build-it-yourself route in each
> section - are the way in. Prefer no install at all? Use [the web app](/); it
> needs no install and is the same application.

---

## macOS

**Apple silicon (M1 and later), `.dmg`.**

Download the disk image, open it, and drag Lolly to Applications. Nothing else
is needed - the app carries its own engine and tool catalogue.

- **Download:** [`lolly-latest.dmg`](https://lolli.li/lolly-latest.dmg) - always the newest build.
- **Versioned:** `https://lolli.li/Lolly_<version>_aarch64.dmg` (for example `Lolly_1.0.0_aarch64.dmg`) - pinned, never overwritten.
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

**openSUSE Tumbleweed, `.rpm`, x86_64.**

```bash
sudo zypper install https://lolli.li/lolly-latest.rpm
```

Or download [`lolly-latest.rpm`](https://lolli.li/lolly-latest.rpm) and install the
file directly. The versioned build sits beside it, for example
`https://lolli.li/lolly-desktop-1.0.0-0.x86_64.rpm`.

A signed OBS repository - so updates arrive with the rest of your system - is
planned; until it is live a direct `.rpm` does not auto-update, so check back here
for a newer build. The package build itself is described in
`shells/tauri-desktop/rpm/README.md`.

---

## Leap

**openSUSE Leap 16, `.rpm`, x86_64.**

```bash
sudo zypper install https://lolli.li/lolly-latest.rpm
```

The same x86_64 `.rpm` serves Tumbleweed and Leap 16 for now; a distro-specific
split will come with the signed repository.

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

Download the single-file bundle and install it:

```bash
curl -LO https://lolli.li/lolly-latest.flatpak
flatpak install --user ./lolly-latest.flatpak
flatpak run tools.lolly.Desktop
```

The app id is `tools.lolly.Desktop` and the runtime is `org.gnome.Platform`
version 49. A Flathub listing - which would carry updates automatically - is
planned; the manifest and the local build steps are in
`shells/tauri-desktop/flatpak/README.md`.

---

## Arch

**Arch and its derivatives, from the Lolly pacman repository.**

Add the repository to `/etc/pacman.conf`:

```ini
[lolly]
SigLevel = Optional TrustAll
Server = https://lolli.li/arch/$arch
```

then install - and from here on, update - with pacman itself:

```bash
sudo pacman -Syu lolly-desktop-bin
```

The `SigLevel` line is needed because the repository is not yet
GPG-signed; it scopes the exception to this one repository only.
An AUR package under the same name is planned once AUR account
registration reopens; the recipe is maintained in
`shells/tauri-desktop/linux/arch/`, and you can build it by hand today:

```bash
git clone https://github.com/lolly-tools/lolly-desktop.git
cd lolly-desktop/linux/arch && makepkg -si
```

The package repacks the official 1.0.1 desktop build and installs the whole
desktop integration - the `.lolly` MIME type, the thumbnailer, the GNOME Shell
search provider, the D-Bus services, and the KDE service menu.

On Hyprland and other wlroots compositors the colour picker and the wallpaper
feature go through the desktop portal, so an `xdg-desktop-portal` backend must
be running (Hyprland ships its own); the desktop search integration is a
GNOME/KDE feature.

---

## Android

**Phone and tablet, `.apk`, installed directly.**

No store account, and no store. Download the APK, open it, and allow your
browser or file manager to install applications this once. Android will ask -
that prompt is the system working correctly, not a warning about this file.

- **Download:** [`lolly-latest.apk`](https://lolli.li/lolly-latest.apk) - always the newest build.
- **Versioned:** `https://lolli.li/Lolly-<version>.apk` (for example `Lolly-1.0.0.apk`).
- **Minimum:** Android 8.0
- **Architecture:** `arm64-v8a`

Check the file before installing it. Every release publishes a checksums file at
`https://lolli.li/SHA256SUMS.txt`:

```bash
sha256sum lolly-latest.apk
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
| **Tool-author SDK** | `npm i -D @lolly-tools/core` | Published on npm. The `HostV1` contract types, the manifest validator and a mock host for testing a tool without the app or a clone of the repository. See [Authoring Tools](/info/authoring-tools.html#try-it-without-the-monorepo). |
| **Browser extension** | Load unpacked | See [Browser Extension](/info/extension.html). |
| **Your own server** | Self-host the web shell | A static bundle behind any web server, including an air-gapped one. See [Deployment](/info/deployment.html). |

---

## Checking what you downloaded

Every release publishes a checksums file at
[`https://lolli.li/SHA256SUMS.txt`](https://lolli.li/SHA256SUMS.txt). Put it next
to your file, then:

```bash
curl -LO https://lolli.li/SHA256SUMS.txt
sha256sum --check --ignore-missing SHA256SUMS.txt
```

A line reading `OK` means the file on your disk is byte-for-byte the file the
build produced. A `lolly-latest.*` file is a copy of the current versioned build,
so it carries that build's hash - compare the value, not the name, if you kept the
`latest` name. A mismatch means it changed somewhere between there and here, and
the answer is always to download it again rather than to install it anyway.

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
