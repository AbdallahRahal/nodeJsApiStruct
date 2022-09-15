import express from 'express';
import { orderRouter } from './src/routes/order.route.js'

const app = express()
const port = 3000

app.use(express.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
})

app.use('/plane', orderRouter);
//app.use('/example', middleWareExample? , router.example);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})