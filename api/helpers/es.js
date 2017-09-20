'use strict';

var Elasticsearch = require('elasticsearch');
var client = new Elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});
console.log(client.ping);
client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 30000,
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});