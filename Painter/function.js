//creator Lee Yahav

window.onload = function () {
    // localStorage.clear();
    eventsOperation();
    openLastImage();
}

var shape = function (shapeType) {
    var width;
    var height;
    var left;
    var top;
    var canvasObj;
    var shapeObj;
    var clickingOnCorner = false;
    var clicking = false;

    function randNum(number) {
        return Math.floor(Math.random() * number);
    }

    function randNumForShape(shapeMinSise, shapeMaxSise) {
        return randNum(shapeMaxSise - shapeMinSise) + shapeMinSise;
    }

    function randomColor() {
        var red = randNum(255);
        var green = randNum(255);
        var blue = randNum(255);
        return "rgb(" + red + "," + green + "," + blue + ")";
    }

    function sameCornersOfMe(shape, corners) {
        var children = shape.children;
        for (var i = 0; i < children.length; i++) {
            if (corners[i] !== children[i]) {
                return false;
            }
        }
        return true;
    }

    function removLastCorner(shape) {
        var shapes = document.getElementsByClassName("markItem");
        var len = shapes.length;
        for (var i = 0; i < len; i++) {
            shapes[0].classList.toggle("markItem");
        }
        var corners = document.getElementsByClassName("corner");
        var len = corners.length;
        for (var i = 0; i < len; i++) {
            corners[0].classList.toggle("corner");
        }
    }

    function createSides(shape) {
        var cornerTL = document.createElement("div");
        var cornerTR = document.createElement("div");
        var cornerBL = document.createElement("div");
        var cornerBR = document.createElement("div");

        cornerTL.classList.add("tl");
        cornerTR.classList.add("tr");
        cornerBL.classList.add("bl");
        cornerBR.classList.add("br");

        shape.appendChild(cornerTL);
        shape.appendChild(cornerTR);
        shape.appendChild(cornerBL);
        shape.appendChild(cornerBR);

        var cornerArr = [];
        cornerArr.push(cornerTL);
        cornerArr.push(cornerTR);
        cornerArr.push(cornerBL);
        cornerArr.push(cornerBR);

    }

    function createShapeRand() {
        var canvas = document.getElementById("canvas");
        var shapeObj = createShapeObj();
        var shape = createShape(shapeObj);
        canvas.appendChild(shape);
    }

    //this is the random method
    function createShapeObj() {
        var shapeObj = {};
        shapeObj["width"] = randNumForShape(shapeMinSise, shapeMaxSise);;
        shapeObj["height"] = randNumForShape(shapeMinSise, shapeMaxSise);;
        var lenWidth = canvasWidth - shapeObj["width"];
        shapeObj["left"] = randNum(lenWidth);;
        var lenHeight = canvasHeight - shapeObj["height"];
        shapeObj["top"] = randNum(lenHeight);;
        shapeObj["backgroundColor"] = randomColor();
        shapeObj["shapeType"] = shapeType;
        return shapeObj;
    }

    function eventToCanvas() {
        var canvas = document.getElementById("canvas");
        canvas.addEventListener("mouseup",function(){
            clicking = false;
            clickingOnCorner = false;
            
        },true);    
}

    function createShape(shapeObj) {
        var shape = document.createElement("div");
        shape.style.width = shapeObj["width"] + "px";
        shape.style.height = shapeObj["height"] + "px";
        shape.style.position = "absolute";
        shape.style.left = shapeObj["left"] + "px";
        shape.style.top = shapeObj["top"] + "px";
        shape.style.backgroundColor = shapeObj["backgroundColor"];
        shape.shapeType = shapeType;
        if (shapeObj["shapeType"] == "oval") {
            shape.style.borderRadius = "100%";
        }
        shape.addEventListener("click", function (event) {
            var children = this.children;
            var corners;
            if (!event.ctrlKey) {
                corners = document.getElementsByClassName("corner");
                if (!sameCornersOfMe(shape, corners)) {
                    removLastCorner(shape);
                }
            }
            for (var i = 0; i < children.length; i++) {
                children[i].classList.toggle("corner");
            }
            this.classList.toggle("markItem");

            event.stopImmediatePropagation();//do not fire event mouseDown/mouseMove/mouseUp on shpae
            event.stopPropagation();//do not fire event on my canvas parent
        });

        //this is move the shape
        moveShape(shape, clicking);
        createSides(shape);
        ///this is the corners events
        strachingTheShape(shape, clickingOnCorner);
        eventToCanvas();
        return shape;
    }
    var shapeObj = {};
    shapeObj.createShapeRand = createShapeRand;
    shapeObj.createShape = createShape;

    return shapeObj;
}

///this is all the helper functions
//streching the shape
function strachingTheShape(shape, clickingOnCorner) {

    var corners = shape.children;
    var posX;
    var posY;
    for (var i = 0; i < corners.length; i++) {

        corners[i].addEventListener("mousedown", function (event) {
            clickingOnCorner = true;
            posX = event.clientX;
            posY = event.clientY;
            event.stopPropagation();//when I do not want that the outer div will be efect from the event
        });

        corners[i].addEventListener("mousemove", function (e) {
            if (clickingOnCorner == false) return;
            var parent = this.parentElement;
            var distX = e.clientX - posX;
            var distY = e.clientY - posY;


            if (this.className == "br corner") {
                var width = distX + parent.offsetWidth;
                var heigth = distY + parent.offsetHeight;
                parent.style.width = width + "px";
                parent.style.height = heigth + "px";
            }
            else if (this.className == "tr corner") {
                var width = distX + parent.offsetWidth;
                var heigth = parent.offsetHeight - distY;
                var top = parent.offsetTop + distY;
                parent.style.width = width + "px";
                parent.style.height = heigth + "px";
                parent.style.top = top + "px";
            }
            else if (this.className == "bl corner") {
                var width = parent.offsetWidth - distX;
                var heigth = distY + parent.offsetHeight;
                var left = parent.offsetLeft + distX;
                parent.style.width = width + "px";
                parent.style.height = heigth + "px";
                parent.style.left = left + "px";
            }
            else if (this.className == "tl corner") {
                var width = parent.offsetWidth - distX;
                var heigth = parent.offsetHeight - distY;
                var left = parent.offsetLeft + distX;
                var top = parent.offsetTop + distY;
                parent.style.width = width + "px";
                parent.style.height = heigth + "px";
                parent.style.left = left + "px";
                parent.style.top = top + "px";
            }
            posX = e.clientX;
            posY = e.clientY;
            e.stopPropagation();//stop from shape event to perform
        });
        corners[i].addEventListener("mouseup", function (e) {
            console.log("clickingOnCorner UP");
            clickingOnCorner = false;
            e.stopPropagation();//stop from shape event to perform
        });
    }
}

//this is the move

function moveShape(shape, clicking) {

    shape.addEventListener("mousedown", function (event) {
        clicking = true;
    });

    shape.addEventListener("mousemove", function (e) {
        if (clicking == false) return;
        if (this.className == "markItem") {
            var diffX = (shape.offsetWidth / 2) - e.offsetX;
            var diffY = (shape.offsetHeight / 2) - e.offsetY;
            var left = this.offsetLeft - diffX;
            var top = this.offsetTop - diffY;
            if (left > 0 && top > 0) {
                this.style.left = left + 'px';
                this.style.top = top + 'px';
            }
        }
    });

    shape.addEventListener("mouseup", function (e) {
        console.log("clicking UP");
        clicking = false;
        e.stopImmediatePropagation();//do not fire event click on shape
        e.stopPropagation();//do not fire event on my canvas parent
    });
}



