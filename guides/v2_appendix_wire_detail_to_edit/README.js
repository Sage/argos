Ext.data.JsonP.v2_appendix_wire_detail_to_edit({"guide":"<h1>Wiring Detail to Edit View</h1>\n\n<p>Once you have an Edit View defined for an entity you will need to go back to the Detail and List view to point them in the right direction. This topic covers going from Detail to Edit</p>\n\n<p>1. Detail Views have a property named <code>editView</code> that is used to point to the correct view id upon clicking the Edit toolbar button.</p>\n\n<p>2. The Edit button is a toolbar item and is defined in the <code>createToolLayout</code> function. Open up <code>argos-sdk/src/Detail.js</code> and find the definition.</p>\n\n<p>3. Only one item is defined and its action is <code>navigateToEditView</code>:</p>\n\n<pre><code>       'tbar': [{\n             id: 'edit',\n             action: 'navigateToEditView',\n             security: <a href=\"#!/api/Sage.Platform.Mobile.Application-method-getViewSecurity\" rel=\"Sage.Platform.Mobile.Application-method-getViewSecurity\" class=\"docClass\">App.getViewSecurity</a>(this.editView, 'update')\n        }]\n</code></pre>\n\n<p>4. Scroll down to the <code>navigateToEditView()</code> function and we have this:</p>\n\n<pre><code>        navigateToEditView: function(el) {\n            var view = <a href=\"#!/api/Sage.Platform.Mobile.Application-method-getView\" rel=\"Sage.Platform.Mobile.Application-method-getView\" class=\"docClass\">App.getView</a>(this.editView);\n            if (view)\n                view.show({entry: this.entry});\n        },\n</code></pre>\n\n<p>5. The important part here is that it pulls the <code>editView</code> property and that in the navigation options it is passing <code>{entry: this.entry}</code>. To pass data to an Edit view, use the <code>entry</code> keyword and pass the entire entry (in Detail views it is stored as <code>this.entry</code>).</p>\n\n<p>6. When the user presses the Save toolbar item it will perform an UPDATE to the passed entry, it detects this by checking if we passed <code>{insert: true}</code> in the nav options, since we did not pass that, it performs the PUT update. If we did pass that in (like in <a href=\"https://github.com/Sage/argos-template/wiki/Wire-List-to-Edit\">Wire List to Edit</a>) it will do an POST insert.</p>\n","title":"Wiring Detail to Edit"});