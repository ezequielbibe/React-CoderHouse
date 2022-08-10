const Pagar =  (a) => {
    console.log(a)
    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
            Authorization: "Bearer TEST-440751578625224-080802-97c303bd5f21d47cd5e6a6426ad41be2-362276091"
        },
        body: JSON.stringify({
            items: a,
            back_urls: {
                failure: 'http://localhost:3000/fallo',
                pending: 'http://localhost:3000/pendiente',
                success: 'http://localhost:3000/mp/exito/',
            },
        })
    })
    .then((res)=>{
        return res.json()
    }).then(json =>{
        const { init_point } = json;
        window.location = init_point
    })
    .catch((error)=>{
        console.error(error)
    })
    .finally(()=>{
        console.log(`se consumio la api de mercadopago`)
    })
}

export default Pagar;