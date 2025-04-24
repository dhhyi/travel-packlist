# Wie man Regeln definiert

## Regeln

werden mit der folgenden Syntax definiert:

```text
[Bedingung] :- Effekt, Effekt, ... ;
```

Regeln müssen durch ein Semikolon getrennt werden.

```text
kaltes_wetter :- [Kleidung] Mantel,
  Erwartest du Schnee? $snow ;
```

> Diese Regel kann so etwas bedeuten wie "Wenn das Wetter kalt ist, solltest du einen Mantel mitbringen.
> Außerdem solltest du die Frage beantworten, ob du Schnee erwartest."

### Effekte

können entweder **Gegenstände** oder **Fragen** sein, wie oben gezeigt.
Trenne mehrere Effekte mit Kommas.

### Fragen

werden mit der folgenden Syntax definiert:

```text
Frage? $variable
```

Eine Frage wird oben in der UI angezeigt.
Du kannst die Antwort durch Klicken darauf umschalten.

### Gegenstände

werden mit der folgenden Syntax definiert:

```text
[Kategorie] Name
```

Ein Gegenstand wird in der Liste unter seiner Kategorie angezeigt.

### Bedingungen

können leer sein, in diesem Fall sind sie immer wahr.
Du kannst Variablen verwenden, um Logik mit `AND`, `OR` und `NOT` zu definieren.

> Die höchste Priorität hat `NOT`, dann `AND` und schließlich `OR`.
> Das bedeutet, dass alle Gruppen von `NOT variable` zuerst ausgewertet werden, dann `links AND rechts` und schließlich `links OR rechts`, bis die gesamte Bedingung ausgewertet ist.

Variablen werden in Fragen definiert.
Bedingungen lösen die Effekte der Regel aus, wenn sie wahr sind.
Wenn die Bedingung also nicht erfüllt ist, siehst du weder zusätzliche Fragen noch Gegenstände dieser speziellen Regel.

Einige Beispiele für Bedingungen:

<!-- cspell:words cold_weather -->

```text
cold_weather AND NOT snow
```

> Kann so etwas bedeuten wie "Das Wetter ist kalt und es schneit nicht".

<!-- cspell:words washer, laundromat -->

```text
washer OR laundromat
```

> Kann so etwas bedeuten wie "Du hast eine Waschmaschine in deinem AirBnB oder du hast einen Waschsalon in der Nähe".

## Fazit

Mit all dem kannst du eine bedingte Checkliste sehr flexibel definieren.

Ein Ratschlag:
Löse nicht zu viele Effekte in einer Regel aus.
Es kann verwirrend werden.
