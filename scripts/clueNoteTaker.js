class Player {
  constructor(name, initial) {
    this.name = name;
    this.initial = initial;
    this.notes = {
      characters: {},
      items: {},
      locations: {},
    };
  }
}

class NoteAssistant {
  constructor(players = ["Abigail", "Ben", "Cassandra", "David", "Emma"]) {
    this.players;
  }
}
