window.onload = function () {

			//бокове меню
	document.querySelector('#menu').onmouseover = menuShow;
	document.querySelector('#menu').onmouseout = menuHide;

	function menuShow() {
		document.querySelector('#menu').style.left = 0;
	}

	function menuHide() {
		document.querySelector('#menu').style.left = '-230px';
	}
	//////////

	var todoList = [];

	if (localStorage.getItem('todo')!==undefined) {
		todoList = JSON.parse(localStorage.getItem('todo'));
	 	out();
	 };

	 document.getElementById('add').onclick = function() {
	 	var d = document.getElementById('in').value;
	 	var temp={};
	 	temp.todo = d;
	 	temp.check = false;
	 	var i = todoList.length;
	 	todoList[i] = temp;
	 	console.log(todoList);
	 	out();
	 	localStorage.setItem('todo',JSON.stringify(todoList));
	 }

     //збереження чекбокса
	document.getElementById('out').onclick = function(event){
		var checkbox = document.getElementsByClassName('myCheck');
		for (var i = 0; i < checkbox.length; i++) {
			if(checkbox[i].checked){
				todoList[i].check = true;
				// todoList[key].todo.classList.add('allready')
			} else {
				todoList[i].check = false
			}
			localStorage.setItem('todo', JSON.stringify(todoList) );
		}
	}
		


      //вивід
	 function out() {
	 	var out="";
	 	for(var key in todoList){
	 		if(todoList[key].check == true) {
	 			out += '<input type="checkbox" class="myCheck" checked>';
	 		}
	 		else {
	 			out += '<input type="checkbox" class="myCheck">';
	 		}
	 	out+=todoList[key].todo+ '<br>';
	 	}
	 	document.getElementById('out').innerHTML = out
	 }
	//плавний перехід вгору
	var scrolled;
	var timer;
	document.getElementById('top').onclick = function () {
		scrolled = window.pageYOffset;
		scrollTop();
	}
	function scrollTop() {
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100;
			timer = setTimeout(scrollTop, 100);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}


}
