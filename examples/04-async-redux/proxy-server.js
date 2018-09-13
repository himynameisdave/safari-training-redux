/**
 *  Simple proxy server for the GitHub Jobs API
 */
const express = require('express');
const popsicle = require('popsicle');
const qs = require('query-string');
const app = express();
const PORT = 3001;

//  Handle CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  Setup API
app.get('/api', (req, res) => {
    popsicle.get(`https://jobs.github.com/positions.json?${qs.stringify(req.query)}`)
        .then(result => {
            if (result.status === 200) {
                const body = JSON.parse(result.body);
                return res.send(body);
            }
            return res.send({ error: 'Something went wrong', status: result.status });
        });
});
app.listen(PORT, () => {
    console.log(`Proxy server started at http://localhost:${PORT}/api`);
});
