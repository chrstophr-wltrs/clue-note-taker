const convert = {
  // Key:
  // 0 = Unknown
  // 1 = Might Have
  // 2 = Does Not Have
  // 3 = Definitely Has
  0: ``,
  1: `<span class="maybe">?</span>`,
  2: `<span class="dontHave">X</span>`,
  3: `<span class="have">&check;</span>`,
  green: "Mr Green",
  mustard: "Col Mustard",
  peacock: "Mrs Peacock",
  plum: "Prof Plum",
  scarlett: "Ms Scarlett",
  white: "Mrs White",
  pipe: "Lead Pipe",
  stick: "Candlestick",
  billiard: "Billiard Room",
  dining: "Dining Room",
};

function title(lowerString) {
  // converts lowerString to title case
  return lowerString[0].toUpperCase() + lowerString.slice(1);
}

class Guess {
  constructor(sus, it, loc) {
    this.sus = sus;
    this.it = it;
    this.loc = loc;
  }
}

Guess.prototype.toString = () => {
  return `${convert[this.sus]}/${convert[this.it]}/${convert[this.loc]}`;
};

class Player {
  constructor(abbrev) {
    this.abbrev = abbrev;
    // Key:
    // 0 = Unknown
    // 1 = Might Have
    // 2 = Does Not Have
    // 3 = Definitely Has
    this.notes = {
      suspects: {
        green: 0,
        mustard: 0,
        peacock: 0,
        plum: 0,
        scarlett: 0,
        white: 0,
      },
      items: { knife: 0, pipe: 0, revolver: 0, rope: 0, stick: 0, wrench: 0 },
      locations: {
        ballroom: 0,
        billiard: 0,
        conservatory: 0,
        dining: 0,
        hall: 0,
        kitchen: 0,
        library: 0,
        lounge: 0,
        study: 0,
      },
    };
    // Player.refutations will hold all of the instances
    // where that Player was able to Refute a Guess
    // Each item will be a Guess object
    // For example, one item might be plum/revolver/library
    // So you could have a Player.refutations of
    // [plum/revolver/library, green/hall/knife] and so on
    this.refutations = [];
  }

  pass(guess) {
    // Player cannot Refute a Guess,
    // and therefore does not have any of the clues
    // guess should always be an instance of a Guess object
    for (const [key, value] of Object.entries(guess)) {
      this.notes[`${key}s`][value] = 2;
    }
    this.deduce();
  }

  refute(guess) {
    // Player can Refute a Guess,
    // but the user doesn't know which clue they have
    // guess should always be an instance of a Guess object
    for (const [key, value] of Object.entries(guess)) {
      if (this.notes[`${key}s`][value] === 0) {
        this.notes[`${key}s`][value] = 1;
      }
    }
    this.refutations.push(guess);
    this.deduce();
  }

  reveal(clue = "") {
    // Player can Refute a Guess,
    // and Player reveals a clue to the user
    for (const [key, value] of Object.entries(this.notes)) {
      for (const subKey in value) {
        if (clue === subKey) {
          this.notes[key][subKey] = 3;
        }
      }
    }
  }

  deduce() {
    // Deduces information about a Player's cards,
    // based on previous Refutations and Passes

    // pruneList holds the indices of any items
    // we'll need to remove from Player.refutations
    let pruneList = [];
    // scan for any confirmations where
    // we can identify a clue the Player MUST have
    for (const refute of this.refutations) {
      const { sus, it, loc } = refute;
      const { suspects, items, locations } = this.notes;
      if (items[it] === 2 && locations[loc] === 2) {
        // Player MUST have the sus from this Guess
        suspects[sus] = 3;
        pruneList.unshift(this.refutations.indexOf(refute));
      } else if (suspects[sus] === 2 && locations[loc] === 2) {
        // Player MUST have the item from this Guess
        items[it] = 3;
        pruneList.unshift(this.refutations.indexOf(refute));
      } else if (suspects[sus] === 2 && items[it] === 2) {
        // Player MUST have the location from this Guess
        locations[loc] = 3;
        pruneList.unshift(this.refutations.indexOf(refute));
      }
    }
    // Prune any elements we were able to confirm
    for (const ind of pruneList) {
      this.refutations.splice(ind, 1);
    }
  }
}

class NoteAssistant {
  constructor() {
    this.players = [];
  }
  renderSection(sectionID) {
    const section = document.getElementById(sectionID);
    section.innerHTML = "";
    titleRow = section.insertRow();
  }

  addPlayer(...abbrev) {
    for (const ab of abbrev) {
      this.players.push(new Player(ab));
    }
  }
}

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  noteTaker = new NoteAssistant();
  noteTaker.addPlayer("A", "B", "C", "D", "E");
}
