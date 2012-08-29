#Detail Layouts: Renderer
The `renderer` property is used a "presenter" it takes the existing value and changes the rendered format without modifying the value underneath. Some examples are phone numbers, addresses, dates, clickable URLs, boolean to yes/no text, and others. 


##Exercise 1: Renderer Presets
For this exercise we will use the pre-built `link` format found in the SDK.

###Work it!

1\. Open `argos-template/src/Detail/Account/Detail.js` (if you have done the Create a Simple... series) and go down to the `createLayout()` function and to the WebAddress row object.

2\. Add the new key `renderer` and set to `format.link`:

```javascript
              children: [{
                  name: 'WebAddress',
                  property: 'WebAddress',
                  label: this.webAddressText,
                  renderer: format.link
              },{
```

3\. Since we are using the Format module found in the SDK add that as a dependency and reference:

```javascript
define('Mobile/Template/Views/Account/Detail', [
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/string',
    'Sage/Platform/Mobile/Format',
    'Sage/Platform/Mobile/Detail'
], function(
    declare,
    lang,
    string,
    format,
    Detail
) {
```

4\. Save and run your app and go to an Account Detail entry. The WebAddress row should now be a clickable link that will open a new page (or tab) to the corresponding URL.


##Exercise 2: Renderer Function
Renderer may also be set a function of your view, let's take the Industry row and have a custom message when a name is matched. 

1\. In the Industry row object add the key `renderer` set to `this.formatIndustry`:

```javascript
              },{
                  name: 'Industry',
                  property: 'Industry',
                  label: this.industryText,
                  renderer: this.formatIndustry
              },{
```

2\. Create the function `formatIndustry()` in your view and it is being passed a single parameter: `value`

```javascript
formatIndustry: function(value) {
   // needs to return a formatted value
},
```

3\. Add a new property to your value (up near your localizable strings) named: industryDescriptionText and have it be a object with a key of `Communications` and value of `Communications including phone, fax and e-mail`:

```javascript
industryDescriptionText: {
    'Communications': 'Communications including phone, fax and e-mail'
},
```

4\. Back in the formatIndustry have it check for the value within our industryDescription object and send the description value back, if it is not there send back just the industry value:

```javascript
formatIndustry: function(value) {
   return this.industryDescriptionText[value] || value;
},
```

5\. Save and run your app and view the first account entry "Abbott Ltd." which happens to have the Communications industry. You should now see the custom message instead of the value. For other entries it should still show the industry.
