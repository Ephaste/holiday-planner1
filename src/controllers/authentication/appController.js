import nodemailer from "nodemailer";
 import mailgen from "mailgen";
 import dotenv from "dotenv";
 dotenv.config();
 
//export const signupemail = async (req, res) =>{
    //let testAccount =await nodemailer.createTestAccount();
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.forwardemail.net",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //       user: 'testAccount.user',
    //       pass: 'testAccount.pass',
    //     },
    //   });
    //   let message ={
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Sucess fully registered with us✔", // Subject line
    //     text: "Sucess fully registered with us thanks✔", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   }
      //send email from real g mail acount
//     export  const sendEmail = (req, res) =>{
// let {email} = req.body;
//         let config ={
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASSWORD
//             }
//         }
//       }
//       let transporter = nodemailer.createTransport(config);
//       let MailGenerator = new Mailgen({
// theme: "default",
// product: {
//     name: "Mailgen",
//     link : "https://mailgen.js"
// }
//       })
//       let response ={
//         body: {
//             name : "Registered",
//             intro: "you bill has arrived!",
//             table: {

//                 data:[
//                     {
//                         item: "gyuguyftf",
//                         description: "A backend application",
//                         price : "$677",
//                     }
//                 ]
//             },
//             outro: "Looking forward to do more business"
//         }
//       }
//       let mail = MailGenerator.generate(response)
// let message ={
//     from: process.env.EMAIL,
//     to: userEmail,
//     subject: "Place order",
//     html: mail
// }
//     transporter.sendMail(message).then(() =>{
//         return res.status(201).json({msg: "You should receive the mesage"});
//     }).catch(error =>{
//   return res.status(500).json({error})
//     })
   
       
    
 
//  export const getBill = (req, res) => {
//    // res.status(201).json("Get bill");
//  }
 
export const sendEmail= async (to,sub,textContent,htlmlContent)=>{
    console.log("to",to)
    console.log("sub",sub,textContent,htlmlContent)
    
try{let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});
console.log(process.env.EMAIL,process.env.PASSWORD)
 let mailoptions={
    from:process.env.EMAIL,
    to:to,
    subject:sub,
    text:textContent,
    html:htlmlContent
 };
 await transporter.sendMail(mailoptions);

}catch(error){console.log("send emailcatch block",error.message)}


}