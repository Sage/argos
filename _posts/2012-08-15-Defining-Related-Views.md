---
layout: guide
title: Defining-Related-Views
category: template-guide
tags: 
---
#Defining Related Views

Related Views are List Views that we want to duplicate for purposes of looking up or for specific filters. For example I may adding a new "Employee" and need to assign them to a "Company". When selecting a company it should show a list with logic to handle making a selection and passing the value back to my new employee. We don't want that extra logic to still be there when looking at the "main" employee listing.

##Exercise 1: Duplicating an Existing List
First we need to already have a list view defined as the related view is merely an identical copy.

###Work it! 

1\. Open `src/ApplicationModule.js`

2\. Find where the main list is being registered: `this.registerView(new ContactList());` 

3\. Copy that line and paste it below but for the constructor add an object with a key of `id` set to `'contact_related'`.

<pre class="brush: js">
this.registerView(new ContactList());
this.registerView(new ContactList({
    id: 'contact_related'
}));
</pre>

4\. For views, anything you pass into the constructor will be mixed in (overwriting the default), as `id` must be unique we pass in a new one.

5\. Done! Now when the app is started you will have a duplicate instance of the AccountList ready for it's own separate use that doesn't interfere with the original.


##Exercise 2: Related View Action
As an example we will use the Account Detail view to define a related action that utilizes our newly duplicated related list view.

1\. Open `src/Views/Account/Detail.js`

2\. Go down to `createLayout` and add a new section with the following:

<pre class="brush: js">
{
    title: this.relatedItemsText,
    list: true,
    name: 'RelatedItemsSection',
    children: [{
        name: 'AccountRelated',
        icon: 'content/images/icons/contact_24x24.png',
        label: this.relatedContactsText,
        where: this.formatRelatedQuery.bindDelegate(this, 'AccountId eq "${0}"'),
        view: 'contact_related'
    }]
}
</pre>

3\. The key points that make this a related action is:

   * `list: true`, this tells the rendering engine to use `<ul>` as a container instead of a normal `<div>`.

   * `view: id`, this tells the rendering engine that it should use the related view template that is setup to wire the navigation action, extract the where clause (and options if defined) and pass that along to the view.

   * `where: expression`, the expression will be passed to the new view and used in conjunction with its `queryWhere` expression (if defined). Here we are using the base Detail views built-in function `formatRelatedQuery` which takes a `string.substitute` format string where `${0}` will be the `$key` property (you may also pass a property name to extract) of the Detail entry. You can put a string directly here or a function that gets passed the entry.

4\. Add the localization strings.

<pre class="brush: js">
   relatedItemsText: 'Related',
   relatedContactsText: 'Contacts',
</pre> 

5\. Save and reload.

