
const isGivenWebsite= async (ele)=>{
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.url.includes(ele);
}

const myLoop = (i,arr)=>{         
    setTimeout(function() {
        chrome.tabs.update(
            {url: arr[i]}
        );
        i++;                    
        if (i < arr.length) {          
            myLoop(i,arr);              
        }                       
    }, 5000);
}

window.addEventListener("load",async ()=>{
    var data = await isGivenWebsite('linkedin.com')
    if(data=== true){
        document.querySelector('.discription').classList.add('hidden');
        document.querySelector('.title').classList.remove('hidden');
    };

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        sendResponse({responce :"Data Recived"});
        console.log(JSON.stringify(message))
    });
    document.getElementById("click_it").addEventListener("click",()=>{
        var inputData = document.getElementById("input_arr").value
        var arr= inputData.substring(1,inputData.length-1).split(",");
        var linkArr=[];

        arr.forEach(item => {
            let temp =item.trim()
            linkArr.push(temp.substring(1,temp.length-1))
            linkArr.push(temp.substring(1,temp.length-1)+"/overlay/contact-info")
        });

        myLoop(0,linkArr)
    })    
})
