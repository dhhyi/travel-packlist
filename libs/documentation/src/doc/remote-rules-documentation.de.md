# Remote-Regeln

## Was ist das überhaupt?

Mit den Remote-Regeln kannst du Regeln von einer Internet Quelle holen und sie in der App nutzen.
Das ist der einfachste Weg, um verschiedene Regelsets zu verwenden, ohne ständig lokal Regeln importieren und exportieren zu müssen.
Der Haken?
Du kannst die Regeln von der Internet Quelle in der App nicht mehr bearbeiten.

## Wie benutzt man die Remote-Regeln?

Auf der Einstellungsseite kannst du eine URL zu einer Remote-Regeln-Datei eingeben.
Der Server hinter der URL muss auf deine Anfrage mit einer einfachen Textdatei antworten, die die Regeln enthält.
Man nennt das manchmal auch "raw"-Link, der häufig schwer zu finden oder gar undokumentiert ist.

## Vorgeschlagene Quellen

<!-- cSpell:words Pastebin -->

### [Pastebin](https://pastebin.com)

Pastebin ist eine coole Seite, um Textdateien zu teilen.
Auch ohne Account kannst du einen Paste erstellen und bekommst einen Link dazu.
Erstellst du den Paste ohne Account, kannst du ihn später nicht mehr bearbeiten – also lege dir lieber einen Account zu, wenn du was ändern möchtest.

Sobald du den Paste erstellt hast, bekommst du einen Link, der so aussieht:

```text
https://pastebin.com/ebFBBQZh
```

Füg den Link direkt in die App ein, und sie findet den Raw-Content.

<!-- cSpell:words Gist Gists hosten -->

### [GitHub Gist](https://gist.github.com/)

Eine weitere simple Methode, deine Regeln zu hosten, ist GitHub Gist.
Du kannst zwar nur einen Gist erstellen, wenn du ein GitHub-Konto hast, aber später kannst du ihn ganz einfach bearbeiten.
Gists sind super, um Code-Schnipsel und Textdateien zu teilen – achte aber darauf, ihn öffentlich zu machen, sonst holt die App ihn nicht ab.
Der Link sieht so aus:

```text
https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20
```

Gib diesen Link in die App ein, und sie findet direkt den Raw-Content.

Oder klick einfach auf den "Raw"-Button bei Gist, um den raw Link zu bekommen.

Gists sind auch einer Versionskontrolle unterzogen, sodass du alte Versionen einsehen und bei Bedarf wiederherstellen kannst.

Ein GitHub Gist unterstützt sogar mehrere Dateien.
Wenn du diese Funktion mit Kurzlinks nutzen möchtest, kannst du den Ankerlink zur gewünschten Datei angeben.
Der Anker sieht so aus: `#file-my-file-name`.

```text
https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20#file-simple
```

Kurzlinks funktionieren aber nur, wenn der Anker exakt dem Original-Dateinamen entspricht (ohne "file-").
Du kannst auch direkt den Raw-Link angeben.

<!-- cSpell:words Overhead -->

### [GitHub](https://github.com)

Du kannst auch ein GitHub-Repository nutzen, um deine Regeln zu hosten.
Repos sind genial, um Code und Textdateien für ganze Projekte zu teilen, haben aber etwas mehr Overhead.
Wähl diese Methode, wenn du mehrere Regelsets aus derselben Quelle haben möchtest.
Danach kannst du sie auch einfach mit der GitHub-App oder einer richtigen Entwicklungsumgebung bearbeiten.
Stell sicher, dass das Repository öffentlich ist, sonst kann die App nicht darauf zugreifen.

Nachdem du das Repository mit einer Datei erstellt hast, bekommst du den Raw-Link zur Datei.
Der sieht so aus:

```text
https://github.com/dhhyi/travel-packlist-rules/blob/main/test-rules.txt
```

<!-- cSpell:words Drive -->

### [Google Drive](https://drive.google.com)

Google Drive ist wahrscheinlich der einfachste Weg, um deine Regeln zu hosten.
Kein Overhead und du kannst die Datei direkt in deinem Drive bearbeiten.

Um Google Drive zu nutzen, musst du einfach eine Datei in deinem Drive erstellen und sie öffentlich freigeben.
Füg den Link zur Datei in die App ein, und sie findet automatisch den Raw-Content.

Der Link sieht so aus:

```text
https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/view
```

## Andere Quellen

Wenn du Remote-Regeln von einer anderen Quelle nutzen willst, ist das total okay,
solange der Server hinter der URL bei einer Anfrage eine einfache Textdatei mit den Regeln schickt.
Achte darauf, dass du Links zum "raw" Content hast.

Für Links in der Web-App muss der Server auch CORS-Anfragen erlauben.

Falls du möchtest, dass deine Lieblingsquelle in die Liste aufgenommen wird, dann eröffne ein Issue auf GitHub,
und erkläre kurz, wie die Transformation funktioniert – oder bring gerne selbst den Transformator ein.
