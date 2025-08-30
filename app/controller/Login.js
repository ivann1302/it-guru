Ext.define('EmptyApp.controller.Login', {
    extend: 'Ext.app.Controller',

    views: ['login.Form'],

    init: function() {
        this.control({
            'loginform button[text="Войти"]': {
                click: this.onLoginClick
            }
        });
    },

    onLoginClick: function(button) {
        var form = button.up('form'),
            values = form.getValues(),
            username = values.username,
            password = values.password;

        this.simulateAuthRequest(username, password, function(success, response) {
            if (success) {
                localStorage.setItem('isAuthenticated', 'true');

                var viewport = Ext.ComponentQuery.query('viewport')[0];
                viewport.removeAll();

                viewport.add({
                    xtype: 'panel',
                    title: 'Главная страница',
                    width: '80%',
                    height: 500,
                    layout: 'fit',
                    tbar: [{
                        xtype: 'button',
                        text: 'Товары',
                        handler: function() {
                            var tabPanel = Ext.ComponentQuery.query('tabpanel')[0];

                            // Create a new catalog tab each time
                            var catalogTab = tabPanel.add({
                                title: 'Каталог',
                                html: 'Здесь будет каталог товаров',
                                closable: true
                            });

                            tabPanel.setActiveTab(catalogTab);
                        }
                    }, {
                        xtype: 'button',
                        text: 'Выйти',
                        handler: function() {
                            localStorage.removeItem('isAuthenticated');

                            window.location.reload();
                        }
                    }],
                    items: [{
                        xtype: 'tabpanel',
                        activeTab: 0,
                        items: [{
                            title: 'Главная',
                            html: 'Добро пожаловать в приложение!'
                        }]
                    }]
                });
            } else {
                Ext.Msg.alert('Login Failed', response.message);
            }
        });
    },

    simulateAuthRequest: function(username, password, callback) {
        Ext.defer(function() {
            if (username === 'admin' && password === 'padmin') {
                callback(true, {
                    success: true,
                    message: 'Authentication successful'
                });
            } else {
                callback(false, {
                    success: false,
                    message: 'Invalid username or password'
                });
            }
        }, 500);
    }
});
