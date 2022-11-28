let h1 = document.getElementById('p1');
// function backColor(val) {
//     // alert("The input value has changed. The new value is: " + val);
//     let rgb = "rgb(" + val + "," + 0 + "," + 0 + ")";
//     h1.style.backgroundColor = rgb;
// }
// function padding(val) {
//     // alert("The input value has changed. The new value is: " + val);
//     let pdng = val + 'px';
//     h1.style.padding = pdng;
// }
// function myHeight(val) {
//     // alert("The input value has changed. The new value is: " + val);
//     let hgth = val + 'px';
//     h1.style.height = hgth;
// }
// function myWidth(val) {
//     // alert("The input value has changed. The new value is: " + val);
//     let wdth = val + 'px';
//     h1.style.width = wdth;
// }
// function arrondi(val) {
//     // alert("The input value has changed. The new value is: " + val);
//     let rnd = val + 'px';
//     h1.style.borderRadius = rnd;
// }
// function myRotation(val) {
//     // alert("The input value has changed. The new value is: " + val);
//     let rota = 'rotate(' + val + 'deg' + ')';
//     h1.style.transform = rota;
// }
function change(val){
    console.log("id : "+val.id+ "-- value :"+val.value);
    let rgb = "rgb(" + val.value + "," + 0 + "," + 0 + ")";
    let pdng = val.value + 'px';
    let hgth = val.value + 'px';
    let wdth = val.value + 'px';
    let rnd = val.value + 'px';
    let rota = 'rotate(' + val.value + 'deg' + ')';
    if(val.id == "myRange"){
        h1.style.backgroundColor = rgb;
    }else if(val.id == "padding"){
        h1.style.padding = pdng;
    }else if(val.id == "height"){
        h1.style.height = hgth;
    }else if(val.id == "width"){
        h1.style.width = wdth;
    }else if(val.id == "arrondi"){
        h1.style.borderRadius = rnd;
    }else if(val.id == "rotation"){
        h1.style.transform = rota;
    }
}
