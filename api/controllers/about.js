const db = require("../db.js")
const jwt = require("jsonwebtoken");


const addPost = (req, res) => {
 
    const q =
      "INSERT INTO home(`about`) VALUES (?)";

    const values = [
      req.body.about
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
};

const getAbout = (req, res)=>{
    const q = "SELECT  * FROM about";
    db.query(q, (err, data)=>{
        if(err) return req.send(err);
        return res.status(200).json(data)
    })
}

const getPost = (req, res) => {
    const q =
      "SELECT p.id, `username`, `title`, `description`, p.img, u.img AS userImg, `cat`,`postDate` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };


const deletePost = (req, res) => {

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
  
  const postId = req.params.id;
  const q = "DELETE FROM posts WHERE `id` = ?";

  db.query(q, [postId], (err, data) => {
    if (err) return res.status(403).json("You can delete only your post!");

    return res.json("Post has been deleted!");
  });
  });
};
function updateAboutImg(file){
  const q = "UPDATE about SET description=? WHERE class='about-img'";
    const values = [
      "./upload/" + file
    ];

    db.query(q, [values], (err, data) => {
      if (err) return (err);
      return "Updated";
    });
}

const updatePost = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q =  "UPDATE about SET `about`=?,`description`=?,`class`=?,`icon`=? WHERE `id` = ?"
    const values = [req.body.about, req.body.description,req.body.cls,req.body.icon,postId]

    db.query(q, [...values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  // });
};

module.exports = {addPost, deletePost, getPost, getAbout, updatePost, updateAboutImg}