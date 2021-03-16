Feladatok
1. A megjelenő táblázatban készítsd el a törlés funkcionalitást! DELETE

A törléshez a UserService osztályban is hozd létre a szükséges metódust. DONE
A törlés gombra kattintva a példa adatbázisból törlődjön az adott rekord. DONE
Az oldal frissüljön és látszódjék, hogy hiányzik az adat. DONE
Törlés előtt jelenjen meg egy megerősítő kérdés.

2. Tedd szűrhetővé a táblázatban megjelenő adatokat! FILTER
A táblázat felett hozz létre egy beviteli mezőt. DONE
A beviteli mező értékének módosítása esetén a táblázat azon rekordjai maradjanak láthatóak, amelyek `name` mezője részben vagy egészben tartalmazza a beviteli mezőbe gépelt szöveget. DONE

3. Tedd rendezhetővé a táblázatban megjelenő adatokat! SORTER
Ha a felhasználó a táblázat fejléceire kattint, akkor a megjelenő rekordok rendeződjenek az adott oszlop szerint növekvő sorrendbe. DONE
Ha egy másik oszlop fejlécére kattint, akkor pedig a szerint az oszlop szerint, amelyre utoljára kattintottak. Csak növekvő sorrendbe kell rendezni. DONE
Kurzor pointer legyen. DONE

4. Tedd módosíthatóvá a táblázatban megjelenő rekordokat! UPDATE
A táblázat sorainak utolsó cellájában lévő szerkesztés gombra kattintva jelenleg megjelenik a szerkesztő oldal. DONE
Az oldalon már létre vannak hozva a beviteli mezők. DONE
Ha a mentés gombra kattint a felhasználó, akkor az adatbázisban kerüljenek frissítésre az adott rekord adatai. DONE
A módosításhoz a UserService osztályban is hozd létre a szükséges metódust. DONE

5. Validáld az adatokat a szerkesztő űrlapon! VALIDÁCIÓ
Minden input elem előtt kommentben feltüntettük a validálás szabályait. Attribútumok és reguláris kifejezések használatával validáld a mezőkbe írt adatokat. DONE
Ha nem megfelelő az adat, akkor jelenjen meg releváns hibaüzenet közvetlenül a hibás adatot tartalmazó mező alatt. DONE
A hibaüzenet legyen piros.

Ha az űrlap bármely mezője hibás adatot tartalmaz, a mentés gomb legyen letiltva és ne legyen az űrlap elküldhető. DONE
Sikeres módosítás után navigáljon vissza az alkalmazás a táblázathoz. DONE

6. Tedd lehetővé új rekord rögzítését. CREATE
Hozz létre egy teljes szélességű gombot a lista oldalon a táblázat felett, amelyre kattintva szintén a szerkesztő űrlap jelenik meg, de üres állapotban. DONE
Az adatbevitel során ugyanazok a validációs szabályok legyenek érvényesek, mint a szerkesztés esetén. DONE
Megfelelő kitöltés után a mentés gombra kattintva történjen meg az új rekord beszúrása az adatbázisba és navigáljon vissza az oldal a táblázathoz. DONE
A beszúráshoz a UserService osztályban is hozd létre a szükséges metódusokat. DONE