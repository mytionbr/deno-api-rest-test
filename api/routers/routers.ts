import {Router } from 'https://deno.land/x/oak@v6.5.0/mod.ts';
import getCelulares from '../controllers/celulares.controller.ts'
const router = new Router()

router.get("/api/v1/celulares",getCelulares)

export default router