jquery-toattr
=============

jquery method that writes various properties like data, selectedIndex,
to their DOM counterpart.

It is useful for serializing a document now and resume operations later,
keeping the same state.


Usage
-----

```js
console.log($('<div/>').data('name', 'toto').toAttr().get(0).outerHTML);

```

Will print
```html
<div data-name="toto"></div>
```

Also a select with a selectedIndex=1 property:

```html
<select>
  <option value="1"/>
  <option value="2"/>
  <option value="3"/>
</select>
```

will become

```html
<select>
  <option value="1"/>
  <option value="2" selected="selected"/>
  <option value="3"/>
</select>
```
