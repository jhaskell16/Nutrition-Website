// JavaScript Document

/*Calorie Calculator*/
		function calculate() {
			/*Get selected gender*/
			var gender;
			var genders = document.getElementsByName("genderSel");
			
			for (var i = 0; i < genders.length; i++) {
				if (genders[i].checked) {
					gender = genders[i].value;
				}
			}
			
			/*Get age*/
			var age = document.getElementById("ageInput").value;
			
			/*Get selected activity level*/
			var sel = document.forms[0].mySelect
			var activity = sel.options[sel.selectedIndex].value;
			
			/*Determine Daily Calories*/
			var dailyCals;
				/*Child*/
			if (age <= 3) {
				switch(activity) {
						case "sedentary":
							dailyCals = 1000;
							break;
						case "moderate":
							dailyCals = 1200;
							break;
						case "active":
							dailyCals = 1200;
							break;
					}
			}
			
				/*Male*/
			else if (gender == "male") {
				if (age >= 4 && age <= 8) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1400;
							break;
						case "moderate":
							dailyCals = 1500;
							break;
						case "active":
							dailyCals = 1800;
							break;
					}
				}
				else if (age >= 9 && age <= 13) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1800;
							break;
						case "moderate":
							dailyCals = 2000;
							break;
						case "active":
							dailyCals = 2300;
							break;
					}
				}
				else if (age >= 14 && age <= 18) {
					switch(activity) {
						case "sedentary":
							dailyCals = 2200;
							break;
						case "moderate":
							dailyCals = 2600;
							break;
						case "active":
							dailyCals = 3000;
							break;
					}
				}
				else if (age >= 19 && age <= 30) {
					switch(activity) {
						case "sedentary":
							dailyCals = 2400;
							break;
						case "moderate":
							dailyCals = 2700;
							break;
						case "active":
							dailyCals = 3000;
							break;
					}
				}
				else if (age >= 31 && age <= 50) {
					switch(activity) {
						case "sedentary":
							dailyCals = 2200;
							break;
						case "moderate":
							dailyCals = 2500;
							break;
						case "active":
							dailyCals = 2900;
							break;
					}
				}
				else if (age >= 51) {
					switch(activity) {
						case "sedentary":
							dailyCals = 2000;
							break;
						case "moderate":
							dailyCals = 2300;
							break;
						case "active":
							dailyCals = 2600;
							break;
					}
				}
			}

				/*Female*/
			else if (gender == "female") {
				if (age >= 4 && age <= 8) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1200;
							break;
						case "moderate":
							dailyCals = 1500;
							break;
						case "active":
							dailyCals = 1700;
							break;
					}
				}
				else if (age >= 9 && age <= 13) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1600;
							break;
						case "moderate":
							dailyCals = 1800;
							break;
						case "active":
							dailyCals = 2000;
							break;
					}
				}
				else if (age >= 14 && age <= 18) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1800;
							break;
						case "moderate":
							dailyCals = 2000;
							break;
						case "active":
							dailyCals = 2400;
							break;
					}
				}
				else if (age >= 19 && age <= 30) {
					switch(activity) {
						case "sedentary":
							dailyCals = 2000;
							break;
						case "moderate":
							dailyCals = 2100;
							break;
						case "active":
							dailyCals = 2400;
							break;
					}
				}
				else if (age >= 31 && age <= 50) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1800;
							break;
						case "moderate":
							dailyCals = 2000;
							break;
						case "active":
							dailyCals = 2200;
							break;
					}
				}
				else if (age >= 51) {
					switch(activity) {
						case "sedentary":
							dailyCals = 1600;
							break;
						case "moderate":
							dailyCals = 1800;
							break;
						case "active":
							dailyCals = 2100;
							break;
					}
				}
			}
			
			
			document.getElementById("suggested-cals").innerHTML = dailyCals;
			
			return dailyCals;
			
			/*Display Calories per Meal*/
		}
	
		function display() {
			document.getElementById("suggest-menu").innerHTML = "Use the menu selector below to choose your daily meal plan!";
			
			/*Display Daily Calories*/
			var dailyCals = calculate();
			
			document.getElementById("mondayCalories").innerHTML = "(" + dailyCals + " colories left)";
			document.getElementById("tuesdayCalories").innerHTML = "(" + dailyCals + " colories left)";
			document.getElementById("wednesdayCalories").innerHTML = "(" + dailyCals + " colories left)";
			document.getElementById("thursdayCalories").innerHTML = "(" + dailyCals + " colories left)";
			document.getElementById("fridayCalories").innerHTML = "(" + dailyCals + " colories left)";
			document.getElementById("saturdayCalories").innerHTML = "(" + dailyCals + " colories left)";
			document.getElementById("sundayCalories").innerHTML = "(" + dailyCals + " colories left)";
		}
	
		
		
		
		var total = 0;
		function chooseMonday(i){
			var dailyCals = calculate();
			
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var mondayLeft = document.getElementById("mondayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
			}

			mondayLeft.innerHTML = "(" + (dailyCals - total) + " colories left)";
			console.log(total);
		}
		
		function chooseTuesday(i){
			var dailyCals = calculate();
		
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var tuesdayLeft = document.getElementById("tuesdayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
				
			}
			
			tuesdayLeft.innerHTML = "(" + (dailyCals - total) + " colories left)";
			console.log(total);
		}
		
		function chooseWednesday(i){
			var dailyCals = calculate();
			
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var wednesdayLeft = document.getElementById("wednesdayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
				
			}
			
			var newCals = dailyCals - total;
			wednesdayLeft.innerHTML = "(" + (newCals) + " colories left)";
			console.log(total);
		}
		
		function choosethursday(i){
			var dailyCals = calculate();
			
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var thursdayLeft = document.getElementById("thursdayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
				
			}
			
			var newCals = dailyCals - total;
			thursdayLeft.innerHTML = "(" + (newCals) + " colories left)";
			console.log(total);
		}
		
		function chooseFriday(i){
			var dailyCals = calculate();
			
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var fridayLeft = document.getElementById("fridayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
				
			}
			
			var newCals = dailyCals - total;
			fridayLeft.innerHTML = "(" + (newCals) + " colories left)";
			console.log(total);
		}
		
		function chooseSaturday(i){
			var dailyCals = calculate();
			
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var saturdayLeft = document.getElementById("saturdayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
				
			}
			
			var newCals = dailyCals - total;
			saturdayLeft.innerHTML = "(" + (newCals) + " colories left)";
			console.log(total);
		}
		
		function chooseSunday(i){
			var dailyCals = calculate();
			
			var choice = document.getElementsByClassName("foodChoice");
			var checked = document.getElementsByClassName("checked");
			var sundayLeft = document.getElementById("sundayCalories");
			if(checked[i].checked != true){
				checked[i].checked = true;
				choice[i].style.border = "2px solid green";
				total = total + parseInt(checked[i].value);	
			} else {
				choice[i].style.border = "none";
				checked[i].checked = false;
				total = total - parseInt(checked[i].value);
				
			}
			
			var newCals = dailyCals - total;
			sundayLeft.innerHTML = "(" + (newCals) + " colories left)";
			console.log(total);
		}
		
	
		
		
		function appear(){
			var offset = window.pageYOffset;
			var foodNav = document.getElementById("dayNav");
			var menu = document.getElementById("resultsContainer");
			
			if(offset >= menu.offsetTop){
				foodNav.style.display = "block";
			} else {
				foodNav.style.display = "none";
			}
			
			
			
			
			
		}
		window.addEventListener("scroll", appear);
		
		function menuAppear(){
			var menu = document.getElementById("resultsContainer");
			menu.style.display = "block";
		}
		
		
			function toggle(){
			var mobileNav = document.getElementById("mobileUl");
			if(mobileNav.style.display != "block"){
				mobileNav.style.display = "block";
			}else{
				mobileNav.style.display = "none"
			}
		}

	



