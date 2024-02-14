/*alert('Il y a un script Javascript dans cette page!!')
let Age=10;
Age=20;
alert(Age)
let nom=prompt ("donner votre nom")                                                                                                      
alert(nom)
console.log('bonjour');
document.write('salut');
document.getElementById('act').innerHTM=('12');
document.getElementById('act').value=('act');*/
function myfun(x){
    x.style.background="yellow";
   }
function fun3(){
    let x=document.getElementById("n")
    x.value=x.value.toUpperCase();
}
function fun4(){
    let x=document.getElementById("m")
    x.style.color='green';
}
function fun5(){
    let x=document.getElementById("ex6")
    x.style.color='bleu';
}
function changecolor(p3){
   
    p3.style.color='blue';
   }
function fun6(){
    alert('vous avez clicker sur un touche de clavier')
   }
function fun7(){
    const x=document.getElementById('adresse');
    x.style.color='red';

}
function fun8(){
    let x=document.getElementById("msg").value ;
    document.getElementById("msgg").innerHTML="vous avez écris: "+x;
}
function fun9(){
    let age=document.getElementById("r").value;
    if(1<=age&&age<=2)
    {
        alert('bébé')
    }
    else if(3<=age&&age<=11)
    {
        alert('enfant')
    }
    else if(12<=age&&age<=18)
    {
        alert('adolescent')
    }
    else if(19<=age&&age<=60)
    {
        alert('adulte')
    }
    else{
        alert('vieux')
    }
}
function fun10(){
    let y=document.getElementById("bt1").value ;
    let i=0
    for (i=0;i<=y;i++){
        alert(i);
    }
}
function fun11(){
    let x=document.getElementById("p").value ;
    let i=0 
    for (i=0;i<=x;i++){
        if (x%2==0){
            alert(i);
        }
    }
}
function fun12(){
  do{
    nb=prompt('donner votre nombre ')}
  while(nb<0){
      let g=Math.sqrt(nb);
      document.getElementById('n2').value=g;

    }
}
function fun13(){
    m=prompt('donner nbr ')
    let k=Math.abs(m);
    document.getElementById('n3').value=k;
}
function fun14(){
    ch=prompt('donner une chaine ')
    let n=ch.length;
    while(n<8){
        alert('saisie une autre chaine de 8 caractéres au plus ,svp');
        ch=prompt('donner une chaine ');
        return false;}
    document.getElementById('n4').value=ch;
}
function fun15(){
    p=prompt('donner un nbr')
    let i=Math.round(p);
    document.getElementById('n5').value=i;
}
function fun16(){
    x=prompt('donner un nbr')
    let y=Math.trunc(x);
    document.getElementById('n6').value=y;
}
function fun17(){
    let t=Math.random();
    document.getElementById('n7').value=t;
}
function fun18(){
    let g=Math.random()*10;
    document.getElementById('n8').value=g;
}
function fun19(){
    ch1=('système et technologies informatiques')
    y=prompt('donner un position')
    u=ch1.charAt(y)
    alert(u)
}
function fun20(){
    ch=('système et technologies informatiques')
    y=prompt('donner un position')
    p=ch.indexOf(y)
    alert(p)
}
function fun21(){
    ch=('système et technologies informatiques')
    y=prompt('donner un position')
    p=ch.lastIndexOf(y)
    alert(p)
}
function fun22(){
    ch=('système et technologies informatiques')
    p=(ch.replace('i','t'));
    alert(p)
}
function fun23(){
    ch=('système et technologies informatiques')
    p=(ch.replace(/i/g ,'t'))
    alert(p)
}
function fun24(){
    ch=('système et technologies informatiques')
    y=ch.toUpperCase();
    alert(y)
}
function fun25(){
    ch=prompt('donner une chaine')
    y=ch.toLowerCase();
    alert(y)
}
function fun26(){
    ch=('système et technologies informatiques')
    y=ch.trim()
    alert(y)
}
function fun27(){
    ch=('système et technologies informatiques')
    p=prompt("donner position")
    l=prompt("donner longeur")
    alert(ch.substr(p,l));
}
function fun28(){
    ch=('système et technologies informatiques')
    l=prompt("donner la position")
    x=ch.charCodeAt(l)
    alert(x)
} alert(l**2)
function fun29(){
    x=String.fromCharCode(104,97,110,101,110);
    alert(x)
}
function fun30(){
    l=prompt("donner nbr")
    if(isNaN(l)){
        alert("n'est pas un nombre")
        }
    else{
        alert(l**2)
    }
}
function fun31(){
    a=prompt('donner un nombre')
    b=Number(a)
    alert(b/2)
}
function fun32(){
    a=prompt('donner un nombre')
    b=parseFloat(a)
    alert(b)
}
function fun33(){
    a=prompt('donner un nombre')
    b=parseInt(a)
    alert(b)
}
function fun34(){
    let n=15
    b=String(n)
    alert(typeof b)
}
function fun35(){
    let n=15
    b=Date(n)
    alert (b)
}
function fun35(){
    const au=new Date()
    let j=au.getDate()
    let m=au.getMonth()+1
    let A=au.getFullYear()
document.getElementById('n9').innerHTML=j;
document.getElementById('n10').innerHTML=m;
document.getElementById('n11').innerHTML=A;
}
function fun36(){
    let x=new Date
    x.setDate(11)
    x.setMonth(5)
    x.setFullYear(2024)
    alert(x)
}



























