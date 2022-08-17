import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//this should be declared after the bodyParser
//so It wont return an undefined body
app.use("/", router);

router.get('/', (req, res) => {
    res.sendFile("index.html");
});

router.post('/login', (req, res) => {
    const { username, password } = req.body
    console.log(username, password)

    res.end("check logs");
});

app.listen(3000, () => {
    console.log("server started http://localhost:3000");
})