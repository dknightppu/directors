const pool = require('../../db');

const getDirectors = async (filter) => {
  let query;
  let params = [];
  
  if (filter) {
    query = "SELECT * FROM directorlist WHERE column_name = $1";
    params.push(filter);
  } else {
    query = "SELECT * FROM directorlist";
  }
  
  return pool.query(query, params);
};

const addDirectors = (data) => {
    const query = 'INSERT INTO directorlist (director) VALUES ($1::varchar) RETURNING *';
    return pool.query(query, [data.director]);
  };

  const updateDirectors = (id, data) => {
    const query = `
      UPDATE directorlist
      SET director = $1::varchar,
          notable_film = $2::varchar
      WHERE id = $3::int
      RETURNING *;
    `;
    return pool.query(query, [data.director, data.notable_film, id]);
  };
  

module.exports = {
    getDirectors,
    addDirectors,
    updateDirectors,
};
