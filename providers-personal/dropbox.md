# Dropbox (kind: `dropbox`)

## What you register on Dropbox's side

1. [Dropbox App Console](https://www.dropbox.com/developers/apps) → Create app.
2. API: **Scoped access**. Access type: **App folder** - the token can only
   ever see `Apps/<your app name>/`, which is the honesty the in-app hint
   promises.
3. Permissions tab → enable `files.content.write`, `files.content.read`
   (the short-lived "Open" link; no public share is ever created) and
   `account_info.read` (the /profile account label). Submit.
4. Settings tab → **Redirect URIs**: add `<origin>/oauth-return.html` for
   every deploy origin (e.g. `http://localhost:5173/oauth-return.html`,
   `https://lolly.tools/oauth-return.html`).
5. Copy the **App key** - that is the client id (there is no secret in play:
   the flow is authorization-code + PKCE for a public client, with
   `token_access_type=offline` for the stay-connected refresh token).

## What the deploy sets

`VITE_DROPBOX_CLIENT_ID=<app key>` - dev: `shells/web/.env.local`; prod: the
deploy env. No id → the Dropbox rows and buttons do not exist.

## Verify

/profile → Connected services → Dropbox → Connect (tick "Stay connected on
this device" to test custody) → the account email appears. Export any format →
Send to Dropbox → the file lands in `Apps/<app>/` and the status link opens it.
Reload and send again: no popup - the refresh grant (production status of the
Dropbox app can stay "development" for personal use; apply for production
when the user count grows).
