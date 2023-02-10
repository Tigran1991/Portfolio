const createPortfolioWebPage = () => {
	const container = document.querySelector(".container")
	const todoMiddle = document.querySelector(".todo_middle")
	const heading = document.querySelector(".heading")
	const photoDiv = document.querySelector(".photo_div")
	const introDiv = document.querySelector(".intro_div")
	const nameElement = document.querySelector(".name")
	const socialListElements = document.getElementsByTagName("li")
	const social = document.querySelector(".social")

	const addElementsInHeadingText = (text, titelElement, element) => {
		for (let i = 0; i < text.length; i++) {
			const currentElement = text[i]
			element.style.transition = "1s ease"
			titelElement.appendChild(element)
			setTimeout(() => {
				if (currentElement === " ") {
					element.innerHTML += " "
				} else {
					element.innerHTML += currentElement
				}
			}, i * 200)
		}
	}

	const translateTitleToHeadingDiv = (titleElement) => {
		setTimeout(() => {
			titleElement.style.transform = "translateY(-100px)"
		}, 7000)
	}

	const createHeadingText = () => {
		const headingText = "Hi, I'm Software Engineer !"
		const title = document.createElement("div")
		title.setAttribute("class", "title")
		todoMiddle.appendChild(title)
		let headingCurrentElement = document.createElement("h1")
		headingCurrentElement.innerHTML = ""
		addElementsInHeadingText(headingText, title, headingCurrentElement)
		translateTitleToHeadingDiv(title)
	}

	createHeadingText()

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
		photoDiv.style.transform = "translate(-490px)"
	}, 20000)

	setTimeout(() => {
		introDiv.style.opacity = "1"
	}, 22000)

	setTimeout(() => {
		introDiv.style.transform = "translate(490px)"
	}, 24000)
}

createPortfolioWebPage()
