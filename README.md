# Arr!psum
Just a fun projekt. A little lorem-ipsum-like generator with pirate quotes.

## Usage
```js
var ipsumText = arrIpsum.getIpsum(
    'word', // Generation Mode use ( letter || word || sentence )
    100,    // Count of letters/words/sentences
    true    // Use pirate quotes 
);
```

## Demo
[https://somecatcode.github.io/arr_ipsum/demo/](https://somecatcode.github.io/arr_ipsum/demo/)

### Example
```html
<!doctype html>
<html>
  <head>
    <title>JavaScript RSA Encryption</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="src/arrIpsum.min.js"></script>
  </head>
  <body>
    <div id="content"></div>
    <script type="text/javascript">
      jQuery(function($) {
        let ipsumText = arrIpsum.getIpsum('word', 100, true);
        $('#content').text(ipsumText);
      });
    </script>
  </body>
</html>
```