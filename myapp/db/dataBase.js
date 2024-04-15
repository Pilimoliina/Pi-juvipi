const mercadolibre = {
    usuario: {
        Mail: "mvm@gmail.com",
        Usuario: "vicqueen",
        Contrasenia: "mvm",
        FechaNacimiento: 2004-9-27,
        NúmeroDocumento: 46240453,
        Foto: "VfotoPerfil.png",
    },


    product: 
    [
        {
            nombre: "Celular",
            foto: "/images/products/celu.jpg",
            descripcion: "Dispositivo inalámbrico electrónico",
            comentarios: [{
                usuario: 'pilipro',
                texto_comentario: 'Malo',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'Lindo',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'Recomendable',
                Foto: "FfotoPerfil.png"
            }]
        },
        {
            nombre: "Computadora",
            foto: "/images/products/compu.jpg",
            descripcion: "Máquina digital programable",
            comentarios: [{
                usuario: 'julita',
                texto_comentario: 'No recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'Lindo',
                Foto: "FfotoPerfil.png"
            },{
                usuario: 'vicqueen',
                texto_comentario: 'No recomendable',
                Foto: "VfotoPerfil.png"
            }]
        },
        {
            nombre: "Ipad",
            foto: "/images/products/ipad.jpg",
            descripcion: "Dispositivo informático móvil en el que la pantalla táctil ocupa casi todo su tamaño",
            comentarios: [{
                usuario: 'pilipro',
                texto_comentario: 'Quiero devolucion',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'No recomendable',
                Foto: "FfotoPerfil.png"
            },{
                usuario: 'vicqueen',
                texto_comentario: 'No recomendable',
                Foto: "PfotoPerfil.png"
            }]
        },
        {
            nombre: "Airpods",
            foto: "/images/products/airpods.jpg",
            descripcion: "Auriculares inalámbricos",
            comentarios: [{
                usuario: 'pilipro',
                texto_comentario: 'Muy bueno',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'No recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'Recomendable',
                Foto: "FfotoPerfil.png"
            }]
        },
        {
            nombre: "Apple pencil",
            foto: "/images/products/applePencil.jpg",
            descripcion: "Lápiz para pantalla táctil",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'Lindo',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'Lindo',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'Malo',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "Tv",
            foto: "/images/products/tv.jpg",
            descripcion: "Sistema para la transmisión y recepción de imágenes y sonidos a distancia que simulan movimientos",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'No recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'No recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'Quiero devolucion',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "Cafetera",
            foto: "/images/products/cafetera.jpg",
            descripcion: "Máquina destinada a la preparación del café y recipiente para servirlo",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'Recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'Recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'Muy bueno',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "Heladera",
            foto: "/images/products/heladera.jpg",
            descripcion: "Electrodoméstico que genera frío para posibilitar la conservación de los alimentos y de otros productos.",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'Lindo',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'pilipro',
                texto_comentario: 'Malo',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'Malo',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "Microondas",
            foto: "/images/products/microondas.jpg",
            descripcion: "Electrodoméstico destinado a cocinar o calentar alimentos",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'No recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'Lindo',
                Foto: "FfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'Quiero devolucion',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "Air fryer",
            foto: "/images/products/airfryer.jpg",
            descripcion: "Es un electrodoméstico que te permite cocer o freír los alimentos sin necesidad de sumergirlos en aceite",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'Recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'pilipro',
                texto_comentario: 'Muy bueno',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'Muy bueno',
                Foto: "AfotoPerfil.png"
            }],
            filtroId : function (ID) {
                let filtrar = [];
                for (let i = 0; i < this.lista.length; i++) {
                    if (this.lista[i].id == ID) {
                        filtrar.push(this.lista[i])
                    }
                    
                }
            }
        }
        
    
    ]
}

module.exports = mercadolibre;