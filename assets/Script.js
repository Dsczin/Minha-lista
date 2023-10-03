//selecionando o botão
const btn = document.getElementById("btn");

//ao carregar a pagina a função recuperarValoresDoStorage vai no estorage e confere se tem alguma task salva
window.addEventListener("load", recuperarValoresDoStorage());

//adiciona o evento de click no botão que aciona a função NovaTarefa
btn.addEventListener("click", NovaTarefa);

function NovaTarefa() {
  //seleciona o input
  const input = document.getElementById("input-new-task");

  //caso tenha alguma task salva no localStorage, é salvo todas elas nessa variavel, caso n tenha, a variavel recebe um array vazio
  const oldTasks = JSON.parse(localStorage.getItem("to-do-list-chave") || "[]");

  //verificação caso o input esteja vazio ou algo do tipo
  if (input.value !== undefined && input.value !== "") {

    //seleciona o elemento com o id = List (no meu caso coloquei em uma div, esse vai ser o container)
    const list = document.getElementById("List");
    
    //cria uma tag li <li></li>
    const listItem = document.createElement("li");
    
    //pega todas as antigas tasks do local storage
    const updateTask = [...oldTasks];

    //pega o value do input e coloca dentro da li que foi criada anteriormente
    listItem.textContent = input.value;
    
    //aqui é onde a <li> é inserida dentro do conteiner selecionado anterior mente (o conteiner é o List)
    list.appendChild(listItem);

    //Aqui é onde as tasks antigas recebem a nova task informada
	updateTask.push(input.value);

	//é aqui é onde as tesks antigas junto com a nova é salva no localStorage
    localStorage.setItem("to-do-list-chave", JSON.stringify(updateTask));
  }
}

function recuperarValoresDoStorage() {

    //caso tenha alguma task salva no localStorage essa variavel recebe todas as tasks, caso n tenha ela recebe um array vazio
  const values = JSON.parse(localStorage.getItem("to-do-list-chave") || "[]");

    //aqui é selecionado o id List (esse é o container)
  const list = document.getElementById("List");

    //aqui é onde o loop é feito, caso tenha alguma task salva no localstorage esse loop vai rodar todas as tasks
  for (let i = 0; i < values.length; i++) {

    //cria uma li
    const listItem = document.createElement("li");

    //o conteudo da li recebe o value da task(o texto salvo)    
	listItem.textContent = values[i];

    //e aqui a li criada anteriormente é colocada dentro do container
    list.appendChild(listItem);
  }
}