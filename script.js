document.addEventListener("DOMContentLoaded", function() {
    const rankingElement = document.getElementById('ranking');
    const zastepy = [
        { nazwa: 'Zastęp A', punkty: 350 },
        { nazwa: 'Zastęp B', punkty: 320 },
        { nazwa: 'Zastęp C', punkty: 290 },
        { nazwa: 'Zastęp D', punkty: 280 },
        { nazwa: 'Zastęp E', punkty: 270 },
        { nazwa: 'Zastęp F', punkty: 260 },
        { nazwa: 'Zastęp G', punkty: 250 },
        { nazwa: 'Zastęp H', punkty: 240 },
        { nazwa: 'Zastęp I', punkty: 230 },
        { nazwa: 'Zastęp J', punkty: 220 },
        { nazwa: 'Zastęp K', punkty: 210 },
        { nazwa: 'Zastęp L', punkty: 200 },
        { nazwa: 'Zastęp M', punkty: 190 },
        { nazwa: 'Zastęp N', punkty: 180 },
        { nazwa: 'Zastęp O', punkty: 170 },
        { nazwa: 'Zastęp P', punkty: 160 },
        { nazwa: 'Zastęp Q', punkty: 150 },
        { nazwa: 'Zastęp R', punkty: 140 },
        { nazwa: 'Zastęp S', punkty: 130 },
        { nazwa: 'Zastęp T', punkty: 120 }
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
