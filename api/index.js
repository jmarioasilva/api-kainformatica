import express, { json } from 'express'
import doadores from './model/doador.js'
import produtos from './model/produto.js'
import tipo_item from './model/tipo_items.js'
import 'dotenv/config'

const app = express();
app.use(express.json());


app.get('/doador', async(req,res)=>{

    res.send( await doadores.findAll());
   
});

app.get('/produto', async(req, res)=>{
  res.send( await produtos.findAll());
});
app.get('/tipoitems', async(req, res)=>{
  res.send( await tipo_item.findAll());
});
    

app.listen(3000)