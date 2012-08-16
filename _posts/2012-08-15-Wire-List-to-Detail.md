---
layout: guide
title: Wire-List-to-Detail
category: template-guide
tags: 
---
#Wire List to Detail
In order for Detail Views to work they need to be passed a `key` in the navigation options. This topic covers setting up an existing List View for the same entity as a Detail View so when a List row is clicked it will pass the `key` to the right Detail View.

##Exercise 1: Getting from the List View
First let's inspect how the List View shows the Detail View which will leads us to the first way of showing data in Detail -- passing a key.

###Work it!
1\. Fire up your app, and go to your List view. Inspect the rendered HTML of a row, it should look something like:

</pre>html
<li data-action="activateEntry" data-key="MOVIE0000001" data-descriptor="Jaws">
    <button data-action="selectEntry" class="list-item-selector button">
        <img src="content/images/icons/OK_24.png" class="icon">
    </button>
    <div class="list-item-content"><h3>Jaws (1975)</h3><h4>Do you like fish? Well, he likes you too...</h4></div>
</li>
</pre>

2\. The important part here to note the `data-key` is the `$key` of the entry and if you look in `mobile/argos-sdk/src/List.js` and down to...

<pre class="brush: js">
navigateToDetailView: function(key, descriptor) {
    var view = App.getView(this.detailView);
    if (view)
        view.show({
            descriptor: descriptor,
            key: key
        });
},
</pre>

3\. In the navigation options it is passing the `key` and `descriptor`. Also the view it is going to is defined at List.detailView. If following from Creating a Simple Detail View then open `argos-template/src/Views/Account/List.js` and edit the `detailView` property to be the id of your newly created simple detail view:

<pre class="brush: js">
    detailView: 'account_detail'
</pre>

4\. Without going into too great of detail (pun not intended!) to quickly go over how the Detail view requests data when it is shown with a `key` is to take a look at `argos-sdk/src/Detail.js` and at the `refreshRequiredFor()` function.

5\. This function is called during transition if it returns true then the views `refresh()` function will be called, and the following part looks for a new key in navigation options:

<pre class="brush: js">
 if (this.options.key !== options.key) return true;
</pre>

6\. If you go down to the `refresh()` function it calls `requestData()` and that does the whole request, process, place cycle.

7\. Save and load your app.

###Results
You now have a working List view with an entity and clicking each item in a List takes you to the single Detail view that gets refreshed with proper data each time.