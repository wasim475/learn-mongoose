const courseV = require('../../../model/CourseModelWithValidation')

const validationlCourseController = async (req,res)=>{
    try {
    const {name, tags, price, author} = req.body
    const course = await new courseV({name, tags , price, author})
    await course.validate()
    await course.save()
    res.send(course)
    } catch (error) {
        res.json({"Error":error?.message})
    }
}
 
module.exports = validationlCourseController