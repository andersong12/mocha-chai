import chai from 'chai';
import chaiHttp from 'chai-http';
// import dotenv from 'dotenv';
import { HOST } from "../../../config.js";
import { post_user_data, users_model } from '../../data/user.data.js';
// import routes from '../../data/path.json';
import { get_and_status, validate_model } from '../../lib/common.js';

// dotenv.config();
let expect = chai.expect;
chai.use(chaiHttp);

export const suite_status = () => {
    it('401 - requesting without session', (done) => {
        get_and_status('https://pakotest-api.herokuapp.com/', 'suites', 401)
        done();
    });
};

export const get_all_suites = () => {
    var token
    it('get all suites', () => {
        chai.request(HOST)
        .post("signin")
        .send({email: 'adminadmin', password: 'adminadmin'})
        .end((err, res) => {
            // console.log(res.body.token)
            token = res.body.token
            chai.request(HOST)
            .get('suites')
            .set({ Authorization: `Bearer ${token}` })
            .end((error, res) => {
                expect(res.status).to.equal(200); // Recommended
                // expect(response.body).to.eql(users_model);
            });
        });
        // done();
    });
};

export const get_suite_by_id = () => {
    var token
    it('get suite by id', (done) => {
        chai.request(HOST)
        .post("signin")
        .send({email: 'adminadmin', password: 'adminadmin'})
        .end((err, res) => {
            // console.log(res.body.token)
            token = res.body.token
            chai.request(HOST)
            .get(`${HOST}/suites`)
            .set({ Authorization: `Bearer ${token}` })
            .end((error, res) => {
                expect(res.status).to.equal(200); // Recommended
                // expect(response.body).to.eql(users_model);
            });
        });
        done();
    });  
};

// export const user_models = () => {
//     it('users models', (done) => {
//         chai.request(HOST)
//             .get(routes.allUsers)
//             .end((error, response) => {
//                 const users = response.body;
//                 users.forEach(user => {
//                     validate_model(user_models,user);
//                 });
//             done();
//         });
//     });
// };


// export const get_user_false_id = () => {
//     it('get user by non-existing id', (done) => {
//         get_and_status(HOST, routes.nonExistingId, 404);
//         done();
//     });
// };