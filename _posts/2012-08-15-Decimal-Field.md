---
layout: guide
title: Decimal-Field
category: template-guide
tags: 
---
#Decimal Field
The Decimal Field is used for inputting numbers and is derived from [Text Field](Text-Field.html). The only difference between Decimal and Text is that the Decimal field:

* hides the clear (x) button
* when setting a value, it converts the decimal and thousands group separator to the localized versions.
* when getting a value, it back-converts the localized punctuation into the en-US format and converts the result into a float (Number).

##Simple Example
<pre class="brush: js">
{
   name: 'Budget',
   property: 'Budget',
   label: this.budgetText,
   type: 'decimal'
}
</pre>

##Additional Properties
* `precision` - defines how many decimal places to format when setting the value. Defaults to 2.
* `enableClearButton` - controls the display of the clear button. Defaults to false.