
var sss = [];

function btn() {
    var inputValue = document.getElementById('input').value;
    if (inputValue == '') {
        console.log("please enter your deatils");
    } else {

        console.log(inputValue);

    }
    document.getElementById("input").value = "";

    sss.push(inputValue);
    console.log(sss);

}
