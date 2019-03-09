import React from 'react'



 function Button(props) {

    const quotesArray = props.quotes;
    
    // Get Random Quote ====
    const getRandomQuote = () => {
      // Get a random array number =====
      let p = document.getElementById('new-quote')
      let randomQuote = Math.floor(Math.random() * quotesArray.length);
      
      // Console log the array of quotes ====
      //console.log(quotesArray[randomQuote]);
     
      p.classList.add('opacityOff');
      
      setTimeout(() => {
        // add the quote to the quote class div.
        p.classList.add('opacity');
        p.innerHTML = quotesArray[randomQuote];
          }, 200);
        p.classList.remove('opacity')
     }

//Tweet your quote ====
  const shareQuote = () => {
    let el = document.querySelector('.twitter-share-button');
    el.href = 'https://twitter.com/share';
    let p = document.getElementById('new-quote')
    let quote = p.innerText;
    console.log(quote);
    
    el.href = `https://twitter.com/intent/tweet?text=${quote}`;
  };
     

    return (
        <React.Fragment>
        <div className="btncontainer">
        <button type="button" className="btn" onClick={getRandomQuote}>{props.name}</button>
        </div>
        <a className="twitter-share-button" onClick={shareQuote} href="https://twitter.com/share" target="_blank" rel="noopener noreferrer">
        <button type="button" className="twitter-btn">Tweet Quote</button>
       </a> 
       </React.Fragment>
    )
}

export default Button;
