const Person = require('../model/Person');
const mongoose  = require('mongoose');


exports.create = async (req, res) =>{
        try{
            const data = req.body // Assuming the request body contains the person data
    
            // Create a new Person document using the Mongoose model
            const newPerson = new Person(data);
    
            // Save the new person to the database
            const response = await newPerson.save();
            console.log('data saved');
    
            const payload = {
                id: response.id,
                username: response.username }
            console.log(JSON.stringify(payload));
            res.status(200).json({payload});
        }
        catch(err){
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error'});
        }
    };

    exports.getbyid = async(req, res)=>{
        try{
                const response = await Person.findById(req.params.id);
                console.log('response fetched');
                res.status(200).json(response);
          }
            catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };

  exports.get=async (req, res) =>{
        try{
            const data = await Person.find(req.params.id);
            console.log('data fetched');
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };
    
    exports.edit=async (req, res)=>{
        try{
            const personId = req.params.id; // Extract the id from the URL parameter
            const updatedPersonData = req.body; // Updated data for the person
    
            const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
                new: true, // Return the updated document
                runValidators: true, // Run Mongoose validation
            })
    
            if (!response) {
                return res.status(404).json({ error: 'Person not found' });
            }
    
            console.log('data updated');
            res.status(200).json(response);
        }catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };
    
    exports.delete = async (req, res) => {
        try{
            const personId = req.params.id; // Extract the person's ID from the URL parameter
            
            // Assuming you have a Person model
            const response = await Person.findByIdAndRemove(personId);
            if (!response) {
                return res.status(404).json({ error: 'Person not found' });
            }
            console.log('data delete');
            res.status(200).json({message: 'person Deleted Successfully'});
        }catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };
// update for webook check on jenkins
