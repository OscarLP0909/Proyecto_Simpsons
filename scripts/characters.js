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
    img.src = `https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}`;
    img.alt = `Foto de ${personaje.name}`;
    img.classList.add("character-img");
    div_img.appendChild(img);
    article.appendChild(div_img);

    const name = document.createElement("h2");
    name.classList.add("character-name");
    name.textContent = personaje.name;
    article.appendChild(name);

    const occupation = document.createElement("p");
    occupation.classList.add("character-occupation");
    occupation.textContent = personaje.occupation;

    article.appendChild(occupation);


    const div_age_status = document.createElement("div");
    div_age_status.classList.add("div-status-age");

    const age = document.createElement("p");
    age.classList.add("character-age");
    if(personaje.age !== null){
        age.textContent = `Age: ${personaje.age}`;
    } else{
        age.textContent = "Edad no registrada";
    }
    div_age_status.appendChild(age);

    const status = document.createElement("p");
    status.classList.add("character-status");
    status.textContent = personaje.status;
    div_age_status.appendChild(status);

    article.appendChild(div_age_status);

    
    const phrase = personaje.phrases
    if (phrase.length > 0) {
        const indexRandom = Math.floor(Math.random() * phrase.length);
        const phrasePrint = document.createElement("p");
        phrasePrint.classList.add("character-phrase");
        phrasePrint.textContent = phrase[indexRandom];

        article.appendChild(phrasePrint);
    };


    return article;
}