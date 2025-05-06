var N_AlAzar = Math.random();
if(N_AlAza>=0.5)
{
    alert("Greater than 0.5");
}
else
{
    alert("Lower than 0.5");
}

var Age = Math.floor(N_AlAzar * 100);
if (Age <2)
{
    alert("Bebe");
}
else if (Age <= 12)
{
    alert("Niño");
}
else if (Age <= 19)
{
    alert("Adolescente");
}
else if (Age <= 30)
{
    alert("Joven");
}
else if (Age <= 60)
{
    alert("Adulto");
}
else if (Age <= 75)
{
    alert("Adulto Mayor");
}
else 
{
    alert("Adulto");
}