//https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/
//https://codeforgeek.com/file-uploads-using-node-js/

// Create express app
var express = require("express")
var multer  =   require('multer');
var db = require("./db.js")
var md5 = require('md5')

var app = express()
//---if i remove the below 2 then i'll get 'undefined' at the req.body
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); //--> won't except if the payload is more than 10kb
app.use(express.urlencoded()); 


// Server port
var HTTP_PORT = 3030 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints
app.get("/api/dashboard", (req, res, next) => {
  // console.log(req)
  res.json({
    "totalLocationTarget":20,
    "totalLocationAchieved":10,
    "pickDropTarget":10,
    "pickDropAchieved":5,
    "pickTarget":5,
    "pickAchieved":3,
    "dropTarget":5,
    "dropAchieved":2,
    "onTimeTarget":20,
    "onTimeAchieved":8,
    "profilePic":"http://geeksroot.com/dev/washup_images/profilepic2.png",
    "profileName":"Shameel"
    
  })
 

});


app.get("/api/riderhistory", (req, res, next) => {
  // console.log(req)
  res.json({
    
      "dropAchieved": 100,
      "dropTarget": 121,
      "onTimeAchieved": 100,
      "onTimeTarget": 130,
      "pickAchieved": 90,
      "pickDropAchieved": 111,
      "pickDropTarget": 101,
      "pickTarget": 102,
      "totalLocationAchieved": 77,
      "totalLocationTarget": 54,
    
    
  })

})

app.get("/api/pickup", (req, res, next) => {
  res.json({
    "order":"ORA2011-667-Raazia Jaffery",
    "PermenantNote":"Don't Ring Bell",
    "Note":"Wash Properly",
    "Services":[
      {
        "service_id":"1",
        "service_name":"Wash & Fold",
        "service_image":"http://dev.geeksroot.com/washup_images/Wash%20and%20Fold.png",
        "service_link":"api/washfold"
      },
      {
        "service_id":"2",
        "service_name":"Wash & Iron",
        "service_image":"http://dev.geeksroot.com/washup_images/Wash%20and%20Iron.png",
        "service_link":"api/washiron"
      }
      ,
      {
        "service_id":"3",
        "service_name":"Iron Only",
        "service_image":"http://dev.geeksroot.com/washup_images/Iron%20Only.png",
        "service_link":"api/irononly"
      },
      {
        "service_id":"4",
        "service_name":"Iron & Hanger",
        "service_image":"http://dev.geeksroot.com/washup_images/Iron%20and%20Hanger.png",
        "service_link":"api/ironhanger"
      },
      {
        "service_id":"5",
        "service_name":"Wash, Iron & Hanger",
        "service_image":"http://dev.geeksroot.com/washup_images/Wash%20Iron%20&.png",
        "service_link":"api/washironhanger"
      }
      ,
      {
        "service_id":"6",
        "service_name":"Dry Cleaning",
        "service_image":"http://dev.geeksroot.com/washup_images/Dry%20Cleaning.png",
        "service_link":"api/drycleaning"
      }
    ],
    "services_selected":[
      {
        "service_id":"1",
        "service_name":"Wash & Fold",
        "pieces":"3",
        "KG":"1",
        "price":"700"
      },
      {
        "service_id":"3",
        "service_name":"Iron Only",
        "pieces":"4",
        "KG":"2",
        "price":"500"
      }
    ],
    "grandtotal":[
      {
        "pieces":"3",
        "KG":"1",
        "price":"700"
      }
    ]
    
  })
});

app.get("/api/dropoff", (req, res, next) => {
  res.json({
    "order_id":"1",
    "order_name":"ORA2011-667-Raazia Jaffery",
    "Services":[
      {
        "service_id":"1",
        "service_name":"Wash & Fold",
        "service_item":"3/pieces",
        "service_weight":"0.60/KG",
        "service_price":"500 Rs."
      },
      {
        "service_id":"2",
        "service_name":"Wash & Iron",
        "service_item":"3/pieces",
        "service_weight":"0.60/KG",
        "service_price":"500 Rs."
      },
      {
        "service_id":"3",
        "service_name":"Iron Only",
        "service_item":"3/pieces",
        "service_weight":"0.60/KG",
        "service_price":"500 Rs."
      },
    ],
    "delivery_charges":"200",
    "wallet":"50",
    "total":"1450",
    "polybag":"2/pieces",
    "polybag_items":[
      {
        "polybag_id":"1",
        "polybag_name":"OR2011-667",
        "polybag_number":"1 of 2"
      },
      {
        "polybag_id":"2",
        "polybag_name":"OR2011-667",
        "polybag_number":"2 of 2"
      }
    ]
    
  })
});

