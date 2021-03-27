import {Application } from 'https://deno.land/x/oak@v6.5.0/mod.ts'
import {config} from "https://deno.land/x/dotenv/mod.ts"
import router from "./routers/routers.ts"

const HOST = config().HOST ?? "127.0.0.1"
const PORT = config().PORT ?? 8080

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Deno está rodando : ${HOST}: ${PORT}`)
await app.listen(`${HOST}:${PORT}`)