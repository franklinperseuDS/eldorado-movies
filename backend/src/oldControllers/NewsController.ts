import { Request, Response } from "express";

class NewsController {
    index(request: Request,response: Response){
        return response.json({"MSG": "index"});
    }
}

export default new NewsController;