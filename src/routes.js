import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/api/v1/users', UserController.store);
routes.post('/api/v1/sessions', SessionController.store);

routes.get('/api/v1/users', UserController.index);

routes.use(authMiddleware);
routes.put('/api/v1/users', UserController.update);
routes.post('/api/v1/files', upload.single('file'), FileController.store);

export default routes;
