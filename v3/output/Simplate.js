Ext.data.JsonP.Simplate({"tagname":"class","name":"Simplate","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Simplate","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Simplate","meta":{},"id":"method-constructor"},{"name":"apply","tagname":"method","owner":"Simplate","meta":{},"id":"method-apply"},{"name":"make","tagname":"method","owner":"Simplate","meta":{},"id":"method-make"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":7,"files":[{"filename":"Simplate.js","href":"Simplate.html#Simplate"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Simplate.html#Simplate' target='_blank'>Simplate.js</a></div></pre><div class='doc-contents'><p>Simplate is powerful javascript templating function that greatly expands upon the printf concept.\nWith a normal string substitution you define a format string with <code>$0</code> or <code>{0}</code> and pass in your\narguments to get placed in the same order – first argument to 0, second argument to 1 and so on.\nSimplate takes this and says \"Hey, this is javascript, everything is an object\" and works upon\npassing in an object and scope and allowing you to use the properties in a normal manner.</p>\n\n<p>But wait – there’s more! What if you want to run a little javascript here or there like a\nconditional statement or quick loop? You can do that too! And Simplates within Simplates\nwithin Simplates? Indeed, to your heart’s content.</p>\n\n<h3>Define:</h3>\n\n<pre><code>var myTemplate = new Simplate( [ 'string', 'string', 'string'] );\n</code></pre>\n\n<h3>Usage:</h3>\n\n<pre><code>var content = myTemplate.apply(myObject, scope);\n</code></pre>\n\n<h3>Formatting Options:</h3>\n\n<p><code>{%=   %}</code> – Evaluates contents and returns the result directly.</p>\n\n<p><code>{%:   %}</code> – Evaluates contents and returns the result as HTML encoded.</p>\n\n<p><code>{%!   %}</code> – Expects the contents to return a Simplate which is then applied with the same arguments as the current Simplate.</p>\n\n<p><code>{%$   %}</code> – Same as <code>{%= %}</code> but is performed with a silent try/catch granting safe execution.</p>\n\n<p><code>{%    %}</code> – Evaluates the contents as executable code</p>\n\n<p>Inside all Simplate formatters the <code>$</code> object refers to the passed in object and <code>$$</code> refers to the scope. You then use normal javascript dot notation to access the properties of <code>$</code> and <code>$$</code>.</p>\n\n<p>For a concrete example we want to create a list item for each item in a feed. Each item has a <code>$key</code> property and a <code>Description</code> property.</p>\n\n<pre><code>var rowTemplate = new Simplate([\n    '&lt;li data-key=\"{%= $.$key %}\"&gt;{%: $.Description %}&lt;/li&gt;'\n]);\n\nvar feed = [\n    {$key: 1, Description: \"Row 1\"},\n    {$key: 2, Description: \"Row 2\"},\n    {$key: 3, Description: \"Row 3\"}\n]; // data from outside, array of objects with $key and Description\n\nvar listNode = document.createElement('ul');\nfor (var i = 0; i &lt; feed.length; i++)\n{\n    var htmlString = rowTemplate.apply(feed[i], this);\n    dojo.place(listNode, htmlString, 'last'); // converts HTML string to DOM\n}\n\n// listNode may now be appended to document with all three rows\n</code></pre>\n\n<p>For a more in depth discussion including different ways of stating the contents please look\nat the demo page at github:\n<a href=\"https://github.com/SageScottsdalePlatform/simplate\">https://github.com/SageScottsdalePlatform/simplate</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Simplate'>Simplate</span><br/><a href='source/Simplate.html#Simplate-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Simplate-method-constructor' class='name expandable'>Simplate</a>( <span class='pre'>template</span> ) : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></div><div class='description'><div class='short'>Creates a new Simplate object. ...</div><div class='long'><p>Creates a new Simplate object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>template</span> : String[]/String<div class='sub-desc'><p>The string of text or an array of strings to be joined that act as the template in which values are to be injected.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-apply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Simplate'>Simplate</span><br/><a href='source/Simplate.html#Simplate-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Simplate-method-apply' class='name expandable'>apply</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Final string value with values injected.</p>\n</div></li></ul></div></div></div><div id='method-make' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Simplate'>Simplate</span><br/><a href='source/Simplate.html#Simplate-method-make' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Simplate-method-make' class='name expandable'>make</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Final string value with values injected.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});