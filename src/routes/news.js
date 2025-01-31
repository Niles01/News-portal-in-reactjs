const express = require('express')
const newsRouter = express.Router()
const axios = require('axios') //Used for error handling.

newsRouter.get('', async(req,res)=> {
    // res.render('news')

    // Handling error 
    try{
        const newsapi = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1019be5b2934ec3b5919e79e44315b0`)
        res.render('news' , {articles : newsapi.data })
    } catch(err){
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            console.log(err.request)
        } else{
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter