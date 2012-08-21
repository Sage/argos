---
layout: guide
title: Guide-Detail-Layout-Renderer-Template
category: template-guide
tags: 
---
#Detail Layouts: Renderer and Template
Each row in a detail layout has the `renderer` property available which is used a "presenter". It takes the existing value and changes the rendered format without modifying the value underneath. Some examples are addresses, dates, clickable URLs, boolean to yes/no text, and others. 

Currently on our Detail View we have: an unclickable url and a name as `[Object object]`.

##Step 1: URLs
Argos-SDK provides a number of built-in formatters available via `Sage.Platform.Mobile.Format` which has a `link` formatter.


1\. Open `argos-template/src/Detail/Account/Detail.js`.

2\. Since we are using the Format module found in the SDK add that as a dependency and reference:

<pre class="brush: js">
define('Mobile/Template/Views/Account/Detail', [
    'dojo/_base/declare',
    'dojo/string',
    'Sage/Platform/Mobile/Format',
    'Sage/Platform/Mobile/Detail'
], function(
    declare,
    string,
    format,
    Detail
) {
</pre>

3\. Go down to the `createLayout()` function and to the WebAddress row object.

4\. Add the new key `renderer` and set to `format.link`:

<pre class="brush: js">
              children: [{
                  name: 'WebAddress',
                  property: 'WebAddress',
                  label: this.webAddressText,
                  renderer: format.link
              },{
</pre>

5\. Save and run your app and go to an Account Detail entry. The web address is now underlined and upon clicking opens the URL.

![Detail Link](http://sage.github.com/argos/images/template-guide/detail-link.png)

To read more about the `renderer` property, please see [Renderer](Renderer.html).

##Step 2: Objects
The reason the row shows `[Object object]` is because the value for that SData property is actually a JSON object. In this case it's returning a 1:1 relation with an `owner` entity.

To show the properties that we want we could either use `renderer` and provide a function that handles the object or we could use: 

`template` - passes the current value as `$` to the defined Simplate ([Appendix: Simplate](Simplate.html)) and the result is displayed in the row.

1\. Back to `argos-template/src/Detail/Account/Detail.js` and down to the `createLayout()` function.

2\. For the `AccountManager` row add the key `tpl` (or `template`) with the value `this.userInfoNameTemplate`:

<pre class="brush: js">
            },{
                name: 'AccountManager',
                property: 'AccountManager.UserInfo',
                label: this.accountManagerText,
                tpl: this.userInfoNameTemplate
            }]
</pre>

3\. Now near the top of your code, near `id` and the localizations, add the `userInfoNameTemplate` as follows:

<pre class="brush: js">
userInfoNameTemplate: new Simplate([
    '\{\% if ($) { \%\}',
        '\{\% if ($.LastName && $.FirstName) { \%\}',
            '\{\%: $.LastName \%\}, \{\%= $.FirstName\%\}',
        '\{\% } else { \%\}',
            '\{\%: $.LastName ? $.LastName : $.FirstName \%\}',
        '\{\% } \%\}',
    '\{\% } \%\}'
]),
</pre>

4\. To go over what is happening: it uses two Simplate techniques: `\{\% executable code \%\}` and `\{\%: encoded text \%\}`. To write it out the logic: if we have an object and the object has a LastName and FirstName property join with a comma, else put whichever one we do have. In this context `$` is the object from SData and `$$` is the Detail View instance.

5\. Save and open your app to any Detail view.

![Detail Template](http://sage.github.com/argos/images/template-guide/detail-template.png)

To read more about the `template`/`tpl` property, please see [Template](https://github.com/Sage/argos-template/wiki/DetailTemplate.html).

###Next Steps
Now that the Detail View is in pretty good shape we move on to the dual-purpse Edit View for creating and updating Accounts - [Creating an Edit View](Guide-Create-a-Simple-Edit-View.html).