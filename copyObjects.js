// Shallow object copies: The top-level properties are copied without reference but there is any nested object which has been copied as reference.
// It means that if modified some nested value in an object, the refereced value will affect to all the objects in which is contained
const pet = {
  name: "Simba",
  age: 4,
  data: {
    type: "dog",
    size: "15 kg",
    color: "black"
  }
}


const secondPet = {
  ...pet,
  name: "Cati",
  age: 2
}


const thirdPet = {
  ...secondPet,
}


thirdPet.data.size = "30kg"

console.log("thirdPet", thirdPet);
console.log("secondPet", secondPet);
console.log("firstPet", pet);