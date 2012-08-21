---
layout: guide
title: Guide-Create-a-Simple-Edit-View
category: template-guide
tags: 
---
#Create a Simple Edit View
Edit Views are dual purpose: Creating (POST) and Updating (PUT), the mode is determined by the navigations options.

As with the Detail View the each Edit View is a single "page" that clears it's values and applies the current entry.

Edit Views take a few extra steps to get up and running:

1\. Code the view;

2\. Register the View;

3\. Wire the Detail View to the Edit View; and

4\. Wire the List View to the Edit View.

###Step 1: Coding an Edit View
1\. Create an empty file named `Edit.js` into `argos-template\src\Views\Account\` and open it up.

2\. First we setup the declare and define according the AMD standard. For more information see [Appendix: AMD](AMD---Define-and-Declare.html).

<pre class="brush: js">
define('Mobile/Template/Views/Account/Edit', [
    'dojo/_base/declare',
    'dojo/string',
    'Sage/Platform/Mobile/Edit'
], function(
    declare,
    string,
    Edit
) {
    return declare('Mobile.Template.Views.Account.Edit', [Edit], {
    });
});
</pre>

3\. All views have a `titleText` and `id` property so let's define those first. The id standard for Edit is "entity_edit" meaning this view is `account_edit`.

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.Edit', [Edit], {
        // Localization
        titleText: 'Account Edit',
        
        // View Properties
        id: 'account_edit'
    });
</pre>

4\. Now for the data. The two Edit view properties we need are: `resourceKind` and `querySelect`. The resource kind is the endpoint of our entity and query select tells the request what fields we need. 

The reason for `querySelect` is because when we are inserting a new item it does a request for the SData defaults (`$template`) and these fields are the ones it will request and apply.

* resourceKind to `'accounts'`
* querySelect to the exact same as your Detail querySelect: `AccountName`, `AccountManager/UserInfo/*`, `WebAddress`, `MainPhone`, and `Industry`.

<pre class="brush: js">
        // Localization
        titleText: 'Account Edit',
        
        // View Properties
        id: 'account_edit',
        resourceKind: 'accounts',
        querySelect: [
            'AccountName',
            'AccountManager/UserInfo/*',
            'WebAddress',
            'MainPhone',
            'Industry'
        ],
</pre>

5\. All Edit views must define a `createLayout()` function that defines the view `layout` property. The property `layout` is an array of "field" objects. You can also have sections like Detail and have their `children` property as "field" objects but normally there is no sections.

<pre class="brush: js">
// field object example
{
    label: 'text shown in ui',
    name: 'uniqueFieldId',
    property: 'data bound property',
    type: 'field type'
    // additional properties related to the field type
}
</pre>

6\. The first three are the same, but the new key: `type` designates the type of field. Examples of field types are: `text`, `textarea`, `date`, `decimal`, `phone`, `lookup` and `boolean`. 

7\. Not only do field objects have the above properties but any further defined properties are passed to the field type instance. For example say we have a `decimal` field and we want the decimal places to go out to 4:

<pre class="brush: js">
{
    label: 'example',
    name: 'ExampleNumber',
    property: 'ExampleNumber',
    type: 'decimal',
    precision: 4
}
</pre>

8\. Each field type has their own custom properties and you can read more about each field from the [Edit View Layouts](Edit-View-Layouts.html) page.

9\. Moving forward, here is the layout for our simple Edit view:

<pre class="brush: js">
      createLayout: function() {
          return this.layout || (this.layout = [{
                  name: 'AccountName',
                  property: 'AccountName',
                  label: this.accountNameText,
                  type: 'text'
              },{
                  name: 'AccountManager',
                  property: 'AccountManager',
                  label: this.accountManagerText,
                  type: 'text'
              },{
                  name: 'Industry',
                  property: 'Industry',
                  label: this.industryText,
                  type: 'text'
              },{
                  name: 'WebAddress',
                  property: 'WebAddress',
                  label: this.webAddressText,
                  type: 'text'
              },{
                  name: 'MainPhone',
                  property: 'MainPhone',
                  label: this.mainPhoneText,
                  type: 'text'
              }]
          );
      }
</pre>

10\. As with the others go back and add the localization strings, since typically Detail and Edit mirror each other label-wise its often easy to just copy+paste from the Detail view:

<pre class="brush: js">
titleText: 'Account Edit',
accountNameText: 'account',
industryText: 'business',
accountManagerText: 'manager',
webAddressText: 'web',
mainPhoneText: 'phone',
</pre>

11\. Save your page, before it gets loaded into the App we need to register it.

##Step 2: Register the View
As with all new views they must be registered in order to be loaded into the application.

1\. Open `argos-tempate/src/ApplicationModule.js` and add our new view as a dependency, making sure the reference is pulled in:

<pre class="brush: js">
define('Mobile/Template/ApplicationModule', [
    /* trimmed for example */
    'Mobile/Template/Views/Account/List',
    'Mobile/Template/Views/Account/Detail',
    'Mobile/Template/Views/Account/Edit'
], function(
   /* trimmed for example */
   AccountList,
   AccountDetail,
   AccountEdit
) {
</pre>

2\. Under `loadViews()` register our view using the reference variable.

<pre class="brush: js">
            this.registerView(new AccountList());
            this.registerView(new AccountDetail());
            this.registerView(new AccountEdit());
</pre>

3\. Save the file.

##Step 3: Wire Detail to Edit

1\. Open `argos-tempate/src/Views/Account/Detail.js` and near `id` add:

<pre class="brush: js">
        editView: 'account_edit',
</pre> 

2\. Save and open your app. Go to a detail and click the Edit button in the toolbar.

![Edit View](http://sage.github.com/argos/images/template-guide/edit-view.png)

We'll get to sorting out the needed properties - just make sure you that the Detail and Edit Views are hooked together.

##Step 4: Wire List to Edit
1\. Open `argos-tempate/src/Views/Account/List.js` and near `detailView` add:

<pre class="brush: js">
        insertView: 'account_edit',
</pre> 

2\. Save and open your app. Go the Account List View and click the green plus button to add a new account.

![Edit View Insert](http://sage.github.com/argos/images/template-guide/edit-view-insert.png)

###Next Steps
Next we need to step through each of the field objects and assign the correct type while investigating any properties that field may introduce. Head over to [Edit View Layouts](Guide-Edit-View-Layouts.html) to fix up the view.

###Additional Info
For more details on how the wiring for Edit Views work, including how it distinguishes Insert vs Update please see [Wire Detail to Edit](Wire-Detail-to-Edit.html) and [Wire List to Edit](Wire-List-to-Edit.html).

