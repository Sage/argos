Ext.data.JsonP.v2_beyond_the_guide_localization({"guide":"<h1>How to Localize Strings and Formats</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/v2_beyond_the_guide_localization-section-1'>Example</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_localization-section-2'>Making the Localization Module</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_localization-section-3'>Conventions</a></li>\n<li><a href='#!/guide/v2_beyond_the_guide_localization-section-4'>File Placement and Loading</a></li>\n</ol>\n</div>\n\n<p>All throughout the guide and topics you may have seen <code>this.labelText</code> instead of a string. This is because every one of those string needs to be localizable. The Argos way of achieving that goal is to make those strings properties of the view they belong to, then at application startup a localization module is ran that may override any of the view properties replacing them with the localized version.</p>\n\n<h2 id='v2_beyond_the_guide_localization-section-1'>Example</h2>\n\n<h3>View</h3>\n\n<pre><code>// (src/Views/Account/Detail.js)\nreturn declare('Mobile.MyApp.Views.Account.Detail', [Detail], {\n   // Localization\n   accountText: 'Account',\n   descriptionText: 'Description',\n...\n</code></pre>\n\n<h3>Localization Module</h3>\n\n<pre><code>// (localization/myapp/de.js)\nlocalize('Mobile.MyApp.Views.Account.Detail', {\n   accountText: 'Konto',\n   descriptionText: 'Beschreibung'\n});\n</code></pre>\n\n<h2 id='v2_beyond_the_guide_localization-section-2'>Making the Localization Module</h2>\n\n<p>Now you may make that localization file by hand, carefully copying all the strings and formats - by hey! We are programmers. Meaning if you follow the conventions you may utilize a Ruby localization script that extracts all the strings into a handy XML file for the translation team. Running the same script on the translated XML file converts it into the localization module.js as seen above.</p>\n\n<p>Github: <a href=\"https://github.com/SageScottsdalePlatform/argos-localizer\">Argos-Localizer</a></p>\n\n<p>Just follow the <code>README.md</code> file in argos-localizer.</p>\n\n<h2 id='v2_beyond_the_guide_localization-section-3'>Conventions</h2>\n\n<p>In order to successfully use the tool you have to make sure:</p>\n\n<p>1. All localizable text property names end with <code>Text</code>: <code>accountText</code>, <code>userNameText</code>, <code>loginText</code>.</p>\n\n<p>2. All localizable format property names end with <code>Format</code>: <code>dateTimeFormat</code>, <code>weekFormat</code>, <code>hourOnlyFormat</code>.</p>\n\n<p>The distinction is to help the translation as pure text may go through a translation tool whereas the format needs special care to utilize whatever <code>printf</code> type convention is happening (datejs for date formats in Argos).</p>\n\n<h2 id='v2_beyond_the_guide_localization-section-4'>File Placement and Loading</h2>\n\n<p>Once you have a localization file made, the name of the file needs to match the <a href=\"http://www.iso.org/iso/country_codes.htm\">ISO 3166</a> country-language codes. When loading via <code>index.aspx</code> the server retrieves the users region and attempts to find the \"specific\" localization file such as \"de-DE.js\", failing that it looks for the \"generic\" or country only: \"de.js\" and as a fallback \"en.js\".</p>\n\n<p>Now that it is named properly you should place it under the top level localization file and then the name you've chosen as a namespace:</p>\n\n<p><code>localization/template/de.js</code></p>\n\n<p>As mentioned early if you are using <code>index.aspx</code> then it is loaded dynamically, if you are using <code>index.html</code> then you need to modify the following lines to add the needed locale:</p>\n\n<pre><code>require([application].concat(configuration), function(application, configuration) {\n    var localization = [\n        'localization/en',\n        'localization/Template/en'\n    ];\n    ...\n// to\n\nrequire([application].concat(configuration), function(application, configuration) {\n    var localization = [\n        'localization/de',\n        'localization/Template/de'\n    ];\n    ...\n</code></pre>\n\n<p>Note that the file directly in the localization folder is the localization file that controls currency and numbers - decimals, symbols, comma's, etc.</p>\n","title":"Export and Import Locales"});