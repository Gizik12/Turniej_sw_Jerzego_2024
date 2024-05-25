document.addEventListener("DOMContentLoaded", function() {
    const rankingElement = document.getElementById('ranking');
const zastepy = [
    { nazwa: 'Ametyst', punkty: 17.5 },
    { nazwa: 'Callidus Lupi', punkty: 9 },
    { nazwa: 'Chabry', punkty: 19 },
    { nazwa: 'Corvus', punkty: 14.5 },
    { nazwa: 'Dolina', punkty: 0 },
    { nazwa: 'Dragoni', punkty: 16.5 },
    { nazwa: 'Draco', punkty: 17.5 },
    { nazwa: 'Dzwonki', punkty: 15 },
    { nazwa: 'Filar', punkty: 5 },
    { nazwa: 'Fiołki', punkty: 7 },
    { nazwa: 'Forti Lupi', punkty: 5 },
    { nazwa: 'Gladius', punkty: 0 },
    { nazwa: 'Halit', punkty: 8 },
    { nazwa: 'Ilex', punkty: 0 },
    { nazwa: 'Jastrzębie', punkty: 0 },
    { nazwa: 'Jutrzenka', punkty: 0 },
    { nazwa: 'Kaczki', punkty: 5 },
    { nazwa: 'Kotlina', punkty: 0 },
    { nazwa: 'Lisowczycy', punkty: 17 },
    { nazwa: 'Lisy 35', punkty: 0 },
    { nazwa: 'Lisy 39', punkty: 0 },
    { nazwa: 'Lupi Citi', punkty: 0 },
    { nazwa: 'Nocturnus', punkty: 0 },
    { nazwa: 'Orły', punkty: 0 },
    { nazwa: 'Pancernii', punkty: 14.5 },
    { nazwa: 'Petyhorcy', punkty: 5 },
    { nazwa: 'Prinus', punkty: 0 },
    { nazwa: 'Promienie', punkty: 0 },
    { nazwa: 'Rajtarzy', punkty: 12.5 },
    { nazwa: 'Rapidi Lupi', punkty: 0 },
    { nazwa: 'Rarogi', punkty: 0 },
    { nazwa: 'Sambucus', punkty: 9 },
    { nazwa: 'Sasanki', punkty: 5 },
    { nazwa: 'Salix', punkty: 0 },
    { nazwa: 'Sępy', punkty: 0 },
    { nazwa: 'Sorbus', punkty: 10 },
    { nazwa: 'Szafir', punkty: 9 },
    { nazwa: 'Szwoleżerowie', punkty: 0 },
    { nazwa: 'Urtica', punkty: 0 },
    { nazwa: 'Wilki', punkty: 0 },
    { nazwa: 'Wzgórze', punkty: 0 },
    { nazwa: 'Żubry', punkty: 0 }
];

    // Sortowanie zastępów według liczby punktów, a następnie nazwy
    zastepy.sort((a, b) => {
        if (a.punkty !== b.punkty) {
            return b.punkty - a.punkty; // Sortowanie malejąco po punktach
        } else {
            return a.nazwa.localeCompare(b.nazwa); // Sortowanie alfabetyczne po nazwie
        }
    });

    // Wyświetlanie zastępów na stronie
    zastepy.forEach((zastep, index) => {
        const zastepElement = document.createElement('div');
        zastepElement.classList.add('zastep');
        zastepElement.innerHTML = `
            <div class="numeracja">${index + 1}.</div>
            <div class="nazwa">${zastep.nazwa}</div>
            <div class="punkty">${zastep.punkty} pkt</div>
        `;
        rankingElement.appendChild(zastepElement);
    });
});
