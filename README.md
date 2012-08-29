jQuery-placeHolder
==================

Adds fallback support for HTML5 placeholder attribute functionality in older browsers. 

Example use:

    <input type="text" name="email" placeholder="Your Email"></input>
    
    <script type="text/javascript">
        $('input').placeHolder();
    </script>

In newer browsers, you'll see "Your Email" greyed out in the box. In older browsers, this plugin will insert the placeholder value as the input value and behave the same as the HTML5 supported feature.
