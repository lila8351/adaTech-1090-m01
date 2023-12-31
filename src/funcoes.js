const fs = require("fs");

// incluir()
export function incluir(tarefas){
  let novaTarefa = prompt("Digite a nova tarefa ");
  tarefas.push(novaTarefa);
  console.log("Tarefa '" + novaTarefa + "' alterada com sucesso!");
}

// exibir
// buscar
// alterar
export function alterar(tarefas) {
  const tarefaAlterar = prompt("Informe o índice da tarefa que deseja alterar:");
  const indexAlterar = parseInt(tarefaAlterar);

  if ( indexAlterar < 0 || indexAlterar >= tarefas.length) {
    console.log("Índice inválido.");
    return;
  }

  const novaDescricao = prompt("Informe a nova descrição da tarefa:");
  tarefas[indexAlterar] = novaDescricao;
  console.log("Tarefa alterada.");
}

// deletar 
export function deletar(tarefas) {
  const tarefaDeletar = prompt("Informe o índice da tarefa que deseja deletar:");
  const indexDeletar = parseInt(tarefaDeletar);

  if ( indexDeletar < 0 || indexDeletar >= tarefas.length) {
    console.log("Índice inválido. Tarefa não encontrada.");
    return;
  }

  const tarefaDeletada = tarefas.splice(indexDeletar, 1);
  console.log("Tarefa deletada com sucesso:", tarefaDeletada[0]);
}



// filtrar 
export function buscar(){
    const tarefasFiltradas = [];
    const readline = require('readline');
    const readline = require('readline');
    // 'declara' o modulo readline e usa ele 

const readlinelnterface = readline.createInterface({
    // cria a interface pra interacao do usuario, pegar input e devolver saida pelo terminal
  input: process.stdin,
  output: process.stdout
});

readlinelnterface.question("Digite a palavra aqui: ", (palavraChave) => {
  const frasesComPalavraChave = tarefas.filter(frase => frase.includes(palavraChave));
  readlinelnterface.close();
  tarefasFiltradas.push(frasesComPalavraChave);
  return tarefasFiltradas;
});

}

function selecionar(){
    
}

export function salvaLista(tarefas){
  if (tarefas.length !== 0) {
    const conteudoArquivo = tarefas.join("\n");
    fs.writeFile("dados.txt", conteudoArquivo, (err) => {
        if (err) {
          console.error(err);
          return;
        }
    });
  }
}

export function carregaLista() {
  try {
    const data = fs.readFileSync("dados.txt", 'utf8');
    const linhas = data.split('\n');
    return linhas;
  } catch (err) {
    return [];
  }
}