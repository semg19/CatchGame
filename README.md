# CatchGame
Game for PRG08

- live versie: https://semg19.github.io/CatchGame/

- Gebruik ctr + shift + b om de code uit te voeren.
- Typescript code staat in dev map.
- Javascript, CSS en Html zijn in docs te vinden.
- In de tsconfig.json zorgt ervoor dat de docs folder gepakt wordt.
- Class Diagram is te vinden in CatchGame.png

Dit zijn de programmeer principes
- Interface: Behaviour is een interface en wordt gebruikt voor het gedrag van het character.
- Static utility method: Ik maak gebruik van Utils (Utils.ts)
- Singleton: De class Game in game.ts heb ik een singleton gemaakt.
- Strategy: Alle verschillende soorten gedrag heb ik verwerkt bij behaviour.

PRG04:

-   Encapsulation: Elke variabele is private, public of protected. 
-   Composition: De character heeft een net bij zich.
-   Inheritance: GameScreen en StartScreen erven van FirstScreen.