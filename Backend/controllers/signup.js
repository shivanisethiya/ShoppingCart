const User = require("../models/User");
const bcrypt = require("bcrypt");



exports.signup = async (req,res) => {
  try{
     
      const {firstName, lastName,email, password, confirmPassword} = req.body;
      //check if user already exist
      // const existingUser = await User.findOne({email});

      // if(existingUser){
      //     return res.status(400).json({
      //         success:false,
      //         message:'User already Exists',
      //     });
      // }

      //secure password
      let hashedPassword;
      try{
          hashedPassword = await bcrypt.hash(password, 10);
      }
      catch(err) {
          return res.status(500).json({
              success:false,
              message:'Error inn hashing Password',
          });
      }

      //create entry for User
      const user = await User.create({
        firstName, lastName,email, password:hashedPassword, confirmPassword:hashedPassword,
      })

      return res.status(200).json({
          success:true,
          message:'User Created Successfully',
      });

  }
  catch(error) {
      console.error(error);
      return res.status(500).json({
          success:false,
          message:'User cannot be registered, please try again later',
      });
  }
}
