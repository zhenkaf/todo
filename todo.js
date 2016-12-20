$(document).ready(function () {
    if(localStorage.getItem("keyMas")) {
        howManyCheckeds();
    }
    if(localStorage.getItem("keyMas")) {
        var arrObjects = JSON.parse(localStorage.getItem("keyMas"));
        for(i = 0; i < arrObjects.length; i++){
            var valPropertyRow = arrObjects[i].propertyRow;
            var valPropertyChe = arrObjects[i].propertyChe;
            insertInput(valPropertyRow, valPropertyChe);
        }
    }
    function howManyCheckeds (){
        var trueCountCheckeds = 0;
        var falseCountCheckeds = 0;
        if(localStorage.getItem("keyMas")) {
            var arrObjects = JSON.parse(localStorage.getItem("keyMas"));
            for(i = 0; i < arrObjects.length; i++){
                var valPropertyChe = arrObjects[i].propertyChe;
                if (valPropertyChe == false){
                    falseCountCheckeds++;
                }
                else {
                    trueCountCheckeds++;
                }
                    $("#result1").html(falseCountCheckeds);
                    $("#result2").html(trueCountCheckeds);
            }
        }
    }
    $("#inputPlus").click(function (rowTemplate, che) {
        insertInput("",false);
        insertInputInLocStor("",false);
        howManyCheckeds();
    });
    function insertInput (rowTemplate, che) {
        var container = $("<div class = 'containe-r'></div>");
        var chbox = $("<input type = 'checkbox' class = 'checkbo-x'></input>");
        var row = $("<input type = 'text' class = 'tex-t'></input>");
        var save = $("<input type = 'button' value = 'save' class = 'sav-e'></input>");
        var del = $("<input type = 'button' value = 'del' class = 'de-l'></input>");
            $(row).val(rowTemplate);
            $(chbox).prop('checked', che);
            $(container).append(chbox);
            $(container).append(row);
            $(container).append(save);
            $(container).append(del);
            $('#allInputs').append(container);
    }
    function insertInputInLocStor(str, isDone) {
        if (localStorage.getItem("keyMas") != undefined) {
            var inLocMas = {
                propertyRow : str,
                propertyChe : isDone
            };
            var arrObjects = JSON.parse(localStorage.getItem("keyMas"));
                arrObjects.push(inLocMas);
            var serialArrObjects = JSON.stringify(arrObjects);
                localStorage.setItem("keyMas", serialArrObjects);
        }
        else {
            var locStorMas = [];
            var inLocMas = {
                propertyRow : str,
                propertyChe : isDone
            };
            locStorMas.push(inLocMas);
            var arrObjects = JSON.stringify(locStorMas);
                localStorage.setItem("keyMas", arrObjects);
        }
    }
    $("#allInputs").on("click", ".de-l", function (event) {
        delElemInLocStor(event);
        delRow(event);
        howManyCheckeds();
        if(localStorage.getItem("keyMas")) {
            var arrObjects = JSON.parse(localStorage.getItem("keyMas"));
            if (arrObjects.length == 0) {
                $("#result1").html(0);
                $("#result2").html(0);
            }
        }
    });
    function delElemInLocStor(event) {
        var parentElem = $(event.target).parents(".containe-r");
        var indexParentElem = $(".containe-r").index(parentElem);
        var arrObjects = JSON.parse(localStorage.getItem("keyMas"));
            arrObjects.splice(indexParentElem, 1);
        var serialArrObjects = JSON.stringify(arrObjects);
            localStorage.setItem("keyMas", serialArrObjects);
    }
    function delRow(event) {
        var parentRow = $(event.target).parents(".containe-r");
            parentRow.remove();
    }
    $("#allInputs").on("click", ".sav-e", function (event) {
        saveInfo(event);
        howManyCheckeds();
    });
    function saveInfo(event) {
        var ourClick = $(event.target).parents(".containe-r");
        var ourContainer = ourClick.closest(".containe-r");
        var indexSave = $(".containe-r").index(ourClick);
        var saveRow = $(ourContainer).contents(".tex-t").val();
        var ourCheck = $(ourContainer).contents(".checkbo-x");
        var check = $(ourCheck).is(':checked');
        var ourObj = {
            propertyRow : saveRow,
            propertyChe : check
        };
        var arrObjects =JSON.parse(localStorage.getItem("keyMas"));
            arrObjects.splice(indexSave, 1, ourObj);
        var serialArrObjects = JSON.stringify(arrObjects);
            localStorage.setItem("keyMas", serialArrObjects);
    }
});