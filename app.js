const express    = require("express");
const exphbs     = require("express-handlebars")
const app        = express();
const path       = require("path");
const db         = require("./db/connection");
const bodyParser = require("body-parser")

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`)
});

/*body parse*/
app.use(bodyParser.urlencoded({extended: false})); 

/*handlebars*/
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

// start folder
app.use(express.static(path.join(__dirname, "public")));

/*DB CONNECTION*/
db
    .authenticate()
    .then(() =>{
        console.log("Conectou ao banco com sucesso!");
    })
    .catch(err =>{
        console.log("Ocorreu um erro ao iniciar", err)
    })

//ROUTES
app.get("/", (req, res) => {
    res.render("index");
});

// JOBS ROUTES
app.use('/jobs', require('./routes/jobs'));
