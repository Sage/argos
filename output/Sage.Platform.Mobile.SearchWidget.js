Ext.data.JsonP.Sage_Platform_Mobile_SearchWidget({"tagname":"class","name":"Sage.Platform.Mobile.SearchWidget","extends":null,"mixins":["Sage.Platform.Mobile._Templated"],"alternateClassNames":["SearchWidget"],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Sage.Platform.Mobile.SearchWidget","code_type":"dojo_define","members":{"cfg":[],"property":[{"name":"attributeMap","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-attributeMap"},{"name":"customSearchRE","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-customSearchRE"},{"name":"hashTagQueries","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-hashTagQueries"},{"name":"hashTagSearchRE","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-hashTagSearchRE"},{"name":"queryNode","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-queryNode"},{"name":"searchText","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-searchText"},{"name":"widgetTemplate","tagname":"property","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"property-widgetTemplate"}],"method":[{"name":"constructor","tagname":"method","owner":"Sage.Platform.Mobile._Templated","meta":{},"id":"method-constructor"},{"name":"_attachTemplateNodes","tagname":"method","owner":"Sage.Platform.Mobile._Templated","meta":{},"id":"method-_attachTemplateNodes"},{"name":"_fillContent","tagname":"method","owner":"Sage.Platform.Mobile._Templated","meta":{"protected":true},"id":"method-_fillContent"},{"name":"_onBlur","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-_onBlur"},{"name":"_onClearClick","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-_onClearClick"},{"name":"_onFocus","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-_onFocus"},{"name":"_onKeyPress","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-_onKeyPress"},{"name":"buildRendering","tagname":"method","owner":"Sage.Platform.Mobile._Templated","meta":{},"id":"method-buildRendering"},{"name":"clear","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-clear"},{"name":"configure","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-configure"},{"name":"customSearch","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-customSearch"},{"name":"destroyRendering","tagname":"method","owner":"Sage.Platform.Mobile._Templated","meta":{},"id":"method-destroyRendering"},{"name":"expandExpression","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-expandExpression"},{"name":"hashTagSearch","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-hashTagSearch"},{"name":"onSearchExpression","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-onSearchExpression"},{"name":"search","tagname":"method","owner":"Sage.Platform.Mobile.SearchWidget","meta":{},"id":"method-search"},{"name":"startup","tagname":"method","owner":"Sage.Platform.Mobile._Templated","meta":{},"id":"method-startup"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"SearchWidget.js","href":"SearchWidget.html#Sage-Platform-Mobile-SearchWidget"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>SearchWidget</div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='docClass'>Sage.Platform.Mobile._Templated</a></div><h4>Files</h4><div class='dependency'><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget' target='_blank'>SearchWidget.js</a></div></pre><div class='doc-contents'><p>Search Widget is an SData-enabled search component that <a href=\"#!/api/Sage.Platform.Mobile.List\" rel=\"Sage.Platform.Mobile.List\" class=\"docClass\">List</a> uses by default for search.</p>\n\n<p>The search widget is a dijit Widget with all the Widget aspects.</p>\n\n<p>It supports two types of shortcuts:</p>\n\n<p>1. <code>#text</code> - The key <code>text</code> will be replaced with the matching expression. This is a \"hashtag\".</p>\n\n<p>2. <code>#!Name eq 'John'</code> - The <code>Name eq 'John'</code> will be inserted directly, avoiding <a href=\"#!/api/Sage.Platform.Mobile.List-method-formatSearchQuery\" rel=\"Sage.Platform.Mobile.List-method-formatSearchQuery\" class=\"docClass\">formatSearchQuery</a>. This is a \"custom expression\".</p>\n\n<p>Multiple hashtags is supported as well as hashtags with additional text that gets sent through <a href=\"#!/api/Sage.Platform.Mobile.List-method-formatSearchQuery\" rel=\"Sage.Platform.Mobile.List-method-formatSearchQuery\" class=\"docClass\">formatSearchQuery</a>.</p>\n\n<p>To go through a full example, take this expression:\n<code>#open #urgent Bob</code></p>\n\n<p><code>#open</code> is replaced with: <code>TicketStatus eq 1</code></p>\n\n<p><code>#urgent</code> is replaced with: <code>TicketUrgency gt 3</code></p>\n\n<p><code>Bob</code> is passed to <code>formatSearchQuery</code> which returns `TicketId eq (\"Bob\") or TicketOwner like \"Bob\"</p>\n\n<p>The final result is \"anded\" together, resulting in this final where clause:\n`where=(TicketStatus eq 1) and (TicketUrgency gt 3) and (TicketId eq (\"Bob\") or TicketOwner like \"Bob\")</p>\n\n<p>See the <a href=\"#!/guides/v2_beyond_the_guide_defining_hashtags\">Defining Hash Tags guide</a> for more information and how it supports localization.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributeMap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-attributeMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-attributeMap' class='name expandable'>attributeMap</a><span> : Object</span></div><div class='description'><div class='short'>Provides a setter for HTML node attributes, namely the value for search text ...</div><div class='long'><p>Provides a setter for HTML node attributes, namely the value for search text</p>\n<p>Defaults to: <code>{queryValue: {node: 'queryNode', type: 'attribute', attribute: 'value'}}</code></p></div></div></div><div id='property-customSearchRE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-customSearchRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-customSearchRE' class='name expandable'>customSearchRE</a><span> : RegExp</span></div><div class='description'><div class='short'>The regular expression used to determine if a search query is a custom search expression. ...</div><div class='long'><p>The regular expression used to determine if a search query is a custom search expression.  A custom search\nexpression is not processed, and directly passed to SData.</p>\n<p>Defaults to: <code>/^#!/</code></p></div></div></div><div id='property-hashTagQueries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-hashTagQueries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-hashTagQueries' class='name not-expandable'>hashTagQueries</a><span> : Object[]</span></div><div class='description'><div class='short'><p>Array of hash tag definitions</p>\n</div><div class='long'><p>Array of hash tag definitions</p>\n</div></div></div><div id='property-hashTagSearchRE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-hashTagSearchRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-hashTagSearchRE' class='name expandable'>hashTagSearchRE</a><span> : RegExp</span></div><div class='description'><div class='short'>The regular expression used to determine if a search query is a hash tag search. ...</div><div class='long'><p>The regular expression used to determine if a search query is a hash tag search.</p>\n<p>Defaults to: <code>/(?:#|;|,|\\.)(\\w+)/g</code></p></div></div></div><div id='property-queryNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-queryNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-queryNode' class='name not-expandable'>queryNode</a><span> : Object</span></div><div class='description'><div class='short'><p>Dojo attach point to the search input</p>\n</div><div class='long'><p>Dojo attach point to the search input</p>\n</div></div></div><div id='property-searchText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-searchText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-searchText' class='name expandable'>searchText</a><span> : String</span></div><div class='description'><div class='short'>Text that is used when no value is in the search box - \"placeholder\" text. ...</div><div class='long'><p>Text that is used when no value is in the search box - \"placeholder\" text.</p>\n<p>Defaults to: <code>'Search'</code></p></div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-property-widgetTemplate' class='name not-expandable'>widgetTemplate</a><span> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span></div><div class='description'><div class='short'><p>Simple that defines the HTML Markup</p>\n</div><div class='long'><p>Simple that defines the HTML Markup</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='defined-in docClass'>Sage.Platform.Mobile._Templated</a><br/><a href='source/_Templated.html#Sage-Platform-Mobile-_Templated-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sage.Platform.Mobile._Templated-method-constructor' class='name expandable'>Sage.Platform.Mobile.SearchWidget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sage.Platform.Mobile._Templated\" rel=\"Sage.Platform.Mobile._Templated\" class=\"docClass\">Sage.Platform.Mobile._Templated</a></div><div class='description'><div class='short'>Initializes attachPoints and attachEvents ...</div><div class='long'><p>Initializes <em>attachPoints and </em>attachEvents</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sage.Platform.Mobile._Templated\" rel=\"Sage.Platform.Mobile._Templated\" class=\"docClass\">Sage.Platform.Mobile._Templated</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Sage.Platform.Mobile._CustomizationMixin-method-constructor' rel='Sage.Platform.Mobile._CustomizationMixin-method-constructor' class='docClass'>Sage.Platform.Mobile._CustomizationMixin.constructor</a></p></div></div></div><div id='method-_attachTemplateNodes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='defined-in docClass'>Sage.Platform.Mobile._Templated</a><br/><a href='source/_Templated.html#Sage-Platform-Mobile-_Templated-method-_attachTemplateNodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._Templated-method-_attachTemplateNodes' class='name expandable'>_attachTemplateNodes</a>( <span class='pre'>rootNode, getAttrFunc</span> )</div><div class='description'><div class='short'>Iterate through the template and attach functions and nodes accordingly. ...</div><div class='long'><p>Iterate through the template and attach functions and nodes accordingly.</p>\n\n<p>Map widget properties and functions to the handlers specified in\nthe dom node and it's descendants. This function iterates over all\nnodes and looks for these properties:</p>\n\n<ul>\n<li>dojoAttachPoint</li>\n<li>dojoAttachEvent</li>\n<li>waiRole</li>\n<li>waiState</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rootNode</span> : HTMLElement/Object[]<div class='sub-desc'><p>The node to search for properties. All children will be searched.</p>\n</div></li><li><span class='pre'>getAttrFunc</span> : Object<div class='sub-desc'><p>{Function} A function which will be used to obtain property for a given DomNode/Widget</p>\n</div></li></ul></div></div></div><div id='method-_fillContent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='defined-in docClass'>Sage.Platform.Mobile._Templated</a><br/><a href='source/_Templated.html#Sage-Platform-Mobile-_Templated-method-_fillContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._Templated-method-_fillContent' class='name expandable'>_fillContent</a>( <span class='pre'>source</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Relocate source contents to templated container node. ...</div><div class='long'><p>Relocate source contents to templated container node.</p>\n\n<p>this.containerNode must be able to receive children, or exceptions will be thrown.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : HTMLElement<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_onBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-_onBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-_onBlur' class='name expandable'>_onBlur</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Tests to see if the search input is empty and toggles the active styling ...</div><div class='long'><p>Tests to see if the search input is empty and toggles the active styling</p>\n</div></div></div><div id='method-_onClearClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-_onClearClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-_onClearClick' class='name expandable'>_onClearClick</a>( <span class='pre'>evt</span> )</div><div class='description'><div class='short'>Clears the search input text and attempts to re-open the keyboard ...</div><div class='long'><p>Clears the search input text and attempts to re-open the keyboard</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>Click event</p>\n</div></li></ul></div></div></div><div id='method-_onFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-_onFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-_onFocus' class='name expandable'>_onFocus</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Adds the search active styling ...</div><div class='long'><p>Adds the search active styling</p>\n</div></div></div><div id='method-_onKeyPress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-_onKeyPress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-_onKeyPress' class='name expandable'>_onKeyPress</a>( <span class='pre'>evt</span> )</div><div class='description'><div class='short'>Detects the enter/return key and fires search ...</div><div class='long'><p>Detects the enter/return key and fires <a href=\"#!/api/Sage.Platform.Mobile.SearchWidget-method-search\" rel=\"Sage.Platform.Mobile.SearchWidget-method-search\" class=\"docClass\">search</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>Key press event</p>\n</div></li></ul></div></div></div><div id='method-buildRendering' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='defined-in docClass'>Sage.Platform.Mobile._Templated</a><br/><a href='source/_Templated.html#Sage-Platform-Mobile-_Templated-method-buildRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._Templated-method-buildRendering' class='name expandable'>buildRendering</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Processes this.widgetTemplate or this.contentTemplate ...</div><div class='long'><p>Processes <code>this.widgetTemplate</code> or <code>this.contentTemplate</code></p>\n</div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Sets search text to empty and removes active styling ...</div><div class='long'><p>Sets search text to empty and removes active styling</p>\n</div></div></div><div id='method-configure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-configure' class='name expandable'>configure</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Configure allows the controller List view to overwrite properties as the passed object will be mixed in. ...</div><div class='long'><p>Configure allows the controller List view to overwrite properties as the passed object will be mixed in.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Properties to be mixed into Search Widget</p>\n</div></li></ul></div></div></div><div id='method-customSearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-customSearch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-customSearch' class='name expandable'>customSearch</a>( <span class='pre'>query</span> ) : String</div><div class='description'><div class='short'>Returns an unmodified search query which allows a user\nto type in their own where clause ...</div><div class='long'><p>Returns an unmodified search query which allows a user\nto type in their own where clause</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>Value of search box</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>query Unformatted query</p>\n</div></li></ul></div></div></div><div id='method-destroyRendering' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='defined-in docClass'>Sage.Platform.Mobile._Templated</a><br/><a href='source/_Templated.html#Sage-Platform-Mobile-_Templated-method-destroyRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._Templated-method-destroyRendering' class='name expandable'>destroyRendering</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Extends the parent implementation by also destroying attachPoints and disconnecting attachEvents ...</div><div class='long'><p>Extends the parent implementation by also destroying <em>attachPoints and disconnecting </em>attachEvents</p>\n</div></div></div><div id='method-expandExpression' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-expandExpression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-expandExpression' class='name expandable'>expandExpression</a>( <span class='pre'>expression</span> ) : String</div><div class='description'><div class='short'>Expands the passed expression if it is a function. ...</div><div class='long'><p>Expands the passed expression if it is a function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : String/Function<div class='sub-desc'><p>Returns string directly, if function it is called and the result returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>String expression.</p>\n</div></li></ul></div></div></div><div id='method-hashTagSearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-hashTagSearch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-hashTagSearch' class='name expandable'>hashTagSearch</a>( <span class='pre'>query</span> ) : String</div><div class='description'><div class='short'>Returns the search query based on a hash selector\nAny hash tags in the search are replaced by predefined search state...</div><div class='long'><p>Returns the search query based on a hash selector\nAny hash tags in the search are replaced by predefined search statements\nRemaining text not preceded by a hash will receive\nthat views normal search formatting</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>Value of search box</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>query Hash resolved query</p>\n</div></li></ul></div></div></div><div id='method-onSearchExpression' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-onSearchExpression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-onSearchExpression' class='name expandable'>onSearchExpression</a>( <span class='pre'>expression, widget</span> )</div><div class='description'><div class='short'>The event that fires when the search widget provides a search query. ...</div><div class='long'><p>The event that fires when the search widget provides a search query.\nListened to by the controlling <a href=\"#!/api/Sage.Platform.Mobile.List\" rel=\"Sage.Platform.Mobile.List\" class=\"docClass\">List View</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>widget</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sage.Platform.Mobile.SearchWidget'>Sage.Platform.Mobile.SearchWidget</span><br/><a href='source/SearchWidget.html#Sage-Platform-Mobile-SearchWidget-method-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile.SearchWidget-method-search' class='name expandable'>search</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>This function is invoked from the search button and it:\n\n\nGathers the inputted search text\nDetermines if its a custom...</div><div class='long'><p>This function is invoked from the search button and it:</p>\n\n<ul>\n<li>Gathers the inputted search text</li>\n<li>Determines if its a custom expression, hash tag, or normal search</li>\n<li>Calls the appropriate handler</li>\n<li>Fires the <a href=\"#!/api/Sage.Platform.Mobile.SearchWidget-method-onSearchExpression\" rel=\"Sage.Platform.Mobile.SearchWidget-method-onSearchExpression\" class=\"docClass\">onSearchExpression</a> event which <a href=\"#!/api/Sage.Platform.Mobile.List\" rel=\"Sage.Platform.Mobile.List\" class=\"docClass\">listens to</a>.</li>\n</ul>\n\n</div></div></div><div id='method-startup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sage.Platform.Mobile._Templated' rel='Sage.Platform.Mobile._Templated' class='defined-in docClass'>Sage.Platform.Mobile._Templated</a><br/><a href='source/_Templated.html#Sage-Platform-Mobile-_Templated-method-startup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sage.Platform.Mobile._Templated-method-startup' class='name expandable'>startup</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Extends the parent implementation by also calling startup on any attached widgets ...</div><div class='long'><p>Extends the parent implementation by also calling startup on any attached widgets</p>\n</div></div></div></div></div></div></div>"});