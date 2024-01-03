const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod=require('zod');
const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);



function signJwt(username, password) {
    const usernameResponce=emailSchema.safeParse(username);
    const passwordResponce= passwordSchema.safeParse(password)
    if(!usernameResponce.success || !passwordResponce.success ){
        return null;
    }
    const ans=jwt.sign({username},jwtPassword)
    return ans;
}


function verifyJwt(token) {
    let a=true;
    try{
  jwt.verify(token,jwtPassword)
    }
    catch(e){
        ans=false;
    }
    return a;
}



function decodeJwt(token) {
   const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
