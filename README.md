I needed to test something against cookies, and I thought an easy way to test it was to have a simple interface.

```sh
key=value;max-age=31536000
key=value;expires=Fri, 31 Jan 2020 16:00:00 GMT
```

Generate Date (js):
```js
new Date(2020, 1).toUTCString();
```

# Notes
- https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
- https://www.w3schools.com/js/js_cookies.asp
