const port = process.env.PORT || 8000;
const connect = require("connect");
const serveStatic = require("serve-static");

var serve = serveStatic("./dist");
connect().use(serve).listen(port, function() {
	console.log("Server running on " + port + "...");
});
