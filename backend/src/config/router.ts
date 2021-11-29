
import { Router } from "express";
import  GeneroController  from './../app/Controllers/GeneroController';
import FilmeController from "./../app/Controllers/FilmeController";
import uploadConfig from './multer';
import Multer  from 'multer';
import UserController from "./../app/Controllers/UserController";
import AuthController from "./../app/Controllers/AuthController";
import Auth from "./../app/Middlewares/AuthMiddleware";
import filmeValidator from "src/app/Validator/filmeValidator";
import userValidator from "src/app/Validator/userValidator";
import generoValidator from "src/app/Validator/generoValidator";


const upload = Multer(uploadConfig);

const router = Router();

console.log(" /----|  __________________\n<    Oo\ /  Oi Meu Chapaaa! |\n |____<  \\_________________|")
router.post('/auth', AuthController.auth);


router.get('/usuarios', UserController.index);
router.post('/usuarios',userValidator, UserController.create);
router.get('/usuarios/:id', UserController.view);
router.put('/usuarios/:id',userValidator, UserController.update);
router.delete('/usuarios/:id', UserController.delete);

// router.use(Auth)
router.get('/filmes', FilmeController.index);
router.post('/filmes', upload.single('poster'), filmeValidator,FilmeController.create);
// router.post('/filmes', FilmeController.create);
router.get('/filmes/:id', FilmeController.view);
router.put('/filmes/:id', filmeValidator,FilmeController.update);
router.delete('/filmes/:id', FilmeController.delete);

router.get('/generos', GeneroController.index);
router.post('/generos',generoValidator, GeneroController.create);
router.get('/generos/:id', GeneroController.view);
router.put('/generos/:id',generoValidator, GeneroController.update);
router.delete('/generos/:id', GeneroController.delete);




export default router;