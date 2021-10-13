function BMI(){
		var w=document.getElementById('w').value;
		var h=document.getElementById('h').value;
		var bmi=w/(h/100*h/100);
		var ow = document.getElementById("ow");
		
		if(bmi>24.9){
		document.getElementById("result").innerHTML=`You are <strong id=ow>Overweight</strong>, your  BMI is   <strong id="ow">${bmi}</strong>`;
		}else if(bmi<18.5){
			document.getElementById("result").innerHTML=`You are <strong id=ow>Underweight</strong>, your  BMI is   <strong id="ow">${bmi}</strong>`;
		}else{
			document.getElementById("result").innerHTML=`You are <strong style=color:green>Fine</strong>, your  BMI is   <strong style=color:green>${bmi}</strong>`;
		}
	}