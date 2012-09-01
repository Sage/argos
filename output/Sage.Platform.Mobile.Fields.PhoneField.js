Ext.data.JsonP.Sage_Platform_Mobile_Fields_PhoneField({"tagname":"class","name":"Sage.Platform.Mobile.Fields.PhoneField","extends":"TextField","mixins":[],"alternateClassNames":["PhoneField"],"aliases":{},"singleton":false,"requires":["Sage.Platform.Mobile.FieldManager"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Sage.Platform.Mobile.Fields.PhoneField","members":{"cfg":[],"property":[{"name":"formatters","tagname":"property","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"property-formatters"},{"name":"inputType","tagname":"property","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"property-inputType"}],"method":[{"name":"_onBlur","tagname":"method","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"method-_onBlur"},{"name":"_onKeyUp","tagname":"method","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"method-_onKeyUp"},{"name":"formatNumberForDisplay","tagname":"method","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"method-formatNumberForDisplay"},{"name":"getValue","tagname":"method","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"method-getValue"},{"name":"setValue","tagname":"method","owner":"Sage.Platform.Mobile.Fields.PhoneField","meta":{},"id":"method-setValue"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":30,"files":[{"filename":"PhoneField.js","href":"PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["TextField"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>PhoneField</div><h4>Hierarchy</h4><div class='subclass first-child'>TextField<div class='subclass '><strong>Sage.Platform.Mobile.Fields.PhoneField</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Sage.Platform.Mobile.FieldManager' rel='Sage.Platform.Mobile.FieldManager' class='docClass'>Sage.Platform.Mobile.FieldManager</a></div><h4>Files</h4><div class='dependency'><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField' target='_blank'>PhoneField.js</a></div></pre><div class='doc-contents'><p>The Phone field is a specialized TextField that takes a string of numbers\nand groups them into a phone number on blur or when setting a value directly the value\nshown to the user gets passed through the\n<a href=\"#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-formatNumberForDisplay\" rel=\"Sage.Platform.Mobile.Fields.PhoneField-method-formatNumberForDisplay\" class=\"docClass\">formatNumberForDisplay</a> function, while\n<a href=\"#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-getValue\" rel=\"Sage.Platform.Mobile.Fields.PhoneField-method-getValue\" class=\"docClass\">getValue</a> will still return an unformatted version.</p>\n\n<h3>Example:</h3>\n\n<pre><code>{\n    name: 'SalesPotential',\n    property: 'SalesPotential',\n    label: this.salesPotentialText,\n    type: 'decimal'\n}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-formatters' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-property-formatters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-property-formatters' class='name expandable'>formatters</a><span> : Object[]</span></div><div class='description'><div class='short'>Array of objects that have the keys test and format where test is a RegExp that\nmatches the phone grouping and format...</div><div class='long'><p>Array of objects that have the keys <code>test</code> and <code>format</code> where <code>test</code> is a RegExp that\nmatches the phone grouping and <code>format</code> is the string format to be replaced.</p>\n\n<p>The RegExp may have capture groups but when you are defining the format strings use:</p>\n\n<ul>\n<li><code>${0}</code> - original value</li>\n<li><code>${1}</code> - cleaned value</li>\n<li><code>${2}</code> - entire match (against clean value)</li>\n<li><code>${3..n}</code> - match groups (against clean value)</li>\n</ul>\n\n\n<p>The <code>clean value</code> is taking the inputted numbers/text and removing any non-number\nand non-\"x\".</p>\n\n<p>The three default formatters are:\n* <code>nnn-nnnn</code>\n* <code>(nnn)-nnn-nnnn</code>\n* <code>(nnn)-nnn-nnnxnnnn</code></p>\n\n<p>If you plan to override this value make sure you include the default ones provided.</p>\n<p>Defaults to: <code>[{test: /^\\+.*/, format: '${0}'}, {test: /^(\\d{3})(\\d{3,4})$/, format: '${3}-${4}'}, {test: /^(\\d{3})(\\d{3})(\\d{2,4})$/, format: '(${3})-${4}-${5}'}, {test: /^(\\d{3})(\\d{3})(\\d{2,4})([^0-9]{1,}.*)$/, format: '(${3})-${4}-${5}${6}'}, {test: /^(\\d{11,})(.*)$/, format: '${1}'}]</code></p></div></div></div><div id='property-inputType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-property-inputType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-property-inputType' class='name expandable'>inputType</a><span> : String</span></div><div class='description'><div class='short'>Sets the &lt;input type= of the field. ...</div><div class='long'><p>Sets the <code>&lt;input type=</code> of the field.</p>\n\n<p>Currently only iOS supports non-numbers when a tel field has a default value: <a href=\"http://code.google.com/p/android/issues/detail?id=19724\">Bug Report</a>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_onBlur' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-method-_onBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-_onBlur' class='name expandable'>_onBlur</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Formats the displayed value (inputNode value) using formatNumberForDisplay. ...</div><div class='long'><p>Formats the displayed value (inputNode value) using formatNumberForDisplay.</p>\n</div></div></div><div id='method-_onKeyUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-method-_onKeyUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-_onKeyUp' class='name expandable'>_onKeyUp</a>( <span class='pre'>evt</span> )</div><div class='description'><div class='short'>Currently only calls parent implementation due to an Android Bug. ...</div><div class='long'><p>Currently only calls parent implementation due to an <a href=\"http://code.google.com/p/android/issues/detail?id=14519\">Android Bug</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>Keyup event</p>\n</div></li></ul></div></div></div><div id='method-formatNumberForDisplay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-method-formatNumberForDisplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-formatNumberForDisplay' class='name expandable'>formatNumberForDisplay</a>( <span class='pre'>number, clean</span> ) : String</div><div class='description'><div class='short'>Takes a number, and optional clean version, and tests it against each formatters. ...</div><div class='long'><p>Takes a number, and optional clean version, and tests it against each <code>formatters</code>.\nIf a match is found it uses the formatter <code>format</code> to substitute the numbers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : String<div class='sub-desc'><p>Original or source value</p>\n</div></li><li><span class='pre'>clean</span> : String<div class='sub-desc'><p>Cleaned or stripped of non-number, non-letter <code>x</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value and strips out non-numbers and non-letter x before returning unless\nthe value starts with + in which i...</div><div class='long'><p>Gets the value and strips out non-numbers and non-letter <code>x</code> before returning unless\nthe value starts with <code>+</code> in which it is returned unmodified.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.Fields.PhoneField'>Sage.Platform.Mobile.Fields.PhoneField</span><br/><a href='source/PhoneField.html#Sage-Platform-Mobile-Fields-PhoneField-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.Fields.PhoneField-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>val, initial</span> )</div><div class='description'><div class='short'>Sets the original value if initial is true and sets the input value to the formatted\nvalue using formatNumberForDisplay. ...</div><div class='long'><p>Sets the original value if initial is true and sets the input value to the formatted\nvalue using formatNumberForDisplay.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : String/Number<div class='sub-desc'><p>String to set</p>\n</div></li><li><span class='pre'>initial</span> : Boolean<div class='sub-desc'><p>True if the value is the original/clean value.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});