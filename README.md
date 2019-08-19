## Coding Exercise 

Write a scraper to pull voter registration deadline information from a public website into a structured text file. I have never done a web scrape before so I apologize.

### Technology Used

I am not familiar with Python so I used Node.js, Cheerio.js and Request. Cheerio uses jQuery and Request makes the HTTP call. Since I just wanted plain html text with links as the output, FS was already packaged with Node to create the file.

### Running the test

I have yet to write a shell script. Since I used Node for this, just run node index.js, plain txt of the scrape will be output, and a file will be created with the info.




