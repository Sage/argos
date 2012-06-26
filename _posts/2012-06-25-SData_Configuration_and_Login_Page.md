---
layout: guide
title: SData Configuration and Login
category: template-guide
tags: sdata template-guide configuration login authentication
---
SData is the current lifeblood of Argos-SDK, all data input and output are bound to the protocol and the base List, Detail and Edit Views process and construct the data bound calls in SData format.

##Exercise 1: Configuration
Here we will setup the service that all calls will use.

###Work it!
1. Open `argos-template/configuration/development.js`
1. The configuration module should return an object containing the `connections` key. That is where all SData connections will be defined.
1. Within the `connections` object, each key will define a service. Currently there is a `crm` service with a url of: `http://localhost/sdata/slx/dynamic/-/`
1. Edit the URL as needed to point to your SData provider, this guide will be using the SalesLogix SData provider as examples but nothing in Argos-SDK is tied to any implementation.
1. Save and open your App
1. Open the console and type `App.getService()`
1. Inspect the returned Class -- the connection we defined has been converted to a `Sage.SData.Client.SDataService` from the [SDataJavascriptClientLib](https://github.com/Sage/SDataJavaScriptClientLib/blob/master/src/SDataService.js)

###Result
All Views will be using the connection using the same call above and then use the other SDataJavascriptClientLib request types for getting and posting.

##Exercise 2: Authentication (Basic Auth)
This exercise will setup a login page and send the credentials using Basic Authentication which will be stored for future SData requests.

###Work it!
1. In `argos-template/src/Views` create a new file named `Login.js`
1. Define the module and inherit the base Edit View

   <pre class="brush: js">
define('Mobile/SalesLogix/Views/Login', [
    'dojo/_base/declare',
    'Sage/Platform/Mobile/Edit'
], function(
    declare,
    Edit
) {
    return declare('Mobile.SalesLogix.Views.Login', [Edit], {
    });
});
   </pre>

1. Add a button element to the `widgetTemplate`, while normally we would add a toolbar item for actions like this a Login page doesn't look quite right without a big ol' Login button.

   <pre class="brush: js">
        widgetTemplate: new Simplate([
            '<div id="\{\%= $.id %}" title="\{\%: $.titleText \%\}" class="panel \{\%= $.cls %}" hideBackButton="true">',
            '<div class="panel-content" data-dojo-attach-point="contentNode"></div>',
            '<button class="button actionButton" data-action="authenticate"><span>{\%\: $.logOnText \%\}</span></button>',
            '</div>'
        ]),
   </pre>

1. Pointers:
    * Use of variables for text strings. This is so localization modules can override the values, no hard-coded strings should be displayed to the user.
    * `hideBackButton="true"` on a View you can add this attr to the main div to remove the back button.
    * `<button>` elements have fuzzy touch areas on phones increasing usability
    * `data-action="function"` place this attribute on any element to have it respond to `onclick` events. The corresponding function name will then be fired in that views' context.

1. Add the localizable text variables:

   <pre class="brush: js">
        logOnText: 'Log On',
        titleText: 'My App',
   </pre>

1. Add the view properties id to login and busy to false. The busy flag is for Edit views and is tied to their `enable()` and `disable()` functions for controlling user interactions.

   <pre class="brush: js">
        id: 'login',
        busy: false,
   </pre>

1. Empty the toolbars, no need for any buttons

   <pre class="brush: js">
        createToolLayout: function() {
            return this.tools || (this.tools = {
                bbar: false,
                tbar: false
            });
        },
   </pre>

1. Create the layout with our login fields

   <pre class="brush: js">
        createLayout: function() {
            return this.layout || (this.layout = [
                {
                    name: 'username',
                    label: this.userText,
                    type: 'text'
                },
                {
                    name: 'password',
                    label: this.passText,
                    type: 'text',
                    inputType: 'password'
                }
            ]);
        },
   </pre>

1. Add the `authenticate` handler for the button:

   <pre class="brush: js">
        authenticate: function () {
            if (this.busy) return;

            var credentials = this.getValues(),
                username = credentials && credentials.username;

            if (username && /\w+/.test(username))
                this.validateCredentials(credentials);
        },
   </pre>

1. Feel free to expand the username/password check before firing a request, the above makes sure we have a name that is not just spaces.

1. Add the `validateCredentials` function

   <pre class="brush: js">
        validateCredentials: function (credentials) {
            this.disable();
            App.authenticateUser(credentials, {
                success: function(result) {
                    this.enable();
                    App.navigateToInitialView();
                },
                failure: function(result) {
                    this.enable();
                    if (result.response.status == 403)
                        alert(this.invalidUserText);
                    else
                        alert(this.serverProblemText);
                },
                scope: this
            });
        }
   </pre>

1. What the above does is disable the view (so no interactions) and pass along to the Application level authenticate user (we will add this soon), which is a wrapper for a SData request and as such it takes the normal SData request callback options.

1. Before we leave `Login.js` lets go back and add the rest of the localizable strings for our fields and messages

   <pre class="brush: js">
        logOnText: 'Log On',
        passText: 'password',
        titleText: 'My App',
        userText: 'user name',
        invalidUserText: 'The user name or password is invalid.',
        serverProblemText: 'A problem occured on the server.',
   </pre>

1. Now go into `src/Application.js` and let's add the `authenticateUser(credentials, options)` function.

   <pre class="brush: js">
        authenticateUser: function(credentials, options) {
            var service = this.getService()
                .setUserName(credentials.username)
                .setPassword(credentials.password || '');

            var request = new Sage.SData.Client.SDataServiceOperationRequest(service)
                .setContractName('system')
                .setOperationName('getCurrentUser');

            request.execute({}, {
                success: lang.hitch(this, this.onAuthenticateUserSuccess, credentials, options.success, options.scope),
                failure: lang.hitch(this, this.onAuthenticateUserFailure, options.failure, options.scope),
                aborted: lang.hitch(this, this.onAuthenticateUserFailure, options.failure, options.scope)
            });
        },
   </pre>

1. The key point here is that it is creating a `Sage.SData.Client.SDataServiceOperationRequest` and in the case of SalesLogix SData using the `system` contract and the `getCurrentUser` operation which ends up looking like:

   <pre class="brush: js">
http://localhost/sdata/slx/system/-/$service/getCurrentUser?format=json
   </pre>

   It is also important to note that the `getService()` calls returns the _instance_ of the service meaning any changes will affect all future use of the service. Here was are setting the username and password meaning all future calls with this service will use this credential.

1. To process the returned response we have the `onAuthenticateUserSuccess` function which is passed the `credentials`, `options.success` callback and `options.scope`. It's last parameter will be the SData result as `dojo.hitch` prepends the argument list.

   <pre class="brush: js">
        onAuthenticateUserSuccess: function(credentials, callback, scope, result) {
            var user = {
                '$key': lang.trim(result['response']['userId']),
                '$descriptor': result['response']['prettyName'],
                'UserName': result['response']['userName']
            };

            this.context['user' ] = user;
            this.context['roles'] = result['response']['roles'];
            this.context['securedActions'] = result['response']['securedActions'];

            if (this.context['securedActions'])
            {
                array.forEach(this.context['securedActions'], function(item) {
                    this[item] = true;
                }, (this.context['userSecurity'] = {}));
            }
            
            if (callback)
                callback.call(scope || this, {user: user});
        },
   </pre>

1. That's a lot of code but it really breaks down to three parts:

   1. Parse the response to get the Users details and store that information into the App.context object
   1. Flatten the securedActions array into an object for quicker lookups
   1. Call the callback, which passes control back over to `Login.js`, where it gets `enable()`ed and calls `App.navigateToInitialView()`.

      * Implementation of parsing the user details and security will differ on your SData provider.

1. When authentication fails we want to remove the user/pass from the service instance just to be on the safe side:

   <pre class="brush: js">
        onAuthenticateUserFailure: function(callback, scope, response) {
            var service = this.getService();
            if (service)
                service
                    .setUserName(false)
                    .setPassword(false);

            if (callback)
                callback.call(scope || this, {response: response});
        },
   </pre>

1. In which the callback will alert the user with an error message as defined in `Login.js`.

1. Before we go and test we need to make sure that the login page is the first one shown instead of the home page.

1. Still in `Application.js` at the very bottom create the function `navigateToLoginView` and have it show our login view:
   <pre class="brush: js">
        navigateToLoginView: function() {
            var view = this.getView('login');
            if (view)
                view.show();
        }
   </pre>

1. Scroll up to the `run()` function and change the navigate to home to navigate to login:
   <pre class="brush: js">
        run: function() {
            this.inherited(arguments);
            this.navigateToLoginView();
        },
   </pre>

1. Save and run your app, logging in with a valid user in your database (example: "lee" no pass).

1. To verify, after logging in type in the console: `App.context.user` and make sure you see the returned information.

###Result
You now have a working authentication system with login page. This could be further expanded with a remember me (storing credentials), or any other hooks you need for getting the initial user information. From here all the List, Detail and Edit views are "live" meaning you can set their view properties to point to various SData endpoints.


