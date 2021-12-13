const request = require('request')

const news = (country, callback) => {
    const url = 'http://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=f69a321aabc64c0f8150bfd77f11803b'
    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Error has occurred', undefined)
        } else if (response.body.status === 'error') {
            callback(response.body.message, undefined)
        } else if (response.body.articles.length === 0) {
            callback('Wrong country code', undefined)
        } else {
            callback(undefined, {
                author: response.body.articles[0].author,
                title: response.body.articles[0].title,
                image: response.body.articles[0].urlToImage
            })
        }
    })
}

module.exports = news


// const url = 'http://newsapi.org/v2/top-headlines?country=eg&apiKey=f69a321aabc64c0f8150bfd77f11803b'

// request({
//     url,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Error has occurred')
//     } else if (response.body.status === 'error') {
//         console.log(response.body.message)
//     } else if (response.body.articles.length === 0) {
//         console.log('Wrong country code')
//     } else {
//         console.log(response.body.articles[0].author)
//         console.log(response.body.articles[0].title)
//         console.log(response.body.articles[0].urlToImage)
//         // {
//         //     author: response.body.articles[0].author,
//         //     title: response.body.articles[0].title,
//         //     image: response.body.articles[0].urlToImage
//         // }
//     }
// })










//////////////////////////////////////////////////////////////////////////
// const news = (country, callback) =>{
//     const url = 'http://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=f69a321aabc64c0f8150bfd77f11803b'
//     request({url,json:true},(error,response)=>{
//         if (error) {
//             callback('Error has occurred', undefined)
//         }
//         else if (response.body.status === 'error') {
//             callback(response.body.message, undefined)
//         }
//         else if (response.body.articles.length === 0) {
//             callback('Wrong country code', undefined)
//         }
//         else {
//             callback(undefined, {
//                 author: response.body.articles[0].author,
//                 title: response.body.articles[0].title,
//                 image: response.body.articles[0].urlToImage
//             })
//         }
//     })
// }


