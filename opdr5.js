array = [];
w = 0;
getal = prompt("voer een getal in")
getal = parseInt(getal);
document.write("Array: ")

for(x = 0; x < getal + 1; x++)
{
    array[x] = x;
    document.write(x + " ")
}

for(y = -2; y < getal; y++)
{
    for(z = 0; z < w; z++)
    {
        document.write(array[z])
    }
    w = w + 1;
    document.write("<br>")
}