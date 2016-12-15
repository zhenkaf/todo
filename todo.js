$(document).ready(function () {

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
            $(div).append("<input type = 'checkbox'></input>" +
                          "<input type = 'text'></input>" +
                          "<input type = 'button' value = 'save'></input>" +
                          "<input type = 'button' value = 'del' class = 'del-t'></input>"
            );

        $('#allInputs').append(div);


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

    function delElemInLocStor(event) {
        var t = $(event.target).parents(".input-s");
        var index = $(".input-s").index(t);
        alert(index);

        var serialBack = JSON.parse(localStorage.getItem("keyMas"));

        serialBack.splice(index, 1);
        var sB = JSON.stringify(serialBack);
        localStorage.setItem("keyMas", sB);
    }
    function delParagraph(event) {
        var t = $(event.target).parents(".input-s");
        var index = $(".input-s").index(t);
        alert(index);
        t.remove();
    }
});