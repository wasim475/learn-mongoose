const Course = require('../../../model/courseSchema')

const setOnInsertController = async (req,res)=>{
    const {courseId, courseStatus}= req.body
    const existing = await Course.findOne({"_id": courseId})
    console.log(existing?.status)
    const course = await Course.updateOne(
        {"_id":courseId },
        {$set:{"status": courseStatus}},
        {upsert:true, writeConcern:{w: "majority"}, strict:false}
    )

    res.send(course)
}

module.exports = setOnInsertController