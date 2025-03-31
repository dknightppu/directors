const queries = require("./queries");

// Get All Data
const getDirectors = async (req, res) => {
    try {
    const { filter } = req.query;  
      const result = await queries.getDirectors(filter);
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Add Data
const createDirectors = async (req, res) => {
    try {
      const data = req.body;
      const result = await queries.addDirectors(data);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Update Data
const updateDirectors = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await queries.updateDirectors(id, data);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {
    getDirectors,
    createDirectors,
    updateDirectors,
};
