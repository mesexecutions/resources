// Assuming "Exclude Time" and "Schedule" are Date or DateTime fields

// Get the values of "Exclude Time" and "Schedule"
var excludeTimeValue = field("Exclude Time");
var scheduleValue = field("Schedule");

// Initialize variables to store the calculated result
var dateDifferenceDays;

// Ensure both fields have values
if (excludeTimeValue && scheduleValue) {
    // Calculate the date difference in days
    dateDifferenceDays = moment(scheduleValue).startOf('day').diff(moment(excludeTimeValue).startOf('day'), 'days');
} else {
    // If either field is empty, handle accordingly
    dateDifferenceDays = null; // or any other default value or error handling
}

// Now you can use the 'dateDifferenceDays' variable as needed
// For example, you can display it or use it in further calculations
dateDifferenceDays;
