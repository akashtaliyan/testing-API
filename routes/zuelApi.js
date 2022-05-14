"use strict";
const express = require('express');
const requestIp = require('request-ip');
const router = express.Router();

// getting all
const zuelApi = router.post('/', async (req, res) => {
  var clientIp = requestIp.getClientIp(req);

  // if (!(clientIp.toString() == '223.19.94.29' || clientIp.toString() == '157.7.159.54')) {
  console.log("client IP => " + clientIp);
  console.log("data from the Client =========> ");
  // let ob = req.body;
  let ob = {
    userid: 'RYZ98601',
    token: '4d127z3e-30q3-43e9-a2f3-24a3241e67452',
    spkey: 'UPR',
    number: '771700980165'
  }
  if (ob != undefined) {
    console.log(ob);
    if (ob.userid != 'RYZ98601' || ob.token != '4d127z3e-30q3-43e9-a2f3-24a3241e67452') {
      res.status(403).json({
        message: "userid or token is invalid"
      })
    } else if (ob.spkey != 'UPR') {
      res.status(404).json({
        message: "spkey is invalid"
      })
    } else if (ob.number != '771700980165') {
      res.status(404).json({
        message: "account number is invalid"
      })
    } else {
      try {
        res.status(200).json({
          "code": "TXN",
          "status": "success",
          "mess": "success",
          "data": {
            "ResponseCode": "000",
            "ResponseMessage": "Transaction Successful",
            "dueamount": 3155.0,
            "duedate": "2022-04-23",
            "customername": "SUNEEL KUMAR",
            "billnumber": "771700980165",
            "billdate": "20 Apr 2022",
            "acceptPartPay": "N",
            "BBPSCharges": "0.00",
            "BillUpdate": "T+1",
            "RequestID": "4000000423813212",
            "ClientRefId": "e5b668279a0bbc3dea3aea08988130ef",
            "BBPSComm": "0.00"
          }

        });
        return;
      } catch (err) {
        res.status(500).json({
          message: err.message
        });
        return;
      }
    }
  } else {
    res.status(400).json({
      msg: 'No Body Found'
    })
  }
})

module.exports = zuelApi