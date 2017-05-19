
<img src="cena.png" width="250">

# JohnCena.JS
JohnCena.JS Bring the full power of John Cena to your webapp

Just include the <code>john-cena.js</code> file
and make sure you have a class="Button" in one of your tags

```html
<script src="john-cena.js"></script>
```

and 
```javascript
<script>
$(window).load(function() {
	$('.button').cena();
});
</script>
```


For the Konami Code version
```javascript
<script>
$(window).load(function() {
	$('.button').cena({
		'enterOn': 'konami-code'
	});
});
</script>
```


For the Timer version
```javascript
<script>
$(window).load(function() {
	$('.button').cena({
		'enterOn': 'timer',
		'delayTime': 2000
	});
});
</script>
```


Enjoy!



