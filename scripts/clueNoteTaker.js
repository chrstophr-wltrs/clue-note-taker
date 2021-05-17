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
  knife: "Knife",
  pipe: "Lead Pipe",
  revolver: "Revolver",
  rope: "Rope",
  stick: "Candlestick",
  wrench: "Wrench",
  ballroom: "Ballrooom",
  billiard: "Billiard Room",
  conservatory: "Conservatory",
  dining: "Dining Room",
  hall: "Hall",
  kitchen: "Kitchen",
  library: "Library",
  lounge: "Lounge",
  study: "Study",
};

class Guess {
  constructor(suspect, item, location) {
    this.suspect = suspect;
    this.item = item;
    this.location = location;
  }
}

Guess.prototype.toString = () => {
  return `${convert[this.suspect]}/${convert[this.item]}/${
    convert[this.location]
  }`;
};

class Player {
  constructor(name, abbrev) {
    this.name = name;
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
  }

  refute(guess) {
    // Player can Refute a Guess,
    // but the user doesn't know which clue they have
    // guess should always be an instance of a Guess object
    for (const [key, value] of Object.entries(guess)) {
      if (!(this.notes[`${key}s`][value] === 2)) {
        this.notes[`${key}s`][value] = 1;
      }
    }
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
}

class NoteAssistant {
  constructor(players = ["Abigail", "Ben", "Cassandra", "David", "Emma"]) {
    this.players = [];
  }
}

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  jeff = new Player("Jeff", "J");
  jeff.reveal("plum");
  console.log(jeff.notes.suspects);
}
