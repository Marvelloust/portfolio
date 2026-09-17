
const http=require('http');
const fs=require('fs');
const path=require('path');
const root=__dirname;
const port=Number(process.env.PORT||4173);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4'};
function safe(url){
  const clean=decodeURIComponent((url||'/').split('?')[0]).replace(/\\/g,'/');
  const file=path.normalize(path.join(root,clean));
  return file.startsWith(root)?file:null;
}
function send(res,file,status=200){
  fs.readFile(file,(e,data)=>{
    if(e){res.writeHead(500);return res.end('Server error')}
    res.writeHead(status,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(data);
  });
}
http.createServer((req,res)=>{
  let file=safe(req.url);
  if(!file){res.writeHead(400);return res.end('Bad request')}
  fs.stat(file,(e,stat)=>{
    if(!e&&stat.isFile())return send(res,file);
    if(!e&&stat.isDirectory())file=path.join(file,'index.html');
    else if(!path.extname(file))file=path.join(file,'index.html');
    fs.stat(file,(e2,stat2)=>{
      if(!e2&&stat2.isFile())send(res,file);
      else send(res,path.join(root,'404','index.html'),404);
    });
  });
}).listen(port,()=>console.log(`Marvellous Build Record V14 running at http://localhost:${port}`));
