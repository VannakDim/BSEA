const express =require ("express");
const authRoutes =require ("./routes/auth.js")
const aboutRoutes =require ("./routes/about.js")
const teamRoutes =require ("./routes/team.js")
const caroRoutes =require ("./routes/carousel.js")
const multer =require ("multer");
const cors = require("cors");
require('dotenv').config()

const port = 8000;
const app = express()

app.use(cors({ origin: process.env.CORS, credentials: true }));

app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'../client/public/upload')
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+ file.originalname)
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('file'), function (req,res){
    const file = req.file;
    
    about.updateAboutImg(file.filename)
    res.status(200).json(file.filename)
})

app.use("/auth", authRoutes)
app.use("/about", aboutRoutes)
app.use("/team", teamRoutes)
app.use("/caro", caroRoutes)

app.listen(port, () => {
    console.log(`API app listening on port ${port}!`)
})