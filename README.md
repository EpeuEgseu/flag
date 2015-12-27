# [Flag](http://flag.hax0r.info) <sup class="is_v">[0.1](http://flag.hax0r.info)<sup>
**flag is Javascript library for non-blocking notifications. this plugin don't need to jquery library** :airplane:

Refer to the [Flag website](http://flag.hax0r.info) for examples. check it.

![simple flag pic](https://cloud.githubusercontent.com/assets/10232178/12007458/b35b4552-ac48-11e5-9cc7-216e447c9490.gif)

# Current Version
0.1

# Features
* fast
* support ie7+
* simple design
* many options and methods support
* Lightweight, no dependencies

# How to use
If you want to use __*flag*__, you need to load javascript & css file.
```html
<link rel="stylesheet" href="_flag.css">
<script type="text/javascript" src="_flag.js"></script>
```
Before using this function, you need to set position. If you don't initialize position, then flags are located in top-right of your screen.
```js
flag.init(); // default position is top-right.
flag.init('right'); // set flag position right.
```
After you set position, you can make __*flag*__ by using under 4 methods with *message*, *title*, *size* parameter.
```js
flag.info('Info message.', 'info', 'middle'); // info type
flag.success('Success message.', 'success', 'big'); // success type
flag.warning('Warning message.', 'warning', 'small'); // warning type
flag.error('Error message.', 'error'); // error type
```
__*flag*__ will remove in 5 seconds. If you want to remove it immediately, just click __*flag*__ which you want to remove.

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

# License
You are free to use this in any way you want, in case you find this useful or working for you but you must keep the copyright notice and license.
The MIT License (MIT)

# Contact
if you have something, please contact me
* Author : Hax0r('우영준')&humit0('장준호')
* mail : a at hax0r.info or jhjang1005@naver.com
* Issue Reports : https://github.com/webhacking/flag/issues
