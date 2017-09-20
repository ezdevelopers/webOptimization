## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Solutions

#### Solution 1:Image Optimization with Grunt


1. I used grunt task runner to optimise images for smaller sizes
1. I used the grunt plugin imagemin for optimization

#### Solution 2: CSS and Javascript  Minification

1. I also used gruner tnt task runo minify images for smaller bytes
1. I used the grunt plugin uglify for Javascript minification and 
   CSSmin for CSS minification

#### Solution 2: Eliminate render blocking CSS and JS

* To optimize the page for higher page speed loaded non critical Javascript
asynchronously with the page load by using the `async` attribute. I also 
added  `media` attributes to the CSS to load critical CSS.  

* I analyse my webpages to spot critical CSS for rendering above the fold 
content using this tool: [Critical Path CSS Generator - by Jonas Ohlsson](https://jonassebastianohlsson.com/criticalpathcssgenerator/).

* I also used the grunt plugin `grunt-critical` to analyse and inline critcal css and add script to loadCSS

* Then I inlined the Critical CSS in each individual page and deferred the 
main CSS file to load at a later time by putting the link before the closing
body `</body>` tag.

### Optimize the Pizza page for 60FPS on scroll and on pizza resize function

* I used the Performance panel to record a trace of the page on scroll. Then 
I discovered a performance issue caused by a forced reflow. I investigated the 
culprit script and discovered the browser constantly performed layout while 
looping through a snippet of code.

```js

    // Moves the sliding background pizzas based on scroll position
    function updatePositions() {
      frame++;
      window.performance.mark("mark_start_frame");

      var items = document.querySelectorAll('.mover');
      for (var i = 0; i < items.length; i++) {
        var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
        items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
      }

```
* I also used the Performance panel to record a trace of the pizza resize 
section and encountered another forced reflow.

```js

    // Returns the size difference to change a pizza element from one size to another. Called by changePizzaSlices(size).
      function determineDx (elem, size) {
        var oldwidth = elem.offsetWidth;
        var windowwidth = document.querySelector("#randomPizzas").offsetWidth;
        var oldsize = oldwidth / windowwidth;

        // Changes the slider value to a percent width
        function sizeSwitcher (size) {
          switch(size) {
            case "1":
              return 0.25;
            case "2":
              return 0.3333;
            case "3":
              return 0.5;
            default:
              console.log("bug in sizeSwitcher");
          }
        }

        var newsize = sizeSwitcher(size);
        var dx = (newsize - oldsize) * windowwidth;

        return dx;
      }

      // Iterates through pizza elements on the page and changes their widths
      function changePizzaSizes(size) {
        for (var i = 0; i < document.querySelectorAll(".randomPizzaContainer").length; i++) {
          var dx = determineDx(document.querySelectorAll(".randomPizzaContainer")[i], size);
          var newwidth = (document.querySelectorAll(".randomPizzaContainer")[i].offsetWidth + dx) + 'px';
          document.querySelectorAll(".randomPizzaContainer")[i].style.width = newwidth;
        }
      }

      changePizzaSizes(size);

```
* I modified the `main.js` file for optimal performance using DRY methodology and fast javascript webAPIs