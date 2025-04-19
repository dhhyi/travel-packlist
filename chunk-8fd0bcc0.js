import{$ as e,da as n,qc as t}from"./chunk-b54f2700.js";var i=`<h1 id="remoterules">Remote Rules</h1>
<h2 id="aboutthisfeature">About this Feature</h2>
<p>With remote rules, you can define rules in a remote source and use them in this application.
It is the easiest way to use multiple sets of rules, instead of importing and exporting local rules all the time.
The downside of using remote rules is that you cannot edit the rules from the remote source in this application anymore.</p>
<h2 id="howtouseremoterules">How to use Remote Rules?</h2>
<p>On the settings page, you can enter an URL to a remote rules file.
The server behind the URL must answer to the request with a plain text file containing the rules.</p>
<h2 id="suggestedsources">Suggested Sources</h2>
<!-- cSpell:words Pastebin -->
<h3 id="pastebinhttpspastebincom"><a href="https://pastebin.com">Pastebin</a></h3>
<p>Pastebin is a popular site for sharing text files.
Even without an account, you can create a paste and get a URL to it.
If you create a paste without an account, it will not be editable anymore, so make sure to create an account if you want to edit the paste later.</p>
<p>Once you are done creating the paste, you will get a link similar to this one:</p>
<pre><code class="text language-text">https://pastebin.com/LwSHKuGY
</code></pre>
<p>To make it usable in this application, you need to change the URL to point to the raw paste.
You can do this by replacing <code>pastebin.com</code> with <code>pastebin.com/raw/</code> in the URL.
The final URL will look like this:</p>
<pre><code class="text language-text">https://pastebin.com/raw/LwSHKuGY
</code></pre>
<p>There is also a link to the raw paste on the page.</p>
<h3 id="githubgisthttpsgistgithubcom"><a href="https://gist.github.com/">GitHub Gist</a></h3>
<p>Another simple way to host your rules is to use GitHub Gist.
You can only create a gist if you have a GitHub account, but you can also easily edit it later.
Gists are a great way to share code snippets and text files, and they are easy to use, but don'</p>
<p>You can create a gist with a single file and get a URL to it.
Be sure to make this gist public, otherwise the App will not be able to retrieve it.
The URL will look like this:</p>
<pre><code class="text language-text">https://gist.github.com/username/1234567890abcdef1234567890abcdef
</code></pre>
<p>To get the raw URL, click on the "Raw" button on the gist page.
You can also manually change the URL to point to the raw gist by replacing <code>gist.github.com</code> with <code>gist.githubusercontent.com</code> and adding <code>/raw/</code> after the username.
The final URL will look like this:</p>
<pre><code class="text language-text">https://gist.githubusercontent.com/username/1234567890abcdef1234567890abcdef/raw
</code></pre>
<p>Gists are also version controlled, so you can easily see previous revisions and revert to them if you want to.</p>
<h3 id="githubhttpsgithubcom"><a href="https://github.com">GitHub</a></h3>
<p>You can use a GitHub repository to host your rules.
Repositories are a great way to share code and text files for whole projects, but they come with some more overhead.
Choose this method to host your rules if you want to have multiple sets in the same source.
You can then also edit them easily with GitHub's native phone application or with a proper development checkout on your PC.
Be sure to make the repository public, otherwise the App will not be able to retrieve files from it.</p>
<p>After creating the repository with a file in it, you can get the raw URL to the file.
It will look like this:</p>
<pre><code class="text language-text">https://raw.githubusercontent.com/username/repository/branch/file
</code></pre>`;var a=`<h1 id="wiemanregelndefiniert">Wie man Regeln definiert</h1>
<h2 id="regeln">Regeln</h2>
<p>werden mit der folgenden Syntax definiert:</p>
<pre><code class="text language-text">[Bedingung] :- Effekt, Effekt, ... ;
</code></pre>
<p>Regeln m\xFCssen durch ein Semikolon getrennt werden.</p>
<pre><code class="text language-text">kaltes_wetter :- [Kleidung] Mantel,
  Erwartest du Schnee? $snow ;
</code></pre>
<blockquote>
  <p>Diese Regel kann so etwas bedeuten wie "Wenn das Wetter kalt ist, solltest du einen Mantel mitbringen. Au\xDFerdem solltest du die Frage beantworten, ob du Schnee erwartest."</p>
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
Es kann verwirrend werden.</p>`;var s=`<h1 id="howtodefinerules">How to define rules</h1>
<h2 id="rules">Rules</h2>
<p>are defined with the following syntax:</p>
<pre><code class="text language-text">[Condition] :- Effect, Effect, ... ;
</code></pre>
<p>Rules have to be separated by a semicolon character.</p>
<pre><code class="text language-text">cold_weather :- [Clothing] Coat,
  Do you expect snow? $snow ;
</code></pre>
<blockquote>
  <p>This rule can mean something like "If the weather is cold, you should bring a coat. Also, you should answer the question if you expect snow."</p>
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
It can get confusing.</p>`;var r=new e("REMOTE_RULES_DOCUMENTATION");function c(o){return i}var l=new e("RULES_DOCUMENTATION");function d(o){return o.startsWith("de")?a:s}function b(){return n([{provide:r,useFactory:c,deps:[t]},{provide:l,useFactory:d,deps:[t]}])}var y={"remote-rules":r,rules:l};export{b as a,y as b};
/**i18n:4be4faadc01327a97e860b06942fb7e470703ee2338d4a40735be0c88fb41d51*/
