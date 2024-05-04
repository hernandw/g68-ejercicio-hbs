import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.render('home', {
        title: "home page",
    })
})

router.get('/about', (req, res) => {
    
    res.render("about", { 
        title: "about page",
    })
})

router.get('/contact', (req, res) => {

    res.render("contact", {
        title: "contact page",
    })
})



export default router