const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({optionSuccessStatus: 200})); // some legacy browsers choke on 204

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/api/whoami', function (request, response) {
    response.json({
        'ipaddress': (request.header('X-Forwarded-For') || request.connection.remoteAddress), // For running behind reverse proxies
        'language': request.header('Accept-Language') || '',
        'software': request.header('User-Agent') || ''
    });
});

const listener = app.listen(process.env.PORT || 5000, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
