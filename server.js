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
  console.log(req.query)
  res.json({
    totalLocationTarget:20,
    totalLocationAchieved:10,
    pickDropTarget:10,
    pickDropAchieved:5,
    pickTarget:5,
    pickAchieved:3,
    dropTarget:5,
    dropAchieved:2,
    onTimeTarget:20,
    onTimeAchieved:8,
    profilePic:"https://dev.geeksroot.tech/washup/images/profile_pic.png",
    profileName:"Shameel"
  })
});


app.get("/api/riderhistory", (req, res, next) => {
  console.log(req.query)
  res.json({
      dropAchieved: 100,
      dropTarget: 121,
      onTimeAchieved: 100,
      onTimeTarget: 130,
      pickAchieved: 90,
      pickDropAchieved: 111,
      pickDropTarget: 101,
      pickTarget: 102,
      totalLocationAchieved: 77,
      totalLocationTarget: 54,
  })

})

app.get("/api/pickup", (req, res, next) => {
  console.log(req.query)
  res.json({
    order_id:"ORA2011-667",
    customer_name:"Raazia Jaffery",
    customer_id:"1",
    order:"ORA2011-667-Raazia Jaffery",
    PermenantNote:"Don't Ring Bell",
    Note:"Wash Properly",
    Services:[
      {
        service_id:1,
        service_name:"Wash & Fold",
        service_image:"https://dev.geeksroot.tech/washup/images/5.png",
        service_link:"api/pickup/washfold",
        service_selected:true
      },
      {
        service_id:2,
        service_name:"Wash & Iron",
        service_image:"https://dev.geeksroot.tech/washup/images/6.png",
        service_link:"api/pickup/washiron",
        service_selected:false
      }
      ,
      {
        service_id:3,
        service_name:"Iron Only",
        service_image:"https://dev.geeksroot.tech/washup/images/4.png",
        service_link:"api/pickup/irononly",
        service_selected:true
      },
      {
        service_id:4,
        service_name:"Iron & Hanger",
        service_image:"https://dev.geeksroot.tech/washup/images/3.png",
        service_link:"api/pickup/ironhanger",
        service_selected:false
      },
      {
        service_id:5,
        service_name:"Wash, Iron & Hanger",
        service_image:"https://dev.geeksroot.tech/washup/images/1.png",
        service_link:"api/pickup/washironhanger",
        service_selected:false
      }
      ,
      {
        service_id:6,
        service_name:"Dry Cleaning",
        service_image:"https://dev.geeksroot.tech/washup/images/2.png",
        service_link:"api/pickup/drycleaning",
        service_selected:false
      }
    ],
    services_selected:[
      {
        service_id:1,
        service_name:"Wash & Fold",
        pieces:"3",
        KG:"1",
        price:"700"
      },
      {
        service_id:3,
        service_name:"Iron Only",
        pieces:"4",
        KG:"2",
        price:"500"
      }
    ],
    grandtotal:{
        pieces:"3",
        KG:"1",
        price:"700"
      },
      delivery_charges:{
        pieces:"3",
        KG:"1",
        price:"200"
      }
  })
});

app.get("/api/pickup/washfold", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
        {
          id:4,
          title: "Shirt",
<<<<<<< HEAD
	        quantity:"5"
=======
	  quantity:"5"
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4

        },
        {
          id:3,
          title: "Pent",
<<<<<<< HEAD
	        quantity:"4",
=======
	  quantity:"4",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
        },
        
        {
          id:1,
          title: "Cap",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        },
        {
          id:9,
          title: "Kurta",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        }
  ]
  )
});

app.get("/api/pickup/washiron", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
        {
          id:4,
          title: "Shirt",
<<<<<<< HEAD
	        quantity:"2",
=======
	  quantity:"2",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          

        },
        {
          id:3,
          title: "Pent",
<<<<<<< HEAD
	        quantity:"3",
=======
	  quantity:"3",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
        },
        
        {
          id:5,
          title: "Cap",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        },
        {
          id:9,
          title: "Kurta",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        }
  ]
  )
});

app.get("/api/pickup/irononly", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
        {
          id:1,
          title: "Shirt",
	        quantity:"5",
          

        },
        {
          id:3,
          title: "Pent",
<<<<<<< HEAD
	        quantity:"5",
=======
	  quantity:"5",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
        },
        
        {
          id:5,
          title: "Cap",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        },
        {
          id:9,
          title: "Kurta",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        }
  ]
  )
});


