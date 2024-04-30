'use stric';

module.exports = {
    by_value: (b) => b = 2,
    by_ref: (d) => {
        d.prop1 = () => {};
        d.prop2 = {};
    }
};
