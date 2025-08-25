// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Инициализация приложения
function initApp() {
    // Разворачиваем приложение на полный экран
    tg.expand();
    
    // Включаем закрытие по свайпу вниз
    tg.enableClosingConfirmation();
    
    // Получаем информацию о пользователе
    const user = tg.initDataUnsafe?.user;
    const userName = document.getElementById('user-name');
    
    if (user) {
        userName.textContent = user.first_name + (user.last_name ? ' ' + user.last_name : '');
    } else {
        userName.textContent = 'Неизвестный пользователь';
    }
    
    // Настраиваем главную кнопку
    tg.MainButton.text = "Отправить данные";
    tg.MainButton.show();
    
    // Обработчик для главной кнопки
    tg.MainButton.onClick(() => {
        tg.sendData(JSON.stringify({
            action: 'main_button_clicked',
            user_id: user?.id,
            timestamp: Date.now()
        }));
    });
}

// Обработчики событий для кнопок
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    
    // Обработчик для кнопки "Главная кнопка"
    const mainButton = document.getElementById('main-button');
    mainButton.addEventListener('click', function() {
        tg.showAlert('Кнопка нажата!');
    });
    
    // Обработчик для кнопки "Закрыть приложение"
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function() {
        tg.close();
    });
});

// Обработчик изменения темы
tg.onEvent('themeChanged', function() {
    document.body.className = tg.colorScheme;
});

// Применяем начальную тему
document.body.className = tg.colorScheme;