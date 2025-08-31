Ext.application({
    name: 'EmptyApp',

    requires: [
        'Ext.container.Viewport',
        'EmptyApp.model.Product',
        'EmptyApp.store.Products',
        'EmptyApp.view.catalog.ProductsGrid',
        'EmptyApp.view.catalog.ProductCard'
    ],

    controllers: ['Login'],

    views: ['login.Form'],
    launch: function () {
        var isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: []
        });

        if (isAuthenticated) {
            viewport.add({
                xtype: 'panel',
                title: 'Главная страница',
                width: '100%',
                height: '100%',
                layout: 'fit',
                tbar: [
                    {
                        xtype: 'button',
                        text: 'Товары',
                        handler: function () {
                            var mainPanel = this.up('panel');
                            var tabPanel = mainPanel.down('tabpanel');

                            // Create a new catalog tab each time
                            var catalogTab = tabPanel.add({
                                title: 'Товары',
                                xtype: 'productsgrid',
                                closable: true
                            });

                            tabPanel.setActiveTab(catalogTab);
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Выйти',
                        handler: function () {
                            localStorage.removeItem('isAuthenticated');

                            window.location.reload();
                        }
                    }
                ],
                items: [
                    {
                        xtype: 'tabpanel',
                        activeTab: 0,
                        items: []
                    }
                ]
            });
        } else {
            viewport.add({
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'loginform'
                    }
                ]
            });
        }
    }
});
