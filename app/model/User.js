Ext.define('EmptyApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'username', type: 'string' },
        { name: 'password', type: 'string' }
    ],

    statics: {
        authenticate: function(credentials, callback) {
            Ext.defer(function() {
                if (credentials.username === 'admin' && credentials.password === 'padmin') {
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
    }
});
