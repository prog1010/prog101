### #1:

Scrieti un program care verifica daca un an e bisect. Un an e bisect daca se imparte cu 4, dar nu cu 100, 
cu exceptia celor care se impart cu 400. 
> Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 
100, but these centurial years are leap years if they are exactly divisible by 400. For example, the years 
1700, 1800, and 1900 were not leap years, but the years 1600 and 2000 were.
```
2000 -> da
2100 -> nu
1997 -> nu
```

### #2:
Scrieti un program care calculeaza suma tuturor cifrelor dintr-un numar.
```
123 -> 6
681 -> 15
```

### #3:
Scrieti un program care verifica daca doua string-uri au aceeasi lungime 
```
"iulia" si "andra" -> "da"
"iulia" si "tamazlicariu" -> "nu"
```


### #4:
Scrieti un program care inverseaza literele dintr-un string.
```
"iulia" -> "ailui"
```

### #5:
Se da numele unei persoane, scris in intregime cu litere mici (ex: iulia andra). Afisati-l corect, cu primele litere mari. (ex: Iulia Andra)

### #6*:
Scrieti un program care verifica daca un string este palindrom.
```
"abcdef" -> nu
"abccba" -> da
"epurasulusarupe" -> da
```

### #7*:
Scrieti un program care inlocuieste toate aparitiile unui substring cu alt substring intr-un string dat. Nota: folositi functiile indexOf(searchValue, fromIndex), substring(...) si concatenare de string-uri pentru a construi rezultatul.
```
input: "flowers are flowers"
find: "flowers"
replace: "blue flowers"
output: "blue flowers are blue flowers"
```

Indicatie: 
1. considerati rezultatul un string gol ('')
1. gasiti pozitia primei aparitii a substring-ului find cu indexOf()
1. concatenati la rezultat partea dinaintea aparitiei si substring-ul replace
1. continuati cu pasul 2. pentru partea ramasa din sirul initial