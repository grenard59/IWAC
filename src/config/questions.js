module.exports = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter Watson URL :',
        default: 'https://gateway.watsonplatform.net/assistant/api'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter Watson username :',
        validate: function (input) {
            return input && input.length > 0;
        },
        default: '77efea60-a92e-4a7c-979c-7ae4af3f0042'
    },
    {
        type: 'input',
        name: 'password',
        message: 'Enter Watson password :',
        validate: function (input) {
            return input && input.length > 0;
        },
        default: 'BkANQkhV6z5P'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'Wich languages ?',
        choices: [
            'French',
            'English',
            'German',
        ],
        default: [
            'French',
            'English'
        ],
        validate: function (answer) {
            if (answer.length < 1) {
                return 'You must choose at least one language.';
            }
            return true;
        }
    },
    {
        type: 'checkbox',
        name: 'types',
        message: 'Wich Types ?',
        choices: [
            'Business',
            'Synonyms',
            'Kfold',
            'Definition',
            'Social'
        ],
        default: [
            'Business',
            'Synonyms',
            'Kfold',
            'Definition'
        ],
        validate: function (answer) {
            if (answer.length < 1) {
                return 'You must choose at least one language.';
            }
            return true;
        }
    }
];