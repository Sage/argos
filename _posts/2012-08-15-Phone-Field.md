---
layout: guide
title: Phone-Field
category: template-guide
tags: 
---
#Phone Field
The Phone field is a specialized [Text Field](Text-Field.html) that takes a string of numbers and groups them into a phone number on blur.

On blur, or when setting a value directly the value shown to the user gets passed through the `formatNumberForDisplay()` function, while `getValue()` will still return an unformatted version.

Phone field comes with 3 formats built in as the property `formatters`, which is an array of objects that have the keys `test` and `format` where `test` is a RegExp that matches the phone grouping and `format` is the string format to be replaced.

The RegExp may have capture groups but when you are defining the format strings use:

* `${0}` - original value
* `${1}` - cleaned value
* `${2}` - entire match (against clean value)
* `${3..n}` - match groups (against clean value)

The `clean value` is taking the inputted numbers/text and removing any non-number and non-"x".

The three default formatters are:
* `nnn-nnnn`
* `(nnn)-nnn-nnnn`
* `(nnn)-nnn-nnnxnnnn`

##Simple Example
<pre class="brush: js">
{
    name: 'WorkPhone',
    property: 'WorkPhone',
    label: this.workPhoneText,
    type: 'phone'
}
</pre>

##Notes
On iOS the `<input>` element will be `type="tel"` granting a numerical keypad for number entry.