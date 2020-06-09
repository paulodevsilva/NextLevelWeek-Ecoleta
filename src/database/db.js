const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./src/database/database.db');

module.exports = db;

// db.serialize(() => {
//     // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         addressTwo TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    
    // const scope = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         addressTwo,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
        // "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Collectoria",
    //     "Guilherme Gemballa, jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]


    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err);
    //     }

    //     console.log("Success");
    //     console.log(this)
    // }

    // db.run(scope, values, afterInsertData)

    // function afterQueryData(err, rows) {
    //     if(err) {
    //         return console.log(err);
    //     }

    //     console.log('Success');
    //     console.log(rows);
    // }


    // const query =`SELECT name FROM places;`

    // db.all(query, afterQueryData)


    // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    //     if(err) {
    //         return console.log(err);
    //     }

    //     console.log('Success');
    // })
// });  
