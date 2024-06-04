const express = require('express');
const fs = require('fs');

// Import the employees data
const employeesData = JSON.parse(fs.readFileSync('employees.json', 'utf-8'));

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get all employees
app.get('/employees', (req, res) => {
  res.status(200).send(employeesData);
});

// Endpoint to get a single employee by ID
app.get('/employees/:employeeID', (req, res) => {
  const employeeID = parseInt(req.params.employeeID);

  // Find the employee by ID
  const employee = employeesData.find(emp => emp.employeeID === employeeID);

  if (!employee) {
    // Employee not found
    return res.status(404).send({ error: 'Employee not found' });
  }

  // Send the employee data
  res.status(200).send(employee);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

