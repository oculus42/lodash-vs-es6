const fs = require('fs');

const cTable = require('console.table');

const _ = require('lodash');
const _map = require('lodash/map');
const lm = require('lodash.map');
const jm = require('js-meter');

const data = require('./data');

const tests = {
    native: function() {
        data.map( item => {
            return item.num
        });
    },
    'lodash': function() {
        _.map(data, item => {
            return item.num
        })
    },
    'lodash/map': function() {
        _map(data, item => {
            return item.num
        })
    },
    'lodash.map': function() {
        lm(data, item => {
            return item.num
        })
    },

};

const report = Object.entries(tests).map(([key, fn]) => {
    const m = new jm({isPrint: false, isMs: true});
    fn();
    const meter = m.stop();
    return Object.assign({name: key}, meter);
});

console.table(report);
