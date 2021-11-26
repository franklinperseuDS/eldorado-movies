import { NextFunction, Response,Request } from 'express';
import * as Yup from "yup";
import { pt } from "yup-locale-pt"

Yup.setLocale(pt)
export default async (request:Request, response:Response, next:NextFunction) =>
{
    try{
        const schema = Yup.object().shape({
            name: Yup.string().required().trim(),
            email:Yup.string().required().trim(),
            password:Yup.string().required().trim(),
           
        })

        await schema.validate(request.body, {abortEarly: false})
        return next();
    }catch (error){
        return response.status(400).json({
            status: "fail",
            message: error.inner
        })
    }
}