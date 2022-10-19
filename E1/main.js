let num1,num2,resu;
        num1 = window.prompt("Introduce el primer numero","0");
        parseFloat(num1);
        num2 = window.prompt("Introduce el segundo numero","0");
        parseFloat(num2);
        if(num1>num2){
            document.write(`<br/> <br/>El numero ${num1} es mayor que ${num2}` );
        }else if(num2>num1){
            document.write(`<br/> <br/>El numero ${num2} es mayor que ${num1}` );
        }else{
            document.write(`<br/> <br/>El numero ${num2} es igual al numero ${num1}` );
        }