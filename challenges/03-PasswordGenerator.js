/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
const lowerCasses = "abcdefghijklmnopqrstuvwxyz"
const lowerUpperCases = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbols = "*+#!¿=&%¡?"

function generateRandomString(length, combineUpperLowerCase) {
  let randomString = ""
  const charactersToUse = combineUpperLowerCase ? lowerUpperCases : lowerCasses
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersToUse.length)
    randomString += charactersToUse[randomIndex]
  }
  return randomString
}

function addRandonNumbers(passwordBase) {
  let passWordWithNumber = [...passwordBase].join("")
  const numbersToInclude = Math.floor(Math.random() * passWordWithNumber.length)
  for (let i = 0; i < numbersToInclude; i++) {
    const numberToAdd = Math.floor(Math.random() * 10)
    const indexToModify = Math.floor(Math.random() * passwordBase.length)
    passWordWithNumber = passWordWithNumber.substring(0, indexToModify) + numberToAdd + passWordWithNumber.substring(indexToModify + 1)
  }
  return passWordWithNumber
}

function addSymbol(passwordBase) {

  let passwrodWithSymbol = [...passwordBase].join("")
  const numberOfSymbolsToInclude = Math.floor(Math.random() * passwrodWithSymbol.length)
  for (let i = 0; i < numberOfSymbolsToInclude; i++) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
    const indexToModify = Math.floor(Math.random() * passwordBase.length)
    passwrodWithSymbol = passwrodWithSymbol.substring(0, indexToModify) + randomSymbol + passwrodWithSymbol.substring(indexToModify + 1)
  }
  return passwrodWithSymbol
}

function generatePassword(length, combineUpperLowerCase = false, numberIsIncluded = false, symbolIscluded = false) {
  if (length < 8 || length > 16) throw new Error("Imposible to create a password with length lower than 8 or higher than 16")
  let passwordBase = generateRandomString(length, combineUpperLowerCase)
  const passwordAfterNumber = !numberIsIncluded ? [...passwordBase].join('') : addRandonNumbers(passwordBase)
  const password = !symbolIscluded ? [...passwordAfterNumber].join('') : addSymbol(passwordAfterNumber)
  return password

}

try {
  const NUMBER_PASSWORDS = 5
  for (let i = 0; i < NUMBER_PASSWORDS; i++) {
    console.log(`Password ${i}:`)
    const password = generatePassword(12, true, true, true)
    console.log(password)
  }

} catch (error) {
  console.error(error.message)
}