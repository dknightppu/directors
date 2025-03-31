const express = require("express");
const directorsRoutes = require("./src/directors/routes");
const cors = require("cors");

const app = express();
const port = 8011;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello Point Park University");
});

// API Route
app.use("/api/v1/directors", directorsRoutes);

app.listen(port, () => console.log(`running on ${port}`));
