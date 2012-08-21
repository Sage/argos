---
layout: guide
title: Guide-Edit-View-Layouts
category: template-guide
tags: 
---
#Edit View Layouts
The Edit View currently has five text fields with only two that are actual text inputs - `AccountName` and `Industry`. The other three `AccountManager`, `MainPhone` and `WebAddress` should be changed:

* WebAddress to use the "www" keyboard input;
* MainPhone to the `phone` type; and
* AccountManager to the `lookup` type.

##Step 1: WebAddress Input Type
The text field adds a property named `inputType` which directly controls the `<input type="">` underneath. This is useful for utilizing the latest HTML5 keyboard types.

Currently only iOS supports the `url` keyboard providing quick keys for `.`, `/` and `.com`.

1\. Open `argos-template/src/Views/Account/Edit.js` and down to the WebAddress field.

2\. Add the `inputType` key set to `url`:

<pre class="brush: js">
},{
   name: 'WebAddress',
   property: 'WebAddress',
   label: this.webAddressText,
   type: 'text',
   inputType: 'url'
},{
</pre>

For more information and additional properties of the text field see [Text Field](Text-Field.html).


##Step 2: MainPhone as `phone`
Also provided by the SDK is the `phone` type field. This field formats valid phone numbers into a more human readable format and also changes the input keyboard for iOS to the `tel` board which resembles the calling a number keyboard.

1\. Open `argos-template/src/Views/Account/Edit.js` and down to the MainPhone field.

2\. Change `type` to `'phone'`

<pre class="brush: js">
},{
   name: 'MainPhone',
   property: 'MainPhone',
   label: this.mainPhoneText,
   type: 'phone'
}]
</pre>

For more information and additional properties of the phone field see [Phone Field](Phone-Field.html).

##Step 3: AccountManager as `lookup`
A `lookup` type field is one that takes the user to a different List View and let's them choose a row that is returned to the Edit view. This is how the user sets foriegn key relationships on an entity.

1\. Open `argos-template/src/Views/Account/Edit.js` and down to the AccountManager field.

2\. Change `type` to `'lookup'`.

3\. If you recall from the Detail View the textual display came from `AccountManager.UserInfo.FirstName` and `.LastName`. The Lookup Field uses the `textProperty` and `textTemplate` to do the same functionality as before. Add the two keys and set them to `UserInfo` and `this.userInfoNameTemplate`:

<pre class="brush: js">
},{
   name: 'AccountManager',
   property: 'AccountManager',
   label: this.accountManagerText,
   textProperty: 'UserInfo',
   textTemplate: this.userInfoNameTemplate,
   type: 'lookup'
},{
</pre>

4\. What the above does is take the `AccountManager` object and its `UserInfo` field (which is also an object) and passes that to the Simplate defined in `textTemplate`. Go ahead and copy the `userInfoNameTemplate` from the Detail view to the Edit view:

<pre class="brush: js">
        // Templates
        userInfoNameTemplate: new Simplate([
            '\{\% if ($) { \%\}',
                '\{\% if ($.LastName && $.FirstName) { \%\}',
                    '\{\%: $.LastName \%\}, \{\%= $.FirstName\%\}',
                '\{\% } else { \%\}',
                    '\{\%: $.LastName ? $.LastName : $.FirstName \%\}',
                '\{\% } \%\}',
            '\{\% } \%\}'
        ]),
</pre>

5\. Save Edit.js and open your app - we are not done but let's take a look at what we have so far, make sure to edit an existing entry to see the `textTemplate` in action.

![Edit View Progress](http://sage.github.com/argos/images/template-guide/edit-progress.png)

6\. If you are using an iOS device to test you can checkout the URL keyboard and the tel keyboard for `WebAddress` and `MainPhone`. Note that the `AccountManager` now has a magnifying glass icon - it doesn't do anything yet but it did render the name correctly.

7\. The last piece the lookup is telling it which List View it should go to. This is controlled by the `view` property, we don't have another List view yet but will will define one soon. For now add `view` and set it to `user_list`:

<pre class="brush: js">
},{
   name: 'AccountManager',
   property: 'AccountManager',
   label: this.accountManagerText,
   textProperty: 'UserInfo',
   textTemplate: this.userInfoNameTemplate,
   type: 'lookup',
   view: 'user_list'
},{
</pre>

8\. Save the `Account/Edit.js` file and create a new folder: `argos-template/src/Views/User` and add a `List.js` file.

9\. Follow the [Creating a List View](Guide-Create-a-Simple-List-View.html) guide but with the following properties:

<pre class="brush: js">
        //Templates
        itemTemplate: new Simplate([
            '<h3>\{\%: $.UserInfo.LastName \%\}, \{\%: $.UserInfo.FirstName \%\}</h3>',
            '<h4>\{\%: $.UserInfo.Title \%\}</h4>'
        ]),

        //Localization
        titleText: 'Users',

        //View Properties
        id: 'user_list',
        queryOrderBy: 'UserInfo.LastName asc, UserInfo.FirstName asc',
        querySelect: [
            'UserInfo/FirstName',
            'UserInfo/LastName',
            'UserInfo/Title',
            'UserInfo/UserName'
        ],
        resourceKind: 'users'
</pre>

10\. Don't forget to register the view. Save and open your app. Try either adding a new account or editing an existing one - use the lookup to select a different Account Manager from the User endpoint.

###Next Steps
That's it! You've completed the Argos-Template Guide. There are plenty more topics that you can explore from changing toolbars, footers, edit validation, search, localization generation, adding a login page and more all found at [Argos-Template Beyond The Guide](Beyond-the-Guide.html).