const Mask = (RULES) => {
    function generateTextWithMask(value, maskArray) {
        let textMasked = value;
        maskArray.forEach((mask) => {
            textMasked = textMasked.replace(mask[0], mask[1]);
        });
        return textMasked;
    }

    function handleKeyUp(e, rule) {
        setTimeout(()=> {
            e.target.value = generateTextWithMask(e.target.value, RULES[rule].mask);
        }, 400);
    }

    return ({
        handleKeyUp: handleKeyUp
    })
}

export default Mask;