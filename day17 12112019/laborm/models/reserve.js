module.exports = (sequelize, dataTypes) => {
    const Reserve = sequelize.define('reserve', {
        date: {
            type: dataTypes.DATE,
            validate: {
                isBefore: "2019-11-13"
                }
        }
    },{freezeTableName: true,
        timestamps: false
    })
    return Reserve;
}