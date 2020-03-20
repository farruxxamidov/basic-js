module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw new Error();

    let transformArr = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
            case '--discard-prev':
            case '--double-next':
            case '--double-prev':
                continue;
        }

        transformArr.push(arr[i]);

        switch (arr[i + 1]) {
            case '--double-prev':
                transformArr.push(arr[i]);
                break;
            case '--discard-prev':
                transformArr.splice(transformArr.length - 1, 1);
                break;
        }

        switch (arr[i - 1]) {
            case '--double-next':
                transformArr.push(arr[i]);
                break;
            case '--discard-next':
                transformArr.splice(transformArr.length - 1, 1);
                break;
        }
    }

    return transformArr;

};
