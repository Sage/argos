---
layout: guide
title: Signature-Field
category: template-guide
tags: 
---
#Signature Field
The Signature Field is a specialized [Editor Field](Editor-Field.html) that, along with the Signature View, uses two HTML5 Canvas's to present a drawable view (Signature view) and a mini-preview (Signature Field).

To go over the workflow:
1\. User presses the `(...)` button to be taken to the Signature view.

2\. On the Signature view is a full-screen canvas that is interact-able, with Undo, Erase and Save buttons.

3\. As a signature is being drawn it records all the points as x, y coordinates. On Save the points are compressed to create a vector-like representation of the signature going from several hundred points to forty or fifty.

4\. The compressed points array is passed back to the field. The field then renders the "vector" to an image field using Format.js's `imageFromVector` which creates a temporary canvas, draws a line between each point and converts the canvas data to a png data uri.

The data that is stored/sent to SData is a JSON-stringified version of the array of points, not the data uri.

#Simple Example
<pre class="brush: js">
{
   name: 'Signature',
   property: 'Signature',
   label: this.signatureText,
   type: 'signature',
   view: 'signature_edit'
}
</pre>

##Additional Properties
* `config` - if you are overriding the default config you must include all the keys. The keys are:
   * `scale` - Default 1. Determines scale at which to render.
   * `lineWidth` - Default 1. Determines the width of the "pen" stroke.
   * `penColor` - Default 'blue'. Determines pen color, uses HTML colors.
   * `width` - Default 180. Default width of the canvas in the Signature View, will be scaled to full screen.
   * `height` - Default 50. Default height of the canvas in the Signature View, will be scaled to full screen.

* `titleText` - the text to be used as the title in the Signature View. Defaults to `'Signature'`.
* `signatureText` - the text placed inside the Signature Fields button. Defaults to `'...'`.

