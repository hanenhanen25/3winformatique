let tab=["Amir","aziz",12,"rayen",15]
function Afficher1(){
    document.getElementById('t0').value=tab[0]
    document.getElementById('t1').value=tab[1]
    document.getElementById('t2').value=tab[2]
    document.getElementById('t3').value=tab[3]
    document.getElementById('t4').value=tab[4]
}
function Afficher2(){
   alert(tab.length)
}
function Afficher3(){
   for(i=0;i<=tab.length;i++){
    alert("hello"+tab[i])

   }
}
function Afficher4(){
    for(i=0;i<=tab.length;i++){
        if(typeof(tab[i])=='String'){
            alert("hello"+tab[i])
        }
        
        }
}