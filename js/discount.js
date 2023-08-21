 
 let total=0;
function handelClickBtn(target){
   
    const selectedIteamContainer=document.getElementById('selected-iteam');
    const iteamName= target.parentNode.childNodes[5].innerText;
    const ol= document.createElement('li');
    ol.innerText=iteamName;
    selectedIteamContainer.appendChild(ol);
    
    
    const iteamPriceContainer=document.getElementById('total-price"');
    const price=target.parentNode.childNodes[7].innerText.split(' ')[0];

    total =parseFloat(total)+parseFloat(price);
    const totalprice=document.getElementById('total-price');
    totalprice.innerText=total
    const promoCode=document.getElementById('promo-code');
    if(total>=200){

            const discount=total*0.20;
            const discountPrice=document.getElementById('discount');  
            discountPrice.innerText=discount;

            const totaltaka = total - discount;
            const totalpriceContainer=document.getElementById('total');
            totalpriceContainer.innerText=totaltaka;
            
    }
    else{
        
        const totalpriceContainer=document.getElementById('total');
        totalpriceContainer.innerText=total;
    }
    

           
    
    
    
    
    
}
