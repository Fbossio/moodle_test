const axios = require('axios');
const querystring = require('querystring');
const FormData = require('form-data');
const moment = require("moment")

const getToken = () => {
    const username = 'admin';
    const password = '@ITSadmin22';
    const service = 'sgaS'
    const baseUrl = `http://its.institute/login/token.php?username=${username}&password=${password}&service=${service}`;
    axios.get(baseUrl).then(resp => console.log(resp.data));
}


//getToken();
//getCourses();

const createUser = async (firstName, lastName, passwd, email) => {
    const formData = new FormData();
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';
    const wsfunction = 'core_user_create_users';
    const moodlewsrestformat = 'json';

    await formData.append('moodlewsrestformat', moodlewsrestformat);
    await formData.append('wsfunction', wsfunction);
    await formData.append('wstoken', wstoken);
    await formData.append('users[0][username]', email.toLowerCase());
    await formData.append('users[0][password]', passwd);
    await formData.append('users[0][firstname]', firstName);
    await formData.append('users[0][lastname]', lastName);
    await formData.append('users[0][email]', email);
    

    return axios.post(baseUrl, formData, {headers: formData.getHeaders()})
    .then( (response) => {
        let response_object = {status: response.status, response: response.data};
        console.log(response_object);
    })
    .catch( (error) => {
        let response_object = {status: error.response.status, response: error.response.data};
        console.log(response_object);
    });   

}

//createUser('Guido', 'van Rossum', 'TestPsswd123@', 'guido@gmail.com')

const createCourse = async (fullname, shortname, categoryid, startdate, enddate) => {
    const formData = new FormData();
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';
    const wsfunction = 'core_course_create_courses';
    const moodlewsrestformat = 'json';
    const start_date = Date.parse(startdate);
    const end_date = Date.parse(enddate);

    await formData.append('moodlewsrestformat', moodlewsrestformat);
    await formData.append('wsfunction', wsfunction);
    await formData.append('wstoken', wstoken);
    await formData.append('courses[0][fullname]', fullname);
    await formData.append('courses[0][shortname]', shortname);
    await formData.append('courses[0][categoryid]', categoryid);
    await formData.append('courses[0][startdate]', start_date);
    await formData.append('courses[0][enddate]', end_date);

    return axios.post(baseUrl, formData, {headers: formData.getHeaders()})
    .then( (response) => {
        let response_object = {status: response.status, response: response.data};
        console.log(response_object);
    })
    .catch( (error) => {
        let response_object = {status: error.response.status, response: error.response.data};
        console.log(response_object);
    });   
}

//createCourse('Resful API con Symfony', 'Symfony', 3, "2022/06/01", "2022/08/04");

const createCategory = async (name) => {
    const formData = new FormData();
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';
    const wsfunction = 'core_course_create_categories';
    const moodlewsrestformat = 'json';
    

    await formData.append('moodlewsrestformat', moodlewsrestformat);
    await formData.append('wsfunction', wsfunction);
    await formData.append('wstoken', wstoken);
    await formData.append('categories[0][name]', name);
    

    return axios.post(baseUrl, formData, {headers: formData.getHeaders()})
    .then( (response) => {
        let response_object = {status: response.status, response: response.data};
        console.log(response_object);
    })
    .catch( (error) => {
        let response_object = {status: error.response.status, response: error.response.data};
        console.log(response_object);
    });   
}

//createCategory('Machine Learning');

const enrolUser = async (roleid, userid, courseid) => {
    const formData = new FormData();
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';
    const wsfunction = 'enrol_manual_enrol_users';
    const moodlewsrestformat = 'json';

    await formData.append('moodlewsrestformat', moodlewsrestformat);
    await formData.append('wsfunction', wsfunction);
    await formData.append('wstoken', wstoken);
    await formData.append('enrolments[0][roleid]', parseInt(roleid));
    await formData.append('enrolments[0][userid]', parseInt(userid));
    await formData.append('enrolments[0][courseid]', parseInt(courseid));
    

    return axios.post(baseUrl, formData, {headers: formData.getHeaders()})
    .then( (response) => {
        let response_object = {status: response.status, response: response.data};
        console.log(response_object);
    })
    .catch( (error) => {
        let response_object = {status: error.response.status, response: error.response.data};
        console.log(response_object);
    });   
}


const getCourses = async () => {
    const formData = new FormData();
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';
    const wsfunction = 'core_course_get_courses';
    const moodlewsrestformat = 'json';
    await formData.append('moodlewsrestformat', moodlewsrestformat);
    await formData.append('wsfunction', wsfunction);
    await formData.append('wstoken', wstoken);

    return axios.post(baseUrl, formData, {headers: formData.getHeaders()})
    .then( (response) => {
        let response_object = {status: response.status, response: response.data};
        console.log(response_object);
    })
    .catch( (error) => {
        let response_object = {status: error.response.status, response: error.response.data};
        console.log(response_object);
    });   
}

