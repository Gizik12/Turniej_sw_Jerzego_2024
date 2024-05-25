document.addEventListener("DOMContentLoaded", function() {
    const rankingElement = document.getElementById('ranking');
const zastepy = [
    { nazwa: 'Ametyst', punkty: 0 },
    { nazwa: 'Callidus Lupi', punkty: 9 },
    { nazwa: 'Chabry', punkty: 0 },
    { nazwa: 'Corvus', punkty: 8 },
    { nazwa: 'Dolina', punkty: 0 },
    { nazwa: 'Dragoni', punkty: 8.5 },
    { nazwa: 'Draco', punkty: 9.5 },
    { nazwa: 'Dzwonki', punkty: 0 },
    { nazwa: 'Filar', punkty: 0 },
    { nazwa: 'Fiołki', punkty: 0 },
    { nazwa: 'Forti Lupi', punkty: 5 },
    { nazwa: 'Gladius', punkty: 0 },
    { nazwa: 'Halit', punkty: 8 },
    { nazwa: 'Ilex', punkty: 0 },
    { nazwa: 'Jastrzębie', punkty: 0 },
    { nazwa: 'Jutrzenka', punkty: 0 },
    { nazwa: 'Kaczki', punkty: 5 },
    { nazwa: 'Kotlina', punkty: 0 },
    { nazwa: 'Lisowczycy', punkty: 8 },
    { nazwa: 'Lisy 35', punkty: 0 },
    { nazwa: 'Lisy 39', punkty: 0 },
    { nazwa: 'Lupi Citi', punkty: 0 },
    { nazwa: 'Nocturnus', punkty: 0 },
    { nazwa: 'Orły', punkty: 0 },
    { nazwa: 'Pancernii', punkty: 5.5 },
    { nazwa: 'Petyhorcy', punkty: 5 },
    { nazwa: 'Prinus', punkty: 0 },
    { nazwa: 'Promienie', punkty: 0 },
    { nazwa: 'Rajtarzy', punkty: 4.5 },
    { nazwa: 'Rapidi Lupi', punkty: 0 },
    { nazwa: 'Rarogi', punkty: 0 },
    { nazwa: 'Sambucus', punkty: 0 },
    { nazwa: 'Sasanki', punkty: 0 },
    { nazwa: 'Salix', punkty: 0 },
    { nazwa: 'Sępy', punkty: 0 },
    { nazwa: 'Sorbus', punkty: 6 },
    { nazwa: 'Szafir', punkty: 4 },
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
