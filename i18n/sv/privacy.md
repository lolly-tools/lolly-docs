# Integritetspolicy

*Senast uppdaterad: juni 2026*

## Lolly-appen

Lolly körs helt i din webbläsare. **Vi samlar inte in något, skickar inte något, och har inga servrar som ser din data.** Det finns ingen analys, ingen spårning och ingen tredje part av något slag.

**Inga kakor — någonstans.** Lolly sätter aldrig en kaka. För att appen ska fungera sparar den en liten mängd data **på din egen enhet**, allt strikt nödvändigt för en funktion du använder:

- **Ditt ljusa/mörka tema** och några gränssnittsinställningar (sidopanelens bredd, zoom).
- **En offlinecache av verktygskatalogen**, så att galleriet fortfarande laddas utan anslutning.
- **Enbart lokala användarräknare** för de små statistikuppgifterna på ditt profilkort — dessa skickas aldrig någonstans.
- **Dina egna dokument och sparade sessioner**, lagrade lokalt i webbläsaren (IndexedDB) så att ditt arbete finns kvar mellan besöken.

Inget av detta delas, laddas upp eller används för att identifiera eller spåra dig, så det finns inget att samtycka till — bara den här informationen, så att du vet vad som sparas. Du kan radera allt när som helst med **Profil → Rensa all min data**, eller genom att rensa webbplatsens lagring i din webbläsare.

Den här dokumentationswebbplatsen (`/info`) är ännu lättare: den sätter **inga kakor**, sparar bara din ljusa/mörka inställning på din enhet, och levererar allt — typsnitt inkluderat — från lolly.tools själv, utan CDN eller förfrågningar från tredje part.

## Verktyg som körs på enheten

Vissa verktyg är **hjälpverktyg** som arbetar med en fil *du* tillhandahåller — till exempel **Strip Hidden Data**, som visar den dolda datan i en bild eller PDF (GPS-plats, kamera, författare, redigerare och dokumentmetadata) och lämnar tillbaka en ren kopia, eller **Compress PDF**, som förminskar en PDF genom att koda om dess bilder direkt på din enhet.

Dessa körs **helt i din webbläsare**. Filen du väljer läses in i minnet på din enhet, omvandlas lokalt och erbjuds tillbaka som en nedladdning. **Den laddas aldrig upp** — det finns ingen server att ladda upp den till. Den rensade kopian har varken vattenstämpel eller någon av våra egna identifierande metadata; hela poängen är att *ta bort* data, inte lägga till den. Ingenting sparas efter att du lämnar sidan, och dessa verktyg fungerar offline. Du kommer att se en **"Runs on your device — nothing is uploaded"**-märkning på var och en av dem.

Det här är motsatsen till den typiska "compress this PDF" / "convert this HEIC"-webbplatsen, som laddar upp din fil till en okänd persons server för att göra arbete som din webbläsare kan göra lokalt.

## Webbläsartillägget

Webbläsartillägget **Lolly URL Screenshot** samlar inte in, lagrar eller överför någon personlig data. Ingen analys, ingen spårning, ingen fjärrserver.

## Vad det gör

När du ber Lolly-webbappen ([lolly.tools](https://lolly.tools)) att ta en skärmbild av en URL, öppnar tillägget den sidan i en tillfällig bakgrundsflik, fångar den i din webbläsare med hjälp av DevTools Protocol, lämnar tillbaka bilden till appen och stänger fliken. Allt sker lokalt, på din egen enhet och nätverk.

## Data

- **Vi samlar inte in något.** Tillägget har inga servrar och gör inga egna nätverksförfrågningar.
- **Fångade bilder** går direkt till Lolly-appen i samma webbläsare — laddas aldrig upp av tillägget.
- **URL:erna du fångar** används endast för att ladda just den sidan för just den skärmbilden. De loggas eller delas inte.

## Behörigheter

- **`debugger`** — för att fånga den renderade sidan via DevTools Protocol (samma mekanism som Lolly-skrivbordsappen använder).
- **Flikåtkomst** — för att öppna och stänga den tillfälliga flik som sidan laddas i.
- **Värdåtkomst** — eftersom sidan du väljer att fånga kan finnas på vilken webbplats som helst.

Inget av detta används för att läsa, övervaka eller överföra din surfning.

## Kontakt

Frågor? Se [lolly.tools](https://lolly.tools).
