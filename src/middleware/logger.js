//const express = require('express');
//import {Express} from "express";

export const logger = function(req, res, next){
    console.log(req.body);
    next();
    }
    
    //module.exports =logger;