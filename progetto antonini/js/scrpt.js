function divisore() {
    const divisori = [1];

    let input = parseInt(document.getElementById("input").value);
    let risultato = document.getElementById("risultato");
    let div = document.getElementById("divisori");

    if(input<=0) {
        input = 0;
        risultato.innerHTML = "Numero 0 non ha divisori";
        div.innerHTML = "";
        return;
    }else if(input == 1) {
        risultato.innerHTML = "Numero divisori: 1";
        div.innerHTML = "1";
        return;
    }

    for(let i=2; i<=input/2; i++) {
        if(input%i == 0) {
            divisori.push(i);
        }
    }
    divisori.push(input);
    risultato.innerHTML = "Numero divisori: " + divisori.length;

    if(divisori.length==2){
        risultato.innerHTML += "<br>" + "Il numero è primo";
        risultato.classList.add("bg-danger");
    }else {
        risultato.classList.remove("bg-danger");
    }

    div.innerHTML = divisori.join(" - ");
}

function caricamento() {
    let c = document.getElementById("s");

    c.classList.add("d-none");
}
