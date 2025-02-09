const courseV = require('../../../model/PracticeModel/CourseModelWithValidation')

const validationlCourseController = async (req,res)=>{
    const {name, tags, price, author} = req.body
    const course = await new courseV({name, tags , price, author})
    try {
    await course.validate()
    await course.save()
    res.send(course)
    } catch (err) {
        for(field in err.errors){
            res.json({Error:err.errors[field].message})
        } 
        res.json({"Error":err?.message})
    }
}
 
module.exports = validationlCourseController