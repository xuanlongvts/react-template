class Utils {
    isEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        return email ? re.test(email) : false;
    }

    // isPhoneNumber(phoneNumber) {
    //     const regexPhoneNumber1 = /^[0-9][0-9 ]{9,19}$/;
    //     const regexPhoneNumber2 = /^\+[0-9 ]{9,19}$/.test('+ 1212342300');
    //     return phoneNumber && phoneNumber.trim()
    //         ? regexPhoneNumber1.test(phoneNumber.replace(/[^0-9]/g, '')) ||
    //               regexPhoneNumber2.test(phoneNumber.replace(/[^0-9]/g, ''))
    //         : false;
    // }

    notContainAccents(str) {
        const regexAccents = /^[a-zA-Z0-9 ]+$/;
        return str !== null && str !== undefined && (str.trim() === '' || regexAccents.test(str.trim()));
    }

    trimWhiteSpaces(str) {
        return str && this.trimWhiteSpacesInput(str).trim();
    }

    trimWhiteSpacesInput(str) {
        return str && str.replace(/\s\s+/g, ' ').replace(/^\s/, '');
    }

    trimPhoneNumberInput(str) {
        if (str) {
            let tmpStr = this.trimWhiteSpacesInput(str);
            tmpStr = tmpStr.replace(/^\s/, '');
            let hasPlus = false;
            tmpStr = tmpStr.replace(/[^0-9 ]/g, (match, index) => {
                if (match === '+' && [0, 1].includes(index) && !hasPlus) {
                    hasPlus = true;
                    return '+';
                }
                return '';
            });
            return tmpStr;
        }

        return str;
    }

    isFileAccepted(fileName, acceptType) {
        const accept = acceptType.join('|');
        const regex = new RegExp(`(${accept})$`, 'i');
        return regex.test(fileName);
    }
}

export default new Utils();
