import{Y as e,ca as n,pc as t}from"./chunk-3bd23466.js";var o=`<h1 id="howtodefinerules">How to define rules</h1>
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
It can get confusing.</p>`;var i=`<h1 id="wiemanregelndefiniert">Wie man Regeln definiert</h1>
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
Es kann verwirrend werden.</p>`;var d=new e("RULES_DOCUMENTATION");function s(a){return a.startsWith("de")?i:o}function p(){return n([{provide:d,useFactory:s,deps:[t]}])}export{d as a,p as b};
/**i18n:015bdb808d2848989c3b91cbfc9cad629f58047ff6617f7ac5d9a7ed8c5b6894*/
