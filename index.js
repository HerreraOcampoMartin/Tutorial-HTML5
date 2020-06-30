const express = require("express");
require("dotenv").config();

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Funca</h1>");
});

app.use(router);

app.listen(process.env.PORT);
