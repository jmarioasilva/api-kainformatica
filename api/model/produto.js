import {Sequelize, DataTypes} from 'sequelize';
import databases from "../db.js";
import tipo_item from './tipo_items.js';
import FOREIGNKEYS from 'sequelize/lib/query-types';

const produto = databases.define('produto',{
    ka_idProd: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false,        
    },
    ka_nomeProd: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    ka_quantProd:{
            type: DataTypes.INTEGER,
    },
    ka_dataProd:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ka_fkidTipoItem: {
       type: DataTypes.INTEGER,
        allowNull: false,
    },
});
produto.belongsToMany(tipo_item,{
    through: 'ka_fkidTipoItem',
    foreignKey: 'ka_idItem',
});

export default produto;