// Step 1: Create the employee object
const employee = {
  id: 101,
  name: "Jonrika",
  department: "IT",
  salary: 45000
};

console.log("Original Employee Object:");
console.log(employee);

// Step 2: Add a new property - address
employee.address = "Kathmandu";
console.log("\nAfter Adding Address Property:");
console.log(employee);

// Step 3: Update the salary
employee.salary = 60000;
console.log("\nAfter Updating Salary:");
console.log(employee);

// Step 4: Delete the department property
delete employee.department;
console.log("\nAfter Deleting Department Property:");
console.log(employee);