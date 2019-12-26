module.exports = (sequelize, dataTypes) => {
    const Sailor = sequelize.define('sailor', {
        name: {
            type: dataTypes.STRING(45)
        },
        rating: {
            type: dataTypes.INTEGER
        },
        age: {
            type: dataTypes.DOUBLE,
            validate: { // input range
                customValidator(value) {
                    if(!((value>=20 && value<=40)|| (value>=50 && value<=80) || (value>=85 && value<=90)))
                    {
                        throw new Error('ให้อายุอยู่ระหว่าง 20 ถึง 40 และ 50 ถึง 80 และ 85 ถึง 90');
                    }
                }
            }
        },
    },
    {
        freezeTableName: false, 
        timestamps: false
    })
    Sailor.associate = (models) => {
        Sailor.belongsToMany(models.boat, {
            through: models.reserve
        })
    }
    return Sailor;
}