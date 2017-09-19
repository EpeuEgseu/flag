[![Standard - JavaScript Style Guide](https://img.shields.io/badge/CodeStyle-Standard-brightgreen.svg)](http://standardjs.com)
[![Current flag library version](https://img.shields.io/badge/CurrentVersion-1.0.1-red.svg)](http://standardjs.com)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/Bra1nSt0rm1ng/flag.svg)](http://isitmaintained.com/project/Bra1nSt0rm1ng/flag "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/Bra1nSt0rm1ng/flag.svg)](http://isitmaintained.com/project/Bra1nSt0rm1ng/flag "Percentage of issues still open")
-----------


# [Flag](https://bra1nst0rm1ng.github.com/flag)
**Flag is Javascript library for non-blocking notifications. this library don't need to any libraries** :airplane:

Refer to the [Flag website](http://flag.hax0r.info) for examples. check it.

# Features
* Fast
* Support ie7+
* Simple design
* Many options and methods support
* Lightweight, No dependencies

# How to use
If you want to use __*flag*__, you need to load our files.

```html
<link rel="stylesheet" href="flag.css">
<script type="text/javascript" src="flag.js"></script>
```
Before using this function, you need to set position. If you don't initialize position, then flags are located in top-right of your screen.
```js
flag.init(); // default position is top-right.
flag.init('right'); // set flag position right.
```
If you want to change position after you call `flag.init()`, use `flag.setPos()` function.
```js
flag.setPos('center'); // set flag position center.
```
After you set position, you can make __*flag*__ by using under 4 methods with *message*, *title*, *size* parameter.
```js
flag.info('Info message.', 'info', 'middle'); // info type
flag.success('Success message.', 'success', 'big'); // success type
flag.warning('Warning message.', 'warning', 'small'); // warning type
flag.error('Error message.', 'error'); // error type
```
__*flag*__ will remove in 5 seconds. If you want to remove it immediately, just click __*flag*__ which you want to remove. You can remove all __*flag*__ by calling `flag.clean()`.
```js
flag.clean(); // clear all flags.
```

# Options
* Choose the flag position & size.
* Browse website without annoying alert box and sound.
* Know message type immediately by watching flag color.

# Callbacks& Methods
## Initialize
```js
// flag.init({position});
flag.init(); // default position is top-right.
flag.init('top-left');
```
We provide 5 positions(`top-left`, `top-right`, `left`, `right`, `center`) to initialize. If you don't pass any *position* parameter on this function, then it works like `top-right` option.

## Change flag position
```js
//flag.setPos({position});
flag.setPos('center');
```
We provide 5 positions(`top-left`, `top-right`, `left`, `right`, `center`) to set flag position.

## Make flag
There are 4 types(`info`, `success`, `warning`, `error`) to make flag. You can pass 3 parameters at most, and ignore `title`, or `size` parameters. `size` parameter can be 3 options(`big`, `middle`, `small`) and default value is `middle`.
### Make info flag
```js
//flag.info({message}, {title}, {size});
flag.info('Info message.', 'info', 'middle');
flag.info('Info message.', 'info');
flag.info('Info message.');
```
If you ignore `title`, then `title` would be set '*Info*'.

### Make success flag
```js
//flag.success({message}, {title}, {size});
flag.success('Success message.', 'success', 'big');
flag.success('Success message.', 'success');
flag.success('Success message.');
```
If you ignore `title`, then `title` would be set '*Success*'.

### Make warning flag
```js
//flag.warning({message}, {title}, {size});
flag.warning('Warning message.', 'warn', 'small');
flag.warning('Warning message.', 'warn');
flag.warning('Warning message.');
```
If you ignore `title`, then `title` would be set '*Warning*'.

### Make error flag
```js
//flag.error({message}, {title}, {size});
flag.error('Error message.', 'error', 'middle');
flag.error('Error message.', 'error');
flag.error('Error message.');
```
If you ignore `title`, then `title` would be set '*Error*'.

## Remove all flags
```js
flag.clean();
```
You can remove all flags in your website.

# License
You are free to use this in any way you want, in case you find this useful or working for you but you must keep the copyright notice and license.
The MIT License (MIT)

# Contact
If you have something, please contact me

* Author : [우영준](https://github.com/webhacking), [장준호](https://github.com/humit0)
* Mail : a at hax0r.info or jhjang1005@naver.com
* Issue Reports : https://github.com/webhacking/flag/issues
