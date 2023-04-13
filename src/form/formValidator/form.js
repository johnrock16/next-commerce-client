import generateTranslatedError from "./error";
import Mask from "./mask";
import Validation from "./validation";

export default function Form({language, rules, customValidation}) {
    const getTranslatedError = generateTranslatedError(language);
    const mask = Mask(rules);

    const handleValidate = ({name, value, rule, setErrors}) => {
        const [RULE, MODIFIER] = rule.split('--');
        const validate = Validation(value, rules[RULE], MODIFIER, customValidation);
        const {isValid, error} = validate.validate();
        setErrors((pv)=>({...pv, [name]: getTranslatedError(error)}));
        return isValid
    }

    const fieldFormAttributes = ({name, rule, register, setErrors}) => {
        const keyUp = (rules[rule]?.mask) ? {onKeyUp: (e) => { mask.handleKeyUp(e, rule) }} : {}
        return ({
            ...register(name, {
                validate: function(value) {
                    return handleValidate({name, value, rule, setErrors});
                }
            }),
            ...rules[rule]?.attributes,
            ...keyUp
        })
    }

    return({
        fieldFormAttributes
    })
}