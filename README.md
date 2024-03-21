ImageSearch2

Detta projekt är en webbapplikation som gör det möjligt för en användare att söka efer bilder och spara sina favoritbilder. Det kan vara användbart om man enkelt och smidit behöver en metod för att organisera och komma 
åt sina favoritbilder.

För att komma igång med projektet behöver du först skapa och konfigurera konton för följande externa tjänster:

Auth0
1. Gå till [Auth0-webbplatsen](https://auth0.com/) och skapa ett konto om du inte redan har ett.
2. Skapa en ny applikation och konfigurera den enligt dina behov.
3. Notera klient-ID och klienthemlighet som du får från Auth0.
4. Följ instruktionerna 

Google Custom Search Engine
1. Gå till [Google Custom Search Engine](https://programmablesearchengine.google.com/about/) och logga in med ditt Google-konto.
2. Skapa en ny anpassad sökmotor och få tillgång till din API-nyckel.
3. Konfigurera sökmotorn enligt dina önskemål och notera den unika sökmotor-ID som genereras.

När du har skapat och konfigurerat dina konton och API-nycklar, följ stegen nedan för att komma igång med projektet:
1. Klona projektet till din lokala maskin.
2. Installera alla nödvändiga beroenden genom att köra `npm install`.
3. Skapa en `.env`-fil i rotmappen för projektet och dina miljövariabler.
4. Starta servern genom att köra `nodemon server` om du har nodemon installerat.
5. Starta react applikationen genom att köra `npm run dev`. 
6. Öppna webbläsaren och gå till den angivna URL:en för att börja använda applikationen.

- Auth0: Används för autentisering och hantering av användaruppgifter. För att kunna använda projektet behöver användare skapa ett konto hos Auth0 och
 konfigurera klient-ID och klienthemlighet enligt anvisningarna i projektdokumentationen.
- Google Custom Search Engine: Används för att söka efter bilder. För att kunna använda sökfunktionen behöver användare skapa och konfigurera en egen 
anpassad sökmotor hos Google Custom Search Engine och tillhandahålla API-nyckeln och sökmotor-ID:t för konfigurationen av projektet.

Dessa externa tjänster är viktiga för projektets funktionalitet och utgör en integrerad del av dess uppbyggnaden och användarupplevelsen.
