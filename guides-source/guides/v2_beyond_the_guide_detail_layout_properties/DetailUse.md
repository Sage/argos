#Detail Layout: Use
While `template` is useful for modifying the value, `use` modifies the markup of the entire row. It gets passed the row object after all the other modifications have taken place.

##Exercise 1: Use
First we'll take a look at the standard template for rows and then add a new template that includes an icon before label.

###Work it!

1\. Open `argos-sdk/src/Detail.js` and find the `propertyTemplate` property and you will see this:

```javascript
        propertyTemplate: new Simplate([
            '<div class="row {%= $.cls %}" data-property="{%= $.property || $.name %}">',
            '<label>{%: $.label %}</label>',
            '<span>{%= $.value %}</span>',
            '</div>'
        ]),
```

2\. As you can see the default one already uses the basic properties directly but just so you aware any property defined on your row object is available via `$` and the detail view via `$$`. 

3\. Now go back to your `argos-template/src/Views/Account/Detail.js` and under `createLayout()` find the Industry row we changed earlier to include a message. 

4\. Add the key `use` and set it to `this.rowWithIconTemplate` as perhaps the message may get a longer and need another row or two for space:

```javascript
              },{
                  name: 'Industry',
                  property: 'Industry',
                  label: this.industryText,
                  renderer: this.formatIndustry,
                  use: this.rowWithIconTemplate
              },{
```

5\. On the view itself define a new property (up near the messages for example) named `messageTemplate` and have it define a new Simplate with the following:

```javascript
messageTemplate: new Simplate([
    '<div class="row {%= $.cls %}" data-property="{%= $.property || $.name %}">',
        '<img style="position:absolute" src="{%= $$.industryIcons[$.Industry] || $$.industryIcons["default"] %}">',
        '<label">{%: $.label %}</label>',
        '<span>{%= $.value %}</span>',
    '</div>'
]),
```

6\. Then define on the view itself the `industryIcons` object that maps the industry values to their icons;

```
industryIcons: {
   'Communications': 'content/images/icons/Call_24x24.png',
   'default': 'content/images/icons/Company_24.png'
},
```

7\. To walk through all that we defined: 

   a\) When the detail view is passed a new key, requests data and starts to process the results

   b\) The layout gets recreated and loops through the entire `this.layout` array and builds each row

   c\) When it gets to Industry it see's we defined a `use` template and calls it passing the row object itself and the view for scope

   d\) In the Simplate we have it using pretty much the same markup except for an `<img>` element where the source is set using the object map `industryIcons`

   e\) The resulting HTML is then added to the DOM for the Industry row and it continues on.

8\. Save and run your app you should now see a little icon to the left of label for industry rows. As you can see you can easily override the default `propertyTemplate` via the `use` property.