const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/seed',(req,res)=>{
    db.Manatee.findAll().then(teesArr=>{
        if(!teesArr.length){
            db.Manatee.bulkCreate([
                {
                    setup:"What is the preferred beverage of British whales?",
                    punchline: "Earl Grey manatea"
                },
                {
                    setup:"What do you call undersea sporting enthusiasts?",
                    punchline: "fanatees"
                },
                {
                    setup:"How do fish unlock their houses?",
                    punchline: "With their manakeys!"
                },
                {
                    setup:"What is the top mobile carrier in the Everglades?",
                    punchline: "Manatee Mobile"
                },
                {
                    setup:"What's really grinding the gears of Old Man Sole these days?",
                    punchline: "Manateens"
                },
                {
                    setup:"What is the top dessert in the ocean?",
                    punchline: "Flanatee"
                },
                {
                    setup:"What did the coach of Starfish U focus on in his pre-game speech?",
                    punchline: "manateamwork"
                },
                {
                    setup:"What is the top youth sport in the ocean?",
                    punchline: "Manatee-ball"
                },
                {
                    setup:"What is AC/DC number one hit undersea?",
                    punchline: "ManaTNT"
                },
                {
                    setup:"What does Miss Pacific Ocean wear on her head?",
                    punchline: "A manatiara"
                },
                {
                    setup:"Who starred in the aquatic version of Titanic?",
                    punchline: "Manateeonardo DiCaprio"
                },
                {
                    setup:"What is a manatees favorite vacation activity?",
                    punchline: "Sitting in a cabanatee sipping on a banatee daquiri"
                },
            ]).then(data=>res.json("seeded"))
        } else {
            return res.json('data already exists!')
        }
    })
})


router.get('/',(req,res)=>{
    db.Manatee.findAll().then(tees=>{
        res.json(tees)
    })
})
router.get('/random',(req,res)=>{
    db.Manatee.findAll().then(tees=>{
        res.json(tees[Math.floor(Math.random()*tees.length)])
    })
})
router.get('/:id',(req,res)=>{
    db.Manatee.findOne({
        where:{
            id:req.params.id
        }
    }).then(tee=>{
        res.json(tee)
    })
})



module.exports = router;