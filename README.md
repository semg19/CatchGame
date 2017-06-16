# CatchGame
Game for PRG08

- live versie: https://semg19.github.io/CatchGame/

- Open de terminal en plak dit erin: "git clone https://github.com/semg19/CatchGame.git"
- Gebruik ctr + shift + b om de code uit te voeren.
- Typescript code staat in dev map.
- Javascript, CSS en Html zijn in docs te vinden.
- In de tsconfig.json zorgt ervoor dat de docs folder gepakt wordt.
- Class Diagram is te vinden in CatchGame.png

- In de game is de bedoeling dat je zoveel mogelijk appels vangt, als je een bom vangt ben je af. Bommen kan je laten exploderen door op de character te klikken. Maar pas op want de bom blijft effectief na de explosie dus let goed op waar je een bom laat exploderen.

Dit zijn de programmeer principes:
- Library: Ik maak gebruik van GreenSock in StartScreen voor de button.
- Interface: Behaviour is een interface en wordt gebruikt voor het gedrag van het character.
- Static utility method: Ik maak gebruik van Utils (utils.ts).
- Abstract: FirstScreen is een abstracte class.
- Singleton: De class Game in game.ts heb ik een singleton gemaakt.
- Strategy: Alle verschillende soorten gedrag (Dying, Running, Idle) heb ik verwerkt bij behaviour.
- Observer: Character is een observable en Bomb is een observer. Als je op Character klikt gaan de Bombs die in het scherm zijn exploderen.
- Namespaces: FirstScreen is een namespace die gebruikt wordt voor de screens. Daarnaasr heeft enum ook een namespace die in Idle en Running aangeroepen wordt.
- Polymorphism: gamescreen.ts maakt gebruik van Array GameObject die vervolgens doormiddel van instanceOf in de gameLoop gebruikt wordt met Bomb en Apple.
- Enumeraties: Keys met enum aangemaakt (enum.ts) die gebruikt worden in Running en Idle.
- Game Loop: Ik maak in GameScreen gebruik van de Game Loop.

PRG04:
-   Encapsulation: Elke variabele is private, public of protected. 
-   Composition: De character heeft een net bij zich.
-   Inheritance: GameScreen en StartScreen erven van FirstScreen. Apple en Bomb erven van GameObject.

![alt text](https://github.com/semg19/CatchGame/blob/master/CatchGame.png)

Ivo's edits week 4:

- Ik heb border collision toegevoegd aan je game voor de main character, dit is gedaan via een Utility class

Ik vindt dat het spel voor wat het nu is goed is opgebouwd.
- Doormiddel van verschillende behaviours (Running, idle en dying) heb je een Interface verwerkt.
- In je Utility method check je of de Speler in aanraking komt met de bom, dit is static opgebouwd.
- De class van de game zelf is een private static instance, je maakt dus gebruik van een singleton. Doormiddel van getInstance maak je de game aan.
- Met verschillende behaviours zorg je ervoor dat de code van verschillende states van de speler gescheiden blijft. Dit gebeurt doormiddel van een Strategy pattern
- Je het spel maak je gebruik van public, private en protected variabelen en functies.
- De speler heeft een net wat een ander object is, hierdoor maak je gebruik van composition.
- Met verschillende game schermen (firstScreen, gameScreen en startScreen) die van elkaar erven maak je gebruik van Inheritance.

Goed gedaan Sem, van mij krijg je een dikke voldoende!
