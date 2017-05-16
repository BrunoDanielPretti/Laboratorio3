if(localStorage.autenticado!="si"){
        window.location.replace("login.html");
    }
$(document).ready(function(){
    //alert(JSON.stringify(localStorage));
    $("#logOut").click(function(){
        localStorage.removeItem("autenticado");
        window.location.replace("login.html");
    })
    $("#newPost").submit(function(e){
        var dataPost = {
            "title": texttitle,
            "header": textheader,
            "`posttext`": posttext,
            "author": author
        }

        $.ajax({
            url: "http://localhost:1337/postearNuevaEntrada",
            type: "POST",
            data: JSON.stringify(dataPost),
            dataType:"txt",
        })
    })
})

/*
function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }   
*/