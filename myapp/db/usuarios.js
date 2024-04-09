const usuarios = {
    lista: [{
        Mail: "mvm@gmail.com",
        Usuario: "vicqueen",
        Contrasenia: "***",
        FechaNacimiento: 2004-9-27,
        NúmeroDocumento: 46240453,
        Foto: "fotoPerfil.png",
    },
    {
        Mail: "pili@gmail.com",
        Usuario: "pilipro",
        Contrasenia: "***",
        FechaNacimiento: 2005-2-5,
        NúmeroDocumento: 46211111,
        Foto: "fotoPerfil.png",
    },
    {
        Mail: "julia@gmail.com",
        Usuario: "julita",
        Contrasenia: "***",
        FechaNacimiento: 2005-6-4,
        NúmeroDocumento: 46340456,
        Foto: "fotoPerfil.png",
    },
    {
        Mail: "agus@gmail.com",
        Usuario: "agustina",
        Contrasenia: "***",
        FechaNacimiento: 2005-12-12,
        NúmeroDocumento: 46000000,
        Foto: "fotoPerfil.png",
    },
    {
        Mail: "fede@gmail.com",
        Usuario: "fede",
        Contrasenia: "***",
        FechaNacimiento: 2004-7-12,
        NúmeroDocumento: 45200450,
        Foto: "fotoPerfil.png",
    }
],
}

const products = {
    lista: 
    [
        {
            nombre: "celular",
            foto: "fotoProducto.png",
            descripcion: "dispositivo inalámbrico electrónico",
            comentarios: [{
                usuario: 'pilipro',
                texto_comentario: 'malo',
                Foto: "fotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'lindo',
                Foto: "fotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'recomendable',
                Foto: "fotoPerfil.png"
            }]
        },
        {
            nombre: "computadora",
            foto: "fotoProducto.png",
            descripcion: "máquina digital programable",
            comentarios: [{
                usuario: 'julita',
                texto_comentario: 'no recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'lindo',
                Foto: "FfotoPerfil.png"
            },{
                usuario: 'pilipro',
                texto_comentario: 'recomendable',
                Foto: "PfotoPerfil.png"
            }]
        },
        {
            nombre: "ipad",
            foto: "fotoProducto.png",
            descripcion: "dispositivo informático móvil en el que la pantalla táctil ocupa casi todo su tamaño",
            comentarios: [{
                usuario: 'pilipro',
                texto_comentario: 'quiero devolucion',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'no recomendable',
                Foto: "FfotoPerfil.png"
            },{
                usuario: 'pilipro',
                texto_comentario: 'recomendable',
                Foto: "fotoPerfil.png"
            }]
        },
        {
            nombre: "airpods",
            foto: "fotoProducto.png",
            descripcion: "auriculares inalámbricos",
            comentarios: [{
                usuario: 'pilipro',
                texto_comentario: 'muy bueno',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'no recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'recomendable',
                Foto: "fotoPerfil.png"
            }]
        },
        {
            nombre: "apple pencil",
            foto: "fotoProducto.png",
            descripcion: "lápiz para pantalla táctil",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'lindo',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'lindo',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'malo',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "tv",
            foto: "fotoProducto.png",
            descripcion: "sistema para la transmisión y recepción de imágenes y sonidos a distancia que simulan movimientos",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'no recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'no recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'quiero devolucion',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "cafetera",
            foto: "fotoProducto.png",
            descripcion: "máquina destinada a la preparación del café y recipiente para servirlo",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'julita',
                texto_comentario: 'recomendable',
                Foto: "JfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'muy bueno',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "heladera",
            foto: "fotoProducto.png",
            descripcion: "electrodoméstico que genera frío para posibilitar la conservación de los alimentos y de otros productos.",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'lindo',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'pilipro',
                texto_comentario: 'malo',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'malo',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "microondas",
            foto: "fotoProducto.png",
            descripcion: "electrodoméstico destinado a cocinar o calentar alimentos",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'no recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'fede',
                texto_comentario: 'lindo',
                Foto: "FfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'quiero devolucion',
                Foto: "AfotoPerfil.png"
            }]
        },
        {
            nombre: "air fryer",
            foto: "fotoProducto.png",
            descripcion: "es un electrodoméstico que te permite cocer o freír los alimentos sin necesidad de sumergirlos en aceite",
            comentarios: [{
                usuario: 'vicqueen',
                texto_comentario: 'recomendable',
                Foto: "VfotoPerfil.png"
            },{
                usuario: 'pilipro',
                texto_comentario: 'muy bueno',
                Foto: "PfotoPerfil.png"
            },{
                usuario: 'agustina',
                texto_comentario: 'muy bueno',
                Foto: "AfotoPerfil.png"
            }]
        }
    
    ]
}


module.exports = usuarios

module.export = products

