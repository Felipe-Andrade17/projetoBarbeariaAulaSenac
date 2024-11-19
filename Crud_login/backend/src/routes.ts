import { Router } from 'express'

import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';
import { GruposControllers } from './Controllers/Grupos/GruposControllers';
import {LoginUsuariosControllers} from './Controllers/Login/LoginUsuariosControllers';

import { estaAutenticado } from './middleware/estaAutenticado';

const router = Router()

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios);
router.post('/CadastrarGrupos', estaAutenticado, new GruposControllers().cadastrarGrupos);
router.post('/ConsultarUsuarioUnico', estaAutenticado, new UsuariosControllers().consultarUsuarioUnico);
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios);

router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken);

router.put('/AlterarDadosUsuario',estaAutenticado, new UsuariosControllers().alterarDadosUsuarios); 

router.delete('/ApagarUsuarios/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)

router.get('/ConsultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios);

export default router