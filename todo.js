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
            var todoRows = JSON.parse(localStorage.getItem("keyMas"));
            for(i = 0; i < todoRows.length; i++){
                var valPropertyChe = todoRows[i].propertyChe;
                if (valPropertyChe == false){
                    falseCountCheckeds++;
                }
                else {
                    trueCountCheckeds++;
                }
            }
            $("#result1").html(falseCountCheckeds);
            $("#result2").html(trueCountCheckeds);
        }
    }
    $("#inputPlus").click(function () {
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
            var todoRows = JSON.parse(localStorage.getItem("keyMas"));
            todoRows.push(inLocMas);
            var serialTodoRows = JSON.stringify(todoRows);
                localStorage.setItem("keyMas", serialTodoRows);
        }
        else {
            var locStorMas = [];
            var inLocMas = {
                propertyRow : str,
                propertyChe : isDone
            };
            locStorMas.push(inLocMas);
            var todoRows = JSON.stringify(locStorMas);
                localStorage.setItem("keyMas", todoRows);
        }
    }
    $("#allInputs").on("click", ".de-l", function (event) {
        delElemInLocStor(event);
        delRow(event);
        howManyCheckeds();
        if(localStorage.getItem("keyMas")) {
            var todoRows = JSON.parse(localStorage.getItem("keyMas"));
            if (todoRows.length == 0) {
                $("#result1").html(0);
                $("#result2").html(0);
            }
        }
    });
    function delElemInLocStor(event) {
        var parentElem = $(event.target).parents(".containe-r");
        var indexParentElem = $(".containe-r").index(parentElem);
        var todoRows = JSON.parse(localStorage.getItem("keyMas"));
            todoRows.splice(indexParentElem, 1);
        var serialTodoRows = JSON.stringify(todoRows);
            localStorage.setItem("keyMas", serialTodoRows);
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
        var todoRows =JSON.parse(localStorage.getItem("keyMas"));
            todoRows.splice(indexSave, 1, ourObj);
        var serialTodoRows = JSON.stringify(todoRows);
            localStorage.setItem("keyMas", serialTodoRows);
    }


    $("#allInputs").on("mouseover", ".containe-r", function (event) {
        getInfoFromElem();
    });
    function getInfoFromElem() {
        var mouseOverRow = $(event.target).parents(".containe-r");
        var getOurRow = $(mouseOverRow).contents(".tex-t").val();
        var ourCheck = $(mouseOverRow).contents(".checkbo-x");
        var check = $(ourCheck).is(":checked");
            if(check){
                var condition = "Миссия выполнена";
            }
            else {
                var condition = "В процессе";
            }
        var mission = getOurRow;
        $("#test").append(condition + '<br></br>');
        $("#test").append(mission);

        $("#test").show();
    }

    $("#allInputs").on("mouseout", ".containe-r", function (event) {
        $("#test").empty();
        $("#test").hide();
    });

});