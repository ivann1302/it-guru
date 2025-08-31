Ext.define('EmptyApp.view.catalog.ProductCard', {
    extend: 'Ext.window.Window',
    xtype: 'productcard',

    constructor: function () {
        this.callParent(arguments);
    },

    requires: ['Ext.form.Panel', 'Ext.form.field.Text', 'Ext.form.field.Number'],

    title: 'Карточка товара',
    width: 400,
    height: 315,
    modal: true,
    resizable: false,
    closeAction: 'destroy',
    layout: 'fit',
    draggable: true,
    closable: true,
    autoShow: true,
    constrain: true,
    alwaysOnTop: true,

    listeners: {
        afterrender: function () {
            this.center();
            this.toFront();
        }
    },

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            border: false,
            defaultType: 'textfield',
            defaults: {
                anchor: '100%',
                labelWidth: 100,
                readOnly: true
            },

            items: [
                {
                    fieldLabel: 'ID',
                    name: 'id'
                },
                {
                    fieldLabel: 'Имя',
                    name: 'name'
                },
                {
                    fieldLabel: 'Описание',
                    name: 'description'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Цена',
                    name: 'price',
                    readOnly: false,
                    minValue: 0,
                    allowDecimals: true,
                    decimalPrecision: 2,
                    listeners: {
                        change: function (field) {
                            var window = field.up('window');
                            if (window) {
                                window.checkChanges();
                            }
                        }
                    }
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Кол-во',
                    name: 'quantity',
                    readOnly: false,
                    minValue: 0,
                    allowDecimals: false,
                    listeners: {
                        change: function (field) {
                            var window = field.up('window');
                            if (window) {
                                window.checkChanges();
                            }
                        }
                    }
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Отмена',
            handler: function () {
                this.up('window').close();
            }
        },
        {
            text: 'Сохранить',
            itemId: 'saveButton',
            disabled: true, // Initially disabled
            handler: function () {
                var window = this.up('window');
                var form = window.down('form');
                var record = form.record; // Use the stored record
                var values = form.getValues();

                // Check if values have changed
                var changed = false;
                var newPrice = parseFloat(values.price);
                var oldPrice = record.get('price');
                var newQuantity = parseInt(values.quantity);
                var oldQuantity = record.get('quantity');

                // Use a small epsilon for floating point comparison
                if (Math.abs(newPrice - oldPrice) > 0.001 || newQuantity !== oldQuantity) {
                    changed = true;
                }

                if (changed) {
                    // Set custom button text
                    var originalYesText = Ext.MessageBox.buttonText.yes;
                    var originalNoText = Ext.MessageBox.buttonText.no;

                    Ext.MessageBox.buttonText.yes = 'Да';
                    Ext.MessageBox.buttonText.no = 'Нет';

                    Ext.Msg.confirm('Подтверждение', 'Данные были изменены. Сохранить изменения?', function (btn) {
                        // Restore original button text
                        Ext.MessageBox.buttonText.yes = originalYesText;
                        Ext.MessageBox.buttonText.no = originalNoText;

                        if (btn === 'yes') {
                            // Update record with new values
                            record.set('price', parseFloat(values.price));
                            record.set('quantity', parseInt(values.quantity));
                        }

                        // Close the window
                        window.close();
                    });
                } else {
                    window.close();
                }
            }
        }
    ],

    // Check if form values have changed and update save button state
    checkChanges: function () {
        var form = this.down('form');
        var saveButton = this.down('#saveButton');

        if (!form || !form.record) {
            return;
        }

        var values = form.getValues();
        var record = form.record;
        var newPrice = parseFloat(values.price);
        var oldPrice = record.get('price');
        var newQuantity = parseInt(values.quantity);
        var oldQuantity = record.get('quantity');

        // Use a small epsilon for floating point comparison
        var changed = Math.abs(newPrice - oldPrice) > 0.001 || newQuantity !== oldQuantity;

        // Enable/disable save button based on whether there are changes
        saveButton.setDisabled(!changed);
    },

    // Load record data into form
    loadRecord: function (record) {
        var form = this.down('form');

        if (form && record) {
            try {
                // Set the values directly instead of using loadRecord
                form.getForm().setValues({
                    id: record.get('id'),
                    name: record.get('name'),
                    description: record.get('description'),
                    price: record.get('price'),
                    quantity: record.get('quantity')
                });

                // Also store the record in the form for later use
                form.record = record;

                // Ensure the save button is disabled initially since no changes have been made yet
                this.checkChanges();
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error('Error loading record data into form:', err);
            }
        } else {
            // eslint-disable-next-line no-console
            console.error('Form or record is null or undefined');
        }
    }
});
