import { Router } from 'express';
import { sentEmail } from '../controllers/subscribe';

const router = Router();
router.post('/subscribes', sentEmail);
export default  router;