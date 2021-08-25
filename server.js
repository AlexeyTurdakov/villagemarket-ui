const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const history = require('connect-history-api-fallback');


app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(history());
const port = process.env.PORT || 8081;
app.listen(port);