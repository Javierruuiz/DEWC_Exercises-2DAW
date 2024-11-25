
var t=5;
function deGREF(){
    
    document.write("<p>"+t);
    t--;
    if(t>=0){setTimeout(deGREF,1000);}
    else{
        document.write("eventooooo");
    }
   

}
setTimeout(deGREF,1000);

