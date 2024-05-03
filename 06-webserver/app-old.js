const http = require('http');

http.createServer((req,res)=>{
    //console.log(req);
    // res.writeHead(200, {'Content-Type': 'text/plain'})
    // res.writeHead(200, {'Content-Type': 'application/json'})
    // const persona ={
    //     id:1,
    //     nombre: 'David'
    // }
    //res.write(JSON.stringify( persona));
    //res.write('404 | Page not found');
    res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.write('id,nombre\n');
    res.write('1,David\n');
    res.write('2,Juan\n');
    res.write('3,pedro\n');
    res.end();
})
.listen(3000)

console.log('escuchando el puerto',3000);
