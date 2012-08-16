---
layout: guide
title: DetailTemplate
category: template-guide
tags: 
---
#Detail Layout: Template
The `template`, or its shorthand `tpl`, provides a [Simplate](Simplate.html) override for this row, but only to the value part. Meaning the row will still be a `<div>` with a `<label>` and `<span>` children with the resulting markup of template being put into the `<span>`. If you want to change the entire row markup see `use`.

##Exercise 1: Template
In this exercise we are going to change the property to instead request an object and use template to format the keys of that object into separate parts.

###Work it!

1\. If you review SData response of the Detail request you will see that `AccountManager.UserInfo.Username` is "first last", but we want a more professional "last, first" for our field. Still in `argos-template/src/Views/Account/Detail.js` change the querySelect from `AccountManager/UserInfo/Username` to include `FirstName` and `LastName`:

<pre class="brush: js">
    querySelect: [
        'AccountName',
        'AccountManager/UserInfo/FirstName',
        'AccountManager/UserInfo/LastName',
        'WebAddress',
        'MainPhone',
        'Industry',
        'Type',
        'SubType'
    ]
</pre>

2\. In the `createLayout()` function and change the AccountManager property to `AccountManager.UserInfo`:

<pre class="brush: js">
              },{
                  name: 'AccountManager',
                  property: 'AccountManager.UserInfo',
                  label: this.accountManagerText
              }]
</pre>

3\. If you were to save and load your app now it would show `[Object object]` as the value. We will now add a Simplate where the object (`$`) is the value (UserInfo) and the scope (`$$`) is the Detail view:


<pre class="brush: js">
              },{
                  name: 'AccountManager',
                  property: 'AccountManager.UserInfo',
                  label: this.accountManagerText,
                  tpl: this.userInfoNameTemplate
              }]
</pre>

4\. At the top of your module around the `id`, `resourceKind` properties add `userInfoNameTemplate` and set it to create a new Simplate defined with:

</pre>
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

5\. To go over that a bit it uses two Simplate techniques: `\{\% executable code \%\}` and `\{\%: encoded text \%\}`. To write it out: if we have an object and the object has a LastName and FirstName join with a comma, else put whichever one we do have.

6\. While templates and renderers do overlap a bit its more of which approach do you want to take - function or Simplate. Save and reload your app and instead of `[Object object]` it will now show `Last, First`.
