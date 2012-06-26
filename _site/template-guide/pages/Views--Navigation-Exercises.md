As mentioned in the View overview all Views have an `id` property. Knowing the `id` enables you to get a references to that View, and therefore it's `show()` function for navigation.

For all the exercises the id's of the views in argos-template are: `account_list`, `account_detail` and `account_edit`.

##Exercise 1: Transition
To start we will simply show the Account List View and see how `Home.js` accomplishes the same feat.

###Work it!
1. Open `index-dev.html` and then open your javascript console panel (see [Browser Setup](https://github.com/Sage/argos-template/wiki/Browser-Setup) for help).
1. Type in `App.getView('account_list').show()` and press enter.

###Result
The Home View should have moved left while the Account List View moved in from the right. Calling the `show()` function with no options calls that view to be shown.

##Exercise 2: Navigation Options
Navigation Options, or sometimes called View Options, is the object passed into the `show()` call that get stored into the views `options` property. Many Views have custom navigation options that they respond to and they will be covered under their respective help pages, for now let's try out passing `key` to a Detail View.

###Work it!
1. Go back to the Home Screen, via refresh or pressing the Home button.
1. Back in the javascript console type: `App.getView('account_detail').show({key: '001'})` and press enter.
1. You are shown the Template Inc Detail entry. Press Back or Home.
1. Now type in: `App.getView('account_detail').show({key: '002'})` and press enter.
1. You are shown the Boilerplate Co Detail entry.

##Results
This is just one example of using navigation options to change the behavior of the new view being shown. In this case Detail Views look for the `key` property and make a data request for that key and shows the results in the Detail View.

##Exercise 3: Inspecting Existing Code
We've used the commands in the console window, but let's take a peek at the existing logic in Home.js and MainToolbar.js for their uses of the same command.

###Work it!
1. Open `Home.js` and find the `createLayout` function, ignore the top half and look for the for loop and the line where it's adding an object:
    ```javascript
visible.children.push({ ... });
    ```
1. This line is adding each row and it's definition is very similar to tool items mentioned in the previous section. This structure will be a common recurring theme.
1. Note that the `action` property is set to `navigateToView` and `view` is set to the Views `id` property (see where this is going?) - scroll up to the `navigateToView` function.
1. NavigateToView is being passed `params` which has the `view` property pointing back to the views `id`. The rest of the code is the exact same command used in Exercise 1.

You may have used the Home button to return back to the main page, let's look at that next.

1. Open `MailToolbar.js` and find where it is defining the `tools` variable in the `showTools` function:
    ```javascript
tools = (tools || []).concat([ ... ]);
    ```
1. This line is appending the `back` and `home` tool items to every view
1. Look at the `home` tool item definition at the `fn` property it's set directly to `navigateToHomeView`
1. NavigateToHome View is defined near the bottom and it uses a shortcut `App.navigateToHomeView()`, which if you follow it to the definition it reads:
    ```javascript
navigateToHomeView: function() {
    var view = this.getView('home');
    if (view)
        view.show();
},
    ```
1. Which is the same code as before (as `this` is App).

###Result
Navigation within the app uses the same logic and commands that work from the console.

##Exercise 4: Navigation History
One of the main usability issues with HTML5 based apps is the lack of history context, always taking you to the base page or using funny URLs to work around the problem. Argos-SDK has a complete solution into storing, loading and using the navigation history to the fullest extent.

###Work it!
1. Open the app and click `Accounts` to be taken to the List View, then select an entry to be taken to the Detail View.
1. Now go to your javascript console and type: `ReUI.context.history` and press return.
1. Inspect the three objects within the array - it saves a lot of data about each page into the navigation history for context retrieval and navigation restoration.
1. Back in the app, click the Home button.
1. Run the same command in the console.
1. Note that the history has been "cleaned" to only show the Home View. The management system keeps the history trimmed to only the relevant tree path to recreate the navigation state. 

###Results
If you think of breadcrumbs (World > Politics > 2012 > Article#1) on a news site for example the same theory is applied to the navigation history, in order to get to Article#1 it needs the context information from each step to get back there. If you were to click World then it doesn't need to step all the way down then back up so all the history in between gets removed.

