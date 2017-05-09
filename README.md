
<img src="cena.png" width="250">

# JohnCena.JS
JohnCena.JS Bring the full power of John Cena to your webapp

Just include the <code>john-cena.js</code> file


```html
<script src="john-cena.js"></script>
```

and 
```javascript
$(window).load(function() {
	$('.button').cena();
});
```


For the Konami Code version
```javascript
$(window).load(function() {
	$('.button').cena({
		'enterOn': 'konami-code'
	});
});
```


For the Timer version
```javascript
$(window).load(function() {
	$('.button').cena({
		'enterOn': 'timer',
		'delayTime': 2000
	});
});
```


Enjoy!



