const Joi = require("joi")

const registerSchema = Joi.object({
    userEmail: Joi.string().required(),
    link: Joi.string().required()
}) 

module.exports = {registerSchema}