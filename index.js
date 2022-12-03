
const isGivenWebsite= async (ele)=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url.includes(ele);
}

const mes =async (data)=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions,async (tab)=>{
        chrome.tabs.sendMessage(tab[0].id, data,async (response)=>{
            console.log(await response);
        });    
    });
}


window.addEventListener("load",async ()=>{
    var data = await isGivenWebsite('https://www.linkedin.com/feed/')

    if(data=== true){
        document.querySelector('.discription').classList.add('hidden');
        document.querySelector('.title').classList.remove('hidden');
    };

    document.getElementById("click_it").addEventListener("click",async ()=>{
        var like = parseInt(document.getElementById("like").value)
        var comment = parseInt(document.getElementById("comment").value)
        var data = {
            like: like,
            comment: comment 
        }
        
        await mes(data);
    })    
})
