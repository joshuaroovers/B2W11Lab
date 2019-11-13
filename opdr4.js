tafelvan = [2,4,6,8,12,8];
lengtH = tafelvan.length;
for(y = 0; y < lengtH; y++)
{
    for(x = 1; x < 11; x++)
    {
        solution = x * tafelvan[y]
        document.write(x + " x " + tafelvan[y] + " = " + solution + "<br>")
    }
    document.write("<br>")
}