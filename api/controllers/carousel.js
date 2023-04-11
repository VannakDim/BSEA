const db = require ("../db.js");


const getCarousel = (req, res)=>{
  const q = "SELECT  * FROM carousel";
  db.query(q, (err, data)=>{
      if(err) return req.send(err);
      return res.status(200).json(data)
  })
}

module.exports = getCarousel;