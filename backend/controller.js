const User = require("./modal.js")


exports.signup= async(req,res,next)=>{
    
    let { email, password} = req.body

    if (req.body.password !== req.body.confirmPassword) {
        return next(
            res.status(201).json({
                success: false,
                message: "Password not matched",
                
              })
        )
      }
      
      if(email=="" || password==""){
              
        return next(
          res.status(201).json({
              success: false,
              message: "Enter Email or password",
              
            })
      )
      }

      let emaill = email[0].toLowerCase()+ email.slice(1)
      email = emaill
      
      

    const user = await User.create({
        email,
        password,
        
    })
    
    
    res.status(200).json({
        success: true,
        user,
        message: "Signed Up successfully",
        
      });

}


exports.login = async(req,res,next) =>{

  const { email, password} = req.body;
  

  if(email=="" || password==""){
              
    return next(
      res.status(201).json({
          success: false,
          message: "Enter Email or password",
          
        })
  )
  }

  let emaill = email.charAt(0).toLowerCase()+ email.slice(1)

  
  let user = await User.findOne({ emaill }).select("+password");
  

  if(!user){
        
    return next(
      res.status(401).json({
          success: false,
          message: "User not found",
          
        })
  )

  }

  
 
  if( password !==user.password){
    return next(
      res.status(401).json({
          success: false,
          message: "Invalid  Email or passwordd",
          
        })
  )

  }

  res.status(200).json({
    success: true,
    user,
    message: "Logged In successfully",
    
  });

  
}