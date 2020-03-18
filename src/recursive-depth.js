module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        let self = this;
        arr.forEach(function (item) {
            if (Array.isArray(item)) {
                depth = Math.max(self.calculateDepth(item), depth);
            }
        });
        return depth + 1;
    }
};