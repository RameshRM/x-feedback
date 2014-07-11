x-feedback
================

Feedback component inspired by "Google Maps" feedback mechanism

### Pre Requistes

1. [Get Polymer](http://www.polymer-project.org/docs/start/getting-the-code.html)

``` bower install polymer --save ```

2. Add Polymer Platform JS script in your page
```HTML
<script src="../bower_components/platform/platform.js"></script>
```

### Installation

Install `x-feedback` using bower

```
bower install x-feedback --save
```

### Usage

Polymer aka WebComponents uses ```<link import>``` to reference components

In your layout / html page add the following directive

#### Import Statement

```
<head>
 <link rel="import" href="[relative path bowercomponents]/x-feedback/feedback/feedback.html">
</head>
```

#### Declarative Markup

Add ```x-feedback``` markup to your page

```
<x-feedback></x-feedback>
```

#### Eventing / Callbacks

```polymer-feedback``` propagates custom eventing the host document object.  The consuming page can isten for the custom events and act upon.

##### onFeedbackInit
```JavaScript
    document.addEventListener("x-feedback-init", function(e){
        e.detail; /*** Carries the data for feedback initialization state ***/
    });
```

##### onFeedbackComplete

```JavaScript
    document.addEventListener("x-feedback-complete", function(e){
        e.detail; /*** Carries the data for feedback completed state ***/
    });
```

##### onFeedbackCancelled


```JavaScript
    document.addEventListener("x-feedback-cancelled", function(e){
        e.detail; /*** Carries the data for feedback cancelled state ***/
    });
```

### Customizeable Attributes

Feedback component provides options to customize the component.  Following are the list of attributes supported.

| Attribute Name     | Type      | Description
|--------------------|-----------|-------------
| feedbackBtnText    | String    | Button text to be displayed in "Feedback / Comments" button. Default is "Feedback"
| feedbackTitle      | String    | Feedback modal title, Default is "Feedback"
| cancelBtnText      | String    | Cancel Button Text, default is "cancel"
| feedbackDesc       | String    | Description for Feedback form.
| submitBtnText      | String    | Submit Button text, default is "send"
| position           | String    | Position of "Feedback" button, possible values are `rightfix, leftfix, toprightfix, bottomleftfix, bottomrightfix`


### Acknowledgement

Thanks to Eric Bidelman , for sharing ScreenShotJS
