import { Sequelize } from "sequelize";

const Databases = new Sequelize('doacao', 'informatica', 'Obrasocial@544', {
    host: '177.172.16.94',
    dialect: 'mysql',
    port: 3306,
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