//-------------------------------------------------------------------
// EventListener for a Inspirational Quotes Button
const btnElInsp = document.getElementById("inspQuotesButton");
const pElInspQuote = document.getElementById("inspQuote");
const pElInspAuthor = document.getElementById("inspAuthor");
btnElInsp.addEventListener('click', clickInspBtn);

function clickInspBtn () {
    fetch("https://type.fit/api/quotes")                        //this url returns a full array of Inspirational Quotes
        .then(extractJSON)                                      //we can extract the JSON data and just randomly pick one
        .then(useTheData);

        function extractJSON (response) {
            return response.json()
        }

        function useTheData (data) {
            function getRandomInt(max) {                        //send this function a max value and it returns an int between 0 and max
                return Math.floor(Math.random() * Math.floor(max));
            }
            let quoteNumber = getRandomInt(data.length-1);      //we need an int between 0 and (max-1) for array indexing
            //console.log(data[quoteNumber]);
            // console.log(data[quoteNumber].text);
            // console.log(data[quoteNumber].author);
            pElInspQuote.innerHTML = '"' + data[quoteNumber].text + '"';
            pElInspAuthor.innerHTML = data[quoteNumber].author;
        }
}

//-------------------------------------------------------------------
// EventListener for a General Quotes Button
const btnElGen = document.getElementById("genQuotesButton");
const pElGenQuote = document.getElementById("genQuote");
const pElGenAuthor = document.getElementById("genAuthor");
btnElGen.addEventListener('click', clickGenBtn);

function clickGenBtn () {
    var myHeaders = new Headers({
        'Content-Type': 'application/json',
      });

    fetch("https://favqs.com/api/qotd", {
        headers: myHeaders,})                   
        .then(extractJSON)                      
        .then(useTheData);

        function extractJSON (response) {
            return response.json()
        }

        function useTheData (data) {
            //console.log(data);
            // console.log(data.quote.body);
            // console.log(data.quote.author);
            pElGenQuote.innerHTML = '"' + data.quote.body + '"';
            pElGenAuthor.innerHTML = data.quote.author;
        }
}

//-------------------------------------------------------------------
// EventListener for a Movie Quotes Button
const btnElMov = document.getElementById("movQuotesButton");
const pElMovQuote = document.getElementById("movQuote");
const pElMovAuthor = document.getElementById("movAuthor");
btnElMov.addEventListener('click', clickMovBtn);

function clickMovBtn () {
    // fetch("http://movie-quotes-app.herokuapp.com/api/v1/quotes", {   //<----if we dont get a key we may need to use this guys data:
                                                                        // https://github.com/vilaboim/movie-quotes/blob/master/movie-quotes.json

    fetch("./moviequotes.json")                                         // did not get an api key, so decided to host a local jason file of about
        .then(extractJSON)                                              // 100 movie quotes and generate a random one
        .then(useTheData);

        function extractJSON (response) {
            return response.json()
        }

        function useTheData (data) {
            function getRandomInt(max) {                        //send this function a max value and it returns an int between 0 and max
                return Math.floor(Math.random() * Math.floor(max));
            }
            let quoteNumber = getRandomInt(data.length-1);      //we need an int between 0 and (max-1) for array indexing
            //console.log(data[0]);
            
            pElMovQuote.innerHTML = '"' + data[quoteNumber].quote + '"';
            pElMovAuthor.innerHTML = data[quoteNumber].author;

        }
}


//-------------------------------------------------------------------
// EventListener for a Famous Quotes Button
const btnElFam = document.getElementById("famQuotesButton");
const pElFamQuote = document.getElementById("famQuote");
const pElFamAuthor = document.getElementById("famAuthor");
btnElFam.addEventListener('click', clickFamBtn);

function clickFamBtn () {

    fetch("https://quote-garden.herokuapp.com/quotes/random")       //a REST based API, REST does not use Headers    
        .then(extractJSON)                      
        .then(useTheData);

        function extractJSON (response) {
            return response.json()
        }

        function useTheData (data) {
            //console.log(data);
            // console.log(data.quoteText);
            // console.log(data.quoteAuthor);
            pElFamQuote.innerHTML = '"' + data.quoteText + '"';
            pElFamAuthor.innerHTML = data.quoteAuthor;
        }
}


//-------------------------------------------------------------------
// EventListener for a Programming Quotes Button
const btnElPro = document.getElementById("proQuotesButton");
const pElProQuote = document.getElementById("proQuote");
const pElProAuthor = document.getElementById("proAuthor");
btnElPro.addEventListener('click', clickProBtn);

function clickProBtn () {

    fetch("http://quotes.stormconsultancy.co.uk/random.json")        //a REST based API, REST does not use Headers          
        .then(extractJSON)                      
        .then(useTheData);

        function extractJSON (response) {
            return response.json()
        }

        function useTheData (data) {
            //console.log(data);
            // console.log(data.quote);
            // console.log(data.author);
            pElProQuote.innerHTML = '"' + data.quote + '"';
            pElProAuthor.innerHTML = data.author;
        }
}