import { Filme } from "src/app/Entities/Filme";
import { Request, Response } from "express";
import { getCustomRepository, TypeORMError } from "typeorm";
import FilmeRepository from '../Repository/FilmeRepository';


class FilmeController {
    async  index(request: Request,response: Response){
        const filmesRepository = getCustomRepository(FilmeRepository)
        const filmes = await filmesRepository.BuscarTodos(); 

        return response.json(filmes);
    }
    async view(request: Request, response: Response) {
        const filmesRepository = getCustomRepository(FilmeRepository);
        const { id } = request.params;
        const filmes = await filmesRepository.PegarPorId(id);

        response.json({
            status: 'success',
            data: filmes

        })
    }
    async create (request: Request, response: Response){
    try{
        const filmesRepository = getCustomRepository(FilmeRepository);

          const  {
              name,
              slug,
              sinopse,
              ano_lancamento,
              faturamento,
              genero,
              poster,
              is_actived
          }= request.body

          const FilmeAlreadyExists = await filmesRepository.PegarPorTitulo(name);

              if (typeof FilmeAlreadyExists !== 'undefined') {
                  return response.status(409).json({
                      status: "fail",
                      data: {
                          title: "Um Filme com o mesmo nome já existe no banco de dados;"
                      }
                  })
              }

            let filmes = new Filme();
            filmes.name = name;
            filmes.slug = slug;
            filmes.sinopse = sinopse;
            filmes.ano_lancamento = ano_lancamento;
            filmes.faturamento = faturamento;
            filmes.genero = genero;
            filmes.poster = poster;
            filmes.is_actived = is_actived;
            filmes = await filmesRepository.save(filmes)

            return response.status(201).json({
                status: "sucess",
                data:{
                    title: "filme cadastrado com sucesso",
                    filme : filmes
                }
            });
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
        const filmesRepository = getCustomRepository(FilmeRepository);
        const { id } = request.params;
        let filmes = await filmesRepository.PegarPorId(id);

        const  {
            name,
            slug,
            sinopse,
            poster,
            ano_lancamento,
            faturamento,
            genero,
            is_actived,
            created_at,
            updated_at
        }= request.body

        filmes.name = name;
        filmes.slug = slug;
        filmes.sinopse = sinopse;
        filmes.poster = poster;
        filmes.ano_lancamento = ano_lancamento;
        filmes.faturamento = faturamento;
        filmes.genero = genero;
        filmes.is_actived = is_actived;
        filmes = await filmesRepository.save(filmes)
        return response.json(filmes);

    }
    async delete(request: Request, response: Response) {
        const filmesRepository = getCustomRepository(FilmeRepository);
        const { id } = request.params;
        let news = await filmesRepository.PegarPorId(id);

        await filmesRepository.delete(news);
        return response.json({"msg": "Filme excluido com suceso!"});
    }
}

export default new FilmeController();