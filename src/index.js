const express = require('express') ;// it returns a function
const React=require('react');
const renderToString= require('react-dom/server').renderToString
const Home = require('./client/components/Home').default;
const app=express(); // we use express() function and it returns  an object

// import express from 'express';
// import React from "react";
// import { renderToString } from 'react-dom/server';
// import Home from './client/components/Home';
// const app=express();

// for create api
// app.get()
// app.post ()
// app.put()
// app.delete()
// :Request<P,ResBody,ReqBody,ReqQuery,Locals>
// :Response<ResBody,Locals>

// app.use(express.static("public"))
app.get('/',(req, resp  )=>{

    const content=renderToString(<Home />) 
    resp.send(content)

})

const port = 1003;

app.listen(port,()=> {
    console.log(`listening on ${port}`);
})
