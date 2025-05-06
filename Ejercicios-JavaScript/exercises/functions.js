function sumar(n1,n2)
{
    return n1 +n2;
}
var res = n1+n2;
console.log(res);

function sumador(n1,n2)
{
    if (isNaN(n1) || isNaN(n2)) 
    {
        return "NaN";
    } else 
    {
        return n1+n2;
    }  
}
console.log(sumador("Entro", 3))
console.log(sumador(5,"Salgo"))
console.log(sumador(2,6));