$(document).ready( function() {

  const showBack = (elem) => {
    $(`.${elem.classList[0]} > .front`).hide();
    $(`.${elem.classList[0]} > .back`).show();
  }

  $('.show-back').on('click', function() {
    showBack(this);
  });

  const showFront = (elem) => {
    $(`.${elem.classList[0]} > .back`).hide();
    $(`.${elem.classList[0]} > .front`).show();
  }
  
  $('.show-front').on('click', function() {
    showFront(this);
  });  


  let count = 2
  
  $('body').on('click', '#add', function() {
    count = count + 1
    $('#cards').prepend($(`
    <div id="card${count}" class="c${count} card">
    <div class="front">
    <button class="c${count} show-back">Show Back</button>
    <h2> </h2>
    </div>  
    <div class="back">
    <button class="c${count} show-front">Show Front</button>
    <p> </p>
    </div>  
    <button>Edit</button>
    <button>Delete</button> 
    </div>  
    `));  
    
    $('.show-back').on('click', function() {
      showBack(this);
    });
    
    $('.show-front').on('click', function() {
      showFront(this);
    });   
  });
});