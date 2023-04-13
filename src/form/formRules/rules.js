export const CUSTOM_RULE =  {
    name:{
        validate: ['hasText'],
        attributes: {
            maxLength: 64,
        },
        error: {
            hasText: 'common.hasText',
        },
    },
    email:{
        regex:/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        validate: ['regex'],
        attributes: {
            maxLength: 64,
        },
        error: {
            regex: 'email.regex',
        }
    },
    phone:{
        regex:/^[0-9]{4}-[0-9]?[0-9]{4}$/,
        mask:[[/\D/g, ''],[/(\d{4})(\d)/, '$1-$2']],
        validate: ['regex'],
        attributes: {
            maxLength: 10,
        },
        error: {
            regex: 'phone.regex',
        }
    },
    dd:{
        regex:/^\d{2}$/,
        mask:[[/\D/g, ''],[/(\d{2})(\d)/, '$1']],
        validate: ['regex'],
        attributes: {
            maxLength: 2,
        },
        error: {
            regex: 'dd.regex',
        }
    },
    date:{
        regex:/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
        mask:[[/\D/g, ''],[/(\d{2})(\d)/, '$1/$2'],[/(\d{2})(\d)/, '$1/$2'],[/(\d{4})(\d)/, '$1']],
        validate: ['regex', 'validDate'],
        error: {
            regex: 'common.dateFormat',
            validDate: 'date.validDate'
        },
        modifier: {
            age: {
                validate: ['regex', 'validateAge'],
                params: {
                    validateAge: [18, 130]
                },
                error: {
                    regex: 'common.dateFormat',
                    validateAge: 'date.modifier.age.validateAge'
                }
            }
        }
    },
    cpf:{
        mask:[[/\D/g, ''],[/(\d{3})(\d)/, '$1.$2'],[/(\d{3})(\d)/, '$1.$2'],[/(\d{3})(\d{1,2})/, '$1-$2'],[/(-\d{2})\d+?$/, '$1']],
        validate: ['cpf'],
        attributes: {
            maxLength: 14,
        },
        error: {
            cpf: 'cpf.cpf',
        },
    },
    password: {
        regex: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        validate: ['minLength', 'regex'],
        params: {
            minLength: [8]
        },
        error: {
            regex: 'password.weak',
            minLength: 'password.minLength'
        }
    },
    addressNumber: {
        validate: ['hasText', 'maxLength'],
        params: {
            maxLength: [5]
        },
        attributes: {
            maxLength: 5
        },
        error: {
            hasText: 'common.hasText',
            maxLength: 'addressNumber.maxLength'
        }
    },
    zipcode: {
        regex: /^[0-9]{5}-[0-9]{3}$/,
        mask: [[/\D/g, ''], [/(\d{5})(\d)/, '$1-$2']],
        validate: ['regex'],
        attributes: {
            maxLength: 9
        },
        error: {
            regex: 'zipcode.regex'
        }
    }
};