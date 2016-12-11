$(document).ready(function () {

    $("#inputPlus").click(function (rowTemplate, che) {
     insertInput(" ",false);
    });

    $("#allInputs").on("click", "#zwer", function (event) {
        var t = event.target;
        t.closest("div").remove();
    });

    $("#save").click(function () {
        var o = $("#allInputs").html();
        console.log("#allInputs");
        var so = JSON.stringify(o);

        localStorage.setItem("key", so);
        console.log(so);
    });
    if(localStorage.getItem("key")) {

        $("#allInputs").html(JSON.parse(localStorage.getItem("key")));
    }

    function insertInput (rowTemplate, che) {
        var div = document.createElement('div');
            div.id = 'wer';

        var input = document.createElement('input');
            input.type = 'text';
            input.value = rowTemplate;

        var input2 = document.createElement('input');
            input2.type = 'checkbox';
            input2.value = che;

        var input3 = document.createElement('input');
            input3.type = 'button';
            input3.value = 'save';


        var input4 = document.createElement('input');
            input4.type = 'button';
            input4.value = 'del';
            input4.id = 'zwer';

        div.appendChild(input2);
        div.appendChild(input);
        div.appendChild(input3);
        div.appendChild(input4);

        document.getElementById("allInputs").appendChild(div);
    }

});