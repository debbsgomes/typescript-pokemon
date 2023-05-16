import express, { Application, Request, Response } from 'express'

/**
 * importa o framework ; importa a interface (mostra metodos disponiveis para utilizar) da aplicação, a request (o pedido do usuario para a acessas as informações da API) e 
 * da response (a reposta da API a requisição); 
 */

const app: Application = express() //Esta iniciando / instanciando a aplicação

/**
 * Path é o caminho até o endpoint
 * Endpoint é o ponto final da aplicação que retorna o recurso (dados) requisitado
 */

app.get("/path/endpoint", (request: Request, response: Response) => {
    response.send("Puta Que Pariu")
})
//app.get = servir o endpoint da aplicação para quem faz o request


/*
Esta porra diz qual é o tipo de dado guardado dentro da variável criando uma interface para o corno que vier depois saber qual é o tipo de dado
*/
type Pokemontype = {
    nome: string
    tipos: Array<string>
    habilidades: Array<string>
    golpes: Array<string>
    cores: Array<string>
    velocidade: number
    hp: number
    ataque: number
    defesa: number
    ataqueEspecial: number
    defesaEspecial: number
}

class Pokedex extends Array<Pokemontype>{
    

    }
 //Porque tem que ter uma classe para usar embaixo


const pokemons: Pokedex = [
    {
        nome: "Pikachu",
        tipos: ["eletrico"],
        habilidades: ["static"],
        golpes: ["thundershock", "thunder wave", "quick attack", "mega punch"],
        cores: ["amarelo", "marrom", "preto", "vermelho"],
        velocidade: 90,
        hp: 35,
        ataque: 55,
        defesa: 40,
        ataqueEspecial: 50,
        defesaEspecial: 50,
    },
    {
        nome: "Bulbasaur",
        tipos: ["grama", "venenoso"],
        habilidades: ["overgrow"],
        golpes: ["tackle", "sleep powder", "razor leaf", "poison powder"],
        cores: ["verde", "vermelho"],
        velocidade: 45,
        hp: 45,
        ataque: 49,
        defesa: 49,
        ataqueEspecial: 65,
        defesaEspecial: 65
    },
    {
        nome: "Psyduck",
        tipos: ["agua"],
        habilidades: ["dump", "cloud nine"],
        golpes: ["water pulse", "confusion", "disable", "furry swipes"],
        cores: ["amarelo", "preto"],
        velocidade: 55,
        hp: 50,
        ataque: 52,
        defesa: 48,
        ataqueEspecial: 65,
        defesaEspecial: 50
    },
    {
        nome: "Arceus",
        tipos: ["normal"],
        habilidades: ["multitype"],
        golpes: ["cosmic power", "earth power", "extreme speed", "healing wish"],
        cores: ["branco", "ouro"],
        velocidade: 120,
        hp: 120,
        ataque: 120,
        defesa: 120,
        ataqueEspecial: 120,
        defesaEspecial: 120
    },
    {
        nome: "Snorlax",
        tipos: ["normal"],
        habilidades: ["immunity", "thick fat"],
        golpes: ["yawn", "rest", "crunch", "body slam"],
        cores: ["musgo", "bege"],
        velocidade: 30,
        hp: 160,
        ataque: 110,
        defesa: 65,
        ataqueEspecial: 65,
        defesaEspecial: 110
    },
    {
        nome: "Gengar",
        tipos: ["fantasma", "venenoso"],
        habilidades: ["cursed body"],
        golpes: ["hypnosis", "mean look", "shadow punch", "night shade"],
        cores: ["roxo", "branco"],
        velocidade: 110,
        hp: 60,
        ataque: 65,
        defesa: 60,
        ataqueEspecial: 130,
        defesaEspecial: 75
    },
    {
        nome: "Charizard",
        tipos: ["fogo", "voador"],
        habilidades: ["blaze"],
        golpes: ["flamethrower", "slash", "dragon breath", "fly"],
        cores: ["laranja", "musgo", "bege"],
        velocidade: 100,
        hp: 78,
        ataque: 84,
        defesa: 78,
        ataqueEspecial: 109,
        defesaEspecial: 85
    },
    {
        nome: "Dragonite",
        tipos: ["dragão", "voador"],
        habilidades: ["inner focus"],
        golpes: ["hyper beam", "dragon dance", "outrage", "aqua tail"],
        cores: ["laranja", "bege", "musgo"],
        velocidade: 80,
        hp: 91,
        ataque: 134,
        defesa: 95,
        ataqueEspecial: 100,
        defesaEspecial: 100
    },
    {
        nome: "Vaporeon",
        tipos: ["agua"],
        habilidades: ["water absorb"],
        golpes: ["surf", "blizzard", "last resort", "baby-doll eyes"],
        cores: ["azul", "branco", "ouro"],
        velocidade: 65,
        hp: 130,
        ataque: 65,
        defesa: 60,
        ataqueEspecial: 110,
        defesaEspecial: 95
    },
    {
        nome: "Persian",
        tipos: ["normal"],
        habilidades: ["limber", "technician"],
        golpes: ["pay day", "slash", "play rough", "bite"],
        cores: ["bege", "vermelho"],
        velocidade: 115,
        hp: 65,
        ataque: 70,
        defesa: 60,
        ataqueEspecial: 65,
        defesaEspecial: 65
    }
]

