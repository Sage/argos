---
layout: guide
title: Select-Field
category: template-guide
tags: 
---
#Select Field
A Select field is a [Lookup Field](Lookup-Field.html) that explicitly passes the list items to be shown in a mock SData response, whereas normally a Lookup field will make an SData query and display the returning response.

The only new property is:
* `data` - which can either be an object or a function that returns an object. That object needs to include a single key - `$resources` with its value being an array of the items to be shown.

This is useful for static lists that are not dependent on database value, like salutations (Mr., Mrs., Ms.) or narrow topics (Cash, Check, Credit Card).

You will need to provide a "shell" list view that will hold the select list and assign the id to `view` property.

##Simple Example
<pre class="brush: js">
{
   name: 'Prefix',
   property: 'Prefix',
   label: this.prefixText',
   type: 'select',
   view: 'select_list',
   data: this.createPrefixData
}

createPrefixData: function() {
   var data = {};
   data['$resources'] = [
      {$key: '0', $descriptor: 'Mr.'},
      {$key: '1', $descriptor: 'Mrs.'},
      {$key: '2', $descriptor: 'Ms.'}
  ];  
  return data;
}
</pre>