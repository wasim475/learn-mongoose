const  mongoose = require('mongoose');
const Course = require('../../model/courseSchema');

const updateCorseController = async (req,res)=>{
    const {id}= req.body
    // const findCourse = await Course.findById({"_id": id})
    const course = await Course.findOneAndUpdate(
        {"_id":id , "isPublish":false},
        {$set:{"name": "React.js"}},
        {new: true}
    )
    if(course){
        res.send(course)

    }else{
        res.send("Course not found.")
    }
}

module.exports = updateCorseController;