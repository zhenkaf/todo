$(document).ready(function () {

    if(localStorage.getItem("keyMas")) {
        var n = JSON.parse(localStorage.getItem("keyMas"));
            for(i = 0; i<n.length; i++){
              var rowTemplate = n[i].a;
                var che = n[i].b;
                alert (rowTemplate);
                alert (che);
                insertInput(rowTemplate, che);
            }
    }

    $("#inputPlus").click(function (rowTemplate, che) {
        insertInput("",false);
        localPlus("",false);
    });

    $("#allInputs").on("click", ".del-t", function (event) {

        delElemInLocStor(event);
        delParagraph(event);
    });
    function insertInput (rowTemplate, che) {
        var div = $("<div class = 'input-s'></div>");
            $(div).append("<input type = 'checkbox' class = 'checkbo-x'></input>" +
                          "<input type = 'text' class = 'tex-t'></input>" +
                          "<input type = 'button' value = 'save' class = 'sav-e'></input>" +
                          "<input type = 'button' value = 'del' class = 'del-t'></input>"
            );
        $('#allInputs').append(div);

    }
    function localPlus(str, isDone) {
        if (localStorage.getItem("keyMas") != undefined) {
            var inLocMas = {
                a : str,
                b : isDone
            };
            var serialBack = JSON.parse(localStorage.getItem("keyMas"));
                serialBack.push(inLocMas);
            var sB = JSON.stringify(serialBack);
                localStorage.setItem("keyMas", sB);
        }
        else {
            var locMas = [];
            var inLocMas = {
                a : str,
                b : isDone
            };
                locMas.push(inLocMas);
            var serialM = JSON.stringify(locMas);
                localStorage.setItem("keyMas", serialM);
        }
    }
    function delElemInLocStor(event) {
        var t = $(event.target).parents(".input-s");
        var index = $(".input-s").index(t);
        var serialBack = JSON.parse(localStorage.getItem("keyMas"));
        serialBack.splice(index, 1);
        var sB = JSON.stringify(serialBack);
        localStorage.setItem("keyMas", sB);
    }
    function delParagraph(event) {
        var t = $(event.target).parents(".input-s");
        var index = $(".input-s").index(t);
        t.remove();
    }
    $("#allInputs").on("click", ".sav-e", function (event) {
        saveInfo(event)
    });
    function saveInfo(event) {
        var ourClick = $(event.target).parents(".input-s");
        var OurDiv = ourClick.closest(".input-s");
        var indexSave = $(".input-s").index(ourClick);
        var st = $(OurDiv).contents(".tex-t").val();
        var v = $(OurDiv).contents(".checkbo-x");
        var check =$(v).is(':checked');
        var obj = {
            a : st,
            b : check
        };
        var n =JSON.parse(localStorage.getItem("keyMas"));
         n.splice(indexSave, 1, obj);
        var newN = JSON.stringify(n);
        localStorage.setItem("keyMas", newN);
    }
});