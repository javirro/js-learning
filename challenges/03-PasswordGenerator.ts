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

// Symbol is the last element added. Always will exist
function helperToFindIfIsAtLeastOne(password: string, combineUpperLowerCase = false, numberIsIncluded = false) {
  let isNumber = false
  let isLower = false
  let isUpper = false

  if (combineUpperLowerCase) {
    if (/[a-z]/.test(password)) isLower = true
    if (/[A-Z]/.test(password)) isUpper = true
  }
  if (numberIsIncluded) {
    if (/\d/.test(password)) isNumber = true
  }
  return { isLower, isUpper, isNumber }
}

function generateRandomString(length: number, combineUpperLowerCase: boolean) {
  let randomString = ""
  const charactersToUse = combineUpperLowerCase ? lowerUpperCases : lowerCasses
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersToUse.length)
    randomString += charactersToUse[randomIndex]
  }
  const { isLower, isUpper } = helperToFindIfIsAtLeastOne(randomString, combineUpperLowerCase)
  if (combineUpperLowerCase) {
    if (isLower && isUpper) return randomString
    else generateRandomString(length, combineUpperLowerCase)
  } else {
    if (isLower) return randomString
    else generateRandomString(length, combineUpperLowerCase)
  }
}

function addRandonNumbers(passwordBase: any, combineUpperLowerCase: boolean) {
  let passWordWithNumber = [...passwordBase].join("")
  const numbersToInclude = Math.floor(Math.random() * passWordWithNumber.length)
  for (let i = 0; i < numbersToInclude; i++) {
    const numberToAdd = Math.floor(Math.random() * 10)
    const indexToModify = Math.floor(Math.random() * passwordBase.length)
    passWordWithNumber = passWordWithNumber.substring(0, indexToModify) + numberToAdd + passWordWithNumber.substring(indexToModify + 1)
  }
  const isNumber = true
  const { isLower, isUpper } = helperToFindIfIsAtLeastOne(passWordWithNumber, combineUpperLowerCase, isNumber)
  if (combineUpperLowerCase) {
    if (isLower && isUpper) return passWordWithNumber
    else addRandonNumbers(passwordBase, combineUpperLowerCase)
  } else {
    if (isLower) return passWordWithNumber
    else addRandonNumbers(passwordBase, combineUpperLowerCase)
  }

  return passWordWithNumber
}

function addSymbol(passwordBase: any, combineUpperLowerCase: boolean, numberIsIncluded: boolean) {
  let passwrodWithSymbol = [...passwordBase].join("")
  const numberOfSymbolsToInclude = Math.floor(Math.random() * passwrodWithSymbol.length)
  for (let i = 0; i < numberOfSymbolsToInclude; i++) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
    const indexToModify = Math.floor(Math.random() * passwordBase.length)
    passwrodWithSymbol = passwrodWithSymbol.substring(0, indexToModify) + randomSymbol + passwrodWithSymbol.substring(indexToModify + 1)
  }

  const { isLower, isUpper, isNumber } = helperToFindIfIsAtLeastOne(passwrodWithSymbol, combineUpperLowerCase, numberIsIncluded)
  if (combineUpperLowerCase && numberIsIncluded) {
    if (isLower && isUpper && isNumber) return passwrodWithSymbol
    else addSymbol(passwordBase, combineUpperLowerCase, numberIsIncluded)
  } else if (combineUpperLowerCase && !numberIsIncluded) {
    if (isLower && isUpper) return passwrodWithSymbol
    else addSymbol(passwordBase, combineUpperLowerCase, numberIsIncluded)
  } else if (!combineUpperLowerCase && numberIsIncluded) {
    if (isLower && isNumber) return passwrodWithSymbol
    else addSymbol(passwordBase, combineUpperLowerCase, numberIsIncluded)
  } else {
    if (isLower) return passwrodWithSymbol
    else addSymbol(passwordBase, combineUpperLowerCase, numberIsIncluded)
  }
  return passwrodWithSymbol
}

function generatePassword(length: number, combineUpperLowerCase = false, numberIsIncluded = false, symbolIscluded = false) {
  if (length < 8 || length > 16) throw new Error("Imposible to create a password with length lower than 8 or higher than 16")
  let passwordBase = generateRandomString(length, combineUpperLowerCase)
  const passwordAfterNumber = !numberIsIncluded ? passwordBase : addRandonNumbers(passwordBase, combineUpperLowerCase)
  const password = !symbolIscluded ? passwordAfterNumber : addSymbol(passwordAfterNumber, combineUpperLowerCase, numberIsIncluded)
  return password
}

try {
  const NUMBER_PASSWORDS = 1
  for (let i = 0; i < NUMBER_PASSWORDS; i++) {
    console.log(`Password ${i}:`)
    const password = generatePassword(12, true, true, true)
    console.log(password)
  }
} catch (error: any) {
  console.error("Error: ", error.message)
  const password = generatePassword(12, true, true, true)
  console.log(password)

}