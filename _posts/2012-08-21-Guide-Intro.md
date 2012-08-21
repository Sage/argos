---
layout: guide
title: Guide-Intro
category: template-guide
tags: 
---
#Argos-Template
##Guide

By the end of this guide you will have an enterprise data-driven mobile application with the following:

* A Home Navigation page;
* Two List, or Collection, Views bound to different entities;
* A Detail View showing in depth properties, a single quick action and a link to a related List View; and
* A dual-purpse Edit View used to create and update entities.

As you are following along the guide will cover topics such as: Configuring SData, AMD loading and Simplates. From start to finish the guide should take around 15-20 minutes to complete and there are many more advanced topics to address specific implementations.


##Setup
The Argos framework is meant to serve in an environment of multiple on-going applications and their modules, as such the folder structure allows a single copy of Argos-SDK. You may opt for a different structure but the following provides an extensible foundation.

1\. Create a folder called `mobile` and within that, create a folder called `argos-sdk` and a folder called `products`.

2\. You should now have `\mobile`, `\mobile\argos-sdk` and `\mobile\products`. 

![Folder Structure](http://sage.github.com/argos/images/template-guide/setup_folders.png)

3\. All applications will be a new folder within `products`.

4\. Download the SDK and extract the zip into the `argos-`sdk` folder: [https://github.com/Sage/argos-sdk/downloads](https://github.com/Sage/argos-sdk/downloads) 

5\. A bare-bones app that this guide will use as a kickstarter has been created as Argos-Template. Download it from here: [https://github.com/Sage/argos-template/downloads](https://github.com/Sage/argos-template/downloads)

6\. Create a new folder under `products` named `argos-template` and place the extracted contents there.

7\. Within the `argos-template` folder open `index-dev.html`.

![Home View](http://sage.github.com/argos/images/template-guide/intro_home.png)


Congratulations you have your first Argos app!

###Next Steps

[Overview](Guide-Overview.html) - for an explanation of all files and folders currently in `argos-template`.

Or jump straight into setting up your data provider with [Configuring SData Connection](Guide-Configuring-SData-Connection.html).



###Additional Info

####Local Files
Running `index-dev.html` off the local file system may not always work as files loaded in this way is treated as a security concern in certain browsers. You should setup a local server (ISS, WAMP, XAMPP, etc) and run from localhost.

####Cache
Be aware that modern browsers cache things heavily and you should make sure that when opening or refreshing your app it is always the latest code. Many use "private" browsing features to disable cookies and cache. If using a local server make sure it is also set to not cache any files. 
