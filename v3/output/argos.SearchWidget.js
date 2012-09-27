Ext.data.JsonP.argos_SearchWidget({"tagname":"class","name":"argos.SearchWidget","extends":null,"mixins":["argos._TemplatedWidgetMixin"],"alternateClassNames":["SearchWidget"],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-argos.SearchWidget","code_type":"dojo_define","members":{"cfg":[],"property":[{"name":"_attachTemplateNodes","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{"private":true},"id":"property-_attachTemplateNodes"},{"name":"_beforeFillContent","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{},"id":"property-_beforeFillContent"},{"name":"_fillContent","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{"private":true},"id":"property-_fillContent"},{"name":"_setLabelAttr","tagname":"property","owner":"argos.SearchWidget","meta":{"private":true},"id":"property-_setLabelAttr"},{"name":"_setQueryValueAttr","tagname":"property","owner":"argos.SearchWidget","meta":{"private":true},"id":"property-_setQueryValueAttr"},{"name":"destroyRendering","tagname":"property","owner":"argos._TemplatedWidgetMixin","meta":{"private":false},"id":"property-destroyRendering"},{"name":"queryNode","tagname":"property","owner":"argos.SearchWidget","meta":{"private":false},"id":"property-queryNode"},{"name":"searchText","tagname":"property","owner":"argos.SearchWidget","meta":{},"id":"property-searchText"},{"name":"widgetTemplate","tagname":"property","owner":"argos.SearchWidget","meta":{},"id":"property-widgetTemplate"}],"method":[{"name":"constructor","tagname":"method","owner":"argos._TemplatedWidgetMixin","meta":{"private":false},"id":"method-constructor"},{"name":"_onBlur","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-_onBlur"},{"name":"_onClearClick","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-_onClearClick"},{"name":"_onFocus","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-_onFocus"},{"name":"_onKeyPress","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-_onKeyPress"},{"name":"buildRendering","tagname":"method","owner":"argos._TemplatedWidgetMixin","meta":{},"id":"method-buildRendering"},{"name":"clear","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-clear"},{"name":"onClear","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-onClear"},{"name":"onQuery","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-onQuery"},{"name":"search","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-search"},{"name":"setLabel","tagname":"method","owner":"argos.SearchWidget","meta":{},"id":"method-setLabel"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":16,"files":[{"filename":"SearchWidget.js","href":"SearchWidget.html#argos-SearchWidget"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>SearchWidget</div><h4>Mixins</h4><div class='dependency'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='docClass'>argos._TemplatedWidgetMixin</a></div><h4>Files</h4><div class='dependency'><a href='source/SearchWidget.html#argos-SearchWidget' target='_blank'>SearchWidget.js</a></div></pre><div class='doc-contents'><p>SearchWidget is a base widget that provides a search area and placeholder/watermark text. It also listens for\nkeyboard enter/return and passes the search expression to <a href=\"#!/api/argos.SearchWidget-method-onQuery\" rel=\"argos.SearchWidget-method-onQuery\" class=\"docClass\">onQuery</a> which should be connected to in\nthe view.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_attachTemplateNodes' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='defined-in docClass'>argos._TemplatedWidgetMixin</a><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-_attachTemplateNodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-_attachTemplateNodes' class='name not-expandable'>_attachTemplateNodes</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_beforeFillContent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='defined-in docClass'>argos._TemplatedWidgetMixin</a><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-_beforeFillContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-_beforeFillContent' class='name expandable'>_beforeFillContent</a><span> : Object</span></div><div class='description'><div class='short'>Since there is no way to directly override only the template rendering in Dojo, include\nthe necessary functions from ...</div><div class='long'><p>Since there is no way to directly override only the template rendering in Dojo, include\nthe necessary functions from <code>_TemplatedMixin</code> in order to minimize the amount of code that\nneeds to be updated when Dojo itself is updated.</p>\n</div></div></div><div id='property-_fillContent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='defined-in docClass'>argos._TemplatedWidgetMixin</a><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-_fillContent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-_fillContent' class='name not-expandable'>_fillContent</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_setLabelAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-property-_setLabelAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-property-_setLabelAttr' class='name expandable'>_setLabelAttr</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{node: 'labelNode', type: 'innerHTML'}</code></p></div></div></div><div id='property-_setQueryValueAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-property-_setQueryValueAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-property-_setQueryValueAttr' class='name expandable'>_setQueryValueAttr</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{node: 'queryNode', type: 'attribute', attribute: 'value'}</code></p></div></div></div><div id='property-destroyRendering' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='defined-in docClass'>argos._TemplatedWidgetMixin</a><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-property-destroyRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-property-destroyRendering' class='name not-expandable'>destroyRendering</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-queryNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-property-queryNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-property-queryNode' class='name not-expandable'>queryNode</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-searchText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-property-searchText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-property-searchText' class='name expandable'>searchText</a><span> : String</span></div><div class='description'><div class='short'>Text that is used when no value is in the search box - \"placeholder\" text. ...</div><div class='long'><p>Text that is used when no value is in the search box - \"placeholder\" text.</p>\n<p>Defaults to: <code>'Search'</code></p></div></div></div><div id='property-widgetTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-property-widgetTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-property-widgetTemplate' class='name not-expandable'>widgetTemplate</a><span> : <a href=\"#!/api/Simplate\" rel=\"Simplate\" class=\"docClass\">Simplate</a></span></div><div class='description'><div class='short'><p>Simple that defines the HTML Markup</p>\n</div><div class='long'><p>Simple that defines the HTML Markup</p>\n<p>Overrides: <a href='#!/api/argos._TemplatedWidgetMixin-property-widgetTemplate' rel='argos._TemplatedWidgetMixin-property-widgetTemplate' class='docClass'>argos._TemplatedWidgetMixin.widgetTemplate</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='defined-in docClass'>argos._TemplatedWidgetMixin</a><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/argos._TemplatedWidgetMixin-method-constructor' class='name expandable'>argos.SearchWidget</a>( <span class='pre'></span> ) : <a href=\"#!/api/argos._TemplatedWidgetMixin\" rel=\"argos._TemplatedWidgetMixin\" class=\"docClass\">argos._TemplatedWidgetMixin</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/argos._TemplatedWidgetMixin\" rel=\"argos._TemplatedWidgetMixin\" class=\"docClass\">argos._TemplatedWidgetMixin</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/argos.View-method-constructor' rel='argos.View-method-constructor' class='docClass'>argos.View.constructor</a></p></div></div></div><div id='method-_onBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-_onBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-_onBlur' class='name expandable'>_onBlur</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Tests to see if the search input is empty and toggles the active styling ...</div><div class='long'><p>Tests to see if the search input is empty and toggles the active styling</p>\n</div></div></div><div id='method-_onClearClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-_onClearClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-_onClearClick' class='name expandable'>_onClearClick</a>( <span class='pre'>evt</span> )</div><div class='description'><div class='short'>Clears the search input text and attempts to re-open the keyboard ...</div><div class='long'><p>Clears the search input text and attempts to re-open the keyboard</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>Click event</p>\n</div></li></ul></div></div></div><div id='method-_onFocus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-_onFocus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-_onFocus' class='name expandable'>_onFocus</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Adds the search active styling ...</div><div class='long'><p>Adds the search active styling</p>\n</div></div></div><div id='method-_onKeyPress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-_onKeyPress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-_onKeyPress' class='name expandable'>_onKeyPress</a>( <span class='pre'>evt</span> )</div><div class='description'><div class='short'>Detects the enter/return key and fires search ...</div><div class='long'><p>Detects the enter/return key and fires <a href=\"#!/api/argos.SearchWidget-method-search\" rel=\"argos.SearchWidget-method-search\" class=\"docClass\">search</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Event<div class='sub-desc'><p>Key press event</p>\n</div></li></ul></div></div></div><div id='method-buildRendering' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/argos._TemplatedWidgetMixin' rel='argos._TemplatedWidgetMixin' class='defined-in docClass'>argos._TemplatedWidgetMixin</a><br/><a href='source/_TemplatedWidgetMixin.html#argos-_TemplatedWidgetMixin-method-buildRendering' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos._TemplatedWidgetMixin-method-buildRendering' class='name expandable'>buildRendering</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Processes this.widgetTemplate or this.contentTemplate ...</div><div class='long'><p>Processes <code>this.widgetTemplate</code> or <code>this.contentTemplate</code></p>\n</div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Sets search text to empty and removes active styling ...</div><div class='long'><p>Sets search text to empty and removes active styling</p>\n</div></div></div><div id='method-onClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-onClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-onClear' class='name expandable'>onClear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Event that is fired on clear, a View may listen to this event. ...</div><div class='long'><p>Event that is fired on clear, a View may listen to this event.</p>\n</div></div></div><div id='method-onQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-onQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-onQuery' class='name expandable'>onQuery</a>( <span class='pre'>query</span> )</div><div class='description'><div class='short'>Event that is fired on search, a View should bind this function to a listener. ...</div><div class='long'><p>Event that is fired on search, a View should bind this function to a listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>Search text inputted</p>\n</div></li></ul></div></div></div><div id='method-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-search' class='name expandable'>search</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>This function is invoked from the search button and it:\n\n\nGathers the inputted search text; and\nFires the onQuery eve...</div><div class='long'><p>This function is invoked from the search button and it:</p>\n\n<ul>\n<li>Gathers the inputted search text; and</li>\n<li>Fires the <a href=\"#!/api/argos.SearchWidget-method-onQuery\" rel=\"argos.SearchWidget-method-onQuery\" class=\"docClass\">onQuery</a> event which <a href=\"#!/api/argos.List-method-_onSearchQuery\" rel=\"argos.List-method-_onSearchQuery\" class=\"docClass\">List</a> listens to by default.</li>\n</ul>\n\n</div></div></div><div id='method-setLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='argos.SearchWidget'>argos.SearchWidget</span><br/><a href='source/SearchWidget.html#argos-SearchWidget-method-setLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/argos.SearchWidget-method-setLabel' class='name expandable'>setLabel</a>( <span class='pre'>text</span> )</div><div class='description'><div class='short'>Sets the search placeholder/watermark text ...</div><div class='long'><p>Sets the search placeholder/watermark text</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>Text to be shown when no value is entered</p>\n</div></li></ul></div></div></div></div></div></div></div>"});