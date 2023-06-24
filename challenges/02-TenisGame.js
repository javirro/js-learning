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

const input = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]
const results = {
  Love: "15",
  15: "30",
  30: "40",
  40: player => `Ha ganado ${player}`,
  equals: player => `Ventaja para ${player}`,
  ventaja: player => `Ha ganado ${player}`,
}

let current = {
  P1: "Love",
  P2: "Love",
}
console.log("P1 - P2")
const MAX_INDEX_TO_EQUAL_RESULT = 5
const DEUCE_INDEX = 6
input.forEach((point, index) => {
  if (index <= MAX_INDEX_TO_EQUAL_RESULT) {
    current[point] = results[current[point]]
  } else {
    if (point === "P1") {
      if (current["P1"] === "40" && current["P2"] === "40") {
        const newValue = results["equals"]
        current["P1"] = newValue("P1")
      } else if (current["P1"] === "Ventaja para P1") {
        const newValue = results["ventaja"]
        current["P1"] = newValue("P1")
      } else if (current["P2"] === "Ventaja para P2") {
        current["P1"] = "40"
        current["P2"] = "40"
      }
    } else {
      if (current["P1"] === "40" && current["P2"] === "40") {
        const newValue = results["equals"]
        current["P2"] = newValue("P2")
      } else if (current["P2"] === "Ventaja para P2") {
        const newValue = results["ventaja"]
        current["P2"] = newValue("P2")
      } else if (current["P1"] === "Ventaja para P1") {
        current["P1"] = "40"
        current["P2"] = "40"
      }
    }
  }
  if (index === 6) console.log("Deuce")
  if (current["P1"] === "Ventaja para P1") console.log(current["P1"])
  else if (current["P2"] === "Ventaja para P2") console.log(current["P2"])
  else if (current["P1"] === "Ha ganado P1") console.log(current["P1"])
  else if (current["P2"] === "Ha ganado P2") console.log(current["P2"])
  else console.log(`${current["P1"]} - ${current["P2"]}`)
})
