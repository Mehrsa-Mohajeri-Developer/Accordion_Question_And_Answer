let y = "o"
function _click(x) {
    if (x == "para0") {
        if(y == "o"){
            document.getElementsByClassName("para0")[0].style.height = "auto"
            y = "c"
        }
        else {
            document.getElementsByClassName("para0")[0].style.height = "0px"
            y = "o"
        }
    }
    else if (x == "para1") {
        if(y == "o"){
            document.getElementsByClassName("para1")[0].style.height = "auto"
            y = "c"
        }
        else {
            document.getElementsByClassName("para1")[0].style.height = "0px"
            y = "o"
        }
    }
    else {
        if(y == "o"){
            document.getElementsByClassName("para2")[0].style.height = "auto"
            y = "c"
        }
        else {
            document.getElementsByClassName("para2")[0].style.height = "0px"
            y = "o"
        }
    }
}