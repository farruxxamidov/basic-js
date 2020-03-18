module.exports = function repeater(str, options) {
    const defaultSeparator = '+';
    const defaultAdditionSeparator = '|';
    let result = '';
    let strAddition = '';

    if (options.addition === undefined) {
        if (options.repeatTimes === undefined) {
            console.log(str);
            return str;
        } else {
            if (options.separator === undefined) {
                for (let i = 0; i < options.repeatTimes-1; i++) {
                    result += str + defaultSeparator;
                }
                result += str;
                console.log(result);
                return result;
            } else {
                for (let i = 0; i < options.repeatTimes-1; i++) {
                    result += str + options.separator;
                }
                result += str;
                console.log(result);
                return result;
            }
        }
    } else {
        if (options.additionRepeatTimes === undefined) {
            if (options.repeatTimes === undefined) {
                str += options.addition;
                console.log(str);
                return str;
            } else {
                if (options.separator === undefined) {
                    for (let i = 0; i < options.repeatTimes-1; i++) {
                        result += str + options.addition + defaultSeparator;
                    }
                    result += str;
                    console.log(result);
                    return result;
                } else {
                    for (let i = 0; i < options.repeatTimes-1; i++) {
                        result += str + options.addition + options.separator;
                    }
                    result += str;
                    console.log(result);
                    return result;
                }
            }
        } else {
            if (options.additionSeparator === undefined) {
                for (let i=0; i<options.additionRepeatTimes-1; i++) {
                    result += options.addition + defaultAdditionSeparator; 
                }
                result += options.addition
                if (options.additionRepeatTimes == 1) {
                    strAddition = str + options.addition;
                }
                strAddition = str + result;  //strAddition
                if (options.repeatTimes === undefined) {
                    console.log(strAddition);
                    return strAddition;
                } else {
                    if (options.separator === undefined) {
                        result = '';
                        for (let i = 0; i < options.repeatTimes-1; i++) {
                            result += strAddition + defaultAdditionSeparator;
                        }         
                        result += strAddition;
                        console.log(result);
                        return result;
                    } else {
                        result = '';
                        for (let i = 0; i < options.repeatTimes-1; i++) {
                            result += strAddition + options.separator;
                        }
                        result += strAddition;
                        console.log(result);
                        return result;
                    }
                }
            } else {
                for (let i=0; i<options.additionRepeatTimes-1; i++) {
                    result += options.addition + options.additionSeparator ; 
                }
                result += options.addition;
                if (options.additionRepeatTimes == 1) {
                    strAddition = str + options.addition;
                }
                strAddition = str + result;  //strAddition
                if (options.repeatTimes === undefined) {
                    console.log(strAddition);
                    return strAddition;
                } else {
                        result = '';
                    if (options.separator === undefined) {
                        for (let i = 0; i < options.repeatTimes-1; i++) {
                            result += strAddition + options.separator;
                        }         
                        result += strAddition;
                        console.log(result);
                        return result;
                    } else {
                        result = '';
                        for (let i = 0; i < options.repeatTimes-1; i++) {
                            result += strAddition + options.separator;
                        }
                        result += strAddition;
                        console.log(result);
                        return result;
                    }
                }
            }
        }
    }
};
