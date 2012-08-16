---
layout: guide
title: Boolean-Field
category: template-guide
tags: 
---
#Boolean Field
The Boolean Field is used for true/false values and is visualized as a toggle or light switch. 

## Simple Example
<pre class="brush: js">
{
   name: 'IsLead',
   property: 'IsLead',
   label: this.isLeadText,
   type: 'boolean'
}
</pre>

##Additional Properties
* `onText` - the text used in the "on" position of the toggle switch. Defaults to "ON".
* `offText` - the text used in the "off" position of the toggle switch. Defaults to "OFF".

##Notes
The field will accept `true`, `"true"`, `"TRUE"`, `"t"`, `"T"`, `"0"` as truthy values - anything else will be considered false.