app.get("/api/pickup/ironhanger", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
        {
          id:4,
          title: "Shirt",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
         

        },
        {
          id:3,
          title: "Pent",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
        },
        
        {
          id:5,
          title: "Cap",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        },
        {
          id:9,
          title: "Kurta",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
          
        }
  ]
  )
});


app.get("/api/pickup/washironhanger", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
        {
          id:4,
          title: "Shirt",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
         

        },
        {
          id:3,
          title: "Pent",
<<<<<<< HEAD
	        quantity:"4",
=======
	  quantity:"4",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
          
        },
        
        {
          id:5,
          title: "Cap",
<<<<<<< HEAD
	        quantity:"7",
=======
	  quantity:"7",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
         
          
        },
        {
          id:9,
          title: "Kurta",
<<<<<<< HEAD
	        quantity:"0",
=======
	  quantity:"0",
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
         
          
        }
  ]
  )
});


app.get("/api/pickup/drycleaning", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
        {
          id:4,
          title: "Shirt",
	  quantity:"1",
          

        },
        {
          id:3,
          title: "Pent",
	  quantity:"4",
          
        },
        
        {
          id:5,
          title: "Cap",
	  quantity:"6",
          
          
        },
        {
          id:9,
          title: "Kurta",
	  quantity:"0",
          
          
        }
  ]
  )
});

app.get("/api/dropoff", (req, res, next) => {
  console.log(req.query)
  res.json({
    order_id:"1",
    order_name:"ORA2011-667-Raazia Jaffery",
    Services:[
      {
        service_id:1,
        service_name:"Wash & Fold",
        service_item:"3/pieces",
        service_weight:"0.60/KG",
        service_price:"500 Rs."
      },
      {
        service_id:2,
        service_name:"Wash & Iron",
        service_item:"3/pieces",
        service_weight:"0.60/KG",
        service_price:"500 Rs."
      },
      {
        service_id:3,
        service_name:"Iron Only",
        service_item:"3/pieces",
        service_weight:"0.60/KG",
        service_price:"500 Rs."
      },
    ],
    delivery_charges:"200",
    wallet:"50",
    total:"1450",
    polybag:"2",
    polybag_items:[
      {
        polybag_id:1,
        polybag_name:"OR2011-667",
        polybag_number:"1 of 2"
      },
      {
        polybag_id:2,
        polybag_name:"OR2011-667",
        polybag_number:"2 of 2"
      }
    ]
  })
});
app.get("/api/pickdrop", (req, res, next) => {
  console.log(req.query)
  res.json({
    order_id:"1",
    order_name:"ORA2011-669-Babar",
    Services:[
      {
        service_id:1,
        service_name:"Wash & Fold",
        service_item:"3/pieces",
        service_weight:"0.60/KG",
        service_price:"500 Rs."
      },
      {
        service_id:2,
        service_name:"Wash & Iron",
        service_item:"3/pieces",
        service_weight:"0.60/KG",
        service_price:"500 Rs."
      }
    ],
    delivery_charges:"200",
    wallet:"50",
    total:"1450",
    polybag:"1",
    polybag_items:[
      {
        polybag_id:1,
        polybag_name:"OR2011-667",
        polybag_number:"1 of 2"
      }
    ]
  })
});

app.post("/api/payment", (req, res, next) => {
  console.log(req.body)
  if(req.body.order_id==="2"){
    res.json({status:"success",})
    return
  }
  res.json({
    status:"success",
    data:{
      order_id:"ORA2011-669",
      customer_name:"Babar",
      customer_id:"2",
      order:"ORA2011-669-Babar",
      PermenantNote:"Don't Ring Bell",
      Note:"Wash Properly With Surf",
      Services:[
        {
          service_id:1,
          service_name:"Wash & Fold",
          service_image:"https://dev.geeksroot.tech/washup/images/5.png",
          service_link:"api/pickup/washfold",
          service_selected:true
        },
        {
          service_id:2,
          service_name:"Wash & Iron",
          service_image:"https://dev.geeksroot.tech/washup/images/6.png",
          service_link:"api/pickup/washiron",
          service_selected:false
        }
        ,
        {
          service_id:3,
          service_name:"Iron Only",
          service_image:"https://dev.geeksroot.tech/washup/images/4.png",
          service_link:"api/pickup/irononly",
          service_selected:true
        },
        {
          service_id:4,
          service_name:"Iron & Hanger",
          service_image:"https://dev.geeksroot.tech/washup/images/3.png",
          service_link:"api/pickup/ironhanger",
          service_selected:false
        },
        {
          service_id:5,
          service_name:"Wash, Iron & Hanger",
          service_image:"https://dev.geeksroot.tech/washup/images/1.png",
          service_link:"api/pickup/washironhanger",
          service_selected:false
        }
        ,
        {
          service_id:6,
          service_name:"Dry Cleaning",
          service_image:"https://dev.geeksroot.tech/washup/images/2.png",
          service_link:"api/pickup/drycleaning",
          service_selected:false
        }
      ],
      services_selected:[
        {
          service_id:1,
          service_name:"Wash & Fold",
          pieces:"3",
          KG:"1",
          price:"700"
        },
        {
          service_id:3,
          service_name:"Iron Only",
          pieces:"4",
          KG:"2",
          price:"500"
        }
      ],
      grandtotal:{
          pieces:"3",
          KG:"1",
          price:"700"
        }
    }
  })
});

