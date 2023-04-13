import i18n from '../formRules/i18n/i18n';

export default function generateTranslatedError(language) {
    const ERROR = i18n(language).error;

    function getTranslatedError(error) {
        if(error) {
            const errorPath = error.split('.')
            let textVessel = ERROR[errorPath[0]];

            if(errorPath.length > 1) {
                errorPath.shift();
                errorPath.forEach(element => {
                    textVessel = textVessel[element];
                });
            }
            return textVessel;
        }
        return '';
    }

    return getTranslatedError
}