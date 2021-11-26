import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import UserRepository from '../app/Repository/UserRepository';
import { type } from 'os';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken'
import 'dotenv/config'

class AuthController {
   async auth(request: Request, response: Response){
        const userRepository = getCustomRepository(UserRepository);
       
        const {
            email,
            password
        } = request.body

        const user = await userRepository.PegarPorEmail(email)

        if (typeof user === 'undefined') {
            return response.status(401).json({
                status: "fail",
                data: {
                    title: "Usuario não Encontrado;"
                }
            })
        }

        const passwordIsValid = await compare(password, user.password);

        if(!passwordIsValid){
            return response.status(401).json({
                status: "fail",
                data: {
                    title: "Senha Invalida;"
                }
            })
        }

        delete user.password;
        delete user.created_at;
        delete user.updated_at;
       
        const token = sign({user}, 
            'chavemuitosecreta',{
                expiresIn: '1d',
                
        })

        return  response.json({
            status: 'sucesss',
            data: {
                token
            }
        })
    }
}

export default new AuthController();