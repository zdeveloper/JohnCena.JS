# JohnCena.JS
JohnCena.JS Bring the full power of John Cena to your webapp

Just include the <code>john-cena.js</code> file
<br>

```html
<script src="john-cena.js"></script>
```

and <br>
```html
<script type="text/javascript">
	$(window).load(function() {
		$('.button').cena();
	});
</script>
```

<br>
For the Konami Code version
```html
<script type="text/javascript">
	$(window).load(function() {
		$('.button').cena({
			'enterOn': 'konami-code'
		});
	});
</script>
```

<br> 
For the Timer version
```html
<script type="text/javascript">
	$(window).load(function() {
		$('.button').cena({
			'enterOn': 'timer',
			'delayTime': 2000
		});
	});
</script>
```

<br>
Enjoy!



