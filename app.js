import { instagramData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

//iterate the array
//render the data array

//dom
let mainContainer = document.getElementById('main-container')

function getInstagramDataArray() {
	let instagramHtml = ''
	instagramData.forEach(function (data) {
		// make the icon like red
		let likeClassHtml = ''

		if (data.isLiked) {
			likeClassHtml = 'liked'
		}
		instagramHtml += `
			<div class="post-container">
				<div class="post-header">
					<img src="${data.avatar}" class="avatar">
					<div class="post-header-details">
						<p class="fullName">${data.fullName}</p>
						<p>${data.location}</p>
					</div>
				</div>
				<img src="${data.post}">
				<div class="post-footer-container">
					<div class="post-icons">
						<i class="fa-regular fa-heart ${likeClassHtml}" data-likes="${data.uuid}"></i>
						<i class="fa-regular fa-comment fa-flip-horizontal"></i>
						<i class="fa-solid fa-share"></i>
					</div>
					<p class="post-likes">${data.likes.toLocaleString()} likes</p>
					<div>
						<span class="username">${data.username}</span>
						<span>${data.comment}</span>
					</div>
				</div>
			</div>
		`
	})
	return instagramHtml
}

function renderInstagramHtml() {
	mainContainer.innerHTML = getInstagramDataArray()
}
renderInstagramHtml()

document.addEventListener('click', function (e) {
	if (e.target.dataset.likes) {
		handleLike(e.target.dataset.likes)
	}
})

function handleLike(likeId) {
	let targetInstagramObj = instagramData.filter(function (like) {
		return like.uuid === likeId
	})[0]

	if (targetInstagramObj.isLiked) {
		targetInstagramObj.likes--
	} else {
		targetInstagramObj.likes++
	}
	targetInstagramObj.isLiked = !targetInstagramObj.isLiked
	renderInstagramHtml()
}
