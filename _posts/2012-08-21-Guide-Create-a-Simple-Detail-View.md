---
layout: guide
title: Guide-Create-a-Simple-Detail-View
category: template-guide
tags: 
---
#Create a Simple Detail View
Detail Views are intended to display a wealth of knowledge all categorically organized with helpful actions and links to perform on this entry or take you to ones related.

Creating a Detail View is very similar to creating a List in that you need to do three things:

1\. Code the Detail View;

2\. Register the view; and

3\. Wire the List View to the Detail View.

##Step 1: Coding a Detail View
1\. Create an empty file named `Detail.js` into `argos-template\src\Views\Account\` and open it up.

2\. First we setup the declare and define according the AMD standard. For more information see [Appendix: AMD](AMD---Define-and-Declare.html).

<pre class="brush: js">
define('Mobile/Template/Views/Account/Detail', [
    'dojo/_base/declare',
    'dojo/string',
    'Sage/Platform/Mobile/Detail'
], function(
    declare,
    string,
    Detail
) {
    return declare('Mobile.Template.Views.Account.Detail', [Detail], {
    });
});
</pre>

3\. All views have a `titleText` and `id` property so let's define those first. The id standard for detail is "entity_detail" making this one `account_detail`.

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.Detail', [Detail], {
        // Localization
        titleText: 'Account Detail',
        
        // View Properties
        id: 'account_detail'
    });
</pre>

4\. Now for the data. The two detail view properties we need are: resourceKind and querySelect. The resource kind is the endpoint of our entity and querySelect tells the request what fields we need.

* resourceKind to `'accounts'`
* querySelect to an array of strings for: `AccountName`, `AccountManager/UserInfo/*`, `WebAddress`, `MainPhone`, and `Industry`

<pre class="brush: js">
    return declare('Mobile.Template.Views.Account.Detail', [Detail], {
        // Localization
        titleText: 'Account Detail',
        
        // View Properties
        id: 'account_detail',
        resourceKind: 'accounts',
        querySelect: [
            'AccountName',
            'AccountManager/UserInfo/*',
            'WebAddress',
            'MainPhone',
            'Industry'
        ]
    });
</pre>

5\. All Detail views must define a `createLayout()` function that defines the view `layout` property. The property `layout` is an array of "section" objects. Each section has a property named "children" which in turn is an array of "row" objects.

The sections get turn into collapsible headers with the children being the rows of information under that header.

<pre class="brush: js">
// section example
{
    title: 'Section Header',
    name: 'SectionUniqueId',
    children: [/* rows */]
}

// row example
{
    name: 'UniqueRowId',
    property: 'DataBoundProperty',
    label: 'Label shown in user interface'
}
</pre>

6\. The row objects `property` property should match up with your `querySelect`s, this ties the data from the SData response to the displayed row to the user. Further options for layout are covered in [Advanced Detail Create Layout](Detail-Layout-Properties.html). 

7\. To utilize localization utilities of Argos all the row labels and section titles are defined as a property of the view and suffixed with `Text`. Any text string that is shown to the user should be defined this way.

<pre class="brush: js">
        createLayout: function() {
            return this.layout || (this.layout = [{
                title: this.detailsText,
                name: 'DetailsSection',
                children: [{
                    name: 'AccountName',
                    property: 'AccountName',
                    label: this.accountNameText
                },{
                    name: 'Industry',
                    property: 'Industry',
                    label: this.industryText
                },{
                    name: 'AccountManager',
                    property: 'AccountManager.UserInfo',
                    label: this.accountManagerText
                }]
           },{
                title: this.contactInfoText,
                name: 'ContactInfoSection',
                children: [{
                    name: 'WebAddress',
                    property: 'WebAddress',
                    label: this.webAddressText
                },{
                    name: 'MainPhone',
                    property: 'MainPhone',
                    label: this.mainPhoneText
                }]
            }]);
        }
</pre>

8\. And add the localization strings for our labels/titles up near the titleText:

<pre class="brush: js">
titleText: 'Account Detail',
accountNameText: 'account',
industryText: 'business',
accountManagerText: 'manager',
webAddressText: 'web',
mainPhoneText: 'phone',
detailsText: 'Details',
contactInfoText: 'Contact Info',
</pre>

9\. That's it for a simple Detail View definition. Save your file.


##Step 2: Register the View
As with all new views they must be registered in order to be loaded into the application.


1\. Open `argos-tempate/src/ApplicationModule.js` and add our new view as a dependency, making sure the reference is pulled in:

<pre class="brush: js">
define('Mobile/Template/ApplicationModule', [
    /* trimmed for example */
    'Mobile/Template/Views/Account/List',
    'Mobile/Template/Views/Account/Detail'
], function(
   /* trimmed for example */
   AccountList,
   AccountDetail
) {
</pre>

2\. Under `loadViews()` register our view using the reference variable.

<pre class="brush: js">
            this.registerView(new AccountList());
            this.registerView(new AccountDetail());
</pre>

3\. Save the file.

##Step 3: Wire List to Detail
Our Account List View does not know about the Account Detail View so let's add that relationship.

1\. Open `argos-template/src/Views/Account/List.js`.

2\. Near `id`, add the property `detailView` and set it to our detail id: `account_detail`:

<pre class="brush: js">
    id: 'account_list',
    detailView: 'account_detail',
</pre>

3\. Save and open your `index-dev.html` file.

4\. Navigate to Accounts, then select an Account to see your detail view


![Detail View](http://sage.github.com/argos/images/template-guide/detail-view.png)

(Details may vary)

For further details on how the wiring works please see [Wiring List to Detail](Wire-List-to-Detail.html).

###Next Steps
As you can see several of the fields don't look as they should, the phone number isn't formatted, the website isn't a hyperlink and the name just says Object. These rows require some additional properties in order to render correctly - head over to [Detail Layouts - Renderer and Template](Guide-Detail-Layout-Renderer-Template).
