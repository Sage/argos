---
layout: guide
title: Views Toolbar Exercises
category: template-guide
tags: toolbar template-guide view toolbar-item button tool-layout
---
Open `\mobile\products\argos-template\index-dev.html` to see the `argos-template` product. It takes you to the Home View with a single link to Accounts. The title currently reads `Home` and has no toolbar items whereas the footer has some copyright text, help link and top button.

##Exercise 1: Titlebar Text
All Views by default have a Title bar defined and the text shown is controlled with the Views `titleText` property. This exercise will show how by simply changing the property the bar is changed.

###Work it!
1. All Views are within the folder: `\mobile\products\argos-template\src\Views`. Open the `Home.js` View for editing.
1. Find the `titleText` property and change it to read `Hello World!`:

    <pre class="brush: js">
//Localization
titleText: 'Hello World!',
    </pre>

1. Save and refresh your browser.

###Result
Upon refreshing you should the title text at the top change to Hello World!, this property provides the most basic way of setting the title.

##Exercise 2: Adding a Toolbar Item
It's not much of a toolbar without a toolbar item!

###Work it!
1. Go back to within `Home.js` and locate the `createToolLayout` function
1. It currently is defining `this.tools` to be an object with the `tbar` key to an empty array
1. The key `tbar` refers to the title bar and is explicitly setting it to have no items, but let's add a new object in that array
1. Give that object the following properties: id, icon, title and action. Set to `myButton`, `content/images/icons/add_24.png`, `Hello` and `onHello` respectfully:

    <pre class="brush: js">
createToolLayout: function() {
    return this.tools || (this.tools = {
        tbar: [{
            id: 'myButton',
            icon: 'content/images/icons/add_24.png',
            title: 'Hello',
            action: 'onHello'
        }]
    });
},
    </pre>

1. Add a new function named `onHello` and have it show an alert box with a message:

    <pre class="brush: js">
onHello: function() {
    alert('Hello Dave!');
},
    </pre>

1. Save and reload your app

###Result
You should now have a big green plus sign on the right hand side of your Titlebar, and on click it should run the `onHello` function. To go a bit deeper into each property:

<pre class="brush: js">
id: '', // a unique id for this item, will be used for referencing
icon: '', // path to image to display
title: '', // use for ARIA conformance
action: '', // string of the function name of the current view to run on click
fn: function, // instead of action you can point to a function to run directly, or define inline
scope: object // the scope to call the fn function if defined, defaults to current view
</pre>

##Exercise 3: Toolbar Item Sided-ness
As noted in Exercise 2, the new item automatically went to the right side -- what if we wanted it to be on the left?

###Work it!
1. Go back to your custom button and add a new property key `side` and set it to `left`:

    <pre class="brush: js">
tbar: [{
   id: 'myButton',
   icon: 'content/images/icons/add_24.png',
   title: 'Hello',
   action: 'onHello',
   side: 'left'
}]
    </pre>

1. Save and reload

###Result
Since the Titlebar supports the `side` property it added the appropriate CSS class to move the toolbar item visually.

##Exercise 4: Custom Markup
Since the Titlebar only supports icon-only items out the box you may wish to pass in your own markup to use. Note that in order for the toolbar item to function there needs to be a `button` element with `data-action="invokeTool"` and `data-tool="\{\%= $.id \%\}"`.

###Work it!

1. In `Home.js` add a new property to the view itself called `textOnlyToolTemplate` and set it as:

<pre class="brush: js">
textOnlyToolTemplate: new Simplate([
    '<button class="button toolButton toolButton-\{\%= $.side || "right" \%\} \{\%= ($$.enabled) ? "" : "toolButton-disabled" \%\} \{\%= $.cls \%\}"',
            'data-action="invokeTool" data-tool="\{\%= $.id \%\}"',
            'aria-label="\{\%: $.title || $.id \%\}">',
        '<span>\{\%: $.text \%\}</span>',
    '</button>'
]),
</pre>

1. Then add the `template` property to your custom tool item and set it to `this.textOnlyToolTemplate`
1. Also add the `text` property and set it to `Click`:

    <pre class="brush: js">
tbar: [{
   id: 'myButton',
   icon: 'content/images/icons/add_24.png',
   title: 'Hello',
   action: 'onHello',
   side: 'left',
   template: this.textOnlyToolTemplate,
   text: 'Click'
}]
    </pre>

1. Save and reload.

###Result
The green plus should have disappeared and been replaced with the word `Click`. It should still show up on the left side and function as normal. The `template` property overrides the default Simplate used to define the tool item markup.

##Exercise 5: Footer text
All the previous exercises have focused on the title bar, which derives from the `MainToolbar` class in `argos-template/src/Views/MainToolbar.js` (which in turn inherits MainToolbar from argos-sdk). The bottom footer bar on the other hand is defined in `argos-template/src/Views/FooterToolbar` and has slightly different properties - namely `copyrightText` and already supporting text in the items.

First we will change the copyright text:

###Work it!
1. Open `argos-template/src/Views/FooterToolbar.js` and find the property `copyrightText`.
1. Change it to read `Free for every citizen of humankind`

    <pre class="brush: js">
// Localization
copyrightText: 'Free for every citizen of humankind',
    </pre>

1. Save and reload

###Result
The text in the footer changed to our new string, notice however that the Views have no ties to the `copyrightText` as it is assumed the footer to be fairly static in regards to copyright.

##Exercise 6: Footer items
The footer tool items, however, are customized just like the Title bar items are. Let's move our custom button down to the right side of the footer bar.

1. Open `Home.js` and go to the `createToolLayout` function
1. Set a new key to the `this.tools` object named `fbar` and set it to an empty array:

    <pre class="brush: js">
return this.tools || (this.tools = {
    tbar: [/*snipped*/],
    fbar: []
});
    </pre>

1. Cut your tool item out of the `tbar` array into the `fbar` array
1. Delete the `template` and `text` properties
1. Change the `side` property to `right`

    <pre class="brush: js">
return this.tools || (this.tools = {
    tbar: [],
    fbar: [{
        id: 'myButton',
        icon: 'content/images/icons/add_24.png',
        title: 'Hello',
        action: 'onHello',
        side: 'right'
    }]
});
    </pre>

1. Save and reload

###Result
Your tool item should now show up on the right side of the footer bar, with icon and text displayed. Notice that the footerbar default tool template uses the `title` property for setting text.