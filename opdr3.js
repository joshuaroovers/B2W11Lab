arrayeen = [1,2,3,4,5,6,7,8,9,10]
arraytwee = [2,4,6,8,10,12,14,16,18,20]

executeALL();

function addition()
{
    document.write("<br>")
    for(x =0; x < 10; x++)
    {
        solution = arrayeen[x] + arraytwee[x]
        document.write(arrayeen[x] + " + " + arraytwee[x] + " = " + solution + "<br>")
    }
}
function substraction()
{
    document.write("<br>")
    for(x = 0; x < 10; x++)
    {
        solution = arraytwee[x] - arrayeen[x]
        document.write(arraytwee[x] + " - " + arrayeen[x] + " = " + solution + "<br>")
    }
}
function multiplication()
{
    document.write("<br>")
    for(x = 0; x < 10; x++)
    {
        solution = arrayeen[x] * arraytwee[x]
        document.write(arrayeen[x] + " x " + arraytwee[x] + " = " + solution + "<br>")
    }
}
function division()
{
    document.write("<br>")
    for(x = 0; x < 10; x++)
    {
        solution = arraytwee[x] / arrayeen[x]
        document.write(arraytwee[x] + " / " + arrayeen[x] + " = " + solution + "<br>")
    }
}

function executeALL()
{
    addition();
    substraction();
    multiplication();
    division();
}