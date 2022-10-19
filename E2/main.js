var num1,num2,num3,resu;
        num1 = window.prompt("Dame la calificación 1","0");
        parseFloat(num1);
        num2 = window.prompt("Dame la calificación 2","0");
        parseFloat(num2);
        num3 = window.prompt("Dame la calificación 3","0");
        parseFloat(num3);


       resu = (Number(num1)+Number(num2)+Number(num3))/3;
       

        document.write(`<br/>C1 = ${num1} <br/>C2 = ${num2} <br/>C3 = ${num3} <br/>El promedio es ${resu}` );

        if(resu>=6.0 && resu<=10){
            document.write(`<br/> <br/>APROBADO` );
        }else if(resu<=5.9 && resu>=0){
            document.write(`<br/> <br/>REPROBADO` );
        }else{
            document.write(`<br/> <br/>El programa ha fallado` );
        }