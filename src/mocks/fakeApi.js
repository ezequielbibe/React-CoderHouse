const products = [
    {
        marca: "Samsung Galaxy", 
        modelo:"A53", 
        precio: 93000, 
        caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", 
        img:"https://b2b.multipoint.com.ar/Image/0/700_700-SM-A536_Galaxy_A53_5G_Awesome_Blue_Front2.png", 
        id:1,
        stock: 10,
        categoria:"celulares"
    },
    
    
    {
        marca: "Samsung Galaxy", 
        modelo:"S22 ULTRA", 
        precio: 262999, 
        caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", 
        img:"https://media.flixcar.com/f360cdn/Samsung-99794126-pe-galaxy-s22-ultra-s908-sm-s908ezwlltp-530966321Download-Source-zoom.png", 
        id: 2, 
        stock: 6,
        categoria:"celulares"
    },

    {
        marca: "Samsung Galaxy", 
        modelo:"S21 FE", 
        precio: 111999, 
        caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", 
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990elgaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990elgaaro-530831978", 
        id: 3, 
        stock: 8,
        categoria:"celulares"
    },

    {
        marca: "Samsung Galaxy",
        modelo:"Z Flip3", 
        precio: 118999, 
        caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://specifications-pro.com/wp-content/uploads/2021/08/Samsung-Galaxy-Z-Flip-3-1.jpg", 
        id: 4,
        stock: 7, 
        categoria:"celulares"
    },

    {
        marca:"Noblex",
        modelo:"Smart TV Dk43x5100 Led Full HD 43 pulgadas",
        precio: 66499,
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_848039-MLA47150751310_082021-O.webp",
        id: 5,
        stock: 3,
        categoria:"televisores",
    },

    {
        marca:"Samsung",
        modelo:"Smart TV Series 7 UN55AU7000GCZB LED 4K 55 pulgadas",
        precio: 139999,
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_739692-MLA48913871021_012022-O.webp",
        id: 6,
        stock: 5,
        categoria:"televisores",
    },

    {
        marca:"TCL",
        modelo:"Smart TV P725-Series L50P725 LED 4K 50 pulgadas",
        precio:"99999",
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_848039-MLA47150751310_082021-O.webp",
        id: 7,
        stock: 4,
        categoria:"televisores",
    },

    {
        marca:"Philips",
        modelo:"Smart TV 65PUD7609/77 LED 4K 65 pulgadas",
        precio: 185339,
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_803275-MLA48707824564_122021-O.webp",
        id: 8,
        categoria:"televisores",
    },

    {
        marca:"MacBook",
        modelo:"Air A1466 13.3 pulgadas Intel Core i5 5350U 8GB de RAM 128GB SSD",
        precio:"",
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_722803-MLA42901955282_072020-O.webp",
        id: 9,
        stock: 2,
        categoria:"computadoras",
    },

    {
        marca:"Acer",
        modelo:"Aspire Ryzen 3 4gb 256gb Ssd 15.6",
        precio: 131769,
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_851467-MLA49947541311_052022-O.webp",
        id: 10,
        stock: 3,
        categoria:"computadoras",
    },

    {
        marca:"EXO",
        modelo:"L33E 14 pulgadas Intel Celeron N4020 4GB de RAM 64GB SSD",
        precio: 60899,
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_895255-MLA48454315654_122021-O.webp",
        id: 11,
        stock: 2,
        categoria:"computadoras",
    },

    {
        marca:"HP",
        modelo:"Probook 440g8 14' I7-1165g7 8gb Ram 512ssd W10p",
        precio: 364309,
        caracteristicas:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.",
        img:"https://http2.mlstatic.com/D_NQ_NP_732333-MLA49194493079_022022-O.webp",
        id: 12,
        stock: 1,
        categoria: "computadoras",
    }
]

export const getData = (idCategory) => {

    return new Promise((resolve, reject) => {
        const productosFiltrados = products.filter((prod) => prod.categoria === idCategory);
        
        setTimeout(() => {
           if (idCategory) {
                resolve(productosFiltrados);
            } else {
                resolve(products);
            }
        }, 2000);
    })
}

export const getDataOnly = (idDetail) => {
    return new Promise((resolve, reject) => {
        const productoFiltrado = products.find(prod => prod.modelo === idDetail)
        setTimeout(() => {
            resolve(productoFiltrado);
        })
    }, 2000)
}