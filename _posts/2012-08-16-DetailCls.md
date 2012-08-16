---
layout: guide
title: DetailCls
category: template-guide
tags: 
---
#Detail Layout: Cls
`Cls` is a quick way to add a custom class to the container div of the row markup. 

##Exercise 1: Cls
This can be used for many purposes but the only one provided out of the box is `content-loading` and we will see that in action.

###Work it!
1\. Assuming the [value](Value.html) and [onCreate](onCreate.html) exercises are finished, open your `Account/Detail.js` and down to `createLayout` and the `Address` row object we added with the placeholder that gets replaced.

2\. Add the key `cls` and set to `'content-loading'`:

<pre class="brush: js">
{
    name: 'Address',
    property: 'Address/$key',
    label: this.addressText,
    value: this.loadingText,
    onCreate: this.requestAddress,
    cls: 'content-loading'
}
</pre>

3\. If you want to view the corresponding CSS open `argos-sdk/content/css/base.css` and you'll find the following definition:

</pre>css
.content-loading > span
{
    padding-left: 32px;
    font-size: 0.7em;
    background: url('../images/content-loading-light-green.gif') no-repeat scroll 12px 50%;
}
</pre>

4\. Save, and open a detail view. You'll now see a loading indicator in the field itself next to the `loading...` text. Yet when the data is loaded the text changes but the loading indicator is still there. To fix that we edit the success handler to remove the class:

<pre class="brush: js">
onAddressRequestSuccess: function(row, node, entry, response) {
   var address = response['FullAddress'];
   query('span', node).text(address);
   domClass.remove(node, 'content-loading');
},
</pre>

5\. Since we now need the dojo dom-class module go ahead and add that as a dependency/reference:

<pre class="brush: js">
define('Mobile/Template/Views/Account/Detail', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-class',
    'dojo/query',
    'dojo/string',
    'Sage/Platform/Mobile/Detail'
], function(
    declare,
    lang,
    domClass,
    query,
    string,
    Detail
) {
</pre>

6\. Save and run - now when you go to a Detail View you get a loading indicator while the field request is loading and on success it puts the new text and removes the indicator.
