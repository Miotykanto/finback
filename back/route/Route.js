var controller =require( '../controler/controler.list.js')
module.exports.route=function (app){

    app.get('/',controller.Get);

    app.route('/list')
        .get(controller.Getliste)
        .post(controller.Postliste)
        .put(controller.Putliste)
        .delete(controller.Deleteliste )
}

































    // app.post('/list',controller.Postliste  );

    // app.put('/list', controller.Putliste )

    // app.delete('/list',controller.Deleteliste )
    
    
    // app.get('/test', function(req, res) {
     
    //     res.setHeader('Content-Type', 'text/plain');
    
    //     try{
    //             var b=fs.readFileSync('./route/test.json','utf-8')
    //             var test=JSON.parse(b)
    //             for(let i=0;i<test.length;i++){ 
    //                 let b=test[i].image
    //                 app.get(b,function(req,resp){
    //                     try{
    //                      var t='.'+b
    //                      var f=fs.readFileSync(t)
    //                      resp.write(f)
    //                      resp.end()
    //                     }catch(e){
    //                      console.log(e.stack);
    //                     }
                
    //                 })
    //             }
    //                 res.send(b)
    //     }catch(z){
    //         console.log(z.stack);
    //     }
    
    // });

    // app.get('/personne', function(req, res) {
    
    //     res.setHeader('Content-Type', 'text/plain');
    
    //     try{
    //             var m=fs.readFileSync('./route/personne.json','utf-8')
    //             var test=JSON.parse(m)
    //             for(let i=0;i<test.length;i++){ 
    //                 let b=test[i].image
    //                 app.get(b,function(req,resp){
    //                     try{
    //                      var t='.'+b
    //                      var f=fs.readFileSync(t)
    //                      resp.write(f)
    //                      resp.end()
    //                     }catch(e){
    //                      console.log(e.stack);
    //                     }
                
    //                 })
    //             }
    //                 res.send(m)
    //     }catch(n){
    //         console.log(n.stack);
    //     }
    
    // });


