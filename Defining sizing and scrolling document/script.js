let textBlock = document.querySelector('section'),
    btn = document.querySelectorAll('button');

// console.log(textBlock.clientWidth); // content + (padding - scroll)
// console.log(textBlock.clientHeight); //content + (padding - scroll)

// console.log(textBlock.offsetWidth); // content + padding + scroll + border
// console.log(textBlock.offsetHeight); //content + padding + scroll + border


// console.log(textBlock.scrollWidth); // whole (content + padding - scroll)
// console.log(textBlock.scrollHeight); //whole (content + padding - scroll)

let blockWidth = textBlock.offsetWidth,
    blockHeigth = textBlock.offsetHeight;



btn[0].addEventListener('click', function(){ 
  textBlock.style.height = textBlock.scrollHeight + 'px';
});


btn[1].addEventListener('click', function(){ 
  textBlock.style.height = blockHeigth + 'px';
});

btn[2].addEventListener('click', function(){ 
  textBlock.scrollTop = 0;
});


// console.log(textBlock.getBoundingClientRect()); //returns a DOMRect object providing information about the size of an element and its position relative to the viewport


//TO WORK WITH DOCUMENT

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollTop);

// scrollBy(0, 200); method scrolls the document in the window by the given amount. 
// scrollTo(0, 200);  scrolls to a particular set of coordinates in the document. 