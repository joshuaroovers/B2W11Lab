array = [];
ask();
function ask()
{
    getal = prompt("voer een getal in")
    getal = parseInt(getal);
    w = getal;
    if(isNaN(getal))
    {
        alert("invalid input")
        ask();
    }
}

document.write("Array: ")

for(x = 0; x < getal + 1; x++)
{
    array[x] = x;
    document.write(x + " ")
}
document.write("<br>")

for(y = 0; y < getal + 1; y++)
{
    for(z = 0; z < w + 1; z++)
    {
        document.write(array[z])
    }
    document.write("<br>");
    w--
}