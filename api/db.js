import { Sequelize } from "sequelize";
import 'dotenv/config'

const Databases = new Sequelize(process.env.NAME_DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    host: process.env.HOST_DATABASE,
    dialect: process.env.TIPE_DATABASE,
    port: 3306
});


export default Databases;