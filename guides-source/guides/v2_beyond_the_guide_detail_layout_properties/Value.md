#Detail Layouts: Value
Setting the `value` property of a row object makes it skip the SData mapping and let's you set a value directly. While the use case for static values in a data-driven app is limited it is typically used to set a placeholder while another request is made for the real data.

##Exercise 1: Value
We will now add a loading text value directly and then in the onCreate topic you can see it expanded to be replaced with an asych call.

###Work it!

1\. Add to querySelect the field `Address/$key`.

```javascript
      querySelect: [
          'AccountName',
          'AccountManager/UserInfo/Username',
          'WebAddress',
          'MainPhone',
          'Industry',
          'Type',
          'SubType',
          'Address/$key'
      ]
```

2\. Create a new row object under the Contact Info section and use "Address", "Address/$key", this.addressText and this.loadingText for name, property, label and value respectively. 

```javascript
{
    name: 'Address',
    property: 'Address/$key',
    label: this.addressText,
    value: this.loadingText
}
```

3\. Add the localizable strings to the view

```javascript
addressText: 'address',
loadngText: 'loading...'
```

4\. Save, run your app and go to a Detail view entry. The value should always show the loading text, no matter what entry you go to. As mentioned before this is usually tied to the `onCreate` property for setting a custom value not related to the SData entry for the Detail view.