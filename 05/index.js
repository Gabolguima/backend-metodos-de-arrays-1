const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (lista, nomeDoPaciente) => {
  lista.push(nomeDoPaciente);
  console.log(lista.join(", "));
}

const atenderPaciente = (lista) => {
  lista.shift();
  console.log(lista.join(", "));
}

const cancelarAtendimento = (lista, nomeDoPaciente) => {
  const removerPaciente = 1;
  lista.splice(lista.indexOf(nomeDoPaciente), removerPaciente);
  console.log(lista.join(", "));
}

agendarPaciente(pacientes, "Gabriel");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Ana");