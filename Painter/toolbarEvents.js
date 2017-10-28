var clickingOnCorner1 = false;
var clicking1 = false;

//load the last image
function openLastImage() {
    var key = localStorage[lastFileName];
    loadImageByKey(key);
}



function eventsOperation() {
    var rectBtn = document.getElementById("rectangleBtn");
    rectBtn.addEventListener("click", function () {
        var rectangle = shape("rectangle");
        rectangle.createShapeRand();
    });

    var ovalBtn = document.getElementById("ovalBtn");
    ovalBtn.addEventListener("click", function () {
        var oval = shape("oval");
        oval.createShapeRand();
    });

    var ovalColorBtn = document.getElementById("ovalColorBtn");
    ovalColorBtn.addEventListener("click", function (e) {
        var table = document.getElementsByTagName("table");
        table = table[0];
        table.classList.toggle("tableDiv");
        var itemColors = document.getElementsByTagName("td");
        for (var i = 0; i < itemColors.length; i++) {
            itemColors[i].classList.toggle("colorItem");
        }
    });

    var itemColors = document.getElementsByTagName("td");
    for (var i = 0; i < itemColors.length; i++) {
        itemColors[i].addEventListener("click", function () {
            var shapes = document.getElementsByClassName("markItem");
            for (var i = 0; i < shapes.length; i++) {
                shapes[i].style.backgroundColor = this.style.backgroundColor;
            }
        });
    }

    var deleteBtn = document.getElementById("deleteBtn");

    deleteBtn.addEventListener("click", function () {
        var shapes = document.getElementsByClassName("markItem");
        var len = shapes.length;
        var parent;
        for (var i = 0; i < len; i++) {
            parent = shapes[0].parentElement;
            parent.removeChild(shapes[0]);
        }
    });

    var loadFile = document.getElementById("loadFile");

    loadFile.addEventListener("click", function () {
        //hide the window after the click
        showLoadFileHleperGui();
        var select = document.getElementsByTagName("select")[0];//I want the relevant option ftom the slect option
        var index = select.selectedIndex;
        var key = select[index].text;
        key = prefiXpic + key;
        loadImageByKey(key);
    });


    var saveBtn = document.getElementById("saveBtn");

    saveBtn.addEventListener("click", function () {
        var saveMode = document.getElementsByClassName("hideSaveMode")[0];
        saveMode.classList.toggle("hideSaveMode");
        var saveWindow = document.getElementById("saveWindow");
        saveWindow.classList.toggle("vanishWindow");
    });

    ///////////////////////////////////////////////////////////////////
    // this is the save file that are inside
    var saveFileInner = document.getElementById("saveFile");
    saveFileInner.addEventListener("click", function () {
        windowApearanceHelper(true);
        //put the cval in the data storage
        var key = document.getElementsByTagName("input")[0].value;
        key = prefiXpic + key;

        var canvas = document.getElementById("canvas");
        var canvasObj = convertElementsToObj(canvas);
        str = JSON.stringify(canvasObj);
        localStorage[key] = str;
        localStorage[lastFileName] = key;

    });

    var grayWindowSave = document.getElementById("saveMode");
    grayWindowSave.addEventListener("click", function (e) {
        if (e.target == this) {
            windowApearanceHelper(false);
        }

    }, true);


    var grayWindowLoad = document.getElementById("loadMode");
    grayWindowLoad.addEventListener("click", function (e) {
        if (e.target == this) {
            showLoadFileHleperGui();
        }
    }, true);


    // ////////////////////////

    var loadBtn = document.getElementById("loadBtn");

    loadBtn.addEventListener("click", function () {
        var canvas = document.getElementById("canvas");
        var a = 1;
        clearCanvas(canvas);

        //load to the gui
        var keys = Object.keys(localStorage);
        var select = document.getElementsByTagName("select")[0];
        removeOptions(select);
        for (var i = 0; i < keys.length; i++) {
            var option = document.createElement("option");
            var key = keys[i].split(prefiXpic)[1];
            if (key !== undefined) {
                option.text = key;
                select.appendChild(option);
            }
        }
        var loadMode = document.getElementById("loadMode");
        loadMode.classList.toggle("hideSaveMode");
        var loadWindow = document.getElementById("loadWindow");
        loadWindow.classList.toggle("vanishWindow1");
    });



    function clearCanvas(canvas) {
        var len = canvas.children.length;
        var childToRem;
        for (var i = 0; i < len; i++) {
            childToRem = canvas.children[0];
            canvas.removeChild(childToRem);

        }
    }

    function removeOptions(select) {
        var len = select.length;
        for (var i = 0; i < len; i++) {
            select.remove(0);

        }
    }
}


/********************************this is a events add function to the saved image */

function fromObjToElements(canvObj) {
    var len = Object.keys(canvObj).length;
    var shapeElement;
    var shapeF = shape();
    var canvas = document.getElementById("canvas");
    for (var i = 0; i < len; i++) {
        shapeElement = shapeF.createShape(canvObj[i]);
        canvas.appendChild(shapeElement);
    }
}

function convertElementsToObj(canvas) {
    var shapes = canvas.children;

    canvasObj = {};
    //  var shapeArr={};

    for (var i = 0; i < shapes.length; i++) {
        shapeObj = {};
        shapeObj = createShapeFromElement(shapes[i]);

        canvasObj[i] = shapeObj;
    }
    return canvasObj;

}


function createShapeFromElement(shape) {

    var shapeObj = {};
    shapeObj["width"] = shape.offsetWidth;
    shapeObj["height"] = shape.offsetHeight;
    shapeObj["left"] = shape.offsetLeft;
    shapeObj["top"] = shape.offsetTop;
    shapeObj["backgroundColor"] = shape.style.backgroundColor;
    shapeObj["borderRadius"] = parseInt(shape.style.borderRadius);
    shapeObj["shapeType"] = shape["shapeType"];

    return shapeObj;
}


function windowApearanceHelper(timer) {
    if (timer == true) {
        var saveMassage = document.getElementsByClassName("hideSaveMassage")[0];

        var fileName = document.getElementsByTagName("input")[0].value;
        saveMassage.textContent = fileName + saveMassage.textContent
        saveMassage.classList.toggle("hideSaveMassage");

        var saveWindow = document.getElementById("saveWindow");
        saveWindow.classList.toggle("vanishWindow");
        var timer = setTimeout(function () {

            var saveMode = document.getElementById("saveMode");
            saveMode.classList.toggle("hideSaveMode");

            saveMassage.classList.toggle("hideSaveMassage");
        }, 3000);

    } else {
        var saveWindow = document.getElementById("saveWindow");
        saveWindow.classList.toggle("vanishWindow");

        var saveMode = document.getElementById("saveMode");
        saveMode.classList.toggle("hideSaveMode");

    }
}

function showLoadFileHleperGui() {

    var loadMode = document.getElementById("loadMode");
    loadMode.classList.toggle("hideSaveMode");

    var loadWindow = document.getElementById("loadWindow");
    loadWindow.classList.toggle("vanishWindow1");

}

function loadImageByKey(key) {
    var str = localStorage[key];
    var canvObj = JSON.parse(str);
    fromObjToElements(canvObj);
}