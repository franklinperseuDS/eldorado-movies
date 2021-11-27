import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import GeneroRepository from '../Repository/GeneroRepository';
import { Genero } from 'src/app/Entities/Genero';

class GeneroController {
    async  index(request: Request,response: Response){
        const generoRepository = getCustomRepository(GeneroRepository)
        const generos = await generoRepository.BuscarTodos(); 

        return response.json({
            status: 'success',
            data:generos});
            
    }
    async view(request: Request, response: Response) {
        const generoRepository = getCustomRepository(GeneroRepository);
        const { id } = request.params;
        const genero = await generoRepository.PegarPorId(id);

        response.json({
            status: 'success',
            data: genero

        })
    }
    async create (request: Request, response: Response){
        try{
            const generoRepository = getCustomRepository(GeneroRepository)
            const  {id,name}= request.body

            const GeneroAlreadyExists = await generoRepository.PegarPorTitulo(name);
            
            if (typeof GeneroAlreadyExists !== 'undefined') {
                return response.status(409).json({
                    status: "fail",
                    data: {
                        title: "Um Genero de Filme com o mesmo nome já existe no banco de dados;"
                    }
                })
            }

            let generos = new Genero();
            generos.id = id;
            generos.name = name;
            generos = await generoRepository.save(generos)
            return response.json(generos);
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
        const generoRepository = getCustomRepository(GeneroRepository);
        const { id } = request.params;
        let genero = await generoRepository.PegarPorId(id);

        const  {
            name,
        }= request.body

        genero.name = name;
       
        genero = await generoRepository.save(genero)
        return response.json({
            status: "success",
            data:genero});

    }
    async delete(request: Request, response: Response) {
        const generoRepository = getCustomRepository(GeneroRepository);
        const { id } = request.params;
        let genero = await generoRepository.PegarPorId(id);

        await generoRepository.delete(genero);
        return response.json({"msg": "Genero excluido com suceso!"});
    }
}

export default new GeneroController();