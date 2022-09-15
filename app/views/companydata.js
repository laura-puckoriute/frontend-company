const dbconfig = require('./dbconfig.json');
const axios = require('axios');

exports.createEmployee = async (newEmployee) => {  
    const response = await axios.post('http://localhost:8080/api/createemployee', 
                                        {"fname": newEmployee.first-name,
                                        "lname": newEmployee.last-name,
                                        "postcode": newEmployee.postcode,
                                        "address": newEmployee.address,
                                        "nin": newEmployee.nin,
                                        "bankAccount": newEmployee.bank-account,
                                        "startingSalary": newEmployee.starting-salary,
                                        "isManager": newEmployee.is-manager,
                                        "department": newEmployee.department});
    console.log(response.data)
    return response;
}

exports.getEmployees = async () => {
    const response = await axios.get('http://localhost:8080/api/getemployees');
        
        console.log(response)
        return response.data;
}
