---
layout: guide
title: Defining-Hashtags
category: template-guide
tags: 
---
#Defining Hashtags
Hashtags are like a quick filter for searches and in the case of Argos, used to insert predefined Where expressions. For example: `#open` may insert `'Status eq "open"`, any other part of the search will go through the normal search formatting.

##Exercise 1: Adding a Hashtag
Here we will be adding a simple hash tag to our Account List view (from the Create a Simple... series) for finding small businesses with less than 100 employees using `#100`.

###Work it!
1\. Open `argos-template/src/Views/Account/List.js` and add a new property `hashTagQueries` and set it to an object with a key of `100` with value `'Employees lt 100'`:

<pre class="brush: js">
hashTagQueries: {
   '100': 'Employees lt 100'
},
</pre>

2\. Save and open your app, but before going to the List open your network tools in your browser. Then browse to List and in the search bar type `#100` and hit search.

3\. You should see a new set of results and in your network tab a GET request with a url containing `&where=(Employees%20lt%20100)`.

4\. To continue adding hashtags just keep adding more key value pairs to the `hashTagQueries` object for that view.

##Exercise 2: Localizing Hashes
Hash tags a special case for localization as we need to create a map for the localization version to the English version that is set to the actual where expression. While that sounds a bit complicated it is really easy to implement.

###Work it!
1\. In the `List.js` we just added the `#100` tag, add a new property named `hashTagQueriesText` and set it as an object with a key `'100'` and value `'100'`:

<pre class="brush: js">
hashTagQueriesText: {
   '100': '100'
},
</pre>

2\. As mentioned in the Localization topic any variable ending in `Text` gets picked up, so this will too. The localization will override only the value leaving the key intact.

3\. Let's say we wanted to add localization support for the Romans, open up `argos-template/localization/template/en.js`. It should be empty except for the `define` wrapper.

4\. Within call the `localize` function passing the string `'Mobile.Template.Views.Account.List'` as the first parameter and as a second parameter an empty object:

<pre class="brush: js">
define('localization/Template/en', ['localization/en', 'Mobile/Template/ApplicationModule'], function() {
   localize("Mobile.Template.Views.Account.List", {
   });
});

</pre>

5\. In the empty object we can pass overrides that get "deeply" mixed in. Meaning if our original `hashTagQueriesText` had `10` key values and we only called localize with `5` key values, it would only replace the `5` we passed in and not replace the entire object.

6\. Add the `hashTagQueriesText` with a key of `100` (the key matches the key in `hashTagQueries`) and a value of `'C'` (100 in Roman Numerals):

<pre class="brush: js">
    localize("Mobile.Template.Views.Account.List", {
        hashTagQueriesText: {
            '100': 'C'
        }
    });

</pre>

7\. Save and run. If you type in `#C` into the search bar you will get the same filtered results as from Exercise 1. This happens because the hash engine matches up the keys of the two objects to the two values.