import { posts } from './posts.js'

//dom

let mainHeader = document.getElementById('main-header')

function renderPost() {
	renderPostElement()
	// increment likes when the like icon is click
}

renderPost()

function renderPostElement() {
	for (let i = 0; i < posts.length; i++) {
		let currentPost = posts[i]
		mainHeader.innerHTML += `
			<div class="avatar-container">
				<img class="avatar-img" src="${currentPost.avatar}"> 
				<div>
					<p class="post-name">${currentPost.fullName}</p>
					<p>${currentPost.location}</p>
				</div>
			</div>
			<img src="${currentPost.post}">
			
			<div class="footer">
				<div class="icon-container">
					<img class="like-icon" src="${currentPost.like}">
					<img src="${currentPost.comments}">
					<img src="${currentPost.share}">
				</div>
				<p class="like-counts">${currentPost.likes.toLocaleString()} likes</p>
				<p> <span class="username"> ${currentPost.username} </span> ${currentPost.comment}</p>
			</div>
		`
	}
}
