Ext.data.JsonP.v2_beyond_the_guide_toolbars({"guide":"<h1>Toolbars</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/v2_beyond_the_guide_toolbars-section-1'>Titlebar Text</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_toolbars-section-2'>Adding a Toolbar Item</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_toolbars-section-3'>Toolbar Item Sided-ness</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_toolbars-section-4'>Custom Markup</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_toolbars-section-5'>Footer text</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_toolbars-section-6'>Footer items</a></li>\n</ol>\n</div>\n\n<h2 id='v2_beyond_the_guide_toolbars-section-1'>Titlebar Text</h2>\n\n<p>All Views by default have a Title bar defined and the text shown is controlled with the Views <code>titleText</code> property.</p>\n\n<p>1. Open the Home View: <code>src/Views/Home.js</code>.</p>\n\n<p>2. Find the <code>titleText</code> property and change it to read <code>Hello World!</code>:</p>\n\n<pre><code>//Localization\ntitleText: 'Hello World!',\n</code></pre>\n\n<p>3. Save and refresh your browser.</p>\n\n<p><p><img src=\"guides/v2_beyond_the_guide_toolbars/toolbar-hello.png\" alt=\"Toolbar Hello\"></p></p>\n\n<p>Upon refreshing you should the title text at the top change to Hello World!, this property provides the most basic way of setting the title.</p>\n\n<h2 id='v2_beyond_the_guide_toolbars-section-2'>Adding a Toolbar Item</h2>\n\n<p>It's not much of a toolbar without a toolbar item!</p>\n\n<p>1. Go back to within <code>Home.js</code> and locate the <code>createToolLayout</code> function</p>\n\n<p>2. It currently is defining <code>this.tools</code> to be an object with the <code>tbar</code> key to an empty array</p>\n\n<p>3. The key <code>tbar</code> refers to the title bar and is explicitly setting it to have no items, but let's add a new object in that array</p>\n\n<p>4. Give that object the following properties: id, icon, title and action. Set to <code>myButton</code>, <code>content/images/icons/add_24.png</code>, <code>Hello</code> and <code>onHello</code> respectfully:</p>\n\n<pre><code>createToolLayout: function() {\n    return this.tools || (this.tools = {\n        tbar: [{\n            id: 'myButton',\n            icon: 'content/images/icons/add_24.png',\n            title: 'Hello',\n            action: 'onHello'\n        }]\n    });\n},\n</code></pre>\n\n<p>5. Add a new function to the view named <code>onHello</code> and have it show an alert box with a message:</p>\n\n<pre><code>onHello: function() {\n    alert('Hello Dave!');\n},\n</code></pre>\n\n<p>6. Save and reload your app</p>\n\n<p><p><img src=\"guides/v2_beyond_the_guide_toolbars/toolbar-button.png\" alt=\"Adding Toolbar Item\"></p></p>\n\n<p>You should now have a big green plus sign on the right hand side of your Titlebar, and on click it should run the <code>onHello</code> function. To go a bit deeper into each property:</p>\n\n<pre><code>id: '', // a unique id for this item, will be used for referencing\nicon: '', // path to image to display\ntitle: '', // use for ARIA conformance\naction: '', // string of the function name of the current view to run on click\nfn: function, // instead of action you can point to a function to run directly, or define inline\nscope: object // the scope to call the fn function if defined, defaults to current view\n</code></pre>\n\n<h2 id='v2_beyond_the_guide_toolbars-section-3'>Toolbar Item Sided-ness</h2>\n\n<p>As noted in Adding a Toolbar, the new item automatically went to the right side -- what if we wanted it to be on the left?</p>\n\n<ol>\n<li><p>Go back to your custom button and add a new property key <code>side</code> and set it to <code>left</code>:</p>\n\n<p> tbar: [{</p>\n\n<pre><code>id: 'myButton',\nicon: 'content/images/icons/add_24.png',\ntitle: 'Hello',\naction: 'onHello',\nside: 'left'\n</code></pre>\n\n<p> }]</p></li>\n</ol>\n\n\n<p>2. Save and reload</p>\n\n<p>Since the Titlebar supports the <code>side</code> property it added the appropriate CSS class to move the toolbar item visually.</p>\n\n<h2 id='v2_beyond_the_guide_toolbars-section-4'>Custom Markup</h2>\n\n<p>Since the Titlebar only supports icon-only items out the box you may wish to pass in your own markup to use. Note that in order for the toolbar item to function there needs to be a <code>button</code> element with <code>data-action=\"invokeTool\"</code> and <code>data-tool=\"{%= $.id %}\"</code>.</p>\n\n<p>1. In <code>Home.js</code> add a new property to the view itself called <code>textOnlyToolTemplate</code> and set it as:</p>\n\n<pre><code>textOnlyToolTemplate: new Simplate([\n    '&lt;button class=\"button toolButton toolButton-{%= $.side || \"right\" %} {%= ($$.enabled) ? \"\" : \"toolButton-disabled\" %} {%= $.cls %}\"',\n            'data-action=\"invokeTool\" data-tool=\"{%= $.id %}\"',\n            'aria-label=\"{%: $.title || $.id %}\"&gt;',\n        '&lt;span&gt;{%: $.text %}&lt;/span&gt;',\n    '&lt;/button&gt;'\n]),\n</code></pre>\n\n<p>2. Then add the <code>template</code> property to your custom tool item and set it to <code>this.textOnlyToolTemplate</code></p>\n\n<p>3. Also add the <code>text</code> property and set it to <code>Click</code>:</p>\n\n<pre><code>tbar: [{\n   id: 'myButton',\n   icon: 'content/images/icons/add_24.png',\n   title: 'Hello',\n   action: 'onHello',\n   side: 'left',\n   template: this.textOnlyToolTemplate,\n   text: 'Click'\n}]\n</code></pre>\n\n<p>4. Save and reload.</p>\n\n<p>The green plus should have disappeared and been replaced with the word <code>Click</code>. It should still show up on the left side and function as normal. The <code>template</code> property overrides the default Simplate used to define the tool item markup.</p>\n\n<h2 id='v2_beyond_the_guide_toolbars-section-5'>Footer text</h2>\n\n<p>All the previous exercises have focused on the title bar, which derives from the <code>MainToolbar</code> class in <code>argos-template/src/Views/MainToolbar.js</code> (which in turn inherits MainToolbar from argos-sdk). The bottom footer bar on the other hand is defined in <code>argos-template/src/Views/FooterToolbar</code> and has slightly different properties - namely <code>copyrightText</code> and already supporting text in the items.</p>\n\n<p>First we will change the copyright text:</p>\n\n<p>1. Open <code>argos-template/src/Views/FooterToolbar.js</code> and find the property <code>copyrightText</code>.</p>\n\n<p>2. Change it to read <code>Free for the world.</code></p>\n\n<pre><code>// Localization\ncopyrightText: 'Free for the world',\n</code></pre>\n\n<p>3. Save and reload</p>\n\n<p>The text in the footer changed to our new string, notice however that the Views have no ties to the <code>copyrightText</code> as it is assumed the footer to be fairly static in regards to copyright.</p>\n\n<h2 id='v2_beyond_the_guide_toolbars-section-6'>Footer items</h2>\n\n<p>The footer tool items, however, are customized just like the Title bar items are. Let's move our custom button down to the right side of the footer bar.</p>\n\n<p>1. Open <code>Home.js</code> and go to the <code>createToolLayout</code> function</p>\n\n<p>2. Set a new key to the <code>this.tools</code> object named <code>fbar</code> and set it to an empty array:</p>\n\n<pre><code>return this.tools || (this.tools = {\n    tbar: [/*snipped*/],\n    fbar: []\n});\n</code></pre>\n\n<p>3. Cut your tool item out of the <code>tbar</code> array into the <code>fbar</code> array</p>\n\n<p>4. Delete the <code>template</code> and <code>text</code> properties</p>\n\n<p>5. Change the <code>side</code> property to <code>right</code></p>\n\n<pre><code>return this.tools || (this.tools = {\n    tbar: [],\n    fbar: [{\n        id: 'myButton',\n        icon: 'content/images/icons/add_24.png',\n        title: 'Hello',\n        action: 'onHello',\n        side: 'right'\n    }]\n});\n</code></pre>\n\n<p>6. Save and reload</p>\n\n<p>Your tool item should now show up on the right side of the footer bar, with icon and text displayed. Notice that the footerbar default tool template uses the <code>title</code> property for setting text.</p>\n","title":"Toolbars"});