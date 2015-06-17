# lite.js
A very tiny full featured template engine for javascript for both client and server sides, you need no-learning curve

# features
> instead of `<? ... ?>` we use `{{ ... }}`  
> instead of `<?= ... ?>` we use `{{= ... }}`  
> supports any javascript code  
> very tiny, just a function with `18` lines of code
> works for both client-side 'browsers' and server-side 'node.js'
> small footprints
> easily embed javascript in your html

# usage
```javascript
html =  "hi {{= name }} ok <br />" +
      	"lets do a loop" +
      	"{{ for ( i in [1, 2, 3, 4] ) { }} " +
        "	current step is {{= i }}" +
      	"{{ } }}" + // endfor '}'
      	" end-of-loop "

console.log(lite(html, {name: "alash3al"}))
```
