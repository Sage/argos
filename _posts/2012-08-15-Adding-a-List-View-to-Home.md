---
layout: guide
title: Adding-a-List-View-to-Home
category: template-guide
tags: 
---
#Adding a List view to the Home Page
With a [List view defined](Create-a-Simple-List-View.html) lets add a link to it on the Home page.

###Work it!
1\. Open `argos-template/src/Application.js` and find the the `getDefaultViews` function. This function returns a list of view ids that should be on the Home screen by default. Add your new view id to the list:

<pre class="brush: js">
        getDefaultViews: function() {
            return [
                'account_list'
            ];
        },
</pre>

2\. Save and open `argos-template/index-dev.html`.

###Results
If you are following this from Creating a Simple List View your application now has a working Home page with a link to Accounts. Clicking that row will take you to your Account List view where it will automatically construct an SData request, parse and present the results using `itemTemplate` and use a simple paging mechanism.

