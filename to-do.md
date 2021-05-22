# To-Do

These are some features I'd like to have in the future. There's no timeline on when these would be implemented, just kind of a checklist of stuff I want to work on.

- [-] Base App
  - [-] The Game Table
    - [ ] Allow the states of various table cells to be toggled and changed by the user
  - [-] Guess Structure
    - [ ] User can initiate a guess
      - [ ] The Guess cycles through each Player, highlighting the necessary column
      - [-] The user can state whether a Guess is Refuted or not, and the app automatically fills in the data for each column and row accordingly
    - [-] User can choose 1 Suspect, Item, and Location for the Guess
    - [ ] User can choose which Player the Guess starts with, and the Guess wraps around when starting on a different Player
  - [-] Deduction
    - [x] Automatically deduce which card a Player has when they Refute a Guess, based on previously known cards that they don't have
    - [x] Retroactively deduce which card a Player has when they cannot Refute a Guess, based on a previous Refutation
    - [ ] Once a player's entire hand is known, mark that they don't have all of the other cards
  - [ ] Customizability
    - [ ] User can Create a New Game, and Enter names for any number of players
    - [ ] User can create custom game sheets, with any number of Suspects, Items, and Locations
      - [ ] User's custom game sheets are accounted for when deducing each Player's Hand
- [-] Frameworks
  - [-] Browser
    - [-] Base Javascript
    - [ ] React
    - [ ] Angular
    - [ ] Vue
  - [ ] Desktop
    - [ ] Electron
    - [ ] Neutralino
    - [ ] Tauri
  - [ ] Mobile
    - [ ] React Native
