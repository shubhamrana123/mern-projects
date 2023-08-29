const express = require("express");
const port = 4001;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const { Schema } = mongoose;
console.log(Schema);

const connectToMongo = async () => {
  await mongoose.connect(
    "mongodb://127.0.0.1:27017/latestDB",
    console.log("Successful")
  );
};

// client.query(` create table plans (id int Not null,planname varchar(10),price int,description varchar(20))`,(err:any,res:any)=>{
//   if(!err){
//     console.log(res.rows);
    
//   }
//   else{
//     console.log(err?.message);
    
//   }
// })
// connectToMongo().catch((err: any) => console.log(err));
// connectToMongo();

const sch = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    id: Number,
  },
  { versionKey: false }
);
const User = new mongoose.model("User", sch);

// const createDocument = async () => {
//   try {
//     const userlist1 = new User({
//       name: "shubh",
//       email: "new@gmail.com",
//       id: 212143,
//     });
//     const userlist2 = new User({
//       name: "shubham",
//       email: "shubham@gmail.com",
//       id: 212143,
//     });
//     const userlist3 = new User({
//       name: "rohit",
//       email: "ankit@gmail.com",
//       id: 212143,
//     });
//     const result = await User.insertMany([userlist1, userlist2, userlist3]);
//     console.log(result);
//     const userList = User.find();
//     console.log(userList);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createDocument();
// const getDocument = async ()=>{
//   const result = await User.find({$or:[{name:'shubham'},{name:'rohit'}]}).select({name:1}).sort({name:-1})
//   console.log(result);
  
// }
// getDocument();
// const updateDocument = async (_id:any)=>{
//   try {
//     const result = await User.findByIdAndUpdate({_id},{
//       $set:{
//         name:"aniketssre"
//       }
//     })
//     console.log(result);
    
//   } catch (error) {
//     console.log(error);
    
//   }

// }
// updateDocument("64ca4c61d413c8993dae5a5a")


// app.use(express.json());
app.get("/", async (req: any, res: any) => {
  // res.writeHead(200, {

  //     'Content-Type': 'text/plain'
  //   });

  // res.send({"name":"shubham","city":"noida"})
  const userList = await User.find();
  console.log(JSON.stringify(userList));

  res.send(userList);
  //   res.end('Success')
});
// app.put("/updateUser",async (req:any,res:any)=>{
//   console.log('req',req.body);
//   const reqData = req.body
//   try {

    
//     const result  =  await User.updateOne({_id:"64ca4c61d413c8993dae5a5a"},{
//       $set:{
//         name:reqData?.name
//       }
//     })
//     console.log(result);
//     if(result){
//       res.send({"response":"success"})
//     }
    
//   } catch (error) {
//     console.log(error);
    
//   }
// })
// app.post('/createUser', async (req:any,res:any)=>{
//   console.log('reqBody',req.body);
  
//   try{
//     const userList1 = req.body
// const userList2= new User(
// userList1
// )
// const result = await userList2.save()
// // const userList2 = new User(
// //   {
// //   name:'anirudh',
// //   email:'ani@xyz',
// //   id:3232344343
// // }
// // )
// // const result =  await User.insertMany([userList1,userList2])
// console.log('result',result);

//   }catch(err:any){
//     console.log(err);
    
//   }
// })
app.listen(4001, () => {
  console.log("listening to port 4001");
});

// postgres
const {Client,Pool} = require('pg');


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'A937663s@',
  port: 4002,
})
client.connect((err:any)=>{
  if(err) throw err;
  console.log('connected');
  
});

app.get('/getPlan', async(req:any,response:any)=>{
 await client.query(`select * from product`,(err:any,res:any)=>{

    console.log('res',res)
    response.json(res.rows)
  }

  
    
  )
  // res.send(JSON.stringify(planList))
  // console.log('userlist',planList)
})
app.post('/createUser',(req:any,response:any)=>{
  console.log('req',req.body);
  
  const {id,name,description,price} = req.body
  console.log("id",id);
  
  client.query(`insert into product (id,name,description,price) values($1, $2, $3,$4)`,[id,name,description,price], (err:any,res:any)=>{
console.log('postresponse',res);
console.log('error',err);

  response.json(res)

  
  })
})
app.put('/updateUser',(req:any,response:any)=>{
  console.log('put req',req.body);
  console.log('param req',req.params);
  const {id,name ,description,price} = req.body
  client.query(`update product set name = $1,price=$2 where id= $3`,[name,price,id],(err:any,res:any)=>{
    console.log('put res',res);
    response.json(res)
    
  })
})
app.delete('/deleteUser',(req:any,response:any)=>{
  const {id} = req.params
  // const id = req.params
  console.log('parseint',id);
  console.log('id',req.body);
  
  
  client.query(`delete from product where id= $1`, [id],(err:any,res:any)=>{
    response.json(res)
  })
})
const getAllUsers = () =>{
const userList =  client.query(`select * from plans`,(err:any,res:any)=>{

  console.log('res',res)
}
  
  
)
}
getAllUsers()