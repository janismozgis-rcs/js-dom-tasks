// 4. Here is a sample html file with a submit button. 
// Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// </head>
// <body>
// <p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
// <button onclick="getAttributes()">Click here to get  attributes value</button>
// </body></html>

function getAttributes() {
    const linkAttributes = document.getElementById('w3r').attributes;

    console.log(`
        href: ${linkAttributes.href.value}, 
        hreflang: ${linkAttributes.hreflang.value}, 
        rel: ${linkAttributes.rel.value}, 
        target: ${linkAttributes.target.value}
        and 
        type: ${linkAttributes.type.value}`
    );
}