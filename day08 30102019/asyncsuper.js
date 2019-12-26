// import { resolve } from "dns";

async function work() {

    var superagent = require('superagent')
    var response = await superagent
    .get('https://reqres.in/api/users?page=1')
    .set('Authorization', 'Bearer someToken')
    var response2 = await superagent
    .post('https://reqres.in/api/users')
    .send({
    name: 'morpheus',
    job: 'leader'
    })
    .set('Authorization', 'Bearer someToken')
    console.log(response.body)

}

new Promise(async(resolve) => { resolve(await work()) }).then(() => {
    console.log('successful')
})