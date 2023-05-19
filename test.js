let posts = [
    {
  
      'name': 'Roadrunner',
      'image': '<img src="img/wald.jpg">',
      'description': 'Heute eine neuen PR. aufgestellt, ich liebe Joggen!',
      'location': 'Schwarzwald',
      'post-it': ['Hab dich vorbeiziehen sehn, wow!'],
      'liked': 105,
      'loginname': 'Seynur',
      'likedByCurrentUser': false
      
      
    },
]  
function show() {
    loadpost();
    let postcontainer = document.getElementById('postcontainer');
    postcontainer.innerHTML = '';
    
    
  
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      let likeIconClass = post.likedByCurrentUser ? 'fa-beat' : 'fa-regular';
      postcontainer.innerHTML += `
        <div class="post-it">
          <div class="post-credit">
            <div class="post-essential">
            </div>
            <div class="post-spacebetween">
            <div class="upload-essential">
            <div class="upload-ppicture">
            <img src="img/rebecca.jpg" class="post-picture-round">
            </div>
            <div class="upload-profil">  
            <span><b>${post['name']}</b></span>
            <span>${post['location']}
            </div>  
            </div>
            <div class="share-content">
            <a href="#"><b>...</b></a>
          
          </div>
          </div>
          <div class="image-container">${post['image']}</div>
          <div class="description">${post['description']}</div>
          <div class="socialmedia-icons">
          <div class="social-iconstry">
          <i onclick="likedpost(${i})" class="fa fa-sharp fa-heart ${likeIconClass}" id="like${i}" alt="herz"></i>
          <i class="fa fa-thin fa-comment" style = "color: grey"></i>
          <i class="fa fa-thin fa-share" style = "color: grey"></i>
          </div>
          <div onclick="copy(${i})" class="social-icons-savepost">
          <img src=img/save.png>
          
  
          
          </div>
          </div>
          <span id="likes${i}" class="likeit">Gefällt ${post['liked']} mal!</span>
          
          <div class="commentsection" id="commentsection${i}"></div>
          <div class="inputfield">
          <input class="INPUT" id="input${i}">
          <button onclick="postit(${i})">Post it</button>
        </div>
        </div>
      `;
    }
}