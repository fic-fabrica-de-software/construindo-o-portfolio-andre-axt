
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


window.addEventListener("DOMContentLoaded", function() {

    if (window.location.pathname.endsWith("/index.html") || window.location.pathname === "/") {
        document.body.addEventListener("click", function() {

            gsap.to("body", {
                opacity: 0,
                duration: 1,
                onComplete: function() {
                    window.location.href = "./public/inicio.html";
                }
            })
        });
    }
});
