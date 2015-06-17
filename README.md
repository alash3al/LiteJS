# lite.js
A very tiny full featured template engine for javascript for both client and server sides, you need no-learning curve

# examples
```javascript
html =  "hi {{= name }} ok <br />" +
      	"lets do a loop" +
      	"{{ for ( i in [1, 2, 3, 4] ) { }} " + // if ( ... ) { 
        "	current step is {{= i }}" +
      	"{{ } }}" + // endfor '}'
      	" end-of-loop "

console.log(lite(html, {name: "alash3al"}))
```