//getCourses()

//enrolUser(4, 10, 76);

const checkUserIn = async (email) => {
    const formData = FormData();
    const wsfunction = "core_user_get_users";
    const field = 'email'

    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';   
    const moodlewsrestformat = 'json';

    await formData.append("moodlewsrestformat", moodlewsrestformat);
    await formData.append("wsfunction", wsfunction);
    await formData.append("wstoken", wstoken);
    
    await formData.append('criteria[0][key]', field)
    await formData.append('criteria[0][value]', email)

        
    let response = await axios.post(baseUrl, formData, { headers: formData.getHeaders()})
    console.log(response.data.users[0]);     
}

//checkUserIn('felixbossio@gmail.com');

const checkCategoryIn = async (name) => {
    const formData = FormData();
    const wsfunction = "core_course_get_categories";
    const field = 'name'
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';   
    const moodlewsrestformat = 'json';

    await formData.append("moodlewsrestformat", moodlewsrestformat);
    await formData.append("wsfunction", wsfunction);
    await formData.append("wstoken", wstoken);
    
    await formData.append('criteria[0][key]', field)
    await formData.append('criteria[0][value]', name)

    const response = await axios.post(baseUrl, formData, { headers: formData.getHeaders()})
    //return response.data[0] != undefined;
    console.log(response.data[0] != undefined);
}

//checkCategoryIn('Programación_123');

const checkCourseIn = async (shortname) => {
    const formData = FormData();
    const wsfunction = "core_course_get_courses_by_field";
    const field = 'shortname'
    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';   
    const moodlewsrestformat = 'json';
    

    await formData.append("moodlewsrestformat", moodlewsrestformat);
    await formData.append("wsfunction", wsfunction);
    await formData.append("wstoken", wstoken);
    
    await formData.append('field', field)
    await formData.append('value', shortname)

    const response = await axios.post(baseUrl, formData, { headers: formData.getHeaders()})
    console.log(response.data.courses[0] != undefined);
}

//checkCourseIn('Node');

//console.log(Date.parse("2022/04/22"));

//console.log(new Date(0));

//console.log(typeof 0 == 'number');

const checkEnrollmentIn = async (courseid) => {
    const formData = FormData();
    const wsfunction = "core_enrol_get_enrolled_users";

    const baseUrl = 'http://its.institute/webservice/rest/server.php'
    const wstoken = '9e626c185c1559237f95571ddd1275ff';   
    const moodlewsrestformat = 'json';
    
    await formData.append("moodlewsrestformat", moodlewsrestformat);
    await formData.append("wsfunction", wsfunction);
    await formData.append("wstoken", wstoken);

    await formData.append("courseid", courseid);
    
    const response = await axios.post(baseUrl, formData, {
        headers: formData.getHeaders(),
      }); 

    

    if (response.data[0] != undefined) {
        console.log(response.data.some(el => el.id === 10)) 
    } else {
        console.log(false);    
    }
    

}

//checkEnrollmentIn(7);

const getUsersEnrolledByCourseId = async (courseid) => {
    const formData = FormData();
    const wsfunction = "core_enrol_get_enrolled_users";
    
    const baseUrl = "http://its.institute/webservice/rest/server.php";
    const wstoken = "9e626c185c1559237f95571ddd1275ff";
    const moodlewsrestformat = "json";

    await formData.append("moodlewsrestformat", moodlewsrestformat);
    await formData.append("wsfunction", wsfunction);
    await formData.append("wstoken", wstoken);

    await formData.append("courseid", courseid);

    const response = await axios.post(baseUrl, formData, {
      headers: formData.getHeaders(),
    });

    console.log(response.data);
    
  }

  //getUsersEnrolledByCourseId(76);

  let my_obj = [
      {
          id: 1,
          name: "name1",
          lastname: "lastname1",
          role: [{id: 4, name: "teacher"}, {id: 5, name: "student"}]
      },
      {
        id: 2,
        name: "name2",
        lastname: "lastname2",
        role: [{id: 5, name: "student"}]
    },
    {
        id: 3,
        name: "name3",
        lastname: "lastname3",
        role: [{id: 5, name: "student"}]
    }
  ]

//console.log(my_obj.some((el) => el.id === 2));
//let index = my_obj.findIndex((obj) => obj.id === 1);
//let index = -1;
//console.log(index);
//console.log(my_obj[index])
//console.log(my_obj[index].role.some((role) => role.id === 4));

let date = "2022-04-28";
//date = date.split("-");
//let myDate = new Date(date[0], date[2] - 1, date[1]);
let duration_days = 60;



//console.log(end_date);

let initDate = moment(date);
let end_date = initDate.clone().add(duration_days, "days");

//console.log(initDate.format())
//console.log(end_date.format())

const currentDate = new Date(initDate.format());
const timestamp = currentDate.getTime();
console.log(timestamp);
console.log(typeof timestamp)


//console.log(Date.parse(initDate.format()));

