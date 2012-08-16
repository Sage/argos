---
layout: guide
title: Configuring-SData-Connection
category: template-guide
tags: 
---
SData is the lifeblood of Argos-SDK, all data input and output are bound to the protocol and the base List, Detail and Edit Views process and construct the data bound calls in SData format.

##Exercise 1: Configuration
Here we will setup the service that all calls will use, it will point to a public provider with sample data and test user.

###Work it!
1\. Open `argos-template/configuration/development.js`

2\. The configuration module should return an object containing the `connections` key. That is where all SData connections will be defined.

3\. Within the `connections` object, each key will define a service. Currently there is a `crm` service with a blank url, edit to point to our sample provider: 

<pre class="brush: js">
http://localhost/sdata/slx/dynamic/-/
</pre>

4\. Now add two new keys: username and password and set them to `'argos'` and `'mobile'` respectively:

<pre class="brush: js">
        connections: {
            'crm': {
                isDefault: true,
                offline: true,
                username: 'argos',
                password: 'mobile',
                url: 'http://localhost/sdata/slx/dynamic/-/',
                json: true
            }
        }
</pre>

5\. Save and open your App by launching `argos-template/src/index-dev.html` in your browser.

6\. You should see an empty Home page with a title bar. Not very exciting, but after a quick overview of what is provided out of the box we will get right to creating views.

###Result
SData is configured and ready to rumble.

