---
layout: guide
title: Wire-Detail-to-Edit
category: template-guide
tags: 
---
#Wiring Detail to Edit View
Once you have an Edit View defined for an entity you will need to go back to the Detail and List view to point them in the right direction. This topic covers going from Detail to Edit

###Work it!
1\. Open `argos-template/src/Views/Account/Detail.js` (if you are following the Create a Simple... series) and go to the `editView` property and change it to the Edit id `account_edit`

2\. Save, if you open and test your application everything now works as expected but if you want to see how it is all hooked up, continue reading this exercise.

3\. Since the Edit button is a toolbar item we know it should be defined in the `createToolLayout` function. Open up `argos-sdk/src/Detail.js` and go to it.

4\. Only one item is defined and its action is `navigateToEditView`:

<pre class="brush: js">
       'tbar': [{
             id: 'edit',
             action: 'navigateToEditView',
             security: App.getViewSecurity(this.editView, 'update')
        }]
</pre>

5\. Scroll down to the `navigateToEditView()` function and we have this:

<pre class="brush: js">
        navigateToEditView: function(el) {
            var view = App.getView(this.editView);
            if (view)
                view.show({entry: this.entry});
        },
</pre>

6\. The important part here is that it pulls the `editView` property we fixed earlier and that in the navigation options it is passing `{entry: this.entry}`. To pass data to an Edit view, use the `entry` keyword and pass the entire entry (in Detail views it is stored as Detail.entry).

7\. When the user presses the Save toolbar item it will perform an UPDATE to the passed entry, it detects this by checking if we passed `{insert: true}` in the nav options, since we did not pass that, it performs the UPDATE. If we did pass that in (like in the Wire List to Edit) it will do an INSERT post.