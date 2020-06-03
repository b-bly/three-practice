const express = require('express')
const bodyParser = require('body-parser')
// const morgan = require('morgan')
const app = express()
const PORT = 8080

// MIDDLEWARE
// app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

//routing
// app.get('/', (req, res, next)=> {
// 	console.log('server get resource: ');
// 	res.end()
// })


app.use('/3d-assets', express.static(__dirname + '/3d-assets'));
app.use(express.static(__dirname + '/public'));

// Starting Server 
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
})



