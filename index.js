const rp = require('request-promise');
const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

  request('https://www.vote.org/voter-registration-deadlines/', (error, response, html) => {
    
    if(!error && response.statusCode === 200){
       
        const $ = cheerio.load(html);
        const stateInfo = $('.state-row');

        console.log(stateInfo.text());

        fs.writeFile('voter_deadline_scrape.html', stateInfo, function (error) { 
            if (error)
        console.log(error);
            else
        console.log('Scrape file created. Go to voter_deadline_scrape.html in this directory.');
      });
    }
});

