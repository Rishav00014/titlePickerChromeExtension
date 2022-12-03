
const isGivenWebsite= async (ele)=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url.includes(ele);
}

const mes = (data)=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions,(tab)=>{
        chrome.tabs.sendMessage(tab[0].id, data, (response)=>{
            console.log(response);
        });    
    });
}


window.addEventListener("load",async ()=>{
    var data = await isGivenWebsite('https://www.linkedin.com/feed/')

    if(data=== true){
        document.querySelector('.discription').classList.add('hidden');
        document.querySelector('.title').classList.remove('hidden');
    };

    document.getElementById("click_it").addEventListener("click",()=>{
        var like = parseInt(document.getElementById("like").value)
        var comment = parseInt(document.getElementById("comment").value)
        var data = {
            like: like,
            comment: comment 
        }
        
        mes(data);
    })    
})
