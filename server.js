var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
    

 'article-one' :{
  title: 'article one | satish solanke',
  heading: 'article one',
  date: 'sep 17, 2016',
  content:  
    ` 
        <p>
            this is article one.i'm building my apps using iitm lecture. this is article one.i'm building my apps using iitm lecture
                      this is article one.i'm building my apps using iitm lecture this is article one.i'm building my apps using iitm lecture
                  this is article one.i'm building my apps using iitm lecture
                </p>
                <p>
                        this is article one.i'm building my apps using iitm lecture
                     this is article one.i'm building my apps using iitm lecture this is article one.i'm building my apps using iitm lecture
                    this is article one.i'm building my apps using iitm lecture
                </p>
                  <p>
                      this is article one.i'm building my apps using iitm lecture
                  this is article one.i'm building my apps using iitm lecture this is article one.i'm building my apps using iitm lecture
                   this is article one.i'm building my apps using iitm lecture
                 </p> 
          `
},

'article-two' : { 
    
    title: 'article two | satish solanke',
  heading: 'article two',
  date: 'sep 20, 2016',
  content:  
    ` 
        <p>
            this is article two.
                 </p> 
          `},
'article-three' :
    { title: 'article three | satish solanke',
  heading: 'article three',
  date: 'sep 19, 2016',
  content:  
    ` 
        <p>
            this is article three.
                 </p> 
          `},
    
};

function createTemplate (data)
{
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
                 <div>
                         <a href="/">Home</a>
                     </div>
                 <hr/>
                 <h3>
                              ${heading}
                </h3>
                 <div>
                           ${date}
                 </div>
             <div>
                 ${content}
         </div>
  </div>
    </body>
</html>
`
return htmlTemplate;
}









app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleName',function(req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
