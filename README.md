# Angular-workshop med Cygni

## Förberedelser
1. Installera git om du inte redan har det [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git] (Installera Git)
2. Klona detta repo (Alternativt ladda ner zipfil om du inte har git installerat)
3. Installera  [Visual Studio Code](https://code.visualstudio.com/) eller annan editor.
4. Installera NPM
5. Gå till repo-mappen och kör <code>npm install</code>
6. Kör <code>npm run start</code> för att starta applikationen.


### Installera NPM

#### Windows
1. Ladda ner från  [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 
2. Kör sedan detta för att installera senaste versionen av npm  
<code> npm install npm@latest -g</code>
3. Kontrollera att det fungerar  
<code>npm --version</code>

#### Ubuntu/Debian
1. Ladda ner node/Npm  
<code>curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -</code>
2. Installera  
<code>sudo apt install nodejs</code>
3. Kontrollera att det fungerar  
<code>npm --version</code>

#### MacOS
1. Om du inte har Homebrew, installera det först  
<code>/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code>
2. Installera node  
<code>brew install node</code>  
3. Kontrollera att det fungerar  
<code>npm --version</code>


## Angular Workshop 1

Angular Basics, Komponenter, Templates, Directives

### Nybörjare del 1
1. Generera en ny komponent med CLI-t som heter list.
2. Lägg till selectorn för list-komponenten i app.component.html
3. Skapa en Inputproperty i List-komponenten som innehåller djuren som hämtas från dataservice
4. Rendera alla djur i listkomponenten och visa namn, typ och ålder på djuret
5. Skapa tre input-fält (en för namn, typ och ålder)
6. Lägg till en knapp som gör att användaren kan lägga till ett djur i listan.

### Nybörjare del 2
1. Baserat på djurets typ, sätt grön färg på texten som visar djurets namn om det är en hund, röd om det är en katt och gul om det är en häst. 

### Avancerad
1. Istället för att använda NgModel på Input-fälten för att lägga till ett nytt djur, använd dig av Angular Forms. 

### Pro
1. Använd routing för att visa listkomponenten.

## TypeScript
1. Skapa ett Animal-interface baserat på Djuren som kommer från dataService. Använd dig gärna av union-types.
2. Sätt rätt return-type på funktionen getAnimals.
    

## Learn More
[https://angular.io/guide/component-overview](https://angular.io/guide/component-overview)  
[https://www.typescriptlang.org/](https://www.typescriptlang.org/)  
[https://ultimatecourses.com/courses/angular](https://ultimatecourses.com/courses/angular), superbra kurs, kostar dock pengar.