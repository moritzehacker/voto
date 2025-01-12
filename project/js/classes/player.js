class Player {
    constructor(name, team) {
        this.name = name;
        this.team = parseInt(team);
        this.gamesPlayed = 0;
        this.playedLast = false;
    }
}