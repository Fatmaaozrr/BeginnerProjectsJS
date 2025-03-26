function hesapla(){
    document.getElementById("kilo_value").textContent=parseInt(document.getElementById("kilo").value)+" kg";
    document.getElementById("boy_value").textContent=parseInt(document.getElementById("boy").value)+" cm";

    var k=parseInt(document.getElementById("kilo").value);
    var b=parseInt(document.getElementById("boy").value);

    var bmi=(k/Math.pow((b/100),2)).toFixed(1);
    document.getElementById("index").textContent=bmi;

    if(bmi<18.5)
    {
        yaz="Zayıf";
        document.getElementById("index").style.color="yellow";
    }
    else if(bmi>=18.5 && bmi<24.9)
    {
        yaz="Normal";
        document.getElementById("index").style.color="green";
    }
    else if(bmi>=25 && bmi<29.9)
    {
        yaz="Fazla Kilolu";
        document.getElementById("index").style.color="orange";
    }
    else
    {
        yaz="Obez";
        document.getElementById("index").style.color="red";
    }

    document.getElementById("metin").textContent=yaz;
}