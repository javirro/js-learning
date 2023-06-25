/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 *
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.
 */


type playerType = "P1" | "P2"

type valuesType = "Love" | "15" | "30" | "40" | "equals" | "ventaja"

const input: playerType[] = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]
const results = {
  Love: "15",
  15: "30",
  30: "40",
  40: (player: playerType): string => `Ha ganado ${player}`,
  equals: (player: playerType): string => `Ventaja para ${player}`,
  ventaja: (player: playerType): string => `Ha ganado ${player}`,
}

let currentScore: {P1: any, P2: any} = {
  "P1": "Love",
  "P2": "Love",
}
console.log("P1 - P2")
const MAX_INDEX_TO_EQUAL_RESULT = 5
const DEUCE_INDEX = 6
input.forEach((point: playerType, index: number) => {
  if (index <= MAX_INDEX_TO_EQUAL_RESULT) {
    const values: valuesType = currentScore[point]
    const nextValue = results[values]
    currentScore[point] = nextValue
  } else {
    if (point === "P1") {
      if (currentScore["P1"] === "40" && currentScore["P2"] === "40") {
        const newValue = results["equals"]
        currentScore["P1"] = newValue("P1")
      } else if (currentScore["P1"] === "Ventaja para P1") {
        const newValue = results["ventaja"]
        currentScore["P1"] = newValue("P1")
      } else if (currentScore["P2"] === "Ventaja para P2") {
        currentScore["P1"] = "40"
        currentScore["P2"] = "40"
      }
    } else {
      if (currentScore["P1"] === "40" && currentScore["P2"] === "40") {
        const newValue = results["equals"]
        currentScore["P2"] = newValue("P2")
      } else if (currentScore["P2"] === "Ventaja para P2") {
        const newValue = results["ventaja"]
        currentScore["P2"] = newValue("P2")
      } else if (currentScore["P1"] === "Ventaja para P1") {
        currentScore["P1"] = "40"
        currentScore["P2"] = "40"
      }
    }
  }
  if (index === 6) console.log("Deuce")
  if (currentScore["P1"] === "Ventaja para P1") console.log(currentScore["P1"])
  else if (currentScore["P2"] === "Ventaja para P2") console.log(currentScore["P2"])
  else if (currentScore["P1"] === "Ha ganado P1") console.log(currentScore["P1"])
  else if (currentScore["P2"] === "Ha ganado P2") console.log(currentScore["P2"])
  else console.log(`${currentScore["P1"]} - ${currentScore["P2"]}`)
})
