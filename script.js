
const inputBox = document.querySelector('.input');
const findButton = document.querySelector('.btn');
const infoSection = document.querySelector('.information')
const userInfoSection = document.querySelector('.userInfo')
let img = document.createElement('img');
let bio = document.createElement('span');
let company = document.createElement('span');
let followers = document.createElement('span');
let following = document.createElement('span');
let Name = document.createElement('span');
let publicRepos = document.createElement('span');

     function getData() {
        infoSection.appendChild(img);
        img.className = 'picture';
        userInfoSection.appendChild(Name)
        userInfoSection.appendChild(bio)
        userInfoSection.appendChild(company)
        userInfoSection.appendChild(followers)
        userInfoSection.appendChild(following)
        userInfoSection.appendChild(publicRepos)
        let userName = inputBox.value;
        fetch(`https://api.github.com/users/${userName}`)
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                let imageSource = data.avatar_url;
                let nameValue = data.name;
                let bioInfo = data.bio;
                let company_Name = data.company;
                let followersNumber = data.followers;
                let followingNumber = data.following;
                let publicRepositories = data.public_repos;
                img.src = imageSource;
                Name.textContent =  nameValue ;
                bio.textContent = bioInfo;
                company.textContent = company_Name;
                followers.textContent = followersNumber;
                following.textContent = followingNumber;
                publicRepos.textContent = publicRepositories;
                console.log(nameValue)
            });
        console.log('clicked');
    }
findButton.addEventListener('click', () => {
  if(inputBox.value != ''){
    getData();
    infoSection.classList.toggle('hidden');
  }
  else{
    inputBox.placeholder = 'Enter the Username';
    inputBox.classList.add('inputPlaceholder')
  }

});
