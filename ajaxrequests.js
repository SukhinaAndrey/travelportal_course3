window.addEventListener("load", () => {
    let eventsList = document.getElementById("events-list");
    let winterButton = document.getElementById("winter");
    let springButton = document.getElementById("spring");
    let summerButton = document.getElementById("summer");
    let autumnButton = document.getElementById("autumn");
    xhr = new XMLHttpRequest();


    winterButton.addEventListener("click", () => {
        loadData("GET", "./eventsPeriod/winter.html");
    });

    springButton.addEventListener("click", () => {
        loadData("GET", "./eventsPeriod/spring.html");
    });

    summerButton.addEventListener("click", () => {
        loadData("GET", "./eventsPeriod/summer.html");
    });

    autumnButton.addEventListener("click", () => {
        loadData("GET", "./eventsPeriod/autumn.html");
    });
    
    
    
    
    function loadData(_query1, _query2) { // AJAX запрос / фильтрация
        xhr.open(_query1, _query2, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    eventsList.innerHTML = '';
                    eventsList.innerHTML += xhr.responseText;
                }
            }
        }
        xhr.send();
    }

});