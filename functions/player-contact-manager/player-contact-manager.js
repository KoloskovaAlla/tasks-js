const playerManager = (players) => {
    if (players === '' || players === null) return []
    const playersArray = players.split(', ')
    let result = [];
    for (let i = 0; i < playersArray.length - 1; i++) {
        if (i % 2 === 0) {
            const player = playersArray[i];
            const contact = Number(playersArray[i + 1]);
            const playerObject = {player: player, contact: contact} 
            result.push(playerObject)
        }
    }
    return result;
}

console.log(playerManager('John Doe, 8167238327, Jane Doe, 8163723827'))
console.log(playerManager(''))
console.log(playerManager(null))