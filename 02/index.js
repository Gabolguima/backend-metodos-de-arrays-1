const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

const separarGrupos = (lista, tamanho) => {
  let numeroDoGrupo = 1;

  for (let index = 0; index < lista.length; index += tamanho) {
    const grupo = `Grupo ${numeroDoGrupo}: ${lista.slice(index, (index + tamanho)).join(", ")}.`;
    console.log(grupo);
    numeroDoGrupo++;
  }
}

separarGrupos(nomes, tamanhoDoGrupo);