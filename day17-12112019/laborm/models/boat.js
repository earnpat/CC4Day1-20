module.exports = (sequelize, dataTypes) => {
    const Boat = sequelize.define('boat', {
        name: {
            type: dataTypes.STRING(45),
            validate: {
                len: [3,15]
            }
        },
        color: {
            type: dataTypes.STRING(45),
            validate: {
            isAlpha: true,
            equals(value) {
                if(value!='Green' && value!='Blue' && value!='Red' && value!='Yellow' && value!='Orange')
                {
                    throw new Error('มีแค่สี Green, Blue, Red, Yellow, Orange เท่านั้น');
                }
            }
        }}
    },{freezeTableName: true,
        timestamps: false
    })
    Boat.associate = (models) => {
        Boat.belongsToMany(models.sailor, {
            through: models.reserve
        })
    }
    return Boat;
}