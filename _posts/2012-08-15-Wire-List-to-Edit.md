---
layout: guide
title: Wire-List-to-Edit
category: template-guide
tags: 
---
#Wiring List to Edit View
Once you have an Edit View defined for an entity you will need to go back to the Detail and List view to point them in the right direction. This topic covers going from List to Edit.

###Work it!
1\. Open `argos-template/src/Views/Account/List.js` (if you are following the Create a Simple... series) and go to the `insertView` property and change it to the Edit id `account_edit`

2\. Save, if you open and test your application everything now works as expected but if you want to see how it is all hooked up, continue reading this exercise.

3\. Since the Insert button is a toolbar item we know it should be defined in the `createToolLayout` function. Open up `argos-sdk/src/List.js` and go to it.

4\. Only one item is defined and its action is `navigateToInsertView`:

<pre class="brush: js">
            'tbar': [{
                id: 'new',
                action: 'navigateToInsertView',
                security: App.getViewSecurity(this.insertView, 'insert')
            }]
</pre>

5\. Scroll down to the `navigateToInsertView()` function and we have this:

<pre class="brush: js">
        navigateToInsertView: function(el) {
            var view = App.getView(this.insertView || this.editView);
            if (view)
            {
                view.show({
                    returnTo: this.id,
                    insert: true
                });
            }
        },
</pre>

6\. The important part here is that it pulls the `insertView` property we fixed and that in the navigation options it is passing `{insert: true}`. To tell an Edit view that we are inserting a new entity we must pass that in the navigation options, many of the Edit view functions check against that value for determining to do a "INSERT" or "UPDATE" command, to request a $template for default values, if values are "dirty" by default and others.

7\. When the user presses the Save toolbar item in the Edit View it will perform an INSERT, collecting all the values and sending them as a new entity. On success a global event is published and the List view will be refreshed when returning to it.