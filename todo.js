$(document).ready(function () {

    $("#inputPlus").click(function (rowTemplate, che) {
        insertInput(" ",false);
        localPlus(" ",false);
    });

    $("#allInputs").on("click", "#delt", function (event) {
        delParagraph(event);
    });

   // if(localStorage.getItem("keyMas")) {

     //   $("#allInputs").html(JSON.parse(localStorage.getItem("keyMas")));
  //  }

    function insertInput (rowTemplate, che) {
        $('#allInputs').append('<div id="inputs" class="input-s"></div>');
        var a = $(".input-s").length;
        $("#inputs").attr("id","inputs" + a);





       // div.id = 'inputs' + $('div,#inputs').length;
        //    div.class = 'input-s';


       /* var input = document.createElement('input');
            input.type = 'text';
            input.value = rowTemplate;

        var input2 = document.createElement('input');
            input2.type = 'checkbox';
            input2.value = che;

        var input3 = document.createElement('input');
            input3.type = 'button';
            input3.value = 'save';
            input3.id = 'sav';


        var input4 = document.createElement('input');
            input4.type = 'button';
            input4.value = 'del';
            input4.id = 'delt';*/

      //  div.appendChild(input2);
      //  div.appendChild(input);
      //  div.appendChild(input3);
      //  div.appendChild(input4);

      //  document.getElementById("allInputs").appendChild(div);

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
            console.log(serialBack);
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
        var index = $("t").index();
        alert(index);
        t.closest("#inputs").remove();
        var o = $("#allInputs").html();
        var so = JSON.stringify(o);
        localStorage.setItem("key", so);
    }

});