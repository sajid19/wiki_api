const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://raju:raju2641@cluster0.gc7sbde.mongodb.net/wikiDB');;
const articleSchema = {
    title : String,
    content : String
}
const Article = mongoose.model("Article", articleSchema)


app.get("/articles", function (req, res) {
    Article.find({}, function (err , foundArticles) {
      if (!error){
        res.send(foundArticles);

      }else{
        res.send(err)
      }
     

    });

});
app.post("/articles" , function (req, res) {
  console.log( );
   console.log( );
   const newArticle = new Article({
    title : req.body.title ,
    content : req.body.content
   });
  newArticle.save(function (err) {
    if(!err){
      console.log("success to add articles");
    }else{
      console.log("not succes");
    }
  }); 
  
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});