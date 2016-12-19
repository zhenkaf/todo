$(document).ready(function () {

    function howManyShow (){
        var trcount = 0;
        var flcount = 0;
        if(localStorage.getItem("howChe")) {
            var po = JSON.parse(localStorage.getItem("howChe"));
            for(i = 0; i<po.length; i++){
                var trorfl = po[i].sd;


                if (trorfl == false){
                    flcount++;
                }
                $("#result1").val(flcount);

                if (trorfl == true){
                    trcount++;
                }
                $("#result2").val(trcount);

            }
        }

    }
    if(localStorage.getItem("keyMas")) {
        var n = JSON.parse(localStorage.getItem("keyMas"));
            for(i = 0; i<n.length; i++){
              var z = n[i].a;
                var x = n[i].b;
                insertInput(z, x);
            }
    }
    if(localStorage.getItem("howChe")) {
        howManyShow();
    }
    $("#inputPlus").click(function (rowTemplate, che) {
        insertInput("",false);
        localPlus("",false);
        howMany(false);
        howManyShow();
    });

    $("#allInputs").on("click", ".del-t", function (event) {
        delElemInLocStor(event);
        delChekLocStor(event);
        delParagraph(event);
        howManyShow();
        if(localStorage.getItem("howChe")) {
            var po = JSON.parse(localStorage.getItem("howChe"));
            if(po.length == 0){
                $("#result1").val(0);
                $("#result2").val(0);
            }

        }

    });

    function insertInput (rowTemplate, che) {
        var div = $("<div class = 'input-s'></div>");
        var ch = $("<input type = 'checkbox' class = 'checkbo-x'></input>");
        var r = $("<input type = 'text' class = 'tex-t'></input>");
        var save = $("<input type = 'button' value = 'save' class = 'sav-e'></input>");
        var del = $("<input type = 'button' value = 'del' class = 'del-t'></input>");
        $(r).val(rowTemplate);
        $(ch).prop('checked', che);
            $(div).append(ch);
            $(div).append(r);
            $(div).append(save);
            $(div).append(del);
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
        saveInfo(event);
        saveCheck(event);
        howManyShow();
    });
    function saveInfo(event) {
        var ourClick = $(event.target).parents(".input-s");
        var OurDiv = ourClick.closest(".input-s");
        var indexSave = $(".input-s").index(ourClick);
        var st = $(OurDiv).contents(".tex-t").val();
        var v = $(OurDiv).contents(".checkbo-x");
        var check = $(v).is(':checked');
        var obj = {
            a : st,
            b : check
        };
        var n =JSON.parse(localStorage.getItem("keyMas"));
         n.splice(indexSave, 1, obj);
        var newN = JSON.stringify(n);
        localStorage.setItem("keyMas", newN);
    }


    function howMany(isDon){
        if (localStorage.getItem("howChe") != undefined) {
            var inchecks = {
                sd : isDon
            };
            var serialChecks = JSON.parse(localStorage.getItem("howChe"));
            serialChecks.push(inchecks);
            var sC = JSON.stringify(serialChecks);
            localStorage.setItem("howChe", sC);
        }
        else {
            var checks = [];
            var inchecks = {
                sd : isDon
            };
            checks.push(inchecks);
            var serialC = JSON.stringify(checks);
            localStorage.setItem("howChe", serialC);
        }
    }
    function delChekLocStor(event) {
        var tt = $(event.target).parents(".input-s");
        var index = $(".input-s").index(tt);
        var serialChecks = JSON.parse(localStorage.getItem("howChe"));
        serialChecks.splice(index, 1);
        var sC = JSON.stringify(serialChecks);
        localStorage.setItem("howChe", sC);
    }

    function saveCheck(event) {
        var ourClick = $(event.target).parents(".input-s");
        var OurDiv = ourClick.closest(".input-s");
        var indexSave = $(".input-s").index(ourClick);

        var v = $(OurDiv).contents(".checkbo-x");
        var isDon = $(v).is(':checked');
        var inchecks = {
            sd : isDon
        };
        var n =JSON.parse(localStorage.getItem("howChe"));
        n.splice(indexSave, 1, inchecks);
        var newN = JSON.stringify(n);
        localStorage.setItem("howChe", newN);
    }


});