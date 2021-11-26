
import { Router } from "express";
import  GeneroController  from './../app/Controllers/GeneroController';
import FilmeController from "./../app/Controllers/FilmeController";
import uploadConfig from './multer';
import Multer  from 'multer';
import UserController from "./../app/Controllers/UserController";
import AuthController from "./../app/Controllers/AuthController";
import Auth from "./../app/Middlewares/AuthMiddleware";


const upload = Multer(uploadConfig);

const router = Router();

console.log("olá");
console.log(" /----|\n<    Oo\ \n |____<")
router.post('/auth', AuthController.auth);


router.get('/usuarios', UserController.index);
router.post('/usuarios', UserController.create);
router.get('/usuarios/:id', UserController.view);
router.put('/usuarios/:id', UserController.update);
router.delete('/usuarios/:id', UserController.delete);

// router.use(Auth)
router.get('/filmes', FilmeController.index);
router.post('/filmes',upload.single('poster'), FilmeController.create);
// router.post('/filmes', FilmeController.create);
router.get('/filmes/:id', FilmeController.view);
router.put('/filmes/:id', FilmeController.update);
router.delete('/filmes/:id', FilmeController.delete);

router.get('/generos', GeneroController.index);
router.post('/generos', GeneroController.create);
router.get('/generos/:id', GeneroController.view);
router.put('/generos/:id', GeneroController.update);
router.delete('/generos/:id', GeneroController.delete);




export default router;