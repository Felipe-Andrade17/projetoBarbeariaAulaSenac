import { Router } from 'express'

import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';
import { GruposControllers } from './Controllers/Grupos/GruposControllers';

const router = Router()

router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios);
router.post('/CadastrarGrupos', new GruposControllers().cadastrarGrupos);

router.get('/ConsultarUsuarios', new UsuariosControllers().consultarUsuarios);


export default router