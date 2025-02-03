const Course = require('../../../model/courseSchema')

const setOnInsertController = async (req,res)=>{
    const { courseStatus}= req.body
    const course = await Course.updateOne(
        {$and:[{"author": /.*Mosh.*/},{"price":{$lt:20}}] },
        {$set:{"status": courseStatus}},
        {upsert:false, writeConcern: { w: "majority" }},
    )

    res.send(course)
}

module.exports = setOnInsertController