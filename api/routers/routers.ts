import {Router } from 'https://deno.land/x/oak@v6.5.0/mod.ts';

const router = new Router()

router.get("/api/v1/test", (context) =>{
    context.response.status = 200
    context.response.body = 'Testando a API'
})

export default router