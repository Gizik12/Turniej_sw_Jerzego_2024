document.addEventListener("DOMContentLoaded", function() {
    const rankingElement = document.getElementById('ranking');
const zastepy = [
    { nazwa: 'Ametyst', punkty: 40.5 },
    { nazwa: 'Callidus Lupi', punkty: 32 },
    { nazwa: 'Chabry', punkty: 38 },
    { nazwa: 'Corvus', punkty: 20 },
    { nazwa: 'Dolina', punkty: 0 },
    { nazwa: 'Dragoni', punkty: 32.5 },
    { nazwa: 'Draco', punkty: 38.5 },
    { nazwa: 'Dzwonki', punkty: 24 },
    { nazwa: 'Filar', punkty: 14.5 },
    { nazwa: 'Fiołki', punkty: 31 },
    { nazwa: 'Forti Lupi', punkty: 20.5 },
    { nazwa: 'Gladius', punkty: 22 },
    { nazwa: 'Halit', punkty: 22 },
    { nazwa: 'Ilex', punkty: 0 },
    { nazwa: 'Jastrzębie', punkty: 17 },
    { nazwa: 'Jutrzenka', punkty: 7 },
    { nazwa: 'Kaczki', punkty: 55 },
    { nazwa: 'Kotlina', punkty: 0 },
    { nazwa: 'Lisowczycy', punkty: 45 },
    { nazwa: 'Lisy 35', punkty: 19 },
    { nazwa: 'Lisy 39', punkty: 8 },
    { nazwa: 'Lupi Citi', punkty: 11},
    { nazwa: 'Nocturnus', punkty: 26.5 },
    { nazwa: 'Orły', punkty: 0 },
    { nazwa: 'Pancernii', punkty: 36.5 },
    { nazwa: 'Petyhorcy', punkty: 23 },
    { nazwa: 'Prinus', punkty: 51 },
    { nazwa: 'Promienie', punkty: 20.5 },
    { nazwa: 'Rajtarzy', punkty: 35.5 },
    { nazwa: 'Rapidi Lupi', punkty: 4 },
    { nazwa: 'Rarogi', punkty: 16 },
    { nazwa: 'Sambucus', punkty: 47.5 },
    { nazwa: 'Sasanki', punkty: 29 },
    { nazwa: 'Salix', punkty: 0 },
    { nazwa: 'Sępy', punkty: 14 },
    { nazwa: 'Sorbus', punkty: 15.5 },
    { nazwa: 'Szafir', punkty: 13 },
    { nazwa: 'Szwoleżerowie', punkty: 0 },
    { nazwa: 'Urtica', punkty: 13 },
    { nazwa: 'Wilki', punkty: 18 },
    { nazwa: 'Wzgórze', punkty: 16 },
    { nazwa: 'Żubry', punkty: 8 },
    { nazwa: 'Zielone mgły', punkty: 27 },
    {nazwa: 'Pingwiny', punkty: 11 }
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
