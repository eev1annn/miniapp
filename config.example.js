// Конфигурация для Telegram Mini App
// Скопируйте этот файл как config.js и укажите ваши настройки

const config = {
    // Токен бота (получите от @BotFather)
    BOT_TOKEN: 'YOUR_BOT_TOKEN_HERE',
    
    // URL вашего Mini App (должен быть HTTPS)
    MINI_APP_URL: 'https://yourdomain.com/miniapp',
    
    // Настройки приложения
    APP_NAME: 'My Mini App',
    APP_SHORT_NAME: 'miniapp',
    APP_DESCRIPTION: 'Описание вашего Mini App'
};

// Не изменяйте эту строку
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}