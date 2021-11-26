import { User } from "src/app/Entities/User";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(User)
class UserRepository extends Repository<User>{
    public BuscarTodos(): Promise<User[]>{
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
    public PegarPorEmail(email: string){
        return this.findOne({email});
    }
}

export default UserRepository;