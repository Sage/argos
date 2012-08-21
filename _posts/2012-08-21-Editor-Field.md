---
layout: guide
title: Editor-Field
category: template-guide
tags: 
---
#Editor Field
The concept of an Editor field is that the value we are trying to input requires a higher degree of precision and the user should be taken to another screen, or "sub-form", and return the final result back to the original Edit view form. Some examples of Editor fields: Date - taken to a date time picker, Address - taken to a longer form for street, city, state, zip etc., or Name - taken to first, last, prefix, suffix, middle initial, preferred.

##Key Properties
* `view` - this is the id of the sub-form, the edit view, that the Editor button will take the user to.
* `formatValue` - with the nature of sub forms, the value being saved will be an object meaning that all Editor fields need a formatter function that can take that object and return a string to show that a value is entered. For an example, take an Address:

<pre class="brush: js">
// Address object returned by sub-form
{
   Primary: true,
   Street1: '123 Mockingbird Ln',
   Street2: 'APT 456',
   Street3: '',
   City: 'Scottsdale',
   Region: 'AZ',
   PostalCode: '85258'
}
</pre>

A format function may take that value and return just parts, the entire object joined or any combination thereof:

<pre class="brush: js">
formatAddress: function(addressObject) {
   var formatted = [];
   for (var part in addressObject)
   {
       if (addressObject[part])
           formatted.push(addressObject[part]);
   }   
   return formatted.join(' ');
}
</pre>

##Simple Example
<pre class="brush: js">
{
    emptyText: '',
    formatValue: this.formatAddress,
    label: this.fullAddressText,
    name: 'Address',
    property: 'Address',
    type: 'address',
    view: 'address_edit'
}
</pre>

##Additional Properties
* `lookupText` - the text placed in the fields lookup button. Defaults to `'...'`.
* `emptyText`  - the text shown when no value is set. Defaults to `'empty'`.

##Functions
* `formatValue(val)` - function that takes the current value and returns a string that gets displayed on screen.
* `getValuesFromView()` - accesses the sub-form, retrieves the values via `getValues()` and sets the return object to the current value. This may be overridden if your sub-form uses a different way of obtaining values.
