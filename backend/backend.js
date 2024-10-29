const http = require('http');
const sql = require('mssql');

// Azure SQL Database configuration
const config = {
  user: 'johndou', // Replace with your database username
  password: 'Jamesharden4000@', // Replace with your database password
  server: 'ohyeahmrpostman2.database.windows.net', // Your Azure SQL Database server
  database: 'group10', // Replace with your database name
  options: {
    encrypt: true, // Use encryption for Azure SQL Database
    trustServerCertificate: true // Use true if you have self-signed certificates
  }
};

// Function to get employees
async function getEmployees(req, res) {
    try {
        // Establish the database connection
        await sql.connect(config);
        
        // Execute the query
        const result = await sql.query(`
            SELECT TOP (1000) 
                [EID],
                [employeeName],
                [username],
                [password],
                [isManager],
                [phoneNumber],
                [email],
                [employeeStartDate],
                [employeeCreatedOn],
                [employeeCreatedBy],
                [userTypeCreate],
                [lastUpdatedAt],
                [lastUpdatedBy],
                [userTypeModify],
                [OID],
                [isDeleted]
            FROM 
                [dbo].[employee];
        `);

        // Send the result as a JSON response
        res.status(200).json(result.recordset);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ message: 'Error fetching employees' });
    } finally {
        // Close the database connection
        await sql.close();
    }
}

// Example route for fetching employees
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/employees', getEmployees);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});