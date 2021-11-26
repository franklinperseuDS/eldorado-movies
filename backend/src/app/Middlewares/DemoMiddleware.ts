import { NextFunction, Response,Request } from 'express';



const DemoMiddleware = (request:Request, response:Response, next: NextFunction) =>
{
    
    console.debug("Mensagem", "Chamando a rota de view")
    return response.json({mensagem: "Deu Algo Errado!"});
    next()
}

export default DemoMiddleware;