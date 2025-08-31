/**
 * This is an example of a properly formatted file according to the project's ESLint and Prettier rules.
 */

// ExtJS class definition with proper indentation and formatting
Ext.define('Example.FormattedClass', {
    extend: 'Ext.Component',

    // Config options with proper indentation
    config: {
        title: 'Formatted Example',
        width: 400,
        height: 300
    },

    // Constructor with proper function formatting
    constructor: function (config) {
        this.callParent(arguments);
        this.initConfig(config);
    },

    // Method with conditional statements and proper spacing
    exampleMethod: function (value) {
        var result = '';

        // Proper if/else formatting
        if (value === 1) {
            result = 'one';
        } else if (value === 2) {
            result = 'two';
        } else {
            result = 'other';
        }

        // Proper array and object formatting
        var items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ];

        // Proper loop formatting
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === value) {
                result = items[i].name;
                break;
            }
        }

        return result;
    },

    // Example of a complex method with nested conditions and proper line length
    complexExample: function (config) {
        var longString =
            'This is an example of a long string that would normally exceed the line length limit but ' +
            'is properly broken into multiple lines';

        // Complex condition with proper formatting
        if (
            config &&
            config.enabled === true &&
            (config.mode === 'advanced' || (config.options && config.options.length > 0))
        ) {
            return {
                success: true,
                message: 'Configuration is valid',
                data: {
                    id: config.id,
                    name: config.name || 'Default Name',
                    description: longString
                }
            };
        }

        return { success: false, message: 'Invalid configuration' };
    }
});
