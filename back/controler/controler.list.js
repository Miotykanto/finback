

var fs=require("fs")
var y=0
module.exports.Get=function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous êtes à l\'accueil');

}

module.exports.Getliste=function(req, res,app) {
    
    res.setHeader('Content-Type', 'text/plain');
    
    try{
           var d= fs.readFileSync('./model/note.json','utf-8')
            res.send(JSON.parse(d))
            // return  res.redirect('http://localhost:3000/liste');
            // res.end()
    }catch(e){
         console.log(e.stack);
    }

}

module.exports.Postliste=function(request, res) {
    var nom = request.body.nom; 
    var prenom = request.body.prenom; 
    try{
        var b=fs.readFileSync('./model/note.json','utf-8')
       var c=  JSON.parse(b)
       var d=0
       if(c.length){
         d= parseInt(c[c.length-1].id)+1
       }
        c.push({id:d,nom:nom,prenom:prenom})
        // res.send(c)
        fs.writeFileSync('./model/note.json', JSON.stringify(c)) 
        return  res.redirect('http://localhost:3000/liste');
        // res.send('<script>window.location.href="http://localhost:3000/liste";</script>');
        
    }catch(z){
        console.log(z.stack);
    }
  
    console.log(c);s
  }


  module.exports.Putliste= function(request,resp){
    var nom = request.body.nom; 
    var prenom = request.body.prenom; 
    var id =request.body.id; 
    var b=fs.readFileSync('./model/note.json','utf-8')
    var c=  JSON.parse(b)
    for(let i=0;i<c.length;i++){
        if(c[i].id==id){
            if(nom){
                c[i].nom=nom
            }
            if(prenom){    
                c[i].prenom=prenom
            }
            
        }
    }
    // resp.send(c)
    fs.writeFileSync('./model/note.json', JSON.stringify(c))
    return  resp.redirect('http://localhost:3000/liste');

    
}

module.exports.Deleteliste=function(req,res){
    var id=req.body.id;
    var b=fs.readFileSync('./model/note.json','utf-8')
    var c= JSON.parse(b)
    if(id==c[c.length-1].id){
        c.pop()
    }else{
        c.splice(parseInt(id),1)
    }

    // res.send(JSON.stringify(c))
    fs.writeFileSync('./model/note.json', JSON.stringify(c))
    return  res.redirect('http://localhost:3000/liste');

  
}