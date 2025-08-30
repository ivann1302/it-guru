Ext.define('EmptyApp.view.login.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    title: 'Окно входа',
    frame: true,
    width: 320,
    bodyPadding: 10,
    cls: 'custom-panel',
    headerCls: 'custom-header',

    defaultType: 'textfield',

    listeners: {
        afterrender: function(form) {
            var usernameField = form.down('textfield[name=username]');
            if (usernameField) {
                usernameField.focus(true, 100);
            }

            new Ext.util.KeyMap({
                target: form.el,
                key: Ext.event.Event.ENTER,
                fn: function() {
                    var loginButton = form.down('button[text=Войти]');
                    if (loginButton && !loginButton.isDisabled()) {
                        loginButton.handler.call(loginButton.scope || loginButton, loginButton);
                    }
                }
            });
        }
    },

    items: [{
        allowBlank: false,
        fieldLabel: 'Имя пользователя',
        name: 'username',
        emptyText: 'Имя пользователя',
        msgTarget: 'under',
        tabIndex: 1,
        enableKeyEvents: true
    }, {
        allowBlank: false,
        fieldLabel: 'Пароль',
        name: 'password',
        emptyText: 'Пароль',
        inputType: 'password',
        tabIndex: 2,
        enableKeyEvents: true
    }],

    buttons: [
        { 
            text: 'Войти',
            formBind: true,
            disabled: true,
            cls: 'custom-button',
            handler: 'onLoginClick',
            tabIndex: 3
        }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 120
    }
});
