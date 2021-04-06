// 1. Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
// Sample HTML file :

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
// <title>JS DOM paragraph style</title>
// </head> 
// <body>
// <p id="text">JavaScript Exercises - w3resource</p> 
// <div>
// <button id="jsstyle"
// onclick="js_style()">Style</button>
// </div>
// </body>
// </html>

// Clicking on the button the font, font size, and color of the paragraph text will be changed.
function jsStyle() {
    const paragraphElement = document.getElementById('text');
    paragraphElement.style.color = 'red';
    paragraphElement.style.fontSize = '25px';
    paragraphElement.style.fontFamily = 'Arial';

    // document.getElementById('text').style.color = 'red';
    // document.getElementById('text').style.fontSize = '25px';
    // document.getElementById('text').style.fontFamily = 'Arial';
}