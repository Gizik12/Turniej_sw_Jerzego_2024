document.addEventListener("DOMContentLoaded", function() {
    const rankingElement = document.getElementById('ranking');
const zastepy = [
    { nazwa: 'Ametyst', punkty: 55 },
    { nazwa: 'Callidus Lupi', punkty: 69.5 },
    { nazwa: 'Chabry', punkty: 44 },
    { nazwa: 'Corvus', punkty: 29 },
    { nazwa: 'Dragoni', punkty: 57.5 },
    { nazwa: 'Draco', punkty: 54.5 },
    { nazwa: 'Dzwonki', punkty: 28 },
    { nazwa: 'Filar', punkty: 17.5 },
    { nazwa: 'Fiołki', punkty: 38 },
    { nazwa: 'Forti Lupi', punkty: 26 },
    { nazwa: 'Gladius', punkty: 54 },
    { nazwa: 'Halit', punkty: 36 },
    { nazwa: 'Jastrzębie', punkty: 34 },
    { nazwa: 'Jutrzenka', punkty: 15 },
    { nazwa: 'Kaczki', punkty: 65 },
    { nazwa: 'Lisowczycy', punkty: 63 },
    { nazwa: 'Lisy 35', punkty: 22 },
    { nazwa: 'Lisy 39', punkty: 25 },
    { nazwa: 'Lupi Citi', punkty: 14},
    { nazwa: 'Nocturnus', punkty: 36 },
    { nazwa: 'Pancernii', punkty: 62.5 },
    { nazwa: 'Petyhorcy', punkty: 49 },
    { nazwa: 'Prinus', punkty: 88 },
    { nazwa: 'Promienie', punkty: 53.5 },
    { nazwa: 'Rajtarzy', punkty: 50 },
    { nazwa: 'Rapidi Lupi', punkty: 25 },
    { nazwa: 'Rarogi', punkty: 31 },
    { nazwa: 'Sambucus', punkty: 67.5 },
    { nazwa: 'Sasanki', punkty: 32 },
    { nazwa: 'Sępy', punkty: 26 },
    { nazwa: 'Sorbus', punkty: 19.5 },
    { nazwa: 'Szafir', punkty: 15 },
    { nazwa: 'Urtica', punkty: 33 },
    { nazwa: 'Wilki', punkty: 22 },
    { nazwa: 'Wzgórze', punkty: 48 },
    { nazwa: 'Żubry', punkty: 23 },
    { nazwa: 'Zielone mgły', punkty: 27 },
    {nazwa: 'Pingwiny', punkty: 21.5 }
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
