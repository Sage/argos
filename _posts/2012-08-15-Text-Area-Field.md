---
layout: guide
title: Text-Area-Field
category: template-guide
tags: 
---
#Text Area Field
The Text Area field is a simple derivative of the Text field that replaces the `<input>` element with a `<textarea>` and hiding the clear button.

##Simple Example
<pre class="brush: js">
{
   name: 'Notes',
   property: 'Notes',
   label: this.notesText,
   type: 'textarea',
   rows: 6
}
</pre>

##Additional Properties
* `rows` - controls how many rows of text the textarea should visually show. Defaults to 4.