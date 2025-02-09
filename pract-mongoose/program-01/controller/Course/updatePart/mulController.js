const Course = require('../../../model/PracticeModel/courseSchema')

const mulController = async(req,res)=>{
    const {mulPrice}= req.body
    const course = await Course.updateMany(
        {"tags":"backend"},
        {$mul:{"price":mulPrice}},
    )
    res.send(course)
}

module.exports = mulController