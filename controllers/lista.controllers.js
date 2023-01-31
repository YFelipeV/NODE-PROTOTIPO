
import { pool } from '../db.js'

export const getlistas= async(req,res)=>{
    const [rows]= await pool.query("SELECT * FROM usuarios")
    console.log(rows);
    res.send(rows)

}
export const getLista=(req,res)=>{

    res.send("obteniendo lista")

}
export const postLista= async(req,res)=>{
    const{nombre,celular,id}= req.body
    const result= await pool.query("INSERT INTO usuarios(nombre,celular,id) VALUES (?, ?,?) ",
    [ 
        nombre,
        celular,
        id
    ]
    );
    console.log(result);
    res.json({
        nombre,celular,id
    })

}
export const putLista=(req,res)=>{

    
    res.send("atualizando lista")

}


export const deletelista=(req,res)=>{

    res.send("eliminando lista")

}