var evt = new MouseEvent('mouseenter', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});
var evt2 = new MouseEvent('mouseleave', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});
var temp=0;
const likeLoop = (like)=>{
    if(like>0){         
        setTimeout(()=>{
            temp=temp+1;
            let x = Math.floor(Math.random() *7);           
            document.querySelectorAll(".feed-shared-social-action-bar__action-button .react-button__text ")[temp-1].dispatchEvent(evt);
            setTimeout(()=>{
                document.querySelectorAll(".reactions-menu__reaction")[x].click();
            },500);
            setTimeout(()=>{
                document.querySelectorAll(".feed-shared-social-action-bar__action-button .react-button__text ")[temp-1].dispatchEvent(evt2);
            },1000);
            likeLoop(like-1);                               
        }, 3000);
        
    }else{
        return
    }
}

var temp2=0;
const commentLoop=(comment)=>{
    if(comment>0){
        setTimeout(()=>{
            temp2=temp2+1;
            document.querySelectorAll(".comment-button")[temp2-1].click();
            setTimeout(()=>{
                document.querySelectorAll(".editor-content p")[temp2-1].innerText="CFBR";
            },500);
            setTimeout(()=>{
                document.querySelector(".comments-comment-box__submit-button").click();
            },1500);
            commentLoop(comment-1);
        },3000)
    }else{
        return
    }
}
const scan = () =>{
    chrome.runtime.onMessage.addListener((msgObj,sender,sendResponse)=> {
        sendResponse({msg:"Recived"});
        const time =3000*(msgObj.like+1);
        var max =Math.max(msgObj.like,msgObj.comment)
        console.log(msgObj);
        
        likeLoop(msgObj.like);
        setTimeout(()=>{
            commentLoop(msgObj.comment)
        },time);   
    });
}

scan()