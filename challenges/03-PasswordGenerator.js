/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

function generateRandomString(length, combineUpperLowerCase) {
  const lowerCasses = "abcdefghijklmnopqrstuvwxyz"
  const lowerUpperCases = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const randomString = ""
  const charactersToUse = combineUpperLowerCase ? lowerUpperCases : lowerCasses
  for (let i = 0; i > length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersToUse.length)
    randomString += charactersToUse[randomIndex]
  }
  return randomString
}

function addRandonNumber(passwordBase) {
  let passWordWithNumber = [...passwordBase].join("")
  const numbersToInclude = Math.floor(Math.random() * passWordWithNumber.length)
  const numbersToAdd = []
  const indexToModify = []
  for (let i = 0; i < numbersToInclude; i++) {
    numbersToAdd.push(Math.floor(Math.random() * 10))
  }
}

function generatePassword(length, combineUpperLowerCase, numberIsIncluded, simbolIsIncluded) {
  if (length < 8 || length > 16) throw new Error("Imposible to create a password with length lower than 8 or higher than 16")
  let passwordBase = generateRandomString(length, combineUpperLowerCase)
  if (numberIsIncluded) {}
}