import express, { json } from 'express'
import doadores from './model/doador.js'
import produtos from './model/produto.js'
import tipo_item from './model/tipo_items.js'
import 'dotenv/config'

const app = express();
app.use(express.json());
/*
app.use(cors({
  origin:"http://localhost:8081/",
}))
*/
app.get("/doador", async(req,res)=>{

    res.send( await doadores.findAll());
   
});
app.post("/doador", async(req,res)=>{
   await doadores.create({
      ka_nomeDoador: req.body.ka_nomeDoador
   });

   res.status(201).json(req.body);
});

app.get("/produto", async(req, res)=>{
  res.send( await produtos.findAll());
});
app.get("/tipoitems", async(req, res)=>{
  res.send( await tipo_item.findAll());
});

app.post("/produto", async(req, res)=>{
    await produtos.create({
      ka_nomeProd: req.body.ka_nomeProd,
      ka_quantProd: req.body.ka_quantProd,
      ka_dataProd: req.body.ka_dataProd,
      ka_fkidTipoItem: req.body.ka_fkidTipoItem,
      ka_fkidDoador: req.body.ka_fkidDoador
    });
    
    res.status(201).json(req.body);
});   

app.listen(3030)
