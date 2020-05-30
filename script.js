//Variables

let body = document.querySelector('body');
let p = document.querySelector('p');
let div = document.querySelector('div');
const start = document.getElementById('start');
const stop = document.getElementById('stop');

//Making sure speech recognition is obtained properly

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Get the SpeechRecognition method

const recognition = new SpeechRecognition();

//show results even before finalised

recognition.interimResults = true;

//Listen out for recognition result change

recognition.addEventListener("result", e => {
    //Make array from the results from event
    const transcript = Array.from(e.results)
        //Map the first array index to array
        .map(result => result[0])
        //Map the text from the result to the array
        .map(result => result.transcript)
        //Join it together to make a readable string
        .join("");
    console.log(e.results);

    //Display the result inside the words Div
    div.innerText = transcript;

    //If the isFInal() method returns true (so when the listening is done)
    if (e.results[0].isFinal) {
        //Create a p element and append it to the Div so the transcript text can be displayed in a p tag
        p = document.createElement("p");
        div.appendChild(p);
    }

    //CHANGE BACKGROUND COLOR WHEN YOU SAY A COLOR!
    let cap_css_colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

    //Return the array items in all lower case
    const CSS_COLORS = cap_css_colors.map(color => {
        return color.toLowerCase();
    });

    console.log(CSS_COLORS);

    //For every color in the colors array, check to see if the vocal word matches any of the colors. If so, change the body's background color to that particular color
    CSS_COLORS.forEach(color => {
        if (transcript.includes(color)) {
            body.style.backgroundColor = color;
        }
    });
});

// Function to start speech recognition
function startRecording() {
    recognition.start();
    recognition.addEventListener('end', recognition.start);
    //stop recording when user clicks the stop button
    stop.addEventListener('click', stopRecording);
}

//stop recording when user clicks the stop button
function stopRecording() {
    recognition.removeEventListener('end', recognition.start);
    recognition.stop();
}

//When user clicks the start button, the recording starts
start.addEventListener('click', startRecording);




