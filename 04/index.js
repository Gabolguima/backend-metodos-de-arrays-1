const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const atendimento = (lista, tipoDeOperacao, nomeDoPaciente) => {
  if (tipoDeOperacao === "atender") {
    lista.shift();
  } else if (tipoDeOperacao === "agendar") {
    lista.push(nomeDoPaciente);
  }

  console.log(lista.join(", "));
}

atendimento(pacientes, "atender");
atendimento(pacientes, "agendar", "Gabriel");
atendimento(pacientes, "atender");