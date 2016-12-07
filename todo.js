$(document).ready(function () {

    $("#inputPlus").click(function insertInput (rowTemplate, che) {
        var rowTemplate = " ";
        var che = false;

        var input = document.createElement('input');
        input.id = 'inp';
        input.type = 'text';
        input.value = rowTemplate;

        var input2 = document.createElement('input');
        input2.id = 'ch';
        input2.type = 'checkbox';
        input2.value = che;

        allInputs.appendChild(input);
        allInputs.appendChild(input2);//allInputs - это див который в html

    });

    $("#del").click(function () {
        $(".js-row").last().remove();
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

});
