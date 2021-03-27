import express from 'express';

let app = express();
app.listen(3000, () => {
    console.log("Server is listening on port 3000!")
})


app.get('/hello', (request, response) => {
    response.send("<h1>Hello!</h1>")
})
