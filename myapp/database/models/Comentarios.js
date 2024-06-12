module.exports = function (sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuariosId: {
            type: DataTypes.INTEGER
        },
        productosId: {
            type: DataTypes.INTEGER
        },
        textoComentario: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updateAt: {
            type: DataTypes.DATE
        },
        deleteAt: {
            type: DataTypes.DATE
        }}

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    };

    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "Usuario",
            foreignKey: "usuariosId"
        });

    Comentario.belongsTo(models.Producto,{
            as: "Producto",
            foreignKey: "productosId"
        });
    }

    return Comentario;
}