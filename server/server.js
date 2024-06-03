import express from "express";
import cors from "cors";
import likemeRoutes from "./src/routes/likeme.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

//  API
app.use("/", likemeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
