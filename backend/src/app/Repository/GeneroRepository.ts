import { Genero } from "src/app/Entities/Genero";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Genero)
class GeneroRepository extends Repository<Genero>{
    public BuscarTodos(): Promise<Genero[]>{
       const query = this.createQueryBuilder('n');
       return query.getMany();
    }
    public PegarPorId(id) {
        // return this.findOne({id}, {relations: ['genero']});
        const query = this.createQueryBuilder('n');
        query.where({id})
        return query.getOne()
    }
    public PegarPorTitulo(name: string) {
        return this.findOne({name});
    }
   
}

export default GeneroRepository;