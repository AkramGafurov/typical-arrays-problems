exports.min = function min(array) {
    if (array !== undefined && array.length !== 0) {
        let sortFunc = (a, b) => {
            return a - b;
        };
        array.sort(sortFunc);
        return array[0];
    }
    return 0;
};

exports.max = function max(array) {
    if (array !== undefined && array.length !== 0) {
        let sortFunc = (a, b) => {
            return a - b;
        };
        array.sort(sortFunc);
        return array[array.length - 1];
    }
    return 0;
};

exports.avg = function avg(array) {
    if (array !== undefined && array.length !== 0) {
        return (
            array.reduce(function (a, b) {
                return a + b;
            }) / array.length
        ).toFixed(2);
    }
    return 0;
};
