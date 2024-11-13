import { Router } from 'express'

import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';
import { GruposControllers } from './Controllers/Grupos/GruposControllers';
import {LoginUsuariosControllers} from './Controllers/Login/LoginUsuariosControllers';

const router = Router()

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios);
router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos);
router.post('/ConsultarUsuarioUnico', new UsuariosControllers().consultarUsuarioUnico);
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios);

router.put('/AlterarDadosUsuario', new UsuariosControllers().alterarDadosUsuarios); 

router.delete('/ApagarUsuarios/:id', new UsuariosControllers().apagarUsuarios)

router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios);



export default router