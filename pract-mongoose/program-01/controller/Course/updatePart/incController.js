const Course = require('../../../model/courseSchema')

const incController = async (req, res)=>{
    const {incPrice}= req.body
    const course = await Course.updateMany(
        {'tags':'backend'},
        { $inc: { "price": incPrice } }
        
    )  
    res.send(course)
    console.log(course)
}

module.exports = incController