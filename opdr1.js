dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

for(x = 0; x < 7; x++)
{
    document.write(dagen[x] + " ")
}
brake();
for(y = 6; y > -1; y--)
{
    document.write(dagen[y] + " ")
}
brake();
for(z = 0; z < 5; z++)
{
    document.write(dagen[z] + " ")
}
brake();
for(q = 4; q > -1; q--)
{
    document.write(dagen[q] + " ")
}
brake();
for(w = 5; w < 7; w++)
{
    document.write(dagen[w] + " ")
}
brake();
for(r = 6; r > 4; r--)
{
    document.write(dagen[r] + " ")
}


function brake(){
    x = 0;
    for(x = 0; x < 2; x++)
    {
        document.write("<br>")
    }
} 