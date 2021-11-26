import { Filme } from "src/app/Entities/Filme";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Filme)
class FilmeRepository extends Repository<Filme>{
    public BuscarTodos(): Promise<Filme[]>{
       const query = this.createQueryBuilder('n');
       return query.getMany();
    }
    public PegarPorId(id) {
        // return this.findOne({id}, {relations: ['filmes']});
        const query = this.createQueryBuilder('n');
        query.where({id})
        return query.getOne()
    }
    public PegarPorTitulo(name: string) {
        return this.findOne({name});
    }
}

export default FilmeRepository;