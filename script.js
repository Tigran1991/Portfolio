const createPortfolioWebPage = () => {
	const container = document.querySelector(".container")
	const heading = document.querySelector(".heading")
	const photoDiv = document.querySelector(".photo_div")
	const introDiv = document.querySelector(".intro_div")
	const nameElement = document.querySelector(".name")
	const socialListElements = document.getElementsByTagName("li")
	const social = document.querySelector(".social")

	const createHeading = () => {
		const headingText = "Hi, I'm Software Engineer !"
		for (let i = 0; i < headingText.length; i++) {
			let element = headingText[i]
			let headingCurrentElement = document.createElement("h1")
			headingCurrentElement.innerText = element
			headingCurrentElement.style.transition = "1s ease"
			headingCurrentElement.style.opacity = "0"
			setTimeout(() => {
				if (element === " ") {
					headingCurrentElement.style.opacity = "1"
					headingCurrentElement.style.marginLeft = "10px"
					heading.appendChild(headingCurrentElement)
				} else {
					headingCurrentElement.style.opacity = "1"
					heading.appendChild(headingCurrentElement)
				}
			}, i * 200)
		}
	}

	createHeading()

	setTimeout(() => {
		heading.style.transform = "translateY(-200px)"
	}, 7000)

	setTimeout(() => {
		photoDiv.style.opacity = "1"
	}, 10000)

	setTimeout(() => {
		nameElement.style.opacity = "1"
	}, 13000)

	setTimeout(() => {
		for (let i = 0; i < socialListElements.length; i++) {
			setTimeout(() => {
				socialListElements[i].style.scale = "1.5"
				socialListElements[i].style.opacity = "1"
				socialListElements[i].style.transition = "0.2s ease"
				if (socialListElements[i].style.opacity === "1") {
					setTimeout(() => {
						socialListElements[i].style.scale = "1"
					}, 200)
				}
			}, i * 500)
		}
	}, 15000)

	setTimeout(() => {
		social.style.transform = "translateY(150px)"
	}, 18000)

	setTimeout(() => {
		photoDiv.style.transform = "translate(-400px)"
	}, 20000)

	setTimeout(() => {
		introDiv.style.opacity = "1"
	}, 22000)

	setTimeout(() => {
		introDiv.style.transform = "translate(400px)"
	}, 24000)
}

createPortfolioWebPage()
