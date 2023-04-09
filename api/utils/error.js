 const createError=(status, messgae)=>{
    const err=Error();
    err.status=status;
    err.message=messgae;
return err;
}

export default createError;