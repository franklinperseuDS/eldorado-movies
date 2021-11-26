import { Request, Response } from "express";
import { User } from "src/app/Entities/User";
import { getCustomRepository } from "typeorm";
import UserRepository from '../Repository/UserRepository';
import { createTransport } from 'nodemailer';
import mailConfig from '../../config/mail';
class UserController {
    async  index(request: Request,response: Response){
        const userRepository = getCustomRepository(UserRepository)
        const usuario = await userRepository.BuscarTodos(); 

        return response.json(usuario);
    }
    async view(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository);
        const { id } = request.params;
        const usuario = await userRepository.PegarPorId(id);

        response.json({
            status: 'success',
            data: usuario

        })
    }
    async create (request: Request, response: Response){
    try{
        const userRepository = getCustomRepository(UserRepository);

          const  {
              id,
              name,
              email,
              password
          }= request.body

          const UserAlreadyExists = await userRepository.PegarPorTitulo(name);

              if (typeof UserAlreadyExists !== 'undefined') {
                  return response.status(409).json({
                      status: "fail",
                      data: {
                          title: "Um Usuário com o mesmo nome já existe no banco de dados;"
                      }
                  })
              }

            let usuario = new User();
            usuario.id = id;
            usuario.name = name;
            usuario.email = email;
            usuario.password = password;
            usuario = await userRepository.save(usuario)

              if(typeof usuario !== 'undefined'){
                const transporter = createTransport({
                    host: mailConfig.mailHost,
                    port: mailConfig.mailPort,
                    auth:{
                        user: mailConfig.mailUser,
                        pass: mailConfig.mailPass
                    }
                });
            const mailBodyText = `Olá ${usuario.name}, \n\nBem Vindo a Nossa plataforma.`;
            const mailBodyHtml = `Olá <strong ${usuario.name} </strong>, <br><p>Bem Vindo a Nossa plataforma.</p>`;
            let info = await transporter.sendMail({
                    to: "teste@email.com",
                    from: mailConfig.mailFrom,
                    replyTo: mailConfig.mailReplyTo,
                    subject: "Novo Usuário Cadastrado",
                    text: mailBodyText,
                    html: mailBodyHtml

                })
              

            return response.status(201).json({
                status: "sucess",
                data:{
                    title: "Usuario cadastrado com sucesso",
                    usuario : usuario,
                    info: info
                }
            });
            }else{
                return response.status(201).json({
                    status: "sucess",
                    data:{
                        title: "Usuario cadastrado com sucesso",
                        usuario : usuario
                        
                    }
                });
            }
        }catch(error) {
        return response.status(400).json({
            status: "error",
            data: {
                error: error.message
            }
        })
    }
    }
    async update(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository);
        const { id } = request.params;
        let usuario = await userRepository.PegarPorId(id);

        const  {
            name,
            email,
            password
        }= request.body


        usuario.name = name;
        usuario.email = email;
        usuario.password = password;
        usuario = await userRepository.save(usuario)
        return response.status(201).json({
            status: 'success',
            data: {
                usuario
            }
        });

    }
    async delete(request: Request, response: Response) {
        const usuarioRepository = getCustomRepository(UserRepository);
        const { id } = request.params;
        let user = await usuarioRepository.PegarPorId(id);

        await usuarioRepository.delete(user);
        return response.json({"msg": "Usuario excluido com suceso!"});
    }
}

export default new UserController();