const p_data = {
	headingText: "Hi, I'm Software Engineer !",
}

const createportfolioBlockWebPage = () => {
	const main = document.querySelector("main")
	const photoBlock = document.querySelector(".photo_block")
	const name = document.querySelector(".name")
	const image = document.querySelector(".image")
	const introBlock = document.querySelector(".intro_block")
	const social = document.querySelector(".social")
	const socialListItems = document.getElementsByTagName("li")
	const portfolioBlock = document.querySelector(".portfolio_block")

	const addingLettersInHeadingText = (text, headingElem, element) => {
		for (let i = 0; i < text.length; i++) {
			const currentLetter = text[i]
			element.style.transition = "1s ease"
			headingElem.appendChild(element)
			setTimeout(() => {
				if (currentLetter === " ") {
					element.innerHTML += " "
				} else {
					element.innerHTML += currentLetter // avelacnel amen taric heto gcik, klaviaturayov grelu nman
				}
			}, i * 200)
		}
	}

	const translateHeadingToHeaderSide = (headingElem) => {
		setTimeout(() => {
			headingElem.style.transform = "translateY(-50px)"
		}, 7000)
	}

	const createHeadingText = () => {
		const heading = document.createElement("div")
		heading.setAttribute("class", "heading")
		main.appendChild(heading)
		const currentHeading = document.createElement("h1")
		currentHeading.innerHTML = ""
		addingLettersInHeadingText(p_data.headingText, heading, currentHeading)
		translateHeadingToHeaderSide(heading)
	}

	createHeadingText()

	setTimeout(() => {
		photoBlock.style.opacity = "1"
	}, 8000)

	setTimeout(() => {
		name.style.opacity = "1"
	}, 9000)

	setTimeout(() => {
		for (let i = 0; i < socialListItems.length; i++) {
			setTimeout(() => {
				socialListItems[i].style.scale = "1.5"
				socialListItems[i].style.opacity = "1"
				socialListItems[i].style.transition = "0.2s ease"
				if (socialListItems[i].style.opacity === "1") {
					setTimeout(() => {
						socialListItems[i].style.scale = "1"
					}, 200)
				}
			}, i * 500)
		}
	}, 10000)

	setTimeout(() => {
		social.style.transform = "translateY(180px)"
	}, 11000)

	setTimeout(() => {
		photoBlock.style.transform = "translate(-490px)"
		photoBlock.style.scale = "0.7"
	}, 12000)

	setTimeout(() => {
		introBlock.style.opacity = "1"
	}, 13000)

	setTimeout(() => {
		introBlock.style.transform = "translate(490px)"
		introBlock.style.scale = "0.7"
	}, 14000)

	setTimeout(() => {
		portfolioBlock.style.opacity = "1"
	}, 15000)

	setTimeout(() => {
		portfolioBlock.style.transform = "translateY(200px)"
		portfolioBlock.style.scale = "1"
	}, 16000)

	const clickEffects = (block1, block2, block3) => {
		block1.style.transform = "translate(600px, 0px)"
		block1.style.scale = "0.7"
		block2.style.transform = "translate(-600px)"
		block2.style.scale = "0.7"
		block3.style.transform = "translate(10px, 150px)"
		block3.style.scale = "1"
	}

	image.addEventListener(
		"click",
		clickEffects(portfolioBlock, introBlock, photoBlock)
	)

	introBlock.addEventListener(
		"click",
		clickEffects(photoBlock, portfolioBlock, introBlock)
	)

	portfolioBlock.addEventListener(
		"click",
		clickEffects(introBlock, portfolioBlock, photoBlock)
	)
}

createportfolioBlockWebPage()
