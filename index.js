const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://y.combinator.com';

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    })

let getData = html => {
    data = [];
    const $ = cheerio.load(html);
    $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
        data.push({
            title : $(elem).text(),
            link : $(elem).find('a.storylinkn').attr('href')
        });
    });
    console.log(data);
}

getData(response.data)