app.get("/api/pickupservices", (req, res, next) => {
  // console.log(req)
  res.send(
    [
        {
          id:"4",
          title: "Shirt",
	  quantity:"1",
          addons: [
            {id: 1, name: 'Shirt angellist',selected:false},
            {id: 2, name: 'Shirt codepen',selected:false},
            {id: 3, name: 'Shirt envelope',selected:false},
            {id: 4, name: 'Shirt etsy',selected:false},
            {id: 5, name: 'Shirt facebook',selected:false},
            {id: 6, name: 'Shirt foursquare',selected:false},  
            {id: 7, name: 'Shirt github-alt',selected:false},
            {id: 8, name: 'Shirt github',selected:false},
            {id: 9, name: 'Shirt gitlab',selected:false},
            {id: 10, name: 'Shirt instagram',selected:false},
          ]

        },
        {
          id:"3",
          title: "Pent",
	  quantity:"0",
          addons: [
            {id: 1, name: 'Pent angellist',selected:false},
            {id: 2, name: 'Pent codepen',selected:false},
            {id: 3, name: 'Pent envelope',selected:false},
            {id: 4, name: 'Pent etsy',selected:false},
            {id: 5, name: 'Pent facebook',selected:false},
            {id: 6, name: 'Pent foursquare',selected:false},  
            {id: 7, name: 'Pent github-alt',selected:false},
            {id: 8, name: 'Pent github',selected:false},
            {id: 9, name: 'Pent gitlab',selected:false},
            {id: 10, name: 'Pent instagram',selected:false},
          ]
        },
        
        {
          id:"1",
          title: "Cap",
	  quantity:"0",
          addons: [
            {id: 1, name: 'cap angellist',selected:false},
            {id: 2, name: 'cap codepen',selected:false},
            {id: 3, name: 'cap envelope',selected:false},
            {id: 4, name: 'cap etsy',selected:false},
            {id: 5, name: 'cap facebook',selected:false},
            {id: 6, name: 'cap foursquare',selected:false},  
            {id: 7, name: 'cap github-alt',selected:false},
            {id: 8, name: 'cap github',selected:false},
            {id: 9, name: 'cap gitlab',selected:false},
            {id: 10, name: 'cap instagram',selected:false},
          ]
          
        },
        {
          id:"9",
          title: "Kurta",
	  quantity:"0",
          addons: [
            {id: 1, name: 'Kurta angellist',selected:false},
            {id: 2, name: 'Kurta codepen',selected:false},
            {id: 3, name: 'Kurta envelope',selected:false},
            {id: 4, name: 'Kurta etsy',selected:false},
            {id: 5, name: 'Kurta facebook',selected:false},
            {id: 6, name: 'Kurta foursquare',selected:false},  
            {id: 7, name: 'Kurta github-alt',selected:false},
            {id: 8, name: 'Kurta github',selected:false},
            {id: 9, name: 'Kurta gitlab',selected:false},
            {id: 10, name: 'Kurta instagram',selected:false},
          ]
          
        }
  ]
  )
});

app.get("/api/myrides", (req, res, next) => {
  // console.log(req)
  res.send(
    [
      {
      id:"4",
      title: "OR2011-667-Raazia Jaffery",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03443544593",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Pickup"
    },
    {
      id:"3",
      title: "OR2011-668-Shameel Uddin",
      address:"Latifabad",
      rideTime:"11:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03443544593",
      buttonMap:"25.363731617932636, 68.38157283400915",
      buttonService:"Drop Off",
      serviceQuantity:"8" 
    },

    {
      id:"1",
      title: "OR2011-669-Babar",
      address:"Latifabad",
      rideTime:"12:00 pM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03443544593",
      buttonMap:"25.370448839163974, 68.33198880580466",
      buttonService:"Drop Off Pick Up",
      serviceQuantity:"5"
    },{
      id:"0",
      title: "Drop Off Point",
      time:"11:30 AM"
    },
    {
      id:"44",
      title: "OR2011-667-Fahad",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03443544593",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Pickup"
    },
    {
      id:"2",
      title: "OR2011-661-Uziar",
      address:"Latifabad",
      rideTime:"1:00 PM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03443544593",
      buttonMap:"25.37005755496534, 68.33227750465883",
      buttonService:"To Be Packed"
    }
  ]
  )
});

app.post("/api/login", (req, res, next) => {
    console.log(req.body)
    let email    = req.body.email;
    let password = req.body.password;
    console.log('Email : ',email)
    console.log('Password : ',password)
    let sql = `SELECT * FROM user where email=? AND password = ?`
    let params = [email,password]
    console.log(params)
    db.get(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }

            if(!rows){
                res
                .status(401)
                .json({
                    "status":"failed",
                    "data":"Incorrect Credentials!"
                })
                return
            }
        res.json({
            "status":"success",
            "token":rows.Token,
            "username":"Shameel"
        })
      });
});


app.post("/api/forgot", (req, res, next) => {
  console.log(req)
  console.log(req.body)
  let email    = req.body.email;
  // let password = req.body.password;
  console.log('Email Received is : ',email)
  res.json({
    "status":"success"
})
  // console.log('Password : ',password)
  // let sql = `SELECT * FROM user where email=? AND password = ?`
  // let params = [email,password]
  // console.log(params)
  // db.get(sql, params, (err, rows) => {
  //     if (err) {
  //       res.status(400).json({"error":err.message});
  //       return;
  //     }

  //         if(!rows){
  //             res
  //             .status(401)
  //             .json({
  //                 "status":"failed",
  //                 "data":"Incorrect Credentials!"
  //             })
  //             return
  //         }
  //     res.json({
  //         "status":"success",
  //         "token":rows.Token
  //     })
  //   });
});



//--------------------------image upload-----------------------//

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, '/src/my-images');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  }
});
const upload = multer({dest: 'uploads/'});
app.post('/api/photo', upload.single('image'), (req, res) => {
  console.log("----PHOTO BACKEND SERVICE----");
  console.log(req.body)
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
  
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
  });

// Default response for any other request
app.use(function(req, res){
    res.status(404);
}); 