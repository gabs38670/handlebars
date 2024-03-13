const express = require ('express')
const exphbs = require ('express-handlebars')

const app = express()


app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static("public"))

app.get('/', function(req , res){
  
    res.render( "home")
    
});
app.get('/cenoura', function(req , res){
 const massa =[
    "3 cenouras médias picadas ",
    "1 xícara de chá de óleo ",
    "3 ovos ",
    "2 xícaras de chá de açúcar refinado especial GUARANI ",
    "2 xícaras de chá de farinha de trigo ",
    "1 pitada de sal ",
    "1 colher de sopa de fermento em pó "
 ]
 const cobertura = [
    "1 colher de manteiga ",
    "2 colheres de chocolate em pó",
    "1/2 xícara de chá de açúcar refinado especial GUARANI ",
    "1/2 xícara de chá de leite "
 ]

 res.render("cenoura", {massa, cobertura});
})

app.get('/chocolate',function(req , res){
   
   const massa =[
      "1 e meia xícara de chá de açúcar",
      "Meia xícara de chá de óleo",
      "1 xícara de chá de chocolate em pó",
      "2 xícaras de chá de farinha de trigo",
      "1 xícara de chá de água quente",
      "1 colher de sopa de fermento em pó"
   ]
   const cobertura =[
      "1 e meia xícara de chá de leite",
      "Meia xícara de chá de chocolate em pó",
      "1 colher de sopa de manteiga",
      "1 xícara de chá de açúcar"
   ]
      res.render("chocolate", {massa, cobertura})
   })
   app.get('/milho',function (req , res){
      const ingredientes =[
        " 1 espiga ou lata de milho",
         "3 ovos",
         "2 colheres de sopa de manteiga",
         "1 e meia xícara de chá de açúcar",
         "3 xícaras de chá de leite",
         "1 xicara de chá de fubá de milho",
         "6 colheres de sopa de farinha de trigo",
         "1 colher de sopa de fermento em pó",
         "4 colheres de sopa de queijo parmesão ralado",
   ]
      res.render("milho",{ingredientes})
   })

app.listen(4000)
