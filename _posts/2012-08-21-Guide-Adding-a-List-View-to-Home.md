---
layout: guide
title: Guide-Adding-a-List-View-to-Home
category: template-guide
tags: 
---
#Adding a List View to the Home Page
With a [List view defined](Guide-Create-a-Simple-List-View.html) lets add a link to it on the Home page.

1\. Open `argos-template/src/Application.js` and find the the `getDefaultViews` function. This function returns a list of view ids that should be on the Home screen by default. Add your new view id to the list:

<pre class="brush: js">
        getDefaultViews: function() {
            return [
                'account_list'
            ];
        },
</pre>

2\. Save and open `argos-template/index-dev.html`.

![List on Home View](http://sage.github.com/argos/images/template-guide/list-home.png)

The icon displayed came from the `icon` property defined on the list view.

Clicking the row will take you to your Account List view where it will automatically construct an SData request, parse and present the results using `itemTemplate` and use a simple paging mechanism.

###Next Steps
We now have a way to get to a list of accounts, but we can't really see much detail about each one. Next we will [Create a Detail View](Guide-Create-a-Simple-Detail-View.html) for Account, this creates a single page that gets reset for each Account viewed.




