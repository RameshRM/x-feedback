polymer-feedback
================

Feedback component inspired by "Google Maps" feedback mechanism

### Installation

Install `polymer-feedback` using bower

```
bower install polymer-feedback --save
```

### Usage

Polymer aka WebComponents uses ```<link import>``` to reference components

In your layout / html page add the following directive

#### Import Statement

```
<head>
 <link rel="import" href="[relative path bowercomponents]/polymer-feedback/feedback/feedback.html">
</head>
```

#### Declarative Markup

Add ```polymer-feedback``` markup to your page

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
