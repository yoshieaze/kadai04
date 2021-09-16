require('dotenv').config()
const express = require('express')
const {createNotesTitle,
} = require("./notion")
const cors = require('cors');
 
const app = express()
// app.use(cors({ origin: /http:\/\/localhost/}));
// app.options("*",cors());
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/send-notion", async (req, res) =>{
    const {title, date,agenda,todo,decision} = req.body
    // const title = req.body.title
    // const date = req.body.date
    // console.log(req.body)
    await createNotesTitle(
        title,
        date,
        agenda,
        todo,
        decision
    )
    res.redirect("/")

})

app.listen(process.env.PORT)