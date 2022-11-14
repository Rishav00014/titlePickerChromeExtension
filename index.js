const getCurrentTab= async ()=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.title;
}
const getTitle =async ()=>{
    try{
        const myTitle=document.getElementsByClassName("title_content")[0]
        myTitle.innerHTML =await getCurrentTab();
    }catch(err){

    }
}
window.addEventListener("load",()=>{
    document.getElementById("click_it").addEventListener("click",()=>{
        getTitle();
    })
})