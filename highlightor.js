(function($root) {
    function removeHighlights($context){
        if(typeof $context === 'undefined'){
            return;
        }
        var highlights = $context.querySelectorAll(".highlightor");
        for(var i=highlights.length;i>=0;i--){
            if(typeof highlights[i] !== "undefined"){
                $context.removeChild(highlights[i]);
            }
        }
    }

    function prepareHighlightor($context) {
        if (typeof $context !== "undefined") {
            var $rect = null;
            var $width, $height = null;
            var $start = {
                left: null,
                top: null
            };

            $context.addEventListener("mousedown", function(e) {
                $rect = document.createElement("div");
                $rect.className = "highlightor";
                $rect.style.position = "absolute"
                $rect.style.left = e.pageX + "px";
                $rect.style.height = "2px";

                $rect.style.backgroundColor = "transparent";
                $rect.style.border = "solid 2px red";
                $rect.style.top = e.pageY + "px";
                $start.left = e.pageX;
                $start.top = e.pageY;
                $context.appendChild($rect);
            });
            $context.addEventListener("mousemove", function(e) {
                if ($rect != null) {
                    var boundRect = $rect.getClientRects()[0];
                    var changeLeft = false;
                    if (e.pageX > boundRect.left) {
                        $width = (e.pageX - boundRect.left) + "px";
                    } else {
                        $width = ($start.left - e.pageX) + "px";
                        changeLeft = true;
                    }

                    $rect.style.width = $width;
                    $rect.style.left = changeLeft ? (e.pageX + "px") : $rect.style.left;

                    if (e.pageY > boundRect.top) {
                        $height = (e.pageY - boundRect.top) + "px";
                    } else {
                        $height = ($start.left.top - e.pageY) + "px";
                    }
                    $rect.style.height = $height;
                }
            });
            $context.addEventListener("mouseup", function(e) {
                $rect = null;
            });
        }

    }
    $root.highlightor = {
        highlight: function($context, blackOut) {
            prepareHighlightor($context);
        },
        clearhighlights: function($context){
            removeHighlights($context);
        }
    }
}).call(this, (window));