
// importação do modulo do express
const express = require("express");
const app = express(); 

// define a porta do servidor
const port = 5000;

//criação das rotas 
// rotas públicas
app.get("/",(req, res) => {
res.send("Parabéns, vocÊ conseguiu")
} )

// função para subir servidor  

app.listen(port, () => {
  console.log(`servidor na porta : ${port}`)
  console.log(`Link: http://localhost:${port}`)
})

