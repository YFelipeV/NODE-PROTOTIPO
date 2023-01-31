import express from "express";
// import indexRoutes from "./routes/index.routes.js";
import cors from 'cors'
import listaRoutes from "./routes/lista.routes.js";
const app = express();

app.use(cors)
app.use(express.json())
app.use(listaRoutes);

app.listen(5000);
console.log("server listening on 5000");
console.log("http://localhost:4000");
