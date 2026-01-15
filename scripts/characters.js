const container_personaje = document.getElementById("characters-grid");

fetch("https://thesimpsonsapi.com/api/characters")
    .then(res => res.json())
    .then(data => {
        data.results.forEach(character => {
            container_personaje.appendChild(createCard(character));
        });
    })

function createCard(personaje) {
    const article = document.createElement("article");
    article.classList.add("character-card");

    const div_img = document.createElement("div");

    const img = document.createElement("img");
    img.src = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
    img.alt = `Foto de ${personaje.name}`;
    div_img.appendChild(img);
    article.appendChild(div_img);


    return article;
}