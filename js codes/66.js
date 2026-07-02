fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.name);
    console.log(data.height);
    console.log(data.abilities);
  })
  .catch((error) => console.log(error));

const data = {
  name: "pikachu",
  type: "electric",
  height: 200,
  ability: ["thunderbolt", "lightning rod"],
};

console.log(data.height);
