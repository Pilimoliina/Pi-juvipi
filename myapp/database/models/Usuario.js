module.exports = function (sequelize, DataTypes) {

    let alias = 'Usuario'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        mail: {
            type: DataTypes.STRING
        },
        usuario: {
            type: DataTypes.STRING
        },

        contrasenia: {
            type: DataTypes.STRING
        },
        //  remember_token: {
        //      type: dataTypes.STRING
        // },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
        }

    }

    let config = {
        tableName: "usuarios",
        timestamps: false, //Aclareción en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
    };

    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuarios_id"
        });
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuarios_id"
        });
    }


    return Usuario;

}