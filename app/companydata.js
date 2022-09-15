//const dbconfig = require('./dbconfig.json');
const axios = require('axios');

exports.createEmployee = async (newEmployee) => {   
    const isman = false
    if (newEmployee.is_manager === "yes") {
        const isman = true
    } else {
        const isman = false
    }
    const response = await axios.post('http://localhost:8080/api/addemployee',
                                        {"fname": newEmployee.first_name,
                                        "lname": newEmployee.last_name,
                                        "postcode": newEmployee.postcode,
                                        "address": newEmployee.address,
                                        "nin": newEmployee.nin,
                                        "bankAccount": newEmployee.bank_account,
                                        "startingSalary": newEmployee.starting_salary,
                                        "isManager": isman,
                                        "department": newEmployee.department});
    console.log(response.data)
    return response;
}

exports.getEmployees = async () => {
    const response = await axios.get('http://localhost:8080/api/getEmployees');
        
        console.log(response.data)
        return response.data;
}
