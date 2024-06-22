module.exports = function (sequelize, DataTypes) {

    /* alias */
    let alias = "Producto";

    /* Configuracion de las columnas */
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuariosId:{
            type: DataTypes.INTEGER
        },       
        nombreProducto:{
            type: DataTypes.STRING
        },
        fotoProducto:{
            type: DataTypes.STRING
        },
        descripcion:{
            type: DataTypes.STRING
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        },
        deletedAt:{
            type: DataTypes.DATE
        }

  	}
        /* Config de la tabla */
        let config = {
            tableName: "productos",
            timestamps: false,
            underscored: false,
        };
    
        const Producto = sequelize.define(alias, cols, config);
        Producto.associate = function(models) {
            Producto.belongsTo(models.Usuario, {
                as: "usuarios",
                foreignKey: "usuariosId"
            });
    
            Producto.hasMany(models.Comentario, {
                 as: "comentarios",
                foreignKey: "productosId"
             });
        }
        
   

        return Producto;
    
}
