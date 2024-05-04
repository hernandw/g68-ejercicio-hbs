import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
    res.render('home', {
        title: "home page",
        number: 55
    })
})

router.get('/about', (req, res) => {
    
    res.render("about", { 
        title: "about page",
        number: 1
    })
})

router.get('/contact', (req, res) => {

    res.render("contact", {
        title: "contact page",
        number: 2
    })
})



export default router