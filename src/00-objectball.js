function gameObject() {
        return {
            "home": {
                "teamName": "Brooklyn Nets",
                "colors": ["Black", "White"],
                "player": {
                    "Alan Anderson": {
                        "number": 0,
                        "shoe": 16,
                        "points": 22,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 1,
                    },
                    "Reggie Evans": {
                        "number": 30,
                        "shoe": 14,
                        "points": 12,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 12,
                        "blocks": 12,
                        "slamDunks": 7,
                    },
                    "Brook Lopez": {
                        "number": 11,
                        "shoe": 17,
                        "points": 17,
                        "rebounds": 19,
                        "assists": 10,
                        "steals": 3,
                        "blocks": 1,
                        "slamDunks": 15,
                    },
                    "Mason Plumlee": {
                        "number": 1,
                        "shoe": 19,
                        "points": 26,
                        "rebounds": 12,
                        "assists": 6,
                        "steals": 3,
                        "blocks": 8,
                        "slamDunks": 5,
                    },
                    "Jason Terry": {
                        "number": 31,
                        "shoe": 15,
                        "points": 19,
                        "rebounds": 2,
                        "assists": 2,
                        "steals": 4,
                        "blocks": 11,
                        "slamDunks": 1,
                    }  
                },
            },
            "away": {
                "teamName": "Charlotte Hornets",
                "colors": ["Turquoise", "Purple"],
                "player": {
                    "Jeff Adrien": {
                        "number": 4,
                        "shoe": 18,
                        "points": 10,
                        "rebounds": 1,
                        "assists": 1,
                        "steals": 2,
                        "blocks": 7,
                        "slamDunks": 2,
                    },
                    "Bismak Biyombo": {
                        "number": 0,
                        "shoe": 16,
                        "points": 12,
                        "rebounds": 4,
                        "assists": 7,
                        "steals": 7,
                        "blocks": 15,
                        "slamDunks": 10,
                    },
                    "DeSagna Diop": {
                        "number": 2,
                        "shoe": 14,
                        "points": 24,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 4,
                        "blocks": 5,
                        "slamDunks": 5,
                    },
                    "Ben Gordon": {
                        "number": 8,
                        "shoe": 15,
                        "points": 33,
                        "rebounds": 3,
                        "assists": 2,
                        "steals": 1,
                        "blocks": 1,
                        "slamDunks": 0,
                    },
                    "Brendan Haywood": {
                        "number": 33,
                        "shoe": 15,
                        "points": 6,
                        "rebounds": 12,
                        "assists": 12,
                        "steals": 22,
                        "blocks": 5,
                        "slamDunks": 12,
                    }
                }
            }
        }
}

function goodPractices() {
    let game = gameObject();
    for (let gameKey in game) {
      // are you ABSOLUTELY SURE what 'gameKey' is?
      // use the debugger to find out!
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
  
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.player
        for (let key in data) {
        }
      }
    }
  }
  
  console.log("++++++++++++ start ++++++++++++++")

function allPlayers() {
    const playerList = {}
    const game = gameObject();
    // Object.keys(game)forEach(location => {
    //  const players = game[gameKey]["players"] 
    //     Object.keyes(players)forEach(player => 
    //         playerList[player] = players[player])
    // })
    for (const gameKey in game) {
        const teamPlayers = game[gameKey]["player"];
        for (const playerName in teamPlayers) {
                playerList[playerName] = teamPlayers[playerName]
            }
        }
    return playerList
}


function numPointsScored(playerName){   
    playerList = allPlayers()
    return playerList[playerName].points
}

function shoeSize(playerName){
    playerList = allPlayers()
    return playerList[playerName].shoe    
}

function teamColors(teamName){
    const game = gameObject();
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        if (teamObj.teamName === teamName) {
         return teamObj.colors
        }
    }
}

function teamNames(){
    teamNames = []
    const game = gameObject()
    for (const gameKey in game){
        teamNames.push(game[gameKey]["teamName"])
        debugger
    }
    return teamNames
}

function playerNumbers(teamName){
    const jerseys = []
    const game = gameObject()
    for (const gameKey in game){
        if (teamName === game[gameKey].teamName) {
            const players =game[gameKey].player
            for (const player in players){
                jerseys.push(players[player].number)
            }
        }
    }
    return jerseys
}

function playerStats(playerName){
    const playerList = allPlayers()
    return playerList[playerName]
}

function playerWithMax(stat){
    let playerName = ""
    let statValue = 0
    const playerList = allPlayers()
    for (player in playerList) {
        if (playerList[player][stat] > statValue) {
            statValue = playerList[player][stat];
            playerName = player
        } else {
            statValue;
            playerName;
        }
    }
    return playerName
}

function bigShoeRebound(){
    const playerList = allPlayers()
    const human = playerWithMax("shoe")
    return playerList[human].rebounds
}

function mostPointsScored(){
    const playerList = allPlayers()
    const human = playerWithMax("points")
    return human
}

function totalPoints(location){
    let pointsScored = 0
    const game = gameObject()
    const players = game[location].player
    for (playerName in players) {
        pointsScored = players[playerName].points + pointsScored
    }
    return pointsScored
}

function winningTeam(){
    const game = gameObject()
    const homePoints = totalPoints("home")
    const awayPoints = totalPoints("away")
    return (homePoints > awayPoints) ? game["home"].teamName : game["home"].teamName;
}

function playerWithLongestName(){
    let playerName = ""
    const playerList = allPlayers()
    for (player in playerList) {
        if (player.length > playerName.length) {
            playerName = player
        } else {
            playerName;
        }
    }
    return playerName
}

function doesLongNameStealATon() {
    return (playerWithMax("steals") === playerWithLongestName()) ? true : false
}

