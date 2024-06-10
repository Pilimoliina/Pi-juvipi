module.exports = function (sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        usuarios_id: {
            type: DataTypes.INTEGER
        },
        productos_id: {
            type: DataTypes.INTEGER
        },
        texto_comentario: {
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
        timestamps: false,
        underscored: true
    };

    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "usuarios_id"
        });

    Comentario.belongsTo(models.Producto,{
            as: "productos",
            foreignKey: "productos_id"
        });
    }

    return Comentario;
}
