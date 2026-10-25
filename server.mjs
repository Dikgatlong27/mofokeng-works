import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist');const port=Number(process.env.PORT||39847);
http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(pathname==='/')pathname='/index.html';const file=resolve(root,'.'+pathname);if(!file.startsWith(root+sep))throw new Error('Invalid path');const data=await readFile(file);res.writeHead(200,{'Content-Type':({'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png'})[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Page not found')}}).listen(port,'0.0.0.0',()=>console.log(`Mofokeng Works: http://localhost:${port}`));
