import { Sequelize, DataTypes } from 'sequelize';
import databases from "../db.js"

const doador = databases.define(
    'doador', 
    {
        ka_idDoador: {
           type: DataTypes.INTEGER,
           allowNull:false,
           primaryKey: true,
           unique: true,
           autoIncrement: true,
        },
        ka_nomeDoador:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);

export default doador;