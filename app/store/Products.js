Ext.define('EmptyApp.store.Products', {
    extend: 'Ext.data.Store',

    model: 'EmptyApp.model.Product',
    storeId: 'products',

    pageSize: 15,
    remoteSort: false,
    remoteFilter: false,
    autoLoad: true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },

    data: [
        { id: 1, name: 'Ноутбук', description: 'Мощный ноутбук для работы', price: 75000, quantity: 10 },
        { id: 2, name: 'Смартфон', description: 'Современный смартфон с хорошей камерой', price: 45000, quantity: 15 },
        { id: 3, name: 'Планшет', description: 'Планшет для развлечений и работы', price: 35000, quantity: 8 },
        { id: 4, name: 'Монитор', description: 'Большой монитор с высоким разрешением', price: 25000, quantity: 5 },
        { id: 5, name: 'Клавиатура', description: 'Механическая клавиатура для геймеров', price: 5000, quantity: 0 },
        { id: 6, name: 'Мышь', description: 'Беспроводная мышь с высокой точностью', price: 2500, quantity: 0 },
        { id: 7, name: 'Наушники', description: 'Беспроводные наушники с шумоподавлением', price: 15000, quantity: 12 },
        { id: 8, name: 'Колонки', description: 'Мощные колонки для компьютера', price: 8000.0, quantity: 7 },
        { id: 9, name: 'Веб-камера', description: 'HD веб-камера для видеоконференций', price: 3500, quantity: 3 },
        { id: 10, name: 'Роутер', description: 'Высокоскоростной Wi-Fi роутер', price: 4500.0, quantity: 0 },
        { id: 11, name: 'Принтер', description: 'Цветной лазерный принтер для офиса', price: 18000, quantity: 4 },
        { id: 12, name: 'Сканер', description: 'Высокоскоростной сканер документов', price: 12000, quantity: 2 },
        {
            id: 13,
            name: 'Графический планшет',
            description: 'Планшет для рисования и дизайна',
            price: 22000,
            quantity: 0
        },
        { id: 14, name: 'Внешний жесткий диск', description: 'Портативный жесткий диск 2TB', price: 6500, quantity: 9 },
        { id: 15, name: 'SSD накопитель', description: 'Быстрый SSD диск 1TB', price: 9000, quantity: 11 },
        { id: 16, name: 'Игровая приставка', description: 'Современная игровая консоль', price: 40000, quantity: 6 },
        { id: 17, name: 'Проектор', description: 'HD проектор для домашнего кинотеатра', price: 35000, quantity: 0 },
        {
            id: 18,
            name: 'Умные часы',
            description: 'Смарт-часы с функцией мониторинга здоровья',
            price: 15000,
            quantity: 8
        },
        {
            id: 19,
            name: 'Электронная книга',
            description: 'Устройство для чтения электронных книг',
            price: 8500,
            quantity: 5
        },
        {
            id: 20,
            name: 'Видеокарта',
            description: 'Мощная видеокарта для игр и работы с графикой',
            price: 55000,
            quantity: 0
        },
        { id: 21, name: 'Микрофон', description: 'Студийный микрофон для записи звука', price: 12000, quantity: 7 },
        { id: 22, name: 'Сетевой фильтр', description: 'Защита от скачков напряжения', price: 1500, quantity: 20 },
        {
            id: 23,
            name: 'Док-станция',
            description: 'Универсальная док-станция для ноутбука',
            price: 8000,
            quantity: 0
        },
        {
            id: 24,
            name: 'Bluetooth-адаптер',
            description: 'Адаптер для подключения Bluetooth устройств',
            price: 800,
            quantity: 15
        },
        {
            id: 25,
            name: 'Веб-камера 4K',
            description: 'Веб-камера с разрешением 4K для стриминга',
            price: 7500,
            quantity: 3
        },
        {
            id: 26,
            name: 'Игровой руль',
            description: 'Руль с педалями для гоночных симуляторов',
            price: 15000,
            quantity: 0
        },
        { id: 27, name: 'Сервер', description: 'Сервер для малого бизнеса', price: 120000.0, quantity: 2 },
        { id: 28, name: 'Сетевое хранилище', description: 'NAS для хранения данных', price: 35000, quantity: 4 },
        {
            id: 29,
            name: 'Графическая станция',
            description: 'Мощный компьютер для работы с графикой',
            price: 180000,
            quantity: 0
        },
        { id: 30, name: 'Мини-ПК', description: 'Компактный компьютер для офиса', price: 25000, quantity: 8 }
    ]
});
