const musicPlayer = document.getElementById('musicPlayer');
const som = document.getElementById('som');
const click = document.getElementById('click');

const faixas = [
    "76 Inside Ganon's Castle.mp3",
    "13. Overworld (Yoshi).mp3",
    "01- Sonic-1-Music-Green-Hill-Zone.mp3",
    "street fighter - ryu's theme.mp3",
    "03 DK Island Swing.mp3"
];

let corrente = 0;

click.addEventListener('click', () => {
    // Muda para a próxima música no array
    corrente = (corrente + 1) % faixas.length;
    som.src = faixas[corrente];
    musicPlayer.load();
    musicPlayer.play();
});