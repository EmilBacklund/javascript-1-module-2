const animal = ["dog", "cat", "hippo"];

console.log(animal.length);

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

// trim

const name = "    Hello how are you    ";

const trimmedName = name.trim();

console.log(name); //     Hello how are you    //
console.log(trimmedName); // Hello how are you
