const tryCatchDecorator=(callback)=>(...arg)=>{
    try {
return callback();
    } catch(error){
        console.log(error.message)
        return{
            message:error.message
        }
    }
}
module.exports={
   func: tryCatchDecorator
}