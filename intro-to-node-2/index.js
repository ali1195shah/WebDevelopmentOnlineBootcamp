// const fs = require("fs"); // access to filesystem

// fs.copyFileSync("file1.text", "file2.text");

const superheroes = require("superheroes");
const pokemon = require("pokemon")

let mySuperHeroName = superheroes.random()
let myPokemonName = pokemon.random()

console.log(mySuperHeroName + ' vs. ' + myPokemonName);