Ext.application({
    name: 'EmptyApp',

    requires: [
        'Ext.container.Viewport'
    ],

    controllers: [
        'Login'
    ],

    views: [
        'login.Form'
    ],
    launch: function() {
        var isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

        var viewport = Ext.create('Ext.container.Viewport', {
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: []
        });

        if (isAuthenticated) {
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
            viewport.add({
                xtype: 'loginform'
            });
        }
    }
});
