interface ICelular {
    nome:string;
    marca: string;
    preco: number;
    link: string,
    imagem: string
}

let celurares: Array<ICelular> = [
    {
        "nome": "moto g5",
        "marca": "motorola",
        "preco": 1000,
        "link":"https://www.trocafone.com/celulares/motorola/moto-g/moto-g5/m/moto-g5-dual?gclid=CjwKCAjwr_uCBhAFEiwAX8YJgXwhHuXngjqvJgJ0fVK1hzWDps9ncMVZ0U4haHC32gwIiv3JAjvJRBoCuFMQAvD_BwE#889-motorola-moto-g5-32gb-platinum-muito-bom-6",
        "imagem":"https://imagens.trocafone.com/images/phones/dt-moto-g5-platinum-frente.png"
    },
    {
        "nome": "iPhone 11",
        "marca": "iPhone",
        "preco": 2500,
        "link":"https://www.trocafone.com/celulares/iphone/iphone-11/m/iphone-11-pro-max#2420-iphone-11-pro-max-512gb-prateado-excelente-5",
        "imagem":"https://imagens.trocafone.com/images/phones/dt-5e46fb11-iphone-11-pro-max-prateado-frente.png"
    },
    {
        "nome": "Galaxy Fold",
        "marca": "iPhone",
        "preco": 1200,
        "link":"https://www.trocafone.com/celulares/samsung/galaxy-fold/m/galaxy-fold#2457-samsung-galaxy-fold-512gb-preto-excelente-5",
        "imagem":"https://imagens.trocafone.com/images/phones/dt-galaxy-fold-preto-frente.jpg"
    },
]

const getCelularesData = ()=>{
    return celurares
}

export {ICelular,getCelularesData}