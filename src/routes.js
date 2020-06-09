const routes = require('express').Router();

const db = require('./database/db');

routes.get('/', async (req, res) => {
    return res.render('index.html',
     { title: 'Seu marketplace de coleta de resíduos' });
});

routes.get('/create-points', async (req, res) => {
    return res.render('create-point.html');
});

routes.post('/save-point', async (req, res) => {
    const { 
        image, 
        name, 
        address, 
        addressTwo, 
        state, 
        city, 
        items } = req.body;
        
    const scope = `
        INSERT INTO places (
            image,
            name,
            address,
            addressTwo,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        image,
        name, 
        address, 
        addressTwo, 
        state, 
        city, 
        items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err);
            return res.send('Erro no cadastro')
        }

        console.log("Success");

        res.render('create-point.html', { saved: true })

    }

    db.run(scope, values, afterInsertData)

});

routes.get('/search', async (req, res) => {
    const { search: city } = req.query;
    if(city == "") {
        return res.render('search-results.html', { total: 0 });

    }
    console.log(city)
    const query =`SELECT * FROM places WHERE city LIKE '%${city}%';`

    db.all(query, function(err, rows) {
        if(err) {
            res.render('search-results.html')
            return console.log(err);
        }

        const total = rows.length

        console.log(rows);
        return res.render('search-results.html', { places: rows, total });

    })

});




module.exports = routes;