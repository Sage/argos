---
layout: guide
title: Create-a-Simple-Edit-View
category: template-guide
tags: 
---
#Create a Simple Edit View
Edit Views are dual purpose: Editing and Inserting, the mode is determined by the navigations options covered in the `Wire x to Edit` topics. Before getting to all that, we need to define, declare, and register our Edit View.

###Exercise 1: Create a Edit View

Creating a Detail View is very similar to creating a List view as most of the properties are the same.

###Work it!
1\. Create an empty file named `Edit.js` into `argos-template\src\Views\Account\` and open it up.

2\. First we setup the declare and define according the AMD standard. For more information see Appendix: AMD.

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

3\. As mentioned in the Overview all views have a `titleText` and `id` property so let's define those first. The id standard for Edit is "entity_edit".

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.Edit', [Edit], {
        // Localization
        titleText: 'Account Edit',
        
        // View Properties
        id: 'account_edit'
    });
</pre>

4\. Now for the data. The two Edit view properties we need are: resourceKind and querySelect. The resource kind is the endpoint of our entity and querySelect tells the request what fields we need. The reason we need this is because when we are inserting a new item it does a request for the `$template` defaults and these fields are the ones it will request and apply.

   Set the resourceKind to `'accounts'`
   Set querySelect to the exact same as your Detail querySelect: AccountName, AccountManager/UserInfo/UserName, WebAddress, MainPhone, and Industry

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.Edit', [Edit], {
        // Localization
        titleText: 'Account Edit',
        
        // View Properties
        id: 'account_edit',
        resourceKind: 'accounts',
        querySelect: [
            'AccountName',
            'AccountManager/UserInfo/Username',
            'WebAddress',
            'MainPhone',
            'Industry'
        ]
    });
</pre>

5\. All Edit views must define a `createLayout()` function that defines the view `layout` property. The property `layout` is an array of "field" objects. You can also have sections like Detail and have their children as "field" objects but normally there is no sections.

<pre class="brush: js">
// field object example
{
    label: 'text shown in ui',
    name: 'uniqueFieldId',
    property: 'data bound property',
    type: 'field type'
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

8\. All the fields with their properties and methods are defined in the [Edit Layout Fields](Edit-View-Layouts.html). Just about all extended functionality will be put into the layout: field overrides, [validation logic](How-Edit-Validation-Works.html), [lookups](Lookup-Field.html) to other entities, and more which are covered under under their individual topics.

9\. Moving forward, here is the layout for our simple Edit view:

<pre class="brush: js">
      createLayout: function() {
          return this.layout || (this.layout = [{
                  name: 'AccountName',
                  property: 'AccountName',
                  label: this.accountNameText,
                  type: 'text'
              },{
                  name: 'AccountManager/UserInfo/Username',
                  property: 'AccountManager/UserInfo/Username',
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
                  type: 'text',
                  inputType: 'url'
              },{
                  name: 'MainPhone',
                  property: 'MainPhone',
                  label: this.mainPhoneText,
                  type: 'phone'
              }]
          }]);
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

##Exercise 2: Register the View
As with all new views they must be registered in order to be loaded into the application.

###Work it!

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

3\. Save the file. In the next two topics we will hook up the Detail Views Edit toolbar item and the List Views Insert toolbar item to navigate to our Edit View.