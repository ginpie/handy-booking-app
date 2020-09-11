module.exports=(error, req, res, next)=>{
    if(error.name==='ValidationError'){
        return res.status(400).json({errors:error.errors});
    }
    console.error(error);
    return res.status(500).json({errors:{message:'something wrong'}});
}