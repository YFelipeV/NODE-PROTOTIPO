import {Router} from 'express'


import{
    getlistas,
    getLista,
    postLista,
    putLista,
    deletelista
} from "../controllers/lista.controllers.js"

const router=Router()

 router.get('/lista', getlistas)
 
 router.get('/lista/:id', getLista)
 
 router.post('/lista', postLista)
 
 router.put('/lista/:id', putLista)
 
 router.delete('/lista/:id', deletelista )




export default router