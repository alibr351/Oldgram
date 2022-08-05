const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
document.head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet">`



let  name = [posts[2].name],
     place = [posts[2].location],
     userName = [posts[2].username],
     profilePic = [posts[2].avatar],
     Selfie = [posts[2].post],
     commentStr = [posts[2].comment],
     likes = [posts[2].likes]
     
    // mian and header element
 const main = document.createElement("main")
 document.body.before(main)
 const header = document.createElement("header")
 main.appendChild(header)
 // header will contian two divs, 1, for logo and user avatar and 2, avatar, name and location
 const sec1 = document.createElement("div")
  // creating a class for div sections
  sec1.setAttribute("class", "logo-useravatar")
  header.appendChild(sec1)
  //pushing in header content 
  sec1.innerHTML += `<img class="logo" src="images/logo.png">`
  const userAvatar = document.createElement("img")
  userAvatar.setAttribute("class", "user-avatar")
  userAvatar.src = "images/user-avatar.png"
  userAvatar.setAttribute("alt", "per smilling")
  sec1.append(userAvatar)
  
  //second section of the header
  const sec2 = document.createElement("div")
  sec2.setAttribute("class", "avatar-info")
  //you can change posts index for the other avatar
  const propic = document.createElement("img")
  propic.setAttribute("class", "avatar")
  propic.src = profilePic
  propic.setAttribute("alt", "A black and white photo")
  sec2.append(propic)
  header.appendChild(sec2)
  
  // creating another div for name  and location
  const nameLoc = document.createElement("div")
  nameLoc.setAttribute("class", "avater-info")
  sec2.appendChild(nameLoc)
  
  //push name and loc. into sec2/div
  nameLoc.innerHTML += `<p class="name">${name}</p> <p class="place">${place}</p>`
  //post img
  const article = document.createElement("article")
  article.innerHTML += `<img class="main-img" src="${Selfie}" alt="potrait of ${name}">`
  main.appendChild(article)
  // double click to like
 let clickImg = document.querySelector('article')
 clickImg.addEventListener("dblclick", function() {
        like(1)  
 })
  // section for icons, likes and comments
  const iconslikesComments = document.createElement("section")
  iconslikesComments.setAttribute("class", "container")
  main.appendChild(iconslikesComments)
  const iconDiv = document.createElement("div")
  iconDiv.setAttribute("class", "icons")
  iconslikesComments.appendChild(iconDiv)
  
  //heart icon
  const heartIcon = document.createElement("img")
  heartIcon.src = "images/icon-heart.png"
  heartIcon.setAttribute("class", "heart")
  iconDiv.append(heartIcon)
  //  click to like     
  heartIcon.addEventListener("click", function() {
        like(1)  
  })
  
  //comment icon
  const commentIcon = document.createElement("img")
  commentIcon.src = "images/icon-comment.png"
  commentIcon.setAttribute("class", "comment-icon")
  iconDiv.append(commentIcon)
  
  //dm icon
  const dmIcon = document.createElement("img")
  dmIcon.src = "images/icon-dm.png"
  dmIcon.setAttribute("class", "dm")
  iconDiv.append(dmIcon)
  
  //likes
  let p = document.createElement("p")
  p.setAttribute("class", "likes")
  p.append(likes, " " + "likes")
  iconslikesComments.appendChild(p)
  
     function like(lik) {
         let numOfLikes = likes
         numOfLikes += lik
         p.innerHTML = `${numOfLikes} likes`
     }
      like(0)
  
  
  
//comments
 let pCom = document.createElement("p")
 pCom.setAttribute("class", "comment")
 pCom.innerHTML = `<span class="username">${userName}</span> ${commentStr} `
 iconslikesComments.appendChild(pCom)
