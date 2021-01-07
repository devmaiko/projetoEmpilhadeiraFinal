const db = require('./db')

const coletor = db.sequelize.define('coletor', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    assento: {
        type: db.Sequelize.INTEGER,
    },
    coletor: {
        type: db.Sequelize.INTEGER,
    },
    embreagem: {
        type: db.Sequelize.INTEGER,
    },
    extintor: {
        type: db.Sequelize.INTEGER,
    },
    freios: {
        type: db.Sequelize.INTEGER,
    },
    garfo: {
        type: db.Sequelize.INTEGER,
    },
    limpo: {
        type: db.Sequelize.INTEGER,
    },
    mangueiras: {
        type: db.Sequelize.INTEGER,
    },
    pintura: {
        type: db.Sequelize.INTEGER,
    },
    sistema_ilum: {
        type: db.Sequelize.INTEGER,
    },
    torre: {
        type: db.Sequelize.INTEGER,
    },
    agua_radiador: {
        type: db.Sequelize.INTEGER,
    },
    botijao: {
        type: db.Sequelize.INTEGER,
    },
    nivel_oleo: {
        type: db.Sequelize.INTEGER,
    },
    oleo_motor: {
        type: db.Sequelize.INTEGER,
    },
    correntes: {
        type: db.Sequelize.INTEGER,
    },
    pneus: {
        type: db.Sequelize.INTEGER,
    },
    

})
module.exports = coletor
