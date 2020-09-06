const blockAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nonBlockAlpha = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "!@#$%^&*_=+-/.?<>)(";
const numbers = "1234567890";
const customPassword = (hasBlockAlpha, hasNonBlockAlpha, hasSpecialChar, hasNumbers, pwdLength) => {
    let generatedPassword = "";
    let allowedValues = "";
    let st = 0;
    if (hasBlockAlpha) {
        allowedValues += blockAlpha;
        generatedPassword[st++] = blockAlpha.charAt(Math.floor(Math.random() * (blockAlpha.length)));
    }
    if (hasNonBlockAlpha) {
        allowedValues += nonBlockAlpha;
        generatedPassword[st++] = nonBlockAlpha.charAt(Math.floor(Math.random() * (nonBlockAlpha.length)));
    }
    if (hasSpecialChar) {
        allowedValues += specialChar;
        generatedPassword[st++] = specialChar.charAt(Math.floor(Math.random() * (specialChar.length)));
    }
    if (hasNumbers) {
        allowedValues += numbers;
        generatedPassword[st++] = numbers.charAt(Math.floor(Math.random() * (numbers.length)));
    }
    for (let i = st; i < pwdLength; i++)
        generatedPassword += allowedValues.charAt(Math.floor(Math.random() * (allowedValues.length)));

    return generatedPassword;
}

const defaultPassword = pwdlength => {
    let generatedPassword = "";
    let allowedValues = blockAlpha + nonBlockAlpha + specialChar + numbers;
    for(let i = 0; i< pwdlength; i++)
        generatedPassword += allowedValues.charAt(Math.floor(Math.random() * (allowedValues.length)));

    return generatedPassword;
}
