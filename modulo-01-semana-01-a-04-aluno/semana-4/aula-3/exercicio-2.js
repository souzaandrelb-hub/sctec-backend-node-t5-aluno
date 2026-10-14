const filmes = [
    {
        titulo: "Avatar",
        genero: "Aventura"  
    },

    {
        titulo: "Interestelar",
        genero: "Ficção"
    },

    { 
        titulo: "Chico Bento e a Goiabeira",
        genero: "Infantil"
    },

    {
        titulo: "Meu malvado favorito",
        genero: "Infantil"
    },

    {
        titulo: "Monstros S.A.",
        genero: "Infantil"
    }
];

const filme = filmes.find(f => f.titulo === "Interestelar");

console.log(filme);
