const { Game } = require("../index");

it("should start a game at score 0", () => {
    const game = new Game();
    expect(game.score).toBe(0);
})