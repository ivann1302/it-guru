Ext.define('EmptyApp.view.catalog.ProductsGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'productsgrid',

    requires: [
        'Ext.grid.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Number',
        'Ext.toolbar.Paging',
        'EmptyApp.store.Products',
        'EmptyApp.view.catalog.ProductCard'
    ],

    layout: 'border',

    items: [
        {
            region: 'north',
            xtype: 'panel',
            height: 80,
            layout: {
                type: 'hbox',
                align: 'middle',
                padding: 10
            },
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ID товара',
                    labelWidth: 80,
                    width: 180,
                    minValue: 1,
                    allowDecimals: false,
                    itemId: 'idFilter',
                    enableKeyEvents: true,
                    listeners: {
                        keydown: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                var grid = field.up('panel').up('panel').down('grid');
                                var value = field.getValue();

                                if (value) {
                                    grid.getStore().clearFilter();
                                    grid.getStore().addFilter({
                                        property: 'id',
                                        value: value,
                                        exactMatch: true
                                    });
                                } else {
                                    grid.getStore().clearFilter();
                                }
                            }
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Описание',
                    labelWidth: 80,
                    width: 300,
                    margin: '0 0 0 20',
                    itemId: 'descriptionFilter',
                    enableKeyEvents: true,
                    listeners: {
                        keydown: function (field, e) {
                            if (e.getKey() === e.ENTER) {
                                var grid = field.up('panel').up('panel').down('grid');
                                var value = field.getValue();

                                if (value) {
                                    grid.getStore().clearFilter();
                                    grid.getStore().addFilter({
                                        property: 'name',
                                        value: value,
                                        anyMatch: true,
                                        caseSensitive: false
                                    });
                                } else {
                                    grid.getStore().clearFilter();
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'grid',
            store: Ext.create('EmptyApp.store.Products'),
            bbar: {
                xtype: 'pagingtoolbar',
                store: null, // Will be set in afterrender
                displayInfo: true,
                displayMsg: 'Показаны записи {0} - {1} из {2}',
                emptyMsg: 'Нет данных для отображения'
            },
            listeners: {
                afterrender: function (grid) {
                    // Set the same store for the paging toolbar
                    var pagingToolbar = grid.down('pagingtoolbar');
                    if (pagingToolbar) {
                        pagingToolbar.bindStore(grid.getStore());
                    }
                },
                cellclick: function (view, cell, cellIndex, record) {
                    // Only open the ProductCard if the name column (index 1) was clicked
                    if (cellIndex === 1) {
                        // Create the ProductCard using the proper xtype
                        try {
                            var productCard = Ext.create('EmptyApp.view.catalog.ProductCard', {
                                autoShow: true
                            });

                            // Load the record data into the form
                            if (record) {
                                try {
                                    productCard.loadRecord(record);
                                } catch (err) {
                                    // eslint-disable-next-line no-console
                                    console.error('Error loading record data into form:', err);
                                }
                            }

                            // ProductCard will be shown automatically due to autoShow: true
                            // and centered/brought to front by its afterrender listener
                        } catch (err) {
                            // eslint-disable-next-line no-console
                            console.error('Error creating or showing ProductCard:', err);
                        }
                    }
                }
                // Removed itemclick event handler to simplify the code
                // The cellclick event handler is sufficient to handle cell clicks
            },
            columns: [
                {
                    text: 'ID',
                    dataIndex: 'id',
                    width: 70
                },
                {
                    text: 'Имя',
                    dataIndex: 'name',
                    flex: 1
                },
                {
                    text: 'Описание',
                    dataIndex: 'description',
                    flex: 2
                },
                {
                    text: 'Цена',
                    dataIndex: 'price',
                    width: 100,
                    renderer: function (value) {
                        // Check if the value is a whole number
                        if (Math.floor(value) === value) {
                            return Ext.util.Format.number(value, '0,000');
                        } else {
                            return Ext.util.Format.number(value, '0,000.00');
                        }
                    }
                },
                {
                    text: 'Кол-во',
                    dataIndex: 'quantity',
                    width: 80,
                    renderer: function (value, metaData) {
                        if (value === 0) {
                            metaData.tdCls = 'zero-quantity';
                        }
                        return value;
                    }
                }
            ],
            viewConfig: {
                stripeRows: true
            }
        }
    ]
});
