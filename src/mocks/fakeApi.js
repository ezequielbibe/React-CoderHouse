const products = [
    {marca: "Samsung Galaxy", modelo:"A53", precio: 93000, caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", img:"https://b2b.multipoint.com.ar/Image/0/700_700-SM-A536_Galaxy_A53_5G_Awesome_Blue_Front2.png", id:"1"},
    {marca: "Samsung Galaxy", modelo:"S22 ULTRA", precio: 262999, caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", img:"https://media.flixcar.com/f360cdn/Samsung-99794126-pe-galaxy-s22-ultra-s908-sm-s908ezwlltp-530966321Download-Source-zoom.png", id:"2"},
    {marca: "Samsung Galaxy", modelo:"S21 FE", precio: 111999, caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990elgaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990elgaaro-530831978", id:"3"},
    {marca: "Samsung Galaxy", modelo:"Z Flip3", precio: 118999, caracteristicas: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus, mollitia officia asperiores eius eos rerum neque earum fugit! Consequuntur, nesciunt totam fuga inventore sapiente commodi reiciendis beatae eaque. Unde.", img:"https://specifications-pro.com/wp-content/uploads/2021/08/Samsung-Galaxy-Z-Flip-3-1.jpg", id:"4"}
]

export const getData = new Promise ((resolve, reject ) => {
    let condition = true;
    setTimeout(()=> {
        if (condition) {
            resolve(products);
        } else  {
            reject("algo salio mal");
        }
    }, 3000);
})