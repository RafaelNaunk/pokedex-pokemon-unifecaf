Aplicação Front-End para uma API

Rafael Naunnccik
Web Programming For Front End - UNIFECAF

1.	Introdução
2.	O que é uma API e consumo de dados em tempo real
3.	Manipulação do DOM e criação de elementos dinâmicos
4.	Funções JavaScript utilizadas no projeto
5.	Escolha da PokeAPI
6.	Regras de acesso e documentação da PokeAPI
________________________________________
1) Introdução
Neste trabalho foi desenvolvida uma aplicação web front-end que simula uma Pokédex Pokémon. O objetivo do projeto é consumir dados em tempo real de uma API pública, exibir informações de personagens em cards dinâmicos e praticar conceitos fundamentais de HTML, CSS e JavaScript, como consumo de APIs e manipulação do DOM.
________________________________________
2) O que é uma API e consumo de dados em tempo real
Uma API (Application Programming Interface) é um conjunto de regras que permite que diferentes aplicações se comuniquem entre si. No contexto deste projeto, o navegador envia uma requisição HTTP para a PokeAPI e recebe como resposta um objeto em formato JSON com os dados do Pokémon. Sempre que o usuário navega para o próximo Pokémon ou faz uma pesquisa, uma nova requisição é feita, caracterizando o consumo de dados em “tempo real”.
________________________________________
3) Manipulação do DOM e criação de elementos dinâmicos
Após receber os dados da API, o JavaScript não altera diretamente o HTML escrito no arquivo. Em vez disso, a aplicação utiliza manipulação do DOM para criar os elementos de forma dinâmica. A função createPokemonCard cria uma <div> para o card, um <img> para a imagem do Pokémon, elementos de texto para o nome, tipos e outras informações, e insere tudo dentro da <div id="cards-container"> utilizando o método appendChild. Dessa forma, o conteúdo da página é atualizado de acordo com a resposta da API, sem recarregar o site.
________________________________________

4) Funções JavaScript utilizadas no projeto
O método fetch foi utilizado para realizar as requisições HTTP para a PokeAPI.

A chamada fetch("https://pokeapi.co/api/v2/pokemon/" + idOrName) retorna uma Promise. Em seguida, o método .then() é utilizado para converter a resposta em JSON (response.json()), e outro .then() recebe o objeto com os dados do Pokémon. Em caso de erro (por exemplo, um ID inválido), o método .catch() é acionado, permitindo exibir uma mensagem ao usuário.
DOM:
Para montar o card, a aplicação utiliza document.createElement (para criar as tags como <div>, <img>, <h2>, <p>), e appendChild para inserir esses elementos dentro do container principal. Assim, cada vez que o usuário muda de Pokémon, o conteúdo de #cards-container é limpo e reconstruído com as novas informações.
________________________________________
5) Escolha da PokeAPI
A API escolhida para o projeto foi a PokeAPI, que disponibiliza gratuitamente dados sobre os Pokémon de diferentes gerações. A escolha foi motivada por três fatores principais: 
1)	Pokémon é uma franquia de grande sucesso dos anos 90 e 2000; 
2)	A documentação da PokeAPI é clara e de fácil compreensão para iniciantes; 
3)	A API não exige autenticação por token, o que simplifica o processo de consumo dos dados no contexto de um projeto acadêmico.
________________________________________
6) Regras de acesso e documentação da PokeAPI
A PokeAPI é uma API pública e gratuita, que expõe seus recursos a partir da URL base https://pokeapi.co/api/v2/. 

No projeto foi utilizado principalmente o endpoint /pokemon/{id ou nome}, que permite consultar um Pokémon específico informando seu número ou nome. A resposta retorna um objeto JSON contendo campos como id, name, sprites (imagens), types (tipos do Pokémon), height (altura) e weight (peso), entre outros. 
