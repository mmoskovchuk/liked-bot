if (confirm("Запускаем?")){
	function likes(){
		document.querySelector('[data-choice="yes"]').click();
	}
	setInterval(likes, 5000);
}
else {
	alert("Ноу проблем, тогда ручками");
}