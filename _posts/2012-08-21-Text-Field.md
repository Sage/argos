---
layout: guide
title: Text-Field
category: template-guide
tags: 
---
#Text Field
The Text field is the workhorse of the fields with many using Text as a basis. The Text field binds to a `<input type="text">` and comes with a built-in clear button.

##Events
There are two major events for a text field: when to notify a change has happened and when to do validation. 

The notification event is bound to:
* `notificationTrigger`  

and validation to:
* `validationTrigger`

Both of these properties accept the following strings:

* `keyup` - the trigger will be called every time a character is entered into the field.
* `blur` - the trigger will be called when this field loses focus.

There is a shortcut for making a field validate on every key: set `validInputOnly` to true. It will automatically setup the event binding for you.

##Simplate Example
<pre class="brush: js">
{
   name: 'Description',
   property: 'Description',
   label: this.descriptionText,
   type: 'text'
}
</pre>

##Additional Properties
* `readonly` - sets the readonly flag onto the input element, causing it to not be editable. Defaults to false.
* `enableClearButton` - controls the addition of the clear button. Defaults to true.
* `inputType` - sets the type of the input: `<input type=`, this allows fields based off Text to use HTML5 types such as tel, number, email, etc.
* `notificationTrigger` - as mentioned under Events, accepts `keyup` and `blur` and calls the `onChange` function if the value has changed.
* `validationTrigger` - as mentioned under Events, accepts `keyup` and `blur` and calls the `validate` function, adding the `row-error` class to the field container.
* `validInputOnly` - if true, binds the keypress event to immediately call the `validate` function.
