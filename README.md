# CatchGame
Game for PRG08

## Inleiding

In de game is de bedoeling dat je zoveel mogelijk appels vangt, als je een bom vangt ben je af. Bommen kan je laten exploderen door op de character te klikken. Maar pas op want de bom blijft effectief na de explosie dus let goed op waar je een bom laat exploderen.

## Speelbare game

Live versie: https://semg19.github.io/CatchGame/

## Installatie

- Open de terminal en plak dit erin: "git clone https://github.com/semg19/CatchGame.git"
- Gebruik ctr + shift + b om de code uit te voeren.
- Typescript code staat in dev map.
- Javascript, CSS en Html zijn in docs te vinden.
- In de tsconfig.json zorgt ervoor dat de docs folder gepakt wordt.
- Class Diagram is te vinden in CatchGame.png

## Klassendiagram

![alt text](https://github.com/semg19/CatchGame/blob/master/CatchGame.png)

## Pull request

(Hier komt de request link)

Oude request: https://github.com/semg19/typescript

## Peer review

(Hier komt de review link)

Oude review: https://github.com/semg19/GamePRG8

## Singleton

De class Game in game.ts heb ik een singleton gemaakt. Dit heb ik gedaan zodat ik een reference kan krijgen naar de game en op basis hiervan StartScreen kan tonen. instance Game is private en constructor is private zodat er niet een tweede game in main aangemaakt kan worden.

```
private static instance: Game; 
private constructor()
```

## Polymorfisme

In gamescreen.ts wordt gebruik gemaakt van Array GameObject die vervolgens doormiddel van instanceOf in de gameLoop gebruikt wordt met Bomb en Apple. Bomb en Apple erven beide van de GameObject class. Deze geeft de functies draw en stop mee. Doordat ze beide deze functies moeten hebben kunnen de Bomb en Apple in een GameObject array gestopt worden. Dit heeft als voordeel dat je niet alle objecten een eigen variabele moet mee geven geven en dat je de Stop en Draw functies van de objecten zelf aan moet roepen. Hieruit kan je Bomb en Apple uit gameObjects pushen. 

```
this.gameObjects.push(new Apple(i));
this.gameObjects.push(new Bomb(i, char)); 
```

In gamescreen.ts zie je ook dat Characters in een array gestopt zijn. Alien en Astronaut extenden deze character class en daarom je je ze pushen vanuit de character array.

```
this.characters.push(new Astronaut());
this.characters.push(new Alien());
```

## Strategy

Alle verschillende soorten gedrag (Dying, Running, Idle) heb ik verwerkt bij behaviour. In het mapje behaviour staat de interface en de behaviours die daar gebruik van maken. Deze behaviours worden gebruikt om character van gedrag te laten veranderen. Hierdoor is de character class overzichelijker, staan alle behaviours gescheiden van elkaar en is het makkelijker om nieuwe soorten gedrag toe te voegen.

## Observer

Character is een observable en Bomb is een observer. Als je op Character klikt gaan de Bombs die in het scherm zijn exploderen. Dit voegt een nieuw spelelement toe aan de game. In character.ts staan de functies subscribe en unsubscribe en in bomb.ts staat ```this.char.subscribe(this);``` en de notify functie.

## Verdere programmeer principes:

- Interface: Behaviour is een interface en wordt gebruikt voor het gedrag van het character.
- Static utility method: Ik maak gebruik van Utils (utils.ts).
- Abstract: FirstScreen is een abstracte class.
- Namespaces: FirstScreen is een namespace die gebruikt wordt voor de screens. Daarnaasr heeft enum ook een namespace die in Idle en Running aangeroepen wordt.
- Enumeraties: Keys met enum aangemaakt (enum.ts) die gebruikt worden in Running en Idle.
- Game Loop: Ik maak in GameScreen gebruik van de Game Loop.

PRG04:
-   Encapsulation: Elke variabele is private, public of protected. 
-   Composition: De character heeft een net bij zich.
-   Inheritance: GameScreen en StartScreen erven van FirstScreen. Apple en Bomb erven van GameObject.

## Gameplay componenten
- De game ziet er visueel aantrekkelijk uit. Er is aandacht besteed aan een
solide UI en aan een consistent grafisch ontwerp: Ik heb een zelfde soort design proberen aan te houden bij de images en de game kindvriendelijk gemaakt. Ook heb ik met het toevoegen van schermen een fijnere visuele ervaring gegeven.
- De game heeft interactief muziek: De game is voorzien van muziek tijdens het spel en bij gameover.