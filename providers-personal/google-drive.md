# Google Drive (kind: `gdrive`)

## What you register on Google's side

1. [Google Cloud console](https://console.cloud.google.com) → a project →
   Google Auth Platform (OAuth consent screen): External; Testing mode with
   test users is enough while the only scope is `drive.file` (non-sensitive -
   no app verification needed); add branding + move to production when the
   deploy is public.
2. **Enable the Google Drive API** (APIs & Services → Library) - uploads 403
   without it.
3. Clients → Create client → **Web application**:
   - Authorised JavaScript origins: every deploy origin
     (`http://localhost:5173`, `https://lolly.tools`, …). Add BOTH dev ports
     if a second Vite instance may run (`:5173` and `:5174` - a mismatch is
     `Error 400: redirect_uri_mismatch`).
   - Authorised redirect URIs: `<origin>/oauth-return.html` for each.
4. Copy the client id.

## What the deploy sets

`VITE_GOOGLE_CLIENT_ID=<client id>` - dev: `shells/web/.env.local`; prod: the
deploy env. No id → no Drive UI anywhere.

## The grant, and why it differs from Dropbox/OneDrive

Google web clients require a secret for authorization-code exchange, so this
driver uses the implicit token grant: the token lives in memory for the
session only and there is no refresh token - which is why the /profile row
says "signs in when you send" instead of offering stay-connected. Re-consent
after the first grant is a fast auto-closing popup.

## Verify

Export anything → Send to Google Drive → account picker → `drive.file`
consent (first time) → the file lands in Drive. An EMF converts into a native
Google Drawing (the Slides journey); every other format uploads with its real
MIME type via the Drive API - which is the one path that sets the stored type
correctly (Drive re-types plain web uploads from its extension table).
