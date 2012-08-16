---
layout: guide
title: Hidden-Field
category: template-guide
tags: 
---
#Hidden Field
The Hidden field is a non-displayed field that binds to a `<input type="hidden">` html element. It inherits from the [Text Field](Text-Field.html), however with all connectivity disabled. The intent of the Hidden field is to have a place to store arbitrary strings, such as keys, that will be set upon loading and, if changed, sent in the SData response. 

##Simple Example
<pre class="brush: js">
{
   name: 'ContactKey',
   property: 'Contact.$key',
   type: 'hidden'
}
</pre>

