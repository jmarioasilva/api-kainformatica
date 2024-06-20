import { Sequelize } from "sequelize";

const Databases = new Sequelize(NAME_DATABASE, USER_DATABASE, PASSWORD_DATABASE, {
    host: HOST_DATABASE,
    dialect: TIPE_DATABASE,
    port: PORT_DATABASE,
});
/*
(async()=>{
    try {
        await Databases.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();
*/

export default Databases;