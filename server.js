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

app.use("/api/v1/directors", directorsRoutes);

// API Route
app.get('/api/v1/directors', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM directorlist');
      res.json(result.rows);
    } catch (err) {
      console.error('Error fetching directorlist:', err);
      res.status(500).json({ error: err.message });
    }
  });


app.listen(port, () => console.log(`running on ${port}`));
