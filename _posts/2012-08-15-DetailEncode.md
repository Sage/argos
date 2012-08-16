---
layout: guide
title: DetailEncode
category: template-guide
tags: 
---
#Detail Layout: Encode
Encode is a quick flag that runs the value through `argos-sdk/src/Format`'s encode function that encodes `&><"` to their HTML entities. By default it is `true` - all values get encoded, however if you are using a `renderer` or `template` then the default is `false` and must be explicitly set to `true` in the row object to be encoded.


##Exercise 1: Encode
This exercise will turn encoding off so you can see the effects.

###Work it!
1\. Open your app and go to the Account List view. Do a search for "space" and select `Spacetek & Correct`.

2\. In the Detail view notice that the AccountName row correctly shows `Spacetek & Correct`.

3\. Now open up your `argos-template/src/Views/Account/Detail.js` and down to `createLayout()` and the AccountName row.

4\. Add the key `encode` and set it to false:

<pre class="brush: js">
              children: [{
                  name: 'AccountName',
                  property: 'AccountName',
                  label: this.accountNameText,
                  encode: false
              },{
</pre>

5\. Save and run (doing a search again) and go to the Detail view. Now the AccountName row shows `Spacetek &amp; Correct` (note: most modern browsers will auto-escape for you).

6\. Go back and remove the `encode: false` - this was just to demonstrate - and save.