app.get("/api/myrides", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
      {
      order_id:"1",
      order_name:"OR2011-667",
      customer_name:"Raazia Jaffery",
      customer_id:"1",
      title: "OR2011-667-Raazia Jaffery",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"0322323232",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Pickup"
    },
    {
      order_id:"2",
      order_name:"OR2011-668",
      customer_name:"Shameel Uddin",
      customer_id:"2",
      title: "OR2011-668-Shameel Uddin",
      address:"Latifabad",
      rideTime:"11:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"031111111",
      buttonMap:"25.363731617932636, 68.38157283400915",
      buttonService:"Drop Off",
      serviceQuantity:"8" 
    },

    {
      order_id:"3",
      order_name:"OR2011-669",
      customer_name:"Babar",
      customer_id:"3",
      title: "OR2011-669-Babar",
      address:"Latifabad",
      rideTime:"12:00 pM",
      permenantNote: "None",
      note: "None",
      buttonCall:"031234569",
      buttonMap:"25.370448839163974, 68.33198880580466",
      buttonService:"Pick & Drop",
      serviceQuantity:"5"
    },{
      order_id:"0",
      title: "Drop Off Point",
      time:"11:30 AM"
    },
    {
      order_id:"4",
      order_name:"OR2011-667",
      customer_name:"Fahad",
      customer_id:"4",
      title: "OR2011-667-Fahad",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03489231696",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Pickup"
    },
    {
      order_id:"5",
      order_name:"OR2011-661",
      customer_name:"Uzair",
      customer_id:"5",
      title: "OR2011-661-Uzair",
      address:"Latifabad",
      rideTime:"1:00 PM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03894468456",
      buttonMap:"25.37005755496534, 68.33227750465883",
      buttonService:"To Be Packed"
    }
  ]
  )
});
app.post("/api/paymentonlyridessubmit", (req, res, next) => {
  console.log(req.body)
<<<<<<< HEAD
  // console.log(req)
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
  // for (let key in req.body.items_selected) {
  //   console.log(req.body.items_selected[key])
  // }
  res.json({
    status:"success",
    data:[
<<<<<<< HEAD
      
=======
      {
      order_id:"1",
      order_name:"OR2011-667",
      customer_name:"Raazia Jaffery",
      title: "OR2011-667-Raazia Jaffery",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"0398654213",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Payment",
      cash:'1000'
    },
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
    {
      order_id:"2",
      order_name:"OR2011-668",
      customer_name:"Shameel Uddin",
<<<<<<< HEAD
      customer_id:"2",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-668-Shameel Uddin",
      address:"Latifabad",
      rideTime:"11:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03221465165",
      buttonMap:"25.363731617932636, 68.38157283400915",
      buttonService:"Payment",
      cash:'4000'
    },

    {
      order_id:"3",
      order_name:"OR2011-669",
      customer_name:"Babar",
<<<<<<< HEAD
      customer_id:"3",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-669-Babar",
      address:"Latifabad",
      rideTime:"12:00 pM",
      permenantNote: "None",
      note: "None",
      buttonCall:"032156431656",
      buttonMap:"25.370448839163974, 68.33198880580466",
      buttonService:"Payment" ,
      cash:'600'
    },{
      order_id:"0",
      title: "Drop Off Point",
      time:"11:30 AM"
    },
    {
      order_id:"4",
      order_name:"OR2011-667",
      customer_name:"Fahad",
<<<<<<< HEAD
      customer_id:"4",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-667-Fahad",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"0313165132",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Payment",
      cash:'9000',
        },
  ]
  })
})


app.get("/api/paymentonlyrides", (req, res, next) => {
  console.log(req.query)
  res.send(
    [
      {
      order_id:"1",
      order_name:"OR2011-667",
      customer_name:"Raazia Jaffery",
<<<<<<< HEAD
      customer_id:"1",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-667-Raazia Jaffery",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"0398654213",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Payment",
      cash:'1000'
    },
    {
      order_id:"2",
      order_name:"OR2011-668",
      customer_name:"Shameel Uddin",
<<<<<<< HEAD
      customer_id:"2",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-668-Shameel Uddin",
      address:"Latifabad",
      rideTime:"11:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"03221465165",
      buttonMap:"25.363731617932636, 68.38157283400915",
      buttonService:"Payment",
      cash:'4000'
    },

    {
      order_id:"3",
      order_name:"OR2011-669",
      customer_name:"Babar",
<<<<<<< HEAD
      customer_id:"3",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-669-Babar",
      address:"Latifabad",
      rideTime:"12:00 pM",
      permenantNote: "None",
      note: "None",
      buttonCall:"032156431656",
      buttonMap:"25.370448839163974, 68.33198880580466",
      buttonService:"Payment" ,
      cash:'600'
    },{
      order_id:"0",
      title: "Drop Off Point",
      time:"11:30 AM"
    },
    {
      order_id:"4",
      order_name:"OR2011-667",
      customer_name:"Fahad",
<<<<<<< HEAD
      customer_id:"4",
=======
>>>>>>> 313d57d3c2b612cf7f8fbf24eb3ff4b3fad701a4
      title: "OR2011-667-Fahad",
      address:"Latifabad",
      rideTime:"10:00 AM",
      permenantNote: "None",
      note: "None",
      buttonCall:"0313165132",
      buttonMap:"25.370445770292076, 68.38596516440376",
      buttonService:"Payment",
      cash:'9000',

        },
  ]
  )
});

//this is for internal screen submission
app.post("/api/confirmpickupservice", (req, res, next) => {
  console.log(req.body)
  // for (let key in req.body.items_selected) {
  //   console.log(req.body.items_selected[key])
  // }
  res.json({
    status:"success"
  })
})

//this is for final submission of pickup order
app.post("/api/confirmpickup", (req, res, next) => {
  console.log(req.body)
  res.json({
    status:"success"
  })
})


app.get("/api/cancel", (req, res, next) => {
res.json({
  reason:["Reason 1", "Reason 2", "Reason 2", "Other"]
})
})

app.post("/api/cancel", (req, res, next) => {
  res.json({
    status:"success"
  })
  })

app.get("/api/addanotherorder", (req, res, next) => {
  console.log(req.query)
  res.json({
    order_id:"ORA2011-667",
    customer_name:"Raazia Jaffery",
    customer_id:"1",
    order:"ORA2011-667-Raazia Jaffery",
    PermenantNote:"Don't Ring Bell",
    Note:"Wash Properly",
    Services:[
      {
        service_id:1,
        service_name:"Wash & Fold",
        service_image:"https://dev.geeksroot.tech/washup/images/5.png",
        service_link:"api/pickup/washfold",
        service_selected:false
      },
      {
        service_id:2,
        service_name:"Wash & Iron",
        service_image:"https://dev.geeksroot.tech/washup/images/6.png",
        service_link:"api/pickup/washiron",
        service_selected:false
      }
      ,
      {
        service_id:3,
        service_name:"Iron Only",
        service_image:"https://dev.geeksroot.tech/washup/images/4.png",
        service_link:"api/pickup/irononly",
        service_selected:false
      },
      {
        service_id:4,
        service_name:"Iron & Hanger",
        service_image:"https://dev.geeksroot.tech/washup/images/3.png",
        service_link:"api/pickup/ironhanger",
        service_selected:false
      },
      {
        service_id:5,
        service_name:"Wash, Iron & Hanger",
        service_image:"https://dev.geeksroot.tech/washup/images/1.png",
        service_link:"api/pickup/washironhanger",
        service_selected:false
      }
      ,
      {
        service_id:6,
        service_name:"Dry Cleaning",
        service_image:"https://dev.geeksroot.tech/washup/images/2.png",
        service_link:"api/pickup/drycleaning",
        service_selected:false
      }
    ]
  })
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