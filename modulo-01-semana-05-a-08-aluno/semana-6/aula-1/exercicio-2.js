class Jogo {
    static jogos = [];

    constructor(titulo, genero, plataforma, classificacao) {
        this.titulo = titulo;
        this.genero = genero;
        this. plataforma = plataforma;
        this.classificacao = classificacao;

         Jogo.jogos.push(this);
        

    }
   
}

const jogo1 = new Jogo("Super Mario Odyssey", "Aventura", "Nintendo Switch", "Livre");

const jogo2 = new Jogo("Sonic Mania", "Plataforma",  "PlayStatio 4", "Livre");

const jogo3 = new Jogo("Battle Royale", "Ação", "PlayStation 5", "12 anos");

const jogo4 = new Jogo("Counter-Strike 2", "FPS",  "PC", "16 anos");

console.log(Jogo.jogos);

Jogo.jogos.forEach((jogo) => {
    console.log(`Jogo: ${jogo.titulo} / Plataforma: ${jogo.plataforma}`);    
})

console.log("-----------------------------------------------------------");

Jogo.jogos[1].plataforma = "Xbox One";

console.log(`Jogo: ${Jogo.jogos[1].titulo} / Plataforma: ${Jogo.jogos[1].plataforma}`);
