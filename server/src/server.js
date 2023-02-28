const http = require("http");

const app = require("./app");

const { loadplanet } = require("./modal/planets.modal")

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function startServer(){
    await loadplanet();
    server.listen(PORT,()=>{
        console.log(`listening on port${PORT}`);
        
    })

}
startServer();