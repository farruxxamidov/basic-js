class VigenereCipheringMachine {

    constructor(typeDirect) {
        if (typeDirect === false) {
            this.reverse = true;
        }
    }

    encrypt(plainMsg, key, reverse) {
        var reverse = this.reverse;
        var cypher = "";
        if (reverse) {
            plainMsg = plainMsg.split('').reverse().join('');
        }
        for (var i = 0, j = 0; i < plainMsg.length; i++) {
            var currentLetter = plainMsg[i];

            if (this.isUpperCase(currentLetter)) {
                var upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
                cypher += String.fromCharCode(upperLetter + 65);
                j++;
            } else if (this.isLowerCase(currentLetter)) {
                var lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j % key.length].toLowerCase().charCodeAt() - 97)) % 26;
                cypher += String.fromCharCode(lowerLetter + 97).toUpperCase();
                j++;
            } else {
                cypher += currentLetter;
            }
        }
        // if (reverse) {
        //     cypher = cypher.split('').reverse().join('');
        // }
        return cypher;
    }

    decrypt(plainMsg, key) {
        var reverse = this.reverse;
        var cypher = "";
        if (reverse) {
            plainMsg = plainMsg.split('').reverse().join('');
        }
        for (var i = 0, j = 0; i < plainMsg.length; i++) {
            var currentLetter = plainMsg[i];

            if (this.isUpperCase(currentLetter)) {
                var upperLetter = ((currentLetter.charCodeAt() - 65) - (key[j % key.length].toUpperCase().charCodeAt() - 65) + 26) % 26;
                cypher += String.fromCharCode(upperLetter + 65);
                j++;
            } else if (this.isLowerCase(currentLetter)) {
                var lowerLetter = ((currentLetter.charCodeAt() - 97) - (key[j % key.length].toLowerCase().charCodeAt() - 97) + 26) % 26;
                cypher += String.fromCharCode(lowerLetter + 97).toUpperCase();
                j++;
            } else {
                cypher += currentLetter;
            }
        }
        // if (reverse) {
        //     cypher = cypher.split('').reverse().join('');
        // }
        return cypher;
    }

    isUpperCase(letter) {
        var l = letter.charCodeAt();
        if (l >= 65 && l <= 90) {
            return true;
        } else {
            return false;
        }
    };

    isLowerCase(letter) {
        var l = letter.charCodeAt();
        if (l >= 97 && l <= 122) {
            return true;
        } else {
            return false;
        }
    };
}

module.exports = VigenereCipheringMachine;
