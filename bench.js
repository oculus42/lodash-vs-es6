
const _ = require('lodash');
const _map = require('lodash/map');
const lm = require('lodash.map');
const Benchmark = require('benchmark');

const data = require('./data');

const suite = new Benchmark.Suite();

const tests = {
    'native map': function() {
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
    'native for': function() {
        const result = [];
        for (var i = 0; i < data.length; i++) {
            result.push(data[i].num);
        }
    }
};

for (key in tests) {
    if (tests.hasOwnProperty(key)) {
        suite.add(key, tests[key]);
    }
}

// Switched to above code to test Node 6
// Object.entries(tests).forEach(([key, fn]) => {
//     suite.add(key,fn);
// });

suite
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

suite.run();
