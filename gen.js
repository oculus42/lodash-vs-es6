const fs = require('fs')
const _path = './data.json'

const random = (MIN =0 ,MAX = 10) => Math.floor(Math.random() * Math.floor(MAX)) + MIN;

const j = []

for(let i =0; i< 10000; i++){
    j.push({num: random()})
}

fs.writeFileSync(_path, JSON.stringify(j), 'utf8')
