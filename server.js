//Importando o App
import dotenv from "dotenv";
import app from "./src/app.js";
import ProjetoRouters from "./src/routers/ProjetoRouters.js";
import TarefaRouters from "./src/routers/TarefaRouters.js";


dotenv.config();

//Definição de uma constante para a porta TCP
const PORT = process.env.PORT || 3000;

app.use('/projetos', ProjetoRouters);
app.use('/tarefas', TarefaRouters);

//Inicialização de um servidor WEB
app.listen(PORT, () => {
    console.log("Servidor inicializado");
});