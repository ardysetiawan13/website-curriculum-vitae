class App{
	constructor(){
		const container = document.querySelector(".background-overlay");
		const nav = document.querySelectorAll("a.nav-item");
		nav.forEach( (thisPage) => { 
			thisPage.addEventListener("click", (event) =>{
				let page = event.target.dataset.page;
				let position = document.getElementById("page-"+page);
				$(container).animate({
					scrollTop: position.offsetTop + 16
				}, 800);
				// container.scroll({
				//   top: position.offsetTop, 
				//   left: 0, 
				//   behavior: 'smooth'
				// });
			});
		});


		var btnDownloadCv = document.querySelector("#btnDownloadCv");
			btnDownloadCv.addEventListener("click", (event) => {
				window.open('cv-ardy_setiawan.pdf', '_blank');
			});

		this.setAge();
	}

	setAge(){
		let birthDate = moment("1991-11-13");
		let today = moment();
		let diff = today.diff(birthDate, 'years');
		document.getElementById("age").textContent = diff;
	}
}
document.addEventListener('DOMContentLoaded', function(){
	var newApp = new App;
}, false);
