function configureListeners() {
    let images = document.getElementsByTagName('img')  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners
            // Changes opcaity when mouse hovers over
           document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
           // Changes removes opacity change when mouse leaves
           document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false)
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    // the if statement checks to see if the opacity changing class is present before applying
    if(!divElement.classList.add("dim")){
        divElement.classList.add("dim")}
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     // The of statement checks to see if the  dim class is has been added and then removes the CSS
     if(divElement.classList.add("dim")){
        divElement.classList.removove("dim")}
     divElement.classList.remove("dim")

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
