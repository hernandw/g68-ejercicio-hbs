import express from "express";
import router from "./router/router.js";
import exphbs from "express-handlebars";
import path from "path";
const __dirname = path.resolve();
const app = express();

const PORT = process.env.PORT || 3000;

//configurar el motor de plantilla

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);


//routes
app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));