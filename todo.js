$(document).ready(function () {

    $("#inputPlus").click(function (rowTemplate, che) {
        insertInput("",false);
        localPlus("",false);
    });

    $("#allInputs").on("click", ".del-t", function (event) {
        delParagraph(event);
        delElemInLocStor(event);
    });
    function insertInput (rowTemplate, che) {
        var div = $("<div id = ''></div>");
            $(div).append("<input type = 'checkbox'></input>" +
                          "<input type = 'text'></input>" +
                          "<input type = 'button' value = 'save'></input>" +
                          "<input type = 'button' value = 'del' class = 'del-t'></input>"
            );
        var countDiv = $(".input-s").length;
        var divId = $(div).attr("id","" + countDiv);
        $('#allInputs').append(divId);
        $(div).addClass("input-s");

            //input.value = rowTemplate;
            //input2.value = che;
            //input3.id = 'sav';
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
    function delParagraph(event) {
        var t = event.target;
            t.closest(".input-s").remove();
    }
    function delElemInLocStor(event) {
        var t = event.target;
        var forLocStor = $(t.closest(".input-s")).attr("id");
        var serialBack = JSON.parse(localStorage.getItem("keyMas"));
        alert(forLocStor);
        delete serialBack[forLocStor];
        var sB = JSON.stringify(serialBack);
        localStorage.setItem("keyMas", sB);
    }

});