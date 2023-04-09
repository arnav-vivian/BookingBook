import  jwt from 'jsonwebtoken';
import  createError  from '../utils/error.js';

export const verifyToken = (req, res, next) => {
    const token=req.cookies.access_token;
    if(!token){
        return next(createError(401,"you are not authenticated"));
    }
jwt.verify(token,process.env.jwt,(err,user)=>{
    if(err) return next(createError(401,"token is invalid!"));

    req.user=user;
    next();
})
};

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res, next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
           return next(createError(403,"you are not allowed to perform this action"))
        }
    }
)};

export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }
        else{
           return next(createError(403,"you are not a admin and not allowed to perform this action"))
        }
    }
)};