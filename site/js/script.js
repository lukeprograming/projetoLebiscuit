let count = 0;
setInterval(function(){
    nexImage();
},3500)

function nexImage(){
    count++;
    if(count>11){
        count=1
    }
    document.getElementById('radio'+(count)).checked = true;
}
