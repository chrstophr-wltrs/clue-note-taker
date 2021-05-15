class Player {
  constructor(name, initial) {
    this.name = name;
    this.initial = initial;
    // Key:
    // 0 = Unknown
    // 1 = Might Have
    // 2 = Does Not Have
    // 3 = Definitely Has
    this.notes = {
      characters: {
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
    // Player.refutations will hold all of the instances where that Player was able to Refute a Guess
    // Each item will be an array of strings
    // For example, one item might be ["plum", "revolver", "library"]
    // So you could have a Player.refutations of [["plum", "revolver", "library"], ["green", "knife", "hall"]] and so on
    this.refutations = [];
  }
}

class NoteAssistant {
  constructor(players = ["Abigail", "Ben", "Cassandra", "David", "Emma"]) {
    this.players;
  }
}
