const express = require('express')
const router = express.Router()
const companydata = require('./companydata.js')
// Add your routes here - above the module.exports line

router.get('/createemployee', (req, res) => { 
    res.render('createemployee', { } ); 
  });
  
router.post('/createemployee', async (req, res) => { 
    var employee = req.body 
  
    // todo: validate here 
      await companydata.createEmployee(employee)
      res.render('getEmployee', { cities: await companydata.getEmployees()});
  })

router.get('/getemployee', async (req, res) => {
    response = await companydata.getEmployees()
    res.render('getEmployee', {employees:response } );
  });

router.get('/getemployees/:substr', async (req, res) => {
    response = await companydata.getEmployees()
    res.render('getEmployee', { departmentfilter: req.params.substr.toLowerCase(),employees:response});
 });


module.exports = router
