import { Sequelize, DataTypes } from 'sequelize';
import database from '../db.js';

const tipo_item = database.define('tipo_produto',{
        ka_idItem:{ 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            allowNull: false,
            primaryKey: true,
            },
        ka_nomeItem : {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
)
export default tipo_item;