const express = require('express');
const router = express.Router();
const Person = require('../model/Person')


router.post('/',async (req,res) => {

    try {
        const data = req.body;
        const newPerson = new Person(data);       
        const response = await newPerson.save();
        res.status(201).json({ message: "Person created successfully", person: response });
          } catch (error) {
        res.status(500).send('An error occurred: ' + error.message + '\n' + error.stack);
    }
});



router.get('/', async (req,res)=> {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).send('An error occurred: ' + error);
    }
})


router.put('/update', async (req,res) => {     
      try {    
        const search = req.body;        
        const persons = await Person.find(search);        
        res.status(200).json(persons);  
    } catch (error) {   
        res.status(500).send('An error occurred: ' + error);  
    }
})



module.exports = router;


    
    
    // app.post('/person',async (req,res) => {
    
    //     try {
    //         const data = req.body;
    //         const newPerson = new Person(data);       
    //         const response = await newPerson.save();
    //         res.status(201).json("Person created successfully");s
    //           } catch (error) {
    //         res.status(500).send('An error occurred: ' + error);
    //     }
    // });
    
    // app.get('/about', function (req, res) {
    //     res.send('Hello World --- page about')
    //   })

