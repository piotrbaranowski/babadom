'use strict';

var schedule = require('node-schedule');
var pkg = require('./package.json');
var isOutdated = require('is-outdated');

schedule.scheduleJob('*/10 * * * * *', function() {
  isOutdated(pkg.name, pkg.version, function (err, res) {
    //console.log('Uoooops %s', res);
  });
});