//API serve para facilitar o acesso de um recurso

app.get("/game/pokemon/pokedex/nome/:nome", (request: Request, response: Response) => {
    const nome = request.params.nome
    const pokemon = pokemons.find((pokemon: Pokemontype) => pokemon.nome==nome)
    console.log (pokemon)
    if (pokemon) {
        return response.status(200).json(pokemon)
    }
    response.status(404).json({mensagem: "pokemon não encontrado"}) 
})

//devolvendo para o front o Pokemão pelo indíce solicitado

app.get("/game/pokemon/pokedex/velocidade/:velocidade", (request: Request, response: Response) => {
    const velocidade = request.params.velocidade
    const pokemon = pokemons.find((pokemon: Pokemontype) => pokemon.velocidade.toString()==velocidade)
    console.log (pokemon)
    if (pokemon) {
        return response.status(200).json(pokemon)
    }
    response.status(404).json({mensagem: "nenhum pokemon com essa velocidade encontrado"})
})

app.get("/game/pokemon/pokedex/busca/:habilidade", (request: Request, response: Response) => {
    const habilidadeRequest = request.params.habilidade
    const pokemon = pokemons.find(function (pokemon:Pokemontype){
        const habilidadeEncontrada = pokemon.habilidades.find(function (habilidade: string){
            console.log (habilidade,habilidadeRequest)
            return habilidade==habilidadeRequest
        })
        if (habilidadeEncontrada) return true
        console.log (pokemon.nome)
        return false
    })
    if (pokemon) {
        return response.status(200).json(pokemon)
    }
    response.status(404).json({mensagem: "nenhum pokemon com a habilidade encontrada"})
})

app.get("/game/pokemons/pokedex/busca/:tipo", (request: Request, response: Response) => {
    const tipoRequest = request.params.tipo //pega o parametro que o usuário manda (entrada de dados)
    const pokemonsEncontrados = pokemons.filter(function (pokemon:Pokemontype){ //filtra 1 ou mais pokemons e retorna um array
        const tipoEncontrado = pokemon.tipos.find(function (tipo: string){ //encontra um tipo
            console.log (tipo,tipoRequest) //informa o tipo que foi requisitado
            return tipo==tipoRequest 
        })
        if (tipoEncontrado) return true //se encontrar pokemons do tipo pedido retorna true
        console.log (pokemon.nome) //exibe o nome dos pokemons
        return false //aqui tem um else, mas de acordo com o nerd tetudo do codigo limpo não se usa else
    })
    if (pokemonsEncontrados.length > 0) { //validando se encontrou os pokemao
        return response.status(200).json(pokemonsEncontrados)
    }
    response.status(404).json({mensagem: "nenhum pokemon com esse tipo encontrado"})
})

//primeiro find = entrar dentro do Pokemon && segundo find = encontrar a habilidade que esta procurando

export default app // exportando a aplicação para quem quiser usar