type winner = "Player 1" | "Player 2" | "Tie"

type options = "Paper" | "Scissor" | "Rock" | "Lizard" | "Spock"

type combinations = [options, options]

interface WinLoss {
  win: options[]
  loss: options[]
  tie: options
}

interface ResultOptions {
  Paper: WinLoss
  Scissor: WinLoss
  Rock: WinLoss
  Lizard: WinLoss
  Spock: WinLoss
}
const result: ResultOptions = {
  Paper: {
    win: ["Rock", "Spock"],
    loss: ["Scissor", "Lizard"],
    tie: "Paper",
  },
  Scissor: {
    win: ["Paper", "Lizard"],
    loss: ["Rock", "Spock"],
    tie: "Scissor",
  },
  Rock: {
    win: ["Scissor", "Lizard"],
    loss: ["Paper", "Spock"],
    tie: "Rock",
  },
  Lizard: {
    win: ["Paper", "Spock"],
    loss: ["Rock", "Scissor"],
    tie: "Lizard",
  },
  Spock: {
    win: ["Scissor", "Rock"],
    loss: ["Lizard", "Paper"],
    tie: "Spock",
  },
}

function selectWinner(games: combinations[]) {
let score1: number = 0
let score2: number = 0
games.forEach((game: combinations) => {
  const { win, loss, tie } = result[game[0]]
  if (win.includes(game[1])) score1 += 1
  else if (loss.includes(game[1])) score2 += 1
  else if (game[1] === tie) console.log("Tie game")
})
if (score1 > score2) console.log("Winner 1: ", score1)
else if (score1 < score2) console.log("Winner 2: ", score2)
else console.log("Tie match")
}



const games: combinations[] = [
  ["Paper", "Scissor"],
  ["Rock", "Lizard"],
  ["Rock", "Paper"],
  ["Spock", "Lizard"]
]
selectWinner(games)