const scan =()=>{
    if(window.location.href.includes("/overlay/contact-info")===true){
        var contact=document.getElementsByClassName("pv-contact-info__ci-container")
        var arr = []
        for (let index = 0; index < contact.length; index++) {
            arr.push(contact[index].innerText)   
        }
        chrome.runtime.sendMessage({contact : arr},(response)=>{
            console.log(response)
        });
    }else{
        var pName = document.querySelector("h1.text-heading-xlarge").innerText
        var pAddress = document.querySelector("span.text-body-small.inline").innerText

        chrome.runtime.sendMessage({name : pName , address : pAddress},(response)=>{
            console.log(response)
        });

    }
}

scan()


//[“https://www.linkedin.com/in/isanur-sardar-a14106185”,"https://www.linkedin.com/in/bipul-choudhary-8833b0b9",“https://www.linkedin.com/in/rishav-kumar-061ba222b”,"https://www.linkedin.com/in/anjali-k-379948143"]