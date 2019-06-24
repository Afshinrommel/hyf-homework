const http = require('http');
const url = require('url');
module.exports = http.createServer((req, res) => {
    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);
    console.log(req.method);
    // GET Endpoint
    if (reqUrl.pathname == '/studentslist' && req.method === 'GET') {
        console.log('Request Type:' +req.method + ' Endpoint: ' +reqUrl.pathname);
        service.studentsList(req, res);
    } else if (reqUrl.pathname == '/studentdelete' && req.method === 'DELETE') {
        console.log(`Request Type + ${req.method} + EndPoint: + ${reqUrl.pathname}`)
        service.studentDelete(req, res);
    }else if(reqUrl.pathname === '/studentinfo' && req.method === 'GET'){
        console.log(`Request Type + ${req.method} + EndPoint: + ${reqUrl.pathname}`)
        service.studentInfo(req,res);
    }else if(reqUrl.pathname === '/studentadd' && req.method === 'POST'){
        console.log(`Request Type + ${req.method} + EndPoint: + ${reqUrl.pathname}`)
        service.studentAdd(req,res);
    }else if(reqUrl.pathname === '/studentsclass' && req.method === 'GET'){
        console.log(`Request Type + ${req.method} + EndPoint: + ${reqUrl.pathname}`)
        service.studentsByClassId(req,res);
    }else if(reqUrl.pathname === '/studentedit' && req.method === 'PATCH'){
        console.log(`Request Type + ${req.method} + EndPoint: + ${reqUrl.pathname}`)
        service.studentEditInfo(req,res);
    }
    else {
        console.log(`Request Type + ${req.method} + Invalid Endpoint: + ${reqUrl.pathname}`)
        service.invalidRequest(req, res)
    }
});