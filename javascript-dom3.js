

window.addEventListener("load", function(){

    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imageSelect = section.querySelector(".img-select");
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input")

    changeButton.onclick = function(){
        img.src = "img/" + imageSelect.value;
        img.style["border-color"] = colorInput.value;

    };

}
);

window.addEventListener("load", function(){

    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    var input1 = box.children[0];
    //var input1 = box.childNodes[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay"
}
);


window.addEventListener("load", function(){

    var section3 = document.getElementById("section3");
    var input1 = section3.querySelector(".input1");
    var input2 = section3.querySelector(".input2");
    var equal = section3.querySelector(".equal");
    var result = section3.querySelector(".result");

    equal.onclick = function(){

        var x = parseInt(input1.value);
        var y = parseInt(input2.value);
        //alert(x+y);
        result.value = x+y;

    };
}
);


window.addEventListener("load", function(){

    var section2 = document.getElementById("section2");
    var input1 = section2.getElementsByClassName("input1")[0];
    var input2 = section2.getElementsByClassName("input2")[0];
    var equal = section2.getElementsByClassName("equal")[0];
    var result = section2.getElementsByClassName("result")[0];
    // var inputs = section2.getElementsByTagName("input");

    // var input1 = inputs[0];
    // var input2 = inputs[1];
    // var equal = inputs[2];
    // var result = inputs[3];

    equal.onclick = function(){

        var x = parseInt(input1.value);
        var y = parseInt(input2.value);
        //alert(x+y);
        result.value = x+y;

    }
}
);

window.addEventListener("load", function(){

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var equal = document.getElementById("equal");
    var result = document.getElementById("result");

    equal.onclick = function(){

        var x = parseInt(input1.value);
        var y = parseInt(input2.value);
        //alert(x+y);
        result.value = x+y;

    }
}
);
