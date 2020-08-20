import * as Joi from 'joi';

export default Joi.object().keys({
    A: Joi.bool().default(false),
    B: Joi.string().default('#ff0000')
});