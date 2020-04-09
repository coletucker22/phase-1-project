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
            $( "#inspContainer" ).effect( "highlight", "slow" );
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
            $( "#genContainer" ).effect( "highlight", "slow" );
        }
}

//-------------------------------------------------------------------
// EventListener for a Movie Quotes Button
const btnElMov = document.getElementById("movQuotesButton");
const pElMovQuote = document.getElementById("movQuote");
const pElMovAuthor = document.getElementById("movAuthor");
//btnElMov.addEventListener('click', clickMovBtn);

$( "#movQuotesButton" ).click(function() {
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
            $( "#movContainer" ).effect( "highlight", "slow" );
        } 
    
  });
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
            $( "#famContainer" ).effect( "highlight", "slow" );
        }
}


//-------------------------------------------------------------------
// EventListener for a Programming Quotes Button
const btnElPro = document.getElementById("proQuotesButton");
const pElProQuote = document.getElementById("proQuote");
const pElProAuthor = document.getElementById("proAuthor");
btnElPro.addEventListener('click', clickProBtn);

function clickProBtn () {

    //fetch("http://quotes.stormconsultancy.co.uk/quotes.json")        //a REST based API, REST does not use Headers
    fetch("./progquotes.json")      
        .then(extractJSON)                      
        .then(useTheData);

        function extractJSON (response) {
            return response.json()
        }

        function useTheData (data) {
            function getRandomInt(max) {                        //send this function a max value and it returns an int between 0 and max
                return Math.floor(Math.random() * Math.floor(max));
            }
            let quoteNumber = getRandomInt(data.length-1);      //we need an int between 0 and (max-1) for array indexing

            //console.log(data);
            // console.log(data.quote);
            // console.log(data.author);
            pElProQuote.innerHTML = '"' + data[quoteNumber].quote + '"';
            pElProAuthor.innerHTML = data[quoteNumber].author;
            $( "#proContainer" ).effect( "highlight", "slow" );
        }
}

//----------Granim Trial------------------------------------
var granimInstance = new Granim({
    element: '#canvas-image-blending',
    name: 'granim',
    elToSetClassOn: 'body',
    direction: 'diagonal',
    isPausedWhenNotInView: false,
    scrollDebounceThreshold: 300,
    stateTransitionSpeed: 1000,
    image : {
        source: 'images/forestbig.png',
        position: ['center', 'bottom'],
        stretchMode: ['stretch', 'stretch-if-bigger'],
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#834d9b', '#d04ed6', '#1CD8D2', '#93EDC7'],
                ['#1CD8D2', '#93EDC7', '#757F9A', '#4389A2']
            ],
            transitionSpeed: 5000,
            loop: true
        },
        "dark-state": {
            gradients: [
                ['#757F9A', '#D7DDE8', '#1CD8D2', '#93EDC7'],
                ['#5C258D', '#4389A2', '#1CD8D2', '#93EDC7']
            ],
            transitionSpeed: 5000,
            loop: true
        }
    },
    onStart: function() {
        console.log('Granim: onStart');
    },
    onGradientChange: function(colorDetails) {
        console.log('Granim: onGradientChange, details: ');
        console.log(colorDetails);
    },
    onEnd: function() {
        console.log('Granim: onEnd');
    }
});