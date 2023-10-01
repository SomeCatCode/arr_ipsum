# Arr!psum
Just a fun projekt. A little lorem-ipsum-like generator with pirate quotes.

## Usage
```js
var ipsumText = arrIpsum.getIpsum(
    100,    // Count of letters/words/sentences
    'word', // Generation Mode use ( letter || word || sentence )
     true   // Use pirate quotes 
);
```

## Demo
[https://ipsum.wasmitleder.de/demo/](https://ipsum.wasmitleder.de/demo/)

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
        let ipsumText = arrIpsum.getIpsum(100, 'word', true);
        $('#content').text(ipsumText);
      });
    </script>
  </body>
</html>
```