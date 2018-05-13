const fs = require('fs');

const cTable = require('console.table');

const _ = require('lodash');
const _map = require('lodash/map');
const lm = require('lodash.map');
const Benchmark = require('benchmark');

const data = require('./data');

const suite = new Benchmark.Suite();

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

Object.entries(tests).forEach(([key, fn]) => {
    suite.add(key,fn);
});

suite
// add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

suite.run();
