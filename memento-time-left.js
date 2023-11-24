// Load the moment.js library
var moment = require('moment');

var excludeTimeString = entry().field("ExcludeTime");
var scheduleString = entry().field("Schedule");

if (excludeTimeString && scheduleString) {
    // Convert strings to moment objects
    var excludeTime = moment(excludeTimeString);
    var schedule = moment(scheduleString);

    // Calculate the difference in days
    var daysDiff = schedule.diff(excludeTime, 'days');

    entry().set("DaysDifference", daysDiff);
} else {
    message("Please provide values for both ExcludeTime and Schedule fields.");
    cancel();
}
