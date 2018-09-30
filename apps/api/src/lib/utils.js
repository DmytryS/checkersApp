export function dumpUser(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

export function dumpGame(game) {
    return {
        id: game.id,
        player1: game.player1,
        player2: game.player2,
        winner: game.winner,
        status: game.status
    };
}

export function dumpAction(action) {
    return {
        id: action.id,
        userId: action.userId,
        type: action.type
    };
}