---
layout: guide
title: Guide-Create-a-Simple-List-View
category: template-guide
tags: 
---
#Create a Simple List View

##List Views
List Views are all about presenting large amounts of data in an easy to read list format. Generally each list item will take you to a Detail View for that item.

When making any new Views you need to do two things:

1\. Code the view; and

2\. Register the view in `ApplicationModule.js`.

##Step 1: Coding a List View
List Views are designed to display a collection or list of a single entity. Some examples include: employees, artists, bug reports or sales orders.

For our entity choice will be making a List (and Detail, Edit) View of the entity "Account" which uses the SData endpoint "accounts".

1\. Create a new folder in `argos-template\src\Views` named "Account".

2\. Create an empty file named `List.js` into `argos-template\src\Views\Account\` and open it up.

3\. First we setup the declare and define according the AMD standard. For more information see [Appendix: AMD](AMD---Define-and-Declare.html).

<pre class="brush: js">
define('Mobile/Template/Views/Account/List', [
    'dojo/_base/declare',
    'dojo/string',
    'Sage/Platform/Mobile/List'
], function(
    declare,
    string,
    List
) {
    return declare('Mobile.Template.Views.Account.List', [List], {
    });
});
</pre>

4\. All views have a `titleText` and `id` property so let's define those first. The id standard for list is "entity_list" - so ours is `account_list`.

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.List', [List], {
        // Localization
        titleText: 'Account List',
        
        // View Properties
        id: 'account_list'
    });
</pre>

5\. Add the `icon` property and it set to `'content/images/icons/Company_24.png'`. The `icon` will be used by our `Home` View.

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.List', [List], {
        // Localization
        titleText: 'Account List',
        
        // View Properties
        id: 'account_list',
        icon: 'content/images/icons/Company_24.png'
    });
</pre>

6\. Now for the data. The List view was several properties that control what data is retrieved: resourceKind, querySelect and queryOrderBy.

* resourceKind to `'accounts'`. Entity/endpoint name.
* querySelect to an array of strings for: `AccountName`, `AccountManager/UserInfo/UserName`. Fields of the entity that will be returned.
* queryOrderBy to `'AccountName asc'`. Server-side ordering.

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.List', [List], {
        // Localization
        titleText: 'Account List',
        
        // View Properties
        id: 'account_list',
        icon: 'content/images/icons/Company_24.png',
        resourceKind: 'accounts',
        querySelect: [
            'AccountName',
            'AccountManager/UserInfo/Username'
        ],
        queryOrderBy: 'AccountName asc'
    });
</pre>

7\. Every row is constructed by a List Views `itemTemplate` property. All templates use Simplate, which is a templating engine where the item entry and the list view is passed as variables: `$` and `$$`. See [Appendix: Simplate](Simplate.html) for more information on the template engine.

8\. Add the following itemTemplate to your view:

<pre class="brush: js">
        // Templates
        itemTemplate: new Simplate([
            '<h3>\{\%: $.AccountName \%\}</h3>',
            '<h4>\{\%: $.AccountManager && $.AccountManager.UserInfo ? $.AccountManager.UserInfo.UserName : "" \%\}</h4>'
        ])
</pre>

11\. Save your List view file, before it will be loaded in the app we need to register it in ApplicationModule. 

##Step 2: Register the View
Before any view or module is loaded into the application (via AMD) it needs to be:

* added as a dependency;
* verify the reference is passed in; and
* registered via the `ApplicationModule.registerView()` function.

1\. Open `argos-template/src/ApplicationModule.js` and edit the define function to pull in our new List view:

<pre class="brush: js">
define('Mobile/Template/ApplicationModule', [
    /* trimmed for example */
    'Mobile/Template/Views/Account/List',
], function(
    /* trimmed for example */
    AccountList
) {
</pre>

2\. Go to the `loadViews()` function, as you can see it is already registering the Home page. Following the same setup go ahead and register your list view using the referenced variable:

<pre class="brush: js">
            this.registerView(new AccountList());
</pre>

3\. Save the file.

Your view is now defined and registered and will be created, initialized and added to the DOM when your application starts.

##Step 3: Quick Peek
If you open `index-dev.html` right now you will see the blank Home view and no way to get to the List view. However, we can take a quick peek and directly go to the view - this trick is useful for developing and debugging views.

1\. Open `index-dev.html`.

2\. Open your javascript console. See [Browsers Help](Browser-Setup.html) for the shortcut key for your chosen browser.

3\. Type in: `App.getView('account_list').show()`

4\. Press enter.

![List Trick](http://sage.github.com/argos/images/template-guide/list-trick.png)

Without going into too much detail the `App` namespace is glue that holds everything together and the line above is used to show any view.

Features seen in the Quick Peek: 

* View transition effect (slide) into place;
* Title bar with Back, Home and Add buttons;
* Search widget;
* Automatic paging (scroll down in the list to see Retrieve More);
* Navigation context and history (note the URL);
* Offline cache (inspect your local storage);
* Footer bar with Top and Copyright text; and
* Retrieved and rendered out 20 acccounts.

The above is the default behaviour - every piece is customizable so that you can tailor it to your business needs.

###Next Steps
Next we will [Add a List View to the Home Page](Guide-Adding-a-List-View-to-Home.html).