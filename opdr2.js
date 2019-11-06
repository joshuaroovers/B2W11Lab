namen = []
ask();

function ask(){
aantalnamen = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3")
aantalnamen = parseInt(aantalnamen);
if(aantalnamen < 3)
{
    alert("Minimaal 3")
    ask();
}
else if (aantalnamen > 2 && Number(aantalnamen))
{}
else if(isNaN(aantalnamen))
{
    alert("U dient een getal in the voeren")
    ask();
}

}

for(x = 0; x < aantalnamen; x++)
{
    begin_bij_1 = x + 1;
    naam = prompt("voer naam " + begin_bij_1 + " in.")
    namen[x] = naam;
}
for(y = 0; y < aantalnamen; y++)
{
    document.write(namen[y] + " ")
}
document.write("<br> <br>")
for(z = aantalnamen -1 ; z > -1; z--)
{
    document.write(namen[z] + " ")
}



