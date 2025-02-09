const Course = require('../../../model/PracticeModel/courseSchema')

const maxController = async (req, res)=>{
    const {maxPrice}= req.body
    const course = await Course.updateMany(
        {'tags':'backend'},
        { $max: { "price": maxPrice } }
        
    )  
    res.send(course)
    console.log(course)
}

module.exports = maxController