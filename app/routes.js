const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.get('/createemployee', (req, res) => { 
    res.render('createemployee', { } ); 
  });
  
router.post('/createemployee', async (req, res) => { 
    var employee = req.body 
  
    // todo: validate here 
      await companydata.createEmployee(employee.body) 
      res.render('getemployees', { cities: await companydata.getEmployees()});
  })


module.exports = router
