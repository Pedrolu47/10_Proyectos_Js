let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = '❌';

const casillas = document.querySelectorAll('.casilla');
const reiniciarBtn = document.getElementById('reiniciar');

casillas.forEach((casilla, index) => {
  casilla.addEventListener('click', () => {
    if (tablero[index] === '') {
      tablero[index] = jugadorActual;
      casilla.textContent = jugadorActual;
      comprobarGanador();
      jugadorActual = jugadorActual === '❌' ? '⭕' : '❌';
    }
  });
});

reiniciarBtn.addEventListener('click', () => {
  tablero = ['', '', '', '', '', '', '', '', ''];
  jugadorActual = '❌';
  casillas.forEach(casilla => casilla.textContent = '');
});

function comprobarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combinacion of combinacionesGanadoras) {
    if (
      tablero[combinacion[0]] !== '' &&
      tablero[combinacion[0]] === tablero[combinacion[1]] &&
      tablero[combinacion[0]] === tablero[combinacion[2]]
    ) {
      alert(`Ganador: ${tablero[combinacion[0]]}`);
      return;
    }
  }
}