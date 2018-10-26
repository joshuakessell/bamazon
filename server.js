// Import Database Models
// =============================================================
const db = require("./models");

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    console.log('Database is synced!')
});

