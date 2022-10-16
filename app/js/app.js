// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
	const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.section__seaUrchin') // ищем элемент, который будет следовать за курсором
		if (el != null) {
			el.addEventListener('mousemove', e => { // при движении курсора
				const target = e.target // определяем, где находится курсор
				if (!target) return;
				let	seaUrchinStart = document.querySelector('.seaUrchin__start')
				seaUrchinStart.style.opacity = "0"
				let	seaUrchinfinish = document.querySelector('.seaUrchin__finish')
				seaUrchinfinish.style.opacity = "1"
				let seaUrchin = document.querySelector('.seaUrchin__finish')
				if (target) { // если курсор наведён на ссылку
					seaUrchin.classList.add('seaUrchin__active') // элементу добавляем активный класс
				} else{ // иначе
					seaUrchin.classList.remove('seaUrchin__active')
					console.log("иначе")
				}
				seaUrchin.style.left = e.clientX + 'px' // задаём элементу позиционирование слева
				seaUrchin.style.top = (e.clientY-20)  + 'px'
			})
			el.addEventListener("mouseout", e => {
				const target = e.target
				if (!target) return;
				let seaUrchin = document.querySelector('.seaUrchin')
				seaUrchin.classList.remove('seaUrchin__active')
			})
		}
    
  }

  followCursor() // вызываем функцию followCursor

	let seaUrchinFinish = document.querySelector(".seaUrchin__finish")
	seaUrchinFinish.addEventListener('click', () => {
		console.log('seaUrchin__finish')
		let weveGreen = document.querySelectorAll(".weve__green")
		let waveAzure = document.querySelectorAll(".wave__azure")
		let waveBlue = document.querySelectorAll(".wave__blue")
		waveBlue.forEach((el)=> {
			el.classList.add('weve__Blue__y');
			function say() {
				el.classList.remove('weve__Blue__y');
			}
			setTimeout(()=> {
				say()
			},2800);
		})
		waveAzure.forEach((el)=> {
			el.classList.add('weve__Azure__y');
			function say() {
				el.classList.remove('weve__Azure__y');
			}
			setTimeout(()=> {
				say()
			},3300);
		})
		weveGreen.forEach((el)=> {
			el.classList.add('weve__Green__y');
			function say() {
				el.classList.remove('weve__Green__y');
			}
			setTimeout(()=> {
				say()
			},3800);
		})

	});

	document.querySelector(
	"body").addEventListener("mousemove", eyeball);
	function eyeball() {
		var eye = document.querySelectorAll(".eye");
		if (eye !=null) {
			eye.forEach(function (eye) {
				let x =
				eye.getBoundingClientRect().left + eye.clientWidth / 2;
				let y =
				eye.getBoundingClientRect().top + eye.clientHeight / 2;
				let radian =
				Math.atan2(event.clientX - x, event.clientY - y);
				let rot =
				radian * (180 / Math.PI) * -1 + 270;
				eye.style.transform =
				"rotate(" + rot + "deg)";
				});
		}

	}



})
