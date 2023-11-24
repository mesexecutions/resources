var excludeTime = entry().field("ExcludeTime");
var schedule = entry().field("Schedule");

if (excludeTime && schedule) {
    var timeDiff = schedule.getTime() - excludeTime.getTime();
    var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    entry().set("DaysDifference", daysDiff);
} else {
    message("Please provide values for both ExcludeTime and Schedule fields.");
    cancel();
}
