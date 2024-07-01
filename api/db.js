import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import 'dotenv/config'



const Databases = new Sequelize(process.env.NAME_DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    host: process.env.HOST_DATABASE,
    dialect: process.env.TIPE_DATABASE,
    dialectModule: mysql2,
    port: 3306
});


export default Databases;