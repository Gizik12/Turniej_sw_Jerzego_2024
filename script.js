document.addEventListener("DOMContentLoaded", function() {
    const rankingElement = document.getElementById('ranking');
const zastepy = [
    { nazwa: 'Ametyst', punkty: 122.0 },
    { nazwa: 'Callidus Lupi', punkty: 142.0 },
    { nazwa: 'Chabry', punkty: 68.0 },
    { nazwa: 'Corvus', punkty: 94.5 },
    { nazwa: 'Dragoni', punkty: 146.5 },
    { nazwa: 'Draco', punkty: 138.5 },
    { nazwa: 'Dzwonki', punkty: 59.0 },
    { nazwa: 'Filar', punkty: 78.5 },
    { nazwa: 'Fiołki', punkty: 62.0 },
    { nazwa: 'Forti Lupi', punkty: 91.0 },
    { nazwa: 'Gladius', punkty: 145.0 },
    { nazwa: 'Halit', punkty: 118.5 },
    { nazwa: 'Jasrzębie', punkty: 69.0 },
    { nazwa: 'Jutrzenka', punkty: 93.0 },
    { nazwa: 'Kaczki', punkty: 118.0 },
    { nazwa: 'Lisowczycy', punkty: 144.0 },
    { nazwa: 'Lisi 35', punkty: 73.5 },
    { nazwa: 'Lisi 39', punkty: 71.0 },
    { nazwa: 'Lupi Citi', punkty: 62.5 },
    { nazwa: 'Nocturnus', punkty: 132.5 },
    { nazwa: 'Pancernii', punkty: 192.5 },
    { nazwa: 'Petyhorcy', punkty: 131.0 },
    { nazwa: 'Prinus', punkty: 201.5 },
    { nazwa: 'Promienie', punkty: 125.5 },
    { nazwa: 'Rajtarzy', punkty: 151.0 },
    { nazwa: 'Rapidi Lupi', punkty: 91.5 },
    { nazwa: 'Rarogi', punkty: 102.5 },
    { nazwa: 'Sambucus', punkty: 160.0 },
    { nazwa: 'Sasanki', punkty: 57.0 },
    { nazwa: 'Sępy', punkty: 46.0 },
    { nazwa: 'Sorbus', punkty: 114.5 },
    { nazwa: 'Szafir', punkty: 96.0 },
    { nazwa: 'Urtica', punkty: 114.0 },
    { nazwa: 'Wilki', punkty: 80.0 },
    { nazwa: 'Wzgórze', punkty: 125.5 },
    { nazwa: 'Żubry', punkty: 66.0 },
    { nazwa: 'Zielone mgły', punkty: 89.5 },
    { nazwa: 'Pingwiny', punkty: 63.0 }
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
