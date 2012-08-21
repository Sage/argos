---
layout: guide
title: Guide-Configuring-SData-Connection
category: template-guide
tags: 
---
#Configuaring SData Connection

SData is the lifeblood of Argos-SDK, all data input and output are bound to the protocol and the base List, Detail and Edit Views process and construct the data bound calls in SData format.

To set up the service that all calls will use we will point to a public provider with sample data and test user.

1\. Open `argos-template/configuration/development.js`

<pre class="brush: js">
define('configuration/development', ['Mobile/Template/ApplicationModule'], function(ApplicationModule) {

    return {
        modules: [
            new ApplicationModule()
        ],
        connections: {
            'crm': {
                isDefault: true,
                offline: true,
                url: '',
                json: true
            }
        }
    };

});
</pre>

2\. The configuration should return an object containing the `connections` key. That is where all SData connections will be defined.

3\. Within the `connections` object, each key will define a service. Currently there is a `crm` service with an empty url, edit it to point to our sample provider: 

<pre class="brush: js">
http://50.16.242.109/sdata/slx/dynamic/-/
</pre>

4\. Now add two new keys: username and password and set them to `'lee'` and `''` (blank) respectively:

<pre class="brush: js">
        connections: {
            'crm': {
                isDefault: true,
                offline: true,
                userName: 'lee',
                password: '',
                url: 'http://50.16.242.109/sdata/slx/dynamic/-/',
                json: true
            }
        }
</pre>

5\. SData is fully configured and we are now ready to start creating views that retrieve data.

###Next Steps

Head over to [Creating a Simple List View](Guide-Create-a-Simple-List-View.html) so that we may utilize our SData connection.
