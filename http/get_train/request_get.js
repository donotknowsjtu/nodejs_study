const http = require('http');
const logInHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>log in</title>
    </head>
    <body>
        <div text-align="center">
             <b>this is the log in page</b>
        </div>
    </body>
    </html>
    `;
const signUpHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>sign up</title>
    </head>
    <body>
        <div text-align="center">
             <b>this is the sign up page</b>
        </div>
    </body>
    </html>
    `;
const server = http.createServer((request, response) => {   
     let {method} =request;
     let {pathname} = new URL(request.url, 'http://xxx.com:22222')
     if (method === 'GET' && pathname === '/log_in'){
        response.end(logInHtml)
     }
     else if(method === 'GET' && pathname === '/sign_up'){
        response.end(signUpHtml)
     }
     else{
         response.end('404 not found')
     }
    }
)
const listen = server.listen(9000, () => {
    console.log('server is running');
}
)