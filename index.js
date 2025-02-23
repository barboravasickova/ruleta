let cislo = Number(prompt('Zadejte číslo'));

// Pro čísla 1 až 10 a 19 až 28 platí, že lichá čísla jsou červená a sudá jsou černá. 
// Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená.

if (cislo === 0) {
    document.body.innerHTML += '<p class="nula">' + cislo + '</p>'
} else if (cislo >= 1 && cislo <= 10) {
    if (cislo % 2 === 0 ) {
        document.body.innerHTML += '<p class="sude1">' + cislo + '</p>'
    } else if (cislo % 2 !== 0) {
        document.body.innerHTML += '<p class="liche1">' + cislo + '</p>'
    }
} else if (cislo >= 19 && cislo <= 28) {
    if (cislo % 2 === 0 ) {
        document.body.innerHTML += '<p class="sude1">' + cislo + '</p>'
    } else if (cislo % 2 !== 0) {
        document.body.innerHTML += '<p class="liche1">' + cislo + '</p>'
    }
} else if (cislo >= 11 && cislo <= 18) {
    if (cislo % 2 === 0) {
        document.body.innerHTML += '<p class="sude2">' + cislo + '</p>'
    } else if (cislo % 2 !== 0) {
        document.body.innerHTML += '<p class="liche2">' + cislo + '</p>'
    }
} else if (cislo >= 29 && cislo <= 36) 
    if (cislo % 2 === 0) {
        document.body.innerHTML += '<p class="sude2">' + cislo + '</p>'
    } else if (cislo % 2 !== 0) {
        document.body.innerHTML += '<p class="liche2">' + cislo + '</p>'
    };
