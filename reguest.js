window.addEventListener("load", function () {
    var user_name = document.getElementById("name");
    var city = document.getElementById("city");
    var comment = document.getElementById("comment");
    var cleanOrder = document.getElementsByClassName("clean-order")[0];
    //var submit = this.document.getElementById("submit");
    //var form = document.getElementById("form");
    
    cleanOrder.onclick = function(){
        user_name.value = "";
        city.value = "";
        comment.value = "";
    }

    function validate(elem, pattern) {
        var result = elem.value.search(pattern);
        if (result == -1) {
            elem.value = "";
            elem.style.borderColor = "red";
        }else{
            elem.style.borderColor = "#333";
        }
    }

    function textchange() {
        var text = /^[-A-Za-zА-Яа-яЁёІіЇїЄє]+$/;
        validate(this, text);
    }

    user_name.onchange = textchange;
    city.onchange = textchange;

})