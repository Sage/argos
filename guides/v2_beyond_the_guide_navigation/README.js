Ext.data.JsonP.v2_beyond_the_guide_navigation({"guide":"<h1>Navigation</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/v2_beyond_the_guide_navigation-section-1'>Navigation Options</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_navigation-section-2'>Inspecting Home Navigation</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_navigation-section-3'>Navigation History</a></li>\n</ol>\n</div>\n\n<p>Navigation is an important role in a single page app as it needs to not only handle showing/hiding but also the context and history.</p>\n\n<p>All Views have an <code>id</code> property. Knowing the <code>id</code> enables you to get a references to that View, and therefore it's <code>show()</code> function for navigation.</p>\n\n<p>This guide assumes you have completed <a href=\"#!/guides/v2-template-guide\">Argos-Template Guide</a>. For all the exercises the id's of the views in argos-template are: <code>account_list</code>, <code>account_detail</code> and <code>account_edit</code>.</p>\n\n<h2 id='v2_beyond_the_guide_navigation-section-1'>Navigation Options</h2>\n\n<p>Navigation Options, or sometimes called View Options, is the object passed into the <code>show()</code> call that get stored into the views <code>options</code> property. Many Views have custom navigation options that they respond to and they will be covered under their respective help pages, for now let's try out passing <code>key</code> to a Detail View.</p>\n\n<p>1. Go back to the Home Screen, via refresh or pressing the Home button.</p>\n\n<p>2. Back in the javascript console type: <code><a href=\"#!/api/Sage.Platform.Mobile.Application-method-getView\" rel=\"Sage.Platform.Mobile.Application-method-getView\" class=\"docClass\">App.getView</a>('account_detail').show({key: 'AGHEA0002677'})</code> and press enter.</p>\n\n<p>3. You are shown the Template Inc Detail entry. Press Back or Home.</p>\n\n<p>4. Now type in: <code><a href=\"#!/api/Sage.Platform.Mobile.Application-method-getView\" rel=\"Sage.Platform.Mobile.Application-method-getView\" class=\"docClass\">App.getView</a>('account_detail').show({key: 'AA2EK0013031'})</code> and press enter.</p>\n\n<p>5. You are shown the Boilerplate Co Detail entry.</p>\n\n<p>This is just one example of using navigation options to change the behavior of the new view being shown. In this case Detail Views look for the <code>key</code> property and make a data request for that key and shows the results in the Detail View.</p>\n\n<h2 id='v2_beyond_the_guide_navigation-section-2'>Inspecting Home Navigation</h2>\n\n<p>We've used the commands in the console window, but let's take a peek at the existing logic in <code>Home.js</code> and <code>MainToolbar.js</code> for their uses of the same command.</p>\n\n<p>1. Open <code>products\\argos-template\\src\\Views\\Home.js</code> in a text editor and find the <code>createLayout</code> function, ignore the top half and look for the for loop and the line where it's adding an object:</p>\n\n<pre><code>visible.children.push({ ... });\n</code></pre>\n\n<p>2. This line is adding each row and it's definition is very similar to tool items mentioned in the previous section. This structure will be a common recurring theme.</p>\n\n<p>3. Note that the <code>action</code> property is set to <code>navigateToView</code> and <code>view</code> is set to the Views <code>id</code> property (see where this is going?) - scroll up to the <code>navigateToView</code> function.</p>\n\n<p>4. NavigateToView is being passed <code>params</code> which has the <code>view</code> property pointing back to the views <code>id</code>. The rest of the code is the exact same command used in Exercise 1.</p>\n\n<p>You may have used the Home button to return back to the main page, let's look at that next.</p>\n\n<p>1. Open <code>MailToolbar.js</code> and find where it is defining the <code>tools</code> variable in the <code>showTools</code> function:</p>\n\n<pre><code>tools = (tools || []).concat([ ... ]);\n</code></pre>\n\n<p>2. This line is appending the <code>back</code> and <code>home</code> tool items to every view</p>\n\n<p>3. Look at the <code>home</code> tool item definition at the <code>fn</code> property it's set directly to <code>navigateToHomeView</code></p>\n\n<p>4. NavigateToHome View is defined near the bottom and it uses a shortcut <code>App.navigateToHomeView()</code>, which if you follow it to the definition it reads:</p>\n\n<pre><code>navigateToHomeView: function() {\n    var view = this.getView('home');\n    if (view)\n        view.show();\n},\n</code></pre>\n\n<p>5. Which is the same code as before (as <code>this</code> is App).</p>\n\n<p>Navigation within the app uses the same logic and commands that work from the console.</p>\n\n<h2 id='v2_beyond_the_guide_navigation-section-3'>Navigation History</h2>\n\n<p>One of the main usability issues with HTML5 based apps is the lack of history context, always taking you to the base page or using funny URLs to work around the problem. Argos-SDK has a complete solution into storing, loading and using the navigation history to the fullest extent.</p>\n\n<p>1. Open the app and click <code>Accounts</code> to be taken to the List View, then select an entry to be taken to the Detail View.</p>\n\n<p>2. Now go to your javascript console and type: <code>ReUI.context.history</code> and press return.</p>\n\n<p>3. Inspect the three objects within the array - it saves a lot of data about each page into the navigation history for context retrieval and navigation restoration.</p>\n\n<p>4. Back in the app, click the Home button.</p>\n\n<p>5. Run the same command in the console.</p>\n\n<p>6. Note that the history has been \"cleaned\" to only show the Home View. The management system keeps the history trimmed to only the relevant tree path to recreate the navigation state.</p>\n\n<p>If you think of breadcrumbs (World > Politics > 2012 > Article#1) on a news site for example the same theory is applied to the navigation history, in order to get to Article#1 it needs the context information from each step to get back there. If you were to click World then it doesn't need to step all the way down then back up so all the history in between gets removed.</p>\n","title":"Navigation"});