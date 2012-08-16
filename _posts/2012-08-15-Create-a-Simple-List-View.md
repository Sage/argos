---
layout: guide
title: Create-a-Simple-List-View
category: template-guide
tags: 
---
#List View
Since List Views are all about presenting large amounts of data make sure you've Configured SData before starting.

##Exercise 1: New List View
For our entity choice will be making a List (and Detail, Edit) View of the entity "Account" which uses the endpoint "accounts".

###Work it!
1\. Create a new folder in `argos-template\src\Views` named "Account".

2\. Create an empty file named `List.js` into `argos-template\src\Views\Account\` and open it up.

3\. First we setup the declare and define according the AMD standard. For more information see Appendix: AMD.

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

4\. As mentioned in the Overview all views have a `titleText` and `id` property so let's define those first. The id standard for list is "entity_list".

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.List', [List], {
        // Localization
        titleText: 'Account List',
        
        // View Properties
        id: 'account_list'
    });
</pre>

5\. Most List views will be linked to, typically on Home page so it is best to define an icon path for a helper image for those links. Add the `icon` property set to `'content/images/icons/Company_24.png'`:

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.List', [List], {
        // Localization
        titleText: 'Account List',
        
        // View Properties
        id: 'account_list',
        icon: 'content/images/icons/Company_24.png'
    });
</pre>

6\. Now for the data. The three list view properties we need are: resourceKind, querySelect and queryOrderBy. The resource kind is the endpoint of our entity, querySelect tells the request what fields we need and order by does server side ordering of the results.

   Set the resourceKind to `'accounts'`
   Set querySelect to an array of strings for: AccountName, AccountManager/UserInfo/UserName
   Set queryOrderBy to `'AccountName asc'`

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

7\. Every row has an itemTemplate this is a Simplate that defines the contents of each row. It passed the item entry (`$`) and uses the current list view as scope (`$$`). See Appendix: Simplate for more information on the template engine.

8\. Add the following itemTemplate to your view:

<pre class="brush: js">
        //Templates
        itemTemplate: new Simplate([
            '<h3>\{\%: $.AccountName \%\})</h3>',
            '<h4>\{\%: $.AccountManager && $.AccountManager.UserInfo ? $.AccountManager.UserInfo.UserName : "" \%\}</h4>'
        ]),
</pre>

9\. The last step before the view is done is defining what field(s) the search bar will act upon. Add a new function named `formatSearchQuery` and it gets passed the parameter `searchQuery`. It should return an HQL expression targeting our `AccountName` property as that is what the user is probably trying to search:

<pre class="brush: js">
        formatSearchQuery: function(searchQuery) {
            return string.substitute('AccountName like "${0}%"', [this.escapeSearchQuery(searchQuery)]);
        }
</pre>

10\. The `this.escapeSearchQuery()` function is from the parent List implementation and all it does is change `"` to `""`.

11\. Save your List view file, before it will be loaded in the app we need to register it in ApplicationModule. 

##Exercise 2: Register the View
Before any view or module is loaded into the application (via AMD) it needs to be:

* added as a dependency
* make sure the reference is passed in
* registered via the `ApplicationModule.registerView()` function

###Work it!
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

###Results
Your view is now defined and registered and will be created, initialized and added to the DOM when your application starts. Please see Add a List View to the Home Page for getting this view onto the front page.