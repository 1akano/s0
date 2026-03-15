var a = require('ws');
var b = new a.Server({ port: 8080 });
b.on('connection', (c) => {
    c.on('message', (d) => {
        c.send(d);
    });
});
