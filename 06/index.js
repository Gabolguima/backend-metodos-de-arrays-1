const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
]

const buscarDonoDoPet = (lista, nomeDoPet) => {
  let usuarioEncontrado;

  for (const usuario of lista) {
    if (usuario.pets.includes(nomeDoPet)) {
      usuarioEncontrado = usuario;
    }
  }

  if (usuarioEncontrado) {
    console.log(`O dono(a) do(a) ${nomeDoPet} é o(a) ${usuarioEncontrado.nome}`);
  } else {
    console.log(`Que pena ${nomeDoPet}, não encontramos seu dono(a)`);
  }
}

buscarDonoDoPet(usuarios, "Max");