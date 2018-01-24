// Create Database
use edutech;

//Create Collection
db.createCollection("employee");

//Insert 10 employee details
db.employee.insert([
    {"empName": "Anish", "department":"clerical_staff", "designation": "clerk", "salary":6500,"dateOfJoining": new Date("2017-01-25"), "city": "Delhi" },

    {"empName": "Brajesh", "department":"support_staff", "designation": "technical_support", "salary":5000, "dateOfJoining":new Date("2017-02-25"), "city": "Bangalore" },

    {"empName": "Chandra", "department":"development_staff", "designation": "developer", "salary":15000,"dateOfJoining": new Date("2017-01-01"), "city": "Bangalore" },

    {"empName": "Dinesh", "department":"ops_staff", "designation": "operations_manager", "salary":20000,
    "dateOfJoining": new Date("2017-02-12"), "city": "New York" },

    {"empName": "Eshwari", "department":"development_staff", "designation": "developer", "salary":25000,
    "dateOfJoining": new Date("2017-05-13"), "city": "California" },

    {"empName": "Fanish", "department":"management_staff", "designation": "manager", "salary":45000,
    "dateOfJoining": new Date("2017-01-10"), "city": "California" },

    {"empName": "Ganesh", "department":"logistic_staff", "designation": "logistics_manager", "salary":6000,
    "dateOfJoining": new Date("2017-04-18"), "city": "New York" },

    {"empName": "Haresh", "department":"support_staff", "designation": "service_support", "salary":10000,
    "dateOfJoining": new Date("2017-07-20"), "city": "Singapore" },

    {"empName": "Indira", "department":"development_staff", "designation": "lead_developer", "salary":30000,
    "dateOfJoining": new Date("2017-11-07"), "city": "Singapore" },

    {"empName": "Jai", "department":"support_staff", "designation": "customer_support", "salary":10000,
    "dateOfJoining": new Date("2017-12-10"), "city": "New York" }
]);

  
//Find and Display designation of an Employee
db.employee.find({},{empName:1, designation:1, _id:0});

//Find and Display the records of employee whose salary is greater than 7000
db.employee.find({salary:{$gt:7000}});

//Sort and Display the records of an employee based on the dateOfJoining
db.employee.find({},{_id:0}).sort({dateOfJoining: 1});

//Sort and Display the records of an employee based on the salary in ascending order
db.employee.find({},{_id:0}).sort({salary: 1});

//Find and Display the records of an employee whose salary in between 5000 to 40000
db.employee.find({salary:{$gt:5000,$lt:40000}});

//Find and display all the records of an employee except whose designation is developer.
db.employee.find({designation:{$ne:"developer"}});

//Sort and display the records of an employee's city in descending order
db.employee.find().sort({city: -1});

//Find and display the records of an employee's whose city starts with Singapore and salary is greater than 8000
db.employee.find({$and:[{city:{$eq:"Singapore"}},{salary:{$gt:8000}}]});  