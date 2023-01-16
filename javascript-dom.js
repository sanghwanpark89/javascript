window.addEventListener("load", function(){

    var input1 = this.document.getElementById("input1");
    var input2 = this.document.getElementById("input2");
    var equal = this.document.getElementById("equal");
    var result = this.document.getElementById("result");

    equal.onclick = function(){

        var x = parseInt(input1.value);
        var y = parseInt(input2.value);
        //alert(x+y);
        result.value = x+y;

    }
}
)
