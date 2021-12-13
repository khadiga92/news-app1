const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)
console.log(process.argv)
const country = process.argv[2]

const news = require('./tools/news')

news(country, (error, data) => {
    console.log('Error ', error)
    console.log('Data ', data)
})

app.get('/', (req, res) => {
    news(country, (error, data) => {
        if (error) {
            return res.render({
                error
            })
        }
        res.render('index', {
            title: data.title,
            author: data.author,
            img: data.image
        })
    })
})

// app.get('/', (req, res) => {
//     if (!req.query.country) {
//         return res.send({
//             error: 'You must provide country'
//         })
//     }
//     news(country, (error, data) => {
//         if (error) {
//             return res.send({
//                 error
//             })
//         }
//         res.send({
//             title: data.title,
//             author: data.author,
//             img: data.image
//         })
//     })
// })
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})








// console.log(__dirname)
// console.log(path.join(__dirname, '../'))
// console.log(path.join(__dirname, '../public'))