import fetch from 'node-fetch';

const getGitHubUser = async( username ) => { 
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

const printGitHubUser = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(typeof(mojombo));
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();