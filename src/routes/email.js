import {Router} from 'express';
import {sendEmail} from '../controllers/EmailController';

const EmailRoutes = Router();

EmailRoutes.post('/send', sendEmail );

export {EmailRoutes};