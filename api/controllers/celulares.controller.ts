import { getCelularesData} from "../models/celulares.model.ts"

let celulares = getCelularesData()

const getCelulares =(
    {response}:{response:any},
)=>{
    response.status = 200
    response.body = celulares
}

export default getCelulares