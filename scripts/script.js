const frases = ["André Axt Bächtold", "sdhsajdhsajsakdsadsa", "sjdksadjsakjdsak"];
let frasesIndex = 0;

function updatePhrase() {
    const typewriter = document.getElementById("typewriter");
    const currentPhrase = frases[frasesIndex];
    
    typewriter.style.setProperty('--characters', currentPhrase.length);
    typewriter.textContent = currentPhrase;
    
    frasesIndex = (frasesIndex + 1) % frases.length;
}

setInterval(updatePhrase, 4000);
updatePhrase();