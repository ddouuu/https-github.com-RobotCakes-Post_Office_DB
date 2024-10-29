const http = require('http');
const sql = require('mssql');

// Azure SQL Database configuration
const config = {
  server: 'ohyeahmrpostman2.database.windows.net',
  database: 'group10',
  user: 'johndou',
  password: 'Jamesharden4000@',
  options: {
    encrypt: true,
    trustServerCertificate: false,
    enableArithAbort: true
  }
};

// Function to check database connection
async function checkDatabaseConnection() {
  try {
    await sql.connect(config);
    await sql.query`SELECT TOP (1) [EID] FROM [dbo].[employee]`;
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  } finally {
    await sql.close();
  }
}

// Create an HTTP server
const server = http.createServer(async (req, res) => {
  if (req.url === '/api/db-status') {
    const isConnected = await checkDatabaseConnection();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: isConnected ? 'connected' : 'disconnected' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
