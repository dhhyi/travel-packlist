import{$ as t,ca as i,uc as n}from"./chunk-f397f3d0.js";var o=`<h1 id="remoteregeln">Remote-Regeln</h1>
<h2 id="wasistdasberhaupt">Was ist das \xFCberhaupt?</h2>
<p>Mit den Remote-Regeln kannst du Regeln von einer Internet Quelle holen und sie in der App nutzen.
Das ist der einfachste Weg, um verschiedene Regelsets zu verwenden, ohne st\xE4ndig lokal Regeln importieren und exportieren zu m\xFCssen.
Der Haken?
Du kannst die Regeln von der Internet Quelle in der App nicht mehr bearbeiten.</p>
<h2 id="wiebenutztmandieremoteregeln">Wie benutzt man die Remote-Regeln?</h2>
<p>Auf der Einstellungsseite kannst du eine URL zu einer Remote-Regeln-Datei eingeben.
Der Server hinter der URL muss auf deine Anfrage mit einer einfachen Textdatei antworten, die die Regeln enth\xE4lt.
Man nennt das manchmal auch "raw"-Link, der h\xE4ufig schwer zu finden oder gar undokumentiert ist.</p>
<h2 id="vorgeschlagenequellen">Vorgeschlagene Quellen</h2>
<!-- cSpell:words Pastebin -->
<h3 id="pastebinhttpspastebincom"><a href="https://pastebin.com">Pastebin</a></h3>
<p>Pastebin ist eine coole Seite, um Textdateien zu teilen.
Auch ohne Account kannst du einen Paste erstellen und bekommst einen Link dazu.
Erstellst du den Paste ohne Account, kannst du ihn sp\xE4ter nicht mehr bearbeiten \u2013 also lege dir lieber einen Account zu, wenn du was \xE4ndern m\xF6chtest.</p>
<p>Sobald du den Paste erstellt hast, bekommst du einen Link, der so aussieht:</p>
<pre><code class="text language-text">https://pastebin.com/ebFBBQZh
</code></pre>
<p>F\xFCg den Link direkt in die App ein, und sie findet den Raw-Content.</p>
<!-- cSpell:words Gist Gists hosten -->
<h3 id="githubgisthttpsgistgithubcom"><a href="https://gist.github.com/">GitHub Gist</a></h3>
<p>Eine weitere simple Methode, deine Regeln zu hosten, ist GitHub Gist.
Du kannst zwar nur einen Gist erstellen, wenn du ein GitHub-Konto hast, aber sp\xE4ter kannst du ihn ganz einfach bearbeiten.
Gists sind super, um Code-Schnipsel und Textdateien zu teilen \u2013 achte aber darauf, ihn \xF6ffentlich zu machen, sonst holt die App ihn nicht ab.
Der Link sieht so aus:</p>
<pre><code class="text language-text">https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20
</code></pre>
<p>Gib diesen Link in die App ein, und sie findet direkt den Raw-Content.</p>
<p>Oder klick einfach auf den "Raw"-Button bei Gist, um den raw Link zu bekommen.</p>
<p>Gists sind auch einer Versionskontrolle unterzogen, sodass du alte Versionen einsehen und bei Bedarf wiederherstellen kannst.</p>
<p>Ein GitHub Gist unterst\xFCtzt sogar mehrere Dateien.
Wenn du diese Funktion mit Kurzlinks nutzen m\xF6chtest, kannst du den Ankerlink zur gew\xFCnschten Datei angeben.
Der Anker sieht so aus: <code>#file-my-file-name</code>.</p>
<pre><code class="text language-text">https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20#file-simple
</code></pre>
<p>Kurzlinks funktionieren aber nur, wenn der Anker exakt dem Original-Dateinamen entspricht (ohne "file-").
Du kannst auch direkt den Raw-Link angeben.</p>
<!-- cSpell:words Overhead -->
<h3 id="githubhttpsgithubcom"><a href="https://github.com">GitHub</a></h3>
<p>Du kannst auch ein GitHub-Repository nutzen, um deine Regeln zu hosten.
Repos sind genial, um Code und Textdateien f\xFCr ganze Projekte zu teilen, haben aber etwas mehr Overhead.
W\xE4hl diese Methode, wenn du mehrere Regelsets aus derselben Quelle haben m\xF6chtest.
Danach kannst du sie auch einfach mit der GitHub-App oder einer richtigen Entwicklungsumgebung bearbeiten.
Stell sicher, dass das Repository \xF6ffentlich ist, sonst kann die App nicht darauf zugreifen.</p>
<p>Nachdem du das Repository mit einer Datei erstellt hast, bekommst du den Raw-Link zur Datei.
Der sieht so aus:</p>
<pre><code class="text language-text">https://github.com/dhhyi/travel-packlist-rules/blob/main/test-rules.txt
</code></pre>
<!-- cSpell:words Drive -->
<h3 id="googledrivehttpsdrivegooglecom"><a href="https://drive.google.com">Google Drive</a></h3>
<p>Google Drive ist wahrscheinlich der einfachste Weg, um deine Regeln zu hosten.
Kein Overhead und du kannst die Datei direkt in deinem Drive bearbeiten.</p>
<p>Um Google Drive zu nutzen, musst du einfach eine Datei in deinem Drive erstellen und sie \xF6ffentlich freigeben.
F\xFCg den Link zur Datei in die App ein, und sie findet automatisch den Raw-Content.</p>
<p>Der Link sieht so aus:</p>
<pre><code class="text language-text">https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/view
</code></pre>
<h2 id="anderequellen">Andere Quellen</h2>
<p>Wenn du Remote-Regeln von einer anderen Quelle nutzen willst, ist das total okay,
solange der Server hinter der URL bei einer Anfrage eine einfache Textdatei mit den Regeln schickt.
Achte darauf, dass du Links zum "raw" Content hast.</p>
<p>F\xFCr Links in der Web-App muss der Server auch CORS-Anfragen erlauben.</p>
<p>Falls du m\xF6chtest, dass deine Lieblingsquelle in die Liste aufgenommen wird, dann er\xF6ffne ein Issue auf GitHub,
und erkl\xE4re kurz, wie die Transformation funktioniert \u2013 oder bring gerne selbst den Transformator ein.</p>`;var s=`<h1 id="remoterules">Remote Rules</h1>
<h2 id="aboutthisfeature">About this Feature</h2>
<p>With remote rules, you can define rules in a remote source and use them in this application.
It is the easiest way to use multiple sets of rules, instead of importing and exporting local rules all the time.
The downside of using remote rules is that you cannot edit the rules from the remote source in this application anymore.</p>
<h2 id="howtouseremoterules">How to use Remote Rules?</h2>
<p>On the settings page, you can enter an URL to a remote rules file.
The server behind the URL must answer to the request with a plain text file containing the rules.
This is sometimes also called a "raw" link, that is often undocumented or hard to find.</p>
<h2 id="suggestedsources">Suggested Sources</h2>
<!-- cSpell:words Pastebin -->
<h3 id="pastebinhttpspastebincom"><a href="https://pastebin.com">Pastebin</a></h3>
<p>Pastebin is a popular site for sharing text files.
Even without an account, you can create a paste and get a URL to it.
If you create a paste without an account, it will not be editable anymore, so make sure to create an account if you want to edit the paste later.</p>
<p>Once you are done creating the paste, you will get a link similar to this one:</p>
<pre><code class="text language-text">https://pastebin.com/ebFBBQZh
</code></pre>
<p>You can add this link directly in the App and it will find the way to the raw content.</p>
<h3 id="githubgisthttpsgistgithubcom"><a href="https://gist.github.com/">GitHub Gist</a></h3>
<p>Another simple way to host your rules is to use GitHub Gist.
You can only create a gist if you have a GitHub account, but you can also easily edit it later.
Gists are a great way to share code snippets and text files, and they are easy to use, but don'</p>
<p>You can create a gist with a single file and get a URL to it.
Be sure to make this gist public, otherwise the App will not be able to retrieve it.
The URL will look like this:</p>
<pre><code class="text language-text">https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20
</code></pre>
<p>Enter this URL in the App and it will automatically find the raw content.</p>
<p>Alternatively, to get the raw URL, click on the "Raw" button on the gist page.</p>
<p>Gists are also version controlled, so you can easily see previous revisions and revert to them if you want to.</p>
<p>A GitHub Gist also supports multiple files.
To use this feature with short links, you can supply the anchor-link to the file you want to use.
The anchor will look like this: <code>#file-my-file-name</code>.</p>
<pre><code class="text language-text">https://gist.github.com/dhhyi/e02a99c3abae52f9ee55e31f75bdbd20#file-simple
</code></pre>
<p>Supplying the short link only works if the anchor is the same as the original filename (without 'file-').
You can alternatively supply the raw link yourself.</p>
<h3 id="githubhttpsgithubcom"><a href="https://github.com">GitHub</a></h3>
<p>You can use a GitHub repository to host your rules.
Repositories are a great way to share code and text files for whole projects, but they come with some more overhead.
Choose this method to host your rules if you want to have multiple sets in the same source.
You can then also edit them easily with GitHub's native phone application or with a proper development checkout on your PC.
Be sure to make the repository public, otherwise the App will not be able to retrieve files from it.</p>
<p>After creating the repository with a file in it, you can get the raw URL to the file.
It will look like this:</p>
<pre><code class="text language-text">https://github.com/dhhyi/travel-packlist-rules/blob/main/test-rules.txt
</code></pre>
<h3 id="googledrivehttpsdrivegooglecom"><a href="https://drive.google.com">Google Drive</a></h3>
<p>Google Drive is probably the easiest way to host your rules.
You will not have any overhead and you can easily edit the file in your drive.</p>
<p>To use Google Drive, you need to create a file in your drive and share it publicly.
Insert the link to the file in the App and it will automatically find the raw content.</p>
<p>The link will look like this:</p>
<pre><code class="text language-text">https://drive.google.com/file/d/1h4RWKrcL-glkQtc03AdLjPb3VNaUCs6T/view
</code></pre>
<h2 id="othersources">Other Sources</h2>
<p>If you want to supply remote rules from a different source, you can do so as long as the server behind the
URL answers to the request with a plain text file containing the rules.
Watch out for links to the "raw" content.</p>
<p>For links in the web application, the server also has to allow CORS requests.</p>
<p>If you want to have your favorite source added to this list, please open an issue on GitHub and describe how the transformation works, or feel free to contribute the transformer yourself.</p>`;var a=`<h1 id="wiemanregelndefiniert">Wie man Regeln definiert</h1>
<h2 id="regeln">Regeln</h2>
<p>werden mit der folgenden Syntax definiert:</p>
<pre><code class="text language-text">[Bedingung] :- Effekt, Effekt, ... ;
</code></pre>
<p>Regeln m\xFCssen durch ein Semikolon getrennt werden.</p>
<pre><code class="text language-text">kaltes_wetter :- [Kleidung] Mantel,
  Erwartest du Schnee? $snow ;
</code></pre>
<blockquote>
  <p>Diese Regel kann so etwas bedeuten wie "Wenn das Wetter kalt ist, solltest du einen Mantel mitbringen.
  Au\xDFerdem solltest du die Frage beantworten, ob du Schnee erwartest."</p>
</blockquote>
<h3 id="effekte">Effekte</h3>
<p>k\xF6nnen entweder <strong>Gegenst\xE4nde</strong> oder <strong>Fragen</strong> sein, wie oben gezeigt.
Trenne mehrere Effekte mit Kommas.</p>
<h3 id="fragen">Fragen</h3>
<p>werden mit der folgenden Syntax definiert:</p>
<pre><code class="text language-text">Frage? $variable
</code></pre>
<p>Eine Frage wird oben in der UI angezeigt.
Du kannst die Antwort durch Klicken darauf umschalten.</p>
<h3 id="gegenstnde">Gegenst\xE4nde</h3>
<p>werden mit der folgenden Syntax definiert:</p>
<pre><code class="text language-text">[Kategorie] Name
</code></pre>
<p>Ein Gegenstand wird in der Liste unter seiner Kategorie angezeigt.</p>
<h3 id="bedingungen">Bedingungen</h3>
<p>k\xF6nnen leer sein, in diesem Fall sind sie immer wahr.
Du kannst Variablen verwenden, um Logik mit <code>AND</code>, <code>OR</code> und <code>NOT</code> zu definieren.</p>
<blockquote>
  <p>Die h\xF6chste Priorit\xE4t hat <code>NOT</code>, dann <code>AND</code> und schlie\xDFlich <code>OR</code>.
  Das bedeutet, dass alle Gruppen von <code>NOT variable</code> zuerst ausgewertet werden, dann <code>links AND rechts</code> und schlie\xDFlich <code>links OR rechts</code>, bis die gesamte Bedingung ausgewertet ist.</p>
</blockquote>
<p>Variablen werden in Fragen definiert.
Bedingungen l\xF6sen die Effekte der Regel aus, wenn sie wahr sind.
Wenn die Bedingung also nicht erf\xFCllt ist, siehst du weder zus\xE4tzliche Fragen noch Gegenst\xE4nde dieser speziellen Regel.</p>
<p>Einige Beispiele f\xFCr Bedingungen:</p>
<!-- cspell:words cold_weather -->
<pre><code class="text language-text">cold_weather AND NOT snow
</code></pre>
<blockquote>
  <p>Kann so etwas bedeuten wie "Das Wetter ist kalt und es schneit nicht".</p>
</blockquote>
<!-- cspell:words washer, laundromat -->
<pre><code class="text language-text">washer OR laundromat
</code></pre>
<blockquote>
  <p>Kann so etwas bedeuten wie "Du hast eine Waschmaschine in deinem AirBnB oder du hast einen Waschsalon in der N\xE4he".</p>
</blockquote>
<h2 id="fazit">Fazit</h2>
<p>Mit all dem kannst du eine bedingte Checkliste sehr flexibel definieren.</p>
<p>Ein Ratschlag:
L\xF6se nicht zu viele Effekte in einer Regel aus.
Es kann verwirrend werden.</p>`;var r=`<h1 id="howtodefinerules">How to define rules</h1>
<h2 id="rules">Rules</h2>
<p>are defined with the following syntax:</p>
<pre><code class="text language-text">[Condition] :- Effect, Effect, ... ;
</code></pre>
<p>Rules have to be separated by a semicolon character.</p>
<pre><code class="text language-text">cold_weather :- [Clothing] Coat,
  Do you expect snow? $snow ;
</code></pre>
<blockquote>
  <p>This rule can mean something like "If the weather is cold, you should bring a coat.
  Also, you should answer the question if you expect snow."</p>
</blockquote>
<h3 id="effects">Effects</h3>
<p>can be either <strong>items</strong> or <strong>questions</strong> as seen above.
Separate multiple effects with commas.</p>
<h3 id="questions">Questions</h3>
<p>are defined with the following syntax:</p>
<pre><code class="text language-text">Question? $variable
</code></pre>
<p>A question will be displayed on top of the pack list UI.
You can toggle the answer by clicking on it.</p>
<h3 id="items">Items</h3>
<p>are defined with the following syntax:</p>
<pre><code class="text language-text">[Category] Name
</code></pre>
<p>An item will be displayed in the list under its category.</p>
<h3 id="conditions">Conditions</h3>
<p>can be empty, in which case they are always true.
You can use variables for defining logic with <code>AND</code>, <code>OR</code>, and <code>NOT</code>.</p>
<blockquote>
  <p>The highest precedence is <code>NOT</code>, then <code>AND</code>, and finally <code>OR</code>.
  This means all groups of <code>NOT variable</code> are evaluated first, then <code>left AND right</code> and finally <code>left OR right</code> until the whole condition is evaluated.</p>
</blockquote>
<p>Variables are defined in questions.
Conditions trigger the effects of the rule if they are true.
So if the condition is not met, then you will neither see any additional questions nor items of that specific rule.</p>
<p>Some examples for conditions:</p>
<pre><code class="text language-text">cold_weather AND NOT snow
</code></pre>
<blockquote>
  <p>Can mean something like "The weather is cold and it is not snowing".</p>
</blockquote>
<pre><code class="text language-text">washer OR laundromat
</code></pre>
<blockquote>
  <p>Can mean something like "You have a washer in your AirBnB or you have a laundromat nearby".</p>
</blockquote>
<h2 id="conclusion">Conclusion</h2>
<p>With all of this you can define a conditional checklist very flexible.</p>
<p>One advice:
Don't trigger too many effects in one rule.
It can get confusing.</p>`;var l=new t("REMOTE_RULES_DOCUMENTATION");function u(e){return e.startsWith("de")?o:s}var d=new t("RULES_DOCUMENTATION");function h(e){return e.startsWith("de")?a:r}function R(){return i([{provide:l,useFactory:u,deps:[n]},{provide:d,useFactory:h,deps:[n]}])}var v={"remote-rules":l,rules:d};export{R as a,v as b};
/**i18n:28a3168b76bee7dffc4b1e816012f24aa421b4da90b9b896cc67ce89fdf6fb94*/
