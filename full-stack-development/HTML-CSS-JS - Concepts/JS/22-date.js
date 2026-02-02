// 3.creating data objects

// date and time
const now = new Date();
console.log(now);

// timestamp
const timestamp = Date.now();
console.log(timestamp);

// date from timestamp
const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);

// specific dates
const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 0, 1, 12, 0, 0);
const date3 = new Date(2023, 0, 1, 12, 0, 0, 0);
const date4 = new Date(2023, 0, 1, 12, 0, 0, 0, 0);
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

// from datte string
const date5 = new Date("2023-01-01");
const date6 = new Date("2023-01-01T12:00:00");
const date7 = new Date("2023-01-01T12:00:00.000");
const date8 = new Date("2023-01-01T12:00:00.000Z");
console.log(date5);
console.log(date6);
console.log(date7);
console.log(date8);

// reading date components - getter methods
const readingDate = new Date(`2023-01-01T12:00:00.000Z`);
console.log(readingDate.getFullYear());
console.log(readingDate.getMonth());
console.log(readingDate.getDate());
console.log(readingDate.getDay());
console.log(readingDate.getHours());
console.log(readingDate.getMinutes());
console.log(readingDate.getSeconds());
console.log(readingDate.getMilliseconds());

// modifying date components - setter methods
const modifyingDate = new Date(`2023-01-01T12:00:00.000Z`);
modifyingDate.setFullYear(2022);
modifyingDate.setMonth(0);
modifyingDate.setDate(1);
modifyingDate.setHours(0);
modifyingDate.setMinutes(0);
modifyingDate.setSeconds(0);
modifyingDate.setMilliseconds(0);
console.log(modifyingDate);
