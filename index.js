var a = new require("ws").Server({ port: 8080 });
a.on("connection", b => {
    b.on("message", c => {
        b.send(c);
    });
});
