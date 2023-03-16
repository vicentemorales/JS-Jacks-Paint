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
    if(!this.classList.contains("dim")){
        this.classList.add("dim")}
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class
     // The of statement checks to see if the  dim class is has been added and then removes the CSS
     if(this.classList.contains("dim")){
        this.classList.remove("dim")}

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
            
            // !!!!!!! inserting the price and color name as  instructed in the activity by using a switch statement
            price = '$14.99';
            colorName = 'Lime Green';
            updatePrice(colorName, price); 
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
            price = '$11.14';
            colorName = 'Medium Brown';
            updatePrice(colorName, price);
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99';
            colorName = 'Royal Blue';
            updatePrice(colorName, price);            
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.42';
            colorName = 'Solid Red';
            updatePrice(colorName, price);
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price = '$21.98';
            colorName = 'Solid White';
            updatePrice(colorName, price);
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price = '$4.99';
            colorName = 'Solid Black';
            updatePrice(colorName, price);
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22';
            colorName = 'Solid Cyan';
            updatePrice(colorName, price);            
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price = '$11.99';
            colorName = 'Solid Purple';
            updatePrice(colorName, price);
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99';
            colorName = 'Solid Yelllow';
            updatePrice(colorName, price);
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {   
        // select element with corresponding id    
        let colorPrice = document.getElementById('color-price')
        // display price
        colorPrice.textContent = price;
        
        
        let color = document.getElementById('color-name')
        //display color name
        color.textContent = colorName;
    }
    
}
