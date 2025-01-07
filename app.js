const express    = require("express");
const app        = express();
const db         = require("./db/connection");
const bodyParser = require("body-parser")

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`)
});

//body parser
app.use(bodyParser.urlencoded({extended: false})); 



//DB CONNECTION
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
    res.send("Está funcionando 3");
});

// JOBS ROUTES
app.use('/jobs', require('./routes/jobs'));
