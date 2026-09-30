# ICHE Architects — strona

Prosta, statyczna strona bez frameworków i zewnętrznych bibliotek.

## Struktura
- `index.html` — treść i struktura strony
- `styles.css` — wygląd i responsywność
- `script.js` — tylko galeria/lightbox i rok w stopce
- `assets/` — logo i zoptymalizowane obrazy WebP

## Dlaczego to rozwiązanie jest trwałe
- brak CMS i wtyczek do aktualizowania,
- brak zewnętrznych skryptów i fontów,
- brak formularza po stronie serwera,
- brak bazy danych,
- restrykcyjna polityka CSP w HTML,
- obrazy są lokalne i zoptymalizowane,
- kod działa jako zwykły statyczny hosting.

## Przed publikacją
1. Uzupełnij dane kontaktowe.
2. Zastąp nazwy `Projekt 01–04` właściwymi nazwami.
3. Dodaj właściwe informacje prawne firmy.
4. Włącz HTTPS na hostingu.
5. Jeśli dodasz formularz, użyj sprawdzonej usługi/formularza z ochroną antyspamową zamiast własnego backendu.

Strona nie zawiera analityki ani cookies marketingowych.

## Czcionka
CSS preferuje `Century Gothic`, jeśli czcionka jest dostępna na urządzeniu użytkownika.
Century Gothic jest fontem dystrybuowanym z produktami Microsoft/Office. Microsoft wskazuje,
że można wskazać ją w CSS jako font systemowy, ale nie wolno samodzielnie kopiować plików
fontu z Windows na serwer ani konwertować ich do WOFF/WOFF2 bez odpowiednich praw.
Jeżeli zależy Ci na identycznym wyglądzie na każdym urządzeniu, należy nabyć odpowiednią
licencję na webfont i dopiero wtedy umieścić licencjonowane pliki WOFF2 na stronie.

