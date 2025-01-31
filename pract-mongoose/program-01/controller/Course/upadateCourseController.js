const Course = require('../../model/courseSchema');

const updateCorseController = async (req,res)=>{
    const {id}= req.body
    const course = await Course.findByIdAndUpdate({"_id":id},{""})
    res.send(id)
}

module.exports = updateCorseController;