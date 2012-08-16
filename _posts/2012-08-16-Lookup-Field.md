---
layout: guide
title: Lookup-Field
category: template-guide
tags: 
---
#Lookup Field
The Lookup field is for assigning foreign key relationships, for example an Employee may have a relation to the Department table and may need to send back: 
<pre class="brush: js">
{ Department: { $key: 'A1B2C2', $descriptor: 'Research' } }
</pre>

##Storage of Values
When performing a lookup the entire lookup result is stored, however when setting and retrieving the value of the field it only extracts two properties - one used as a key or id and one as text or a description. 
* `valueKeyProperty` - name of the unique identifier property of the item.
* `valueTextProperty` - name of the textual or descriptor property of the item.

By default both properies, valueKey and valueText are set to `null`. In this case, the Lookup field will use `keyProperty` and `textProperty` in it's place:
* `keyProperty` - name of the unique identifier property of the item. Defaults to `'$key'`.
* `textProperty` - name of the textual or descriptor property of the item. Defaults to `'$descriptor'`.

There is a third scenario, setting `valueKeyProperty` and `valueTextProperty` to `false`. If they are false it will take the `key` and `text` properties of the currentValue (look at the `setValue` function for more details).

##Display Text
Without modification the text property will be displayed to the user in the Lookup field. You may changed this with a template or a renderer. Note that since the result of the modifier is stored as the value there is no way to "go back" to the non-modified text.
* `textTemplate` - Simplate. Uses a Simplate to insert text into a string.
* `textRenderer` - Function. Calls a function passing the text and the Lookup field, the function should return a string.

##Work Flow
1\. User clicks lookup button.

2\. List view is shown, Lookup passed a custom toolbar in the nav options that will call the fields `complete` function when an entry is activated (when a user clicks a row in the list).

3\. User clicks a row.

4\. The `complete()` function in the field is called. It gathers all the selections via the `selectionModel` of the List view.

5\. If `singleSelect` is true, it takes the first selection and calls `setSelection` with that item, if false it calls `setSelections` with all items. Then it calls `ReUI.back()` which transitions the screen back to the edit view.

6\. In `setSelection` it stores the item into `this.currentSelection`, extracts the key and text properties, modifies the text, saves them into `this.currentValue` and calls `setText()` with text.

7\. `setText` applies the text to the input node which the user then sees.

8\. `_onComplete` fires, which in turns calls `onChange()`.

##Settable Properties
* `view` - the view id of the List view to go to.
* `requireSelection` - If `true` the only way to insert data is to click the field and select an item from the lookup views' list. If `false` the text input is editable and a user may type in a value, in this case both the `key` and `text` properties will be the typed in value. Defaults to `true`.
* `singleSelect` - controls the `singleSelect` navigation option parameter. Defaults to `true`.
* `lookupText` - the text string within the lookup button. Defaults to `'...'`.
* `emptyText` - text shown when no value is selected.
* `valueKeyProperty` - property of the item that uniquely identifies it.
* `valueTextProperty` - property of the item that describes it.
* `keyProperty` - backup of `valueKeyProperty`, defaults to `$key`.
* `textProperty` - backup of `valueTextProperty`, defaults to `$descriptor`.
* `textTemplate` - Simplate used to modify the textual value. `$ = text value`, `$$ = field`.
* `textRenderer` - Function called that should modify and return the textual value. Passed text value and the field.
* `owner` - if defined, it should point to the view instance the Lookup view is a part of.
* `dependsOn` - if the Lookup field needs another fields value before it can do a lookup you should set `dependsOn` to the other fields `name` property. This forces the other field to have a valid value before the Lookup will work. The Lookup will use the resulting value when it is expanding `resourceKind`, `resourcePredicate`, and `where` - meaning if any of those properties are a function they will be called with the field and the dependent value, else just the field. This is typically used to enforce a filter (depend on another lookup fields key to be passed in the second lookups where expression).
* `resourceKind` - String or Function. Sets the `resourceKind` property in the navigation options to the list view.
* `resourcePredicate` - String or Function. Sets the `resourcePredicate` property in the navigation options to the list view.
* `where` - String or Function. Sets the `where` property in the navigation options to the list view.
* `orderBy` - String. Sets the `orderBy` property in the navigation options to the list view.
* `singleSelectAction` String name of function. This is the name of the function to be called when the user selects a row in the list view. Defaults to `"complete"`.
* `title` - String. Sets the `title` property in the navigation options, which sets the top toolbar text in the List view.

##Functions
While these generally should not be changed there may be a need to override one or two in fringe cases.

* `init()` - used to setup bindings/connections.
* `createNavigationOptions()` - returns the options to be passed in navigating to the List view.
* `complete()` - the function called when a user selects a list row. It handles getting the selected item, navigating back to the edit view and calling the appropriate set for the item(s).
* `onChange()` - called when returning from list view after an item has been selected.

##Simple Example
<pre class="brush: js">
{
    name: 'Account',
    property: 'Account',
    label: this.accountNameText,
    type: 'lookup',
    textProperty: 'AccountName',
    view: 'account_related'
}
</pre>