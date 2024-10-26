// Referências para as telas
const lockScreen = document.getElementById('lock-screen');
const homeScreen = document.getElementById('home-screen');
const appScreens = document.querySelectorAll('.app-screen');

// Função para desbloquear a tela
lockScreen.addEventListener('click', () => {
    lockScreen.classList.remove('active');
    homeScreen.classList.add('active');
});

// Função para abrir um aplicativo
document.querySelectorAll('.app-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const appId = icon.getAttribute('data-app') + '-app';
        openApp(appId);
    });
});

// Função para exibir a tela de um aplicativo
function openApp(appId) {
    homeScreen.classList.remove('active');
    appScreens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(appId).classList.add('active');
}

// Voltar para a tela inicial ao clicar na tela de um app
appScreens.forEach(screen => {
    screen.addEventListener('click', () => {
        screen.classList.remove('active');
        homeScreen.classList.add('active');
    });
});