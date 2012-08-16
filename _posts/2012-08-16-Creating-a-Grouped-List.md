---
layout: guide
title: Creating-a-Grouped-List
category: template-guide
tags: 
---
#Creating a Grouped List
A common extension of List Views is a Grouped List which is used to logically categorize the list items into sections.

##Exercise 1: Contact List
To demonstrate we will make a new List view for the Contact entity but it will be based off GroupedList instead of List. When the items are added to the page they will be alphabetized and separated by the first letter of the last names -- just like a phone book.

##Work it!
1\. Create a new folder in `argos-template/src/Views` named Contact. Within that folder create a file named `List.js` and open it up.

2\. You may follow the Create a Simple List View topic for definitions of all the properties - otherwise add your define and declare but using GroupedList and the basic properties: id, titleText, resourceKind, and for icon use the included `login_24.png`:

<pre class="brush: js">
define('Mobile/SalesLogix/Views/Contact/List', [
    'dojo/_base/declare',
    'dojo/string',
    'Sage/Platform/Mobile/GroupedList'
], function(
    declare,
    string,
    action,
    GroupedList
) {

    return declare('Mobile.SalesLogix.Views.Contact.List', [GroupedList], {
        titleText: 'Contacts',

        id: 'contact_list',
        icon: 'content/images/icons/login_24.png',
        resourceKind: 'contacts'
    });
});
</pre>

3\. For querySelect get: `NameLF` and `AccountName`, order by `'LastNameUpper, FirstName'` and for the itemTemplate use `NameLF` in a `<h3>` and `AccountName` in a `<h4>`:

<pre class="brush: js">
    return declare('Mobile.SalesLogix.Views.Contact.List', [GroupedList], {
        titleText: 'Contacts',

        itemTemplate: new Simplate([
            '<h3>\{\%: $.NameLF \%\}</h3>',
            '<h4>\{\%: $.AccountName \%\}</h4>'
        ]),

        id: 'contact_list',
        icon: 'content/images/icons/login_24.png',
        queryOrderBy: 'LastNameUpper,FirstName',
        querySelect: [
            'NameLF',
            'AccountName'
        ],
        resourceKind: 'contacts',
</pre>

4\. Now add the `formatSearchQuery()` function that formats to `like LastNameUpper or like upper(FirstName)`:

<pre class="brush: js">
        formatSearchQuery: function(searchQuery) {
            return string.substitute('(LastNameUpper like "${0}%" or upper(FirstName) like "${0}%")', [this.escapeSearchQuery(searchQuery.toUpperCase())]);
        }
</pre>

5\. If you to save, register and add it to the home view you would see a fully functioning List view for contacts - but unsorted. Before we get to all the other stuff we need to add the Grouped List logic.

6\. GroupedLists have a function named `getGroupForEntry()` and it is passed each list item and it should return an object with two keys: `tag` and `title`. Each entry will be grouped with other entries that have the same `tag` and will be added to the List view under a collapsible header using the `title` as the header text.

7\. Add the `getGroupForEntry` function that takes the first letter of `NameLF` and uses it for both title and tag:

</pre>
        getGroupForEntry: function(entry) {
            var firstChar = entry['NameLF'].substring(0,1).toUpperCase();
            return {
                tag: firstChar,
                title: firstChar
            };
        },
</pre>

8\. Save your file, now open `argos-template/src/ApplicationModule` and add it as a dependency and reference:

<pre class="brush: js">
define('Mobile/Template/ApplicationModule', [
    /* trimmed for example */
    'Mobile/Template/Views/Contact/List',
], function(
    /* trimmed for example */
    ContactList
) {
</pre>

9\. Within `loadViews()` register it:

<pre class="brush: js">
          this.registerView(new AccountList());
</pre>

10\. Save `ApplicationModule.js` and then to add it to the home screen follow Add a List View to the Home Page topic - in summary open `Application.js` and add `contact_list` to the `getDefaultViews()` array:

<pre class="brush: js">
        getDefaultViews: function() {
            return [
                'account_list',
                'contact_list'
            ];
        },
</pre>

11\. Save, run your app and browse to the Contacts List. You should now see results grouped by letter and you can collapse/expand each section.