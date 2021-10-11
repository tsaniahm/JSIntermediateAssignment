
const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

export const getGitHubUser = async( username ) => { 
    try {
        if (!username) {return null;}

        const check = await fetch("https://api.github.com/users/"+username);
        let result = await check.json();

        if (result.id) {
            return result;
        }

        return "Not Found";
    } catch (e) {
        throw (e);
    }
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();
    const username = await getGitHubUser(elFormUsername.firstElementChild.value);
    
    elCardTitle.innerText = username.login;
    console.log(username)

    if(username.id){
        elCardImg.src = username.avatar_url;
        elCardBtn.classList.remove("d-none");
        elCardImg.classList.remove("d-none");
        elCardBtn.setAttribute("href", username.html_url)
    }
    else{
        elCardBtn.classList.add("d-none");
        elCardImg.classList.add("d-none");
    }
    elCard.classList.remove("d-none");
};