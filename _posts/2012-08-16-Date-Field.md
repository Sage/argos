---
layout: guide
title: Date-Field
category: template-guide
tags: 
---
#Date Field
The Date Field is a subset of the [Editor Field](Editor-Field.html) meaning that the field part of the code merely controls the display and storage of the value and the Editor View, Calendar View and handles the actual input.

##Simple Example
<pre class="brush: js">
{
   name: 'EstClosed',
   property: 'EstClosed',
   label: this.estClosedText,
   type: 'date',
   showTimePicker: true
}
</pre>

##Additional Properties
* `dateFormatText` - defines the [datejs](http://code.google.com/p/datejs/wiki/FormatSpecifiers) format for the date display. Defaults to `MM/dd/yyyy`.
* `showTimePicker` - controls the display of the Time portion of the date Editor view. Defaults to false.
* `timeless` - if true, treats the Date as a timeless UTC date. Meaning if you choose the date `Jan. 01, 2001 05:00:00 PST` and timeless is true it will be sent back to the server as `Dec. 31, 2000 00:00:05`. This is because PST is -7 hours so it sets it as `Dec. 31, 2000 22:00:00` but it is timeless so it also clears the hours/minutes to 5 seconds. A date coming in from the server will be set forward 7 hours. The timezone detection is an automatic trait of javascript.
