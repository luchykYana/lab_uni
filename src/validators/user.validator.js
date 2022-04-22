import Joi from 'joi';

export const UserValidator = Joi.object({
    email: Joi
        .string()
        .min(2)
        .max(20)
        .pattern(new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'))
        .required()
        .trim()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
            'string.min': 'мінімальна кількість символів 2',
            'string.max': 'максимальна кількість символів 20',
            'string.pattern.base': 'англійські літери та цифри + @ + англійські літери + . + 2-3 англійські літери'
        }),

    password: Joi
        .string()
        .min(8)
        .max(20)
        .pattern(new RegExp('[0-9]'))
        .trim()
        .required()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
            'string.min': 'мінімальна кількість символів 8',
            'string.max': 'максимальна кількість символів 20',
            'string.pattern.base': 'тільки цифри'
        }),

    rememberPassword: Joi
        .bool()
        .required(),

    country: Joi
        .string()
        .required(),

    sex: Joi
        .any()
        .required()
        .messages({
            'any.empty': 'поле є обов\'язковим для заповнення',
        }),

    textarea: Joi
        .string()
        .min(10)
        .max(300)
        .required()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
            'string.min': 'мінімальна кількість символів 10',
            'string.max': 'максимальна кількість символів 300',
        }),
});
