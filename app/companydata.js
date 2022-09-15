//const dbconfig = require('./dbconfig.json');
const axios = require('axios');

exports.createEmployee = async (newEmployee) => {  
    const response = await axios.post('http://localhost:8080/api/addEmployee',
                                        {"fname": newEmployee.first_name,
                                        "lname": newEmployee.last_name,
                                        "postcode": newEmployee.postcode,
                                        "address": newEmployee.address,
                                        "nin": newEmployee.nin,
                                        "bankAccount": newEmployee.bank_account,
                                        "startingSalary": newEmployee.starting_salary,
                                        "isManager": newEmployee.is_manager,
                                        "department": newEmployee.department});
    console.log(response.data)
    return response;
}

exports.getEmployees = async () => {
    const response = await axios.get('http://localhost:8080/api/getEmployees');
        
        console.log(response.data)
        return response.data;
}
