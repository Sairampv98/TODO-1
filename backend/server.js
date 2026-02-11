import express from "express";
import router from "./routes.js"

const app = express();

app.use("/demo", router);

/*app.get("/demo", (req,res) =>{
    res.status(200).send("This message is running using the server.js file alone")
})
*/
app.listen(5002, () =>{
    console.log("The Backend Server running on port 5002");
});


