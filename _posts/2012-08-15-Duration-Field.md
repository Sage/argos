---
layout: guide
title: Duration-Field
category: template-guide
tags: 
---
#Duration Field
The Duration field is a mashup of an auto-complete box and a [Lookup Field](Lookup-Field.html) for handling duration's of: minutes, hours, days, weeks or years. Meaning a user can type directly into the input area the amount of time or press the lookup button and choose from pre-determined list of times.

When typing in a value directly, the Duration field only supports one "measurement" meaning if you wanted to have 1 hour and 30 minutes you would need to type in 90 minutes or 1.5 hours.

The auto-complete happens on blur, so if a user types in 5m they would need to go to the next field (or press Save) and the field will auto-complete to 5 minute(s), letting the user know it accepted the value. If a value entered is not accepted, 5abc, it will default to the last known measurement, defaulting to minutes.

Setting and getting the value is always in minutes as a Number.

##Simple Example
<pre class="brush: js">
{
   name: 'Duration',
   property: 'Duration',
   label: this.durationText,
   type: 'duration',
   view: 'durations_list'
}
</pre>

##Additional Properties
Remember that Duration inherits from [Lookup Field](Lookup-Field.html).

* `emptyText` - text shown when no value is set.
* `invalidDurationErrorText` - Duration has an in-built validator and this property is the validator `message`, see validate in [_Field](_Field.html) or [How Edit Validation Works](How-Edit-Validation-Works.html).
* `autoCompleteText` this object defines the autocomplete text and their values in minutes. The keys are the text used and their values are the conversion minute ratio. By default Duration defines:

<pre class="brush: js">
{
    'minute(s)': 1,
    'hour(s)': 60,
    'day(s)': 1440,
    'week(s)': 10080,
    'year(s)': 525960
}
</pre> 

* `view` - the id of the Lookup View to be taken to, see [Lookup](Lookup-Field.html) for more information.
* `data` - may be defined as in-line object with `$resources` or function that returns the same, this is used to generate items and pass to a generic list view that is reused.
