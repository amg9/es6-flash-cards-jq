$(document).ready( function() {

  const showBack = (elem) => {
    $(`.${elem.classList[0]}.front`).hide();
    $(`.${elem.classList[0]}.back`).show();
  }

  $('.show-back').on('click', function() {
    showBack(this);
  });

  const showFront = (elem) => {
    $(`.${elem.classList[0]}.back`).hide();
    $(`.${elem.classList[0]}.front`).show();
  }
  
  $('.show-front').on('click', function() {
    showFront(this);
  });  

  const editFront = (elem) => {
    let card = elem.classList[0];
    $(`.${card}.front > .change`).show();
    $('.submit').on('click', function () {
      let inputValue = $(`.${card}.front > .change > input`).val();
      $(`.${card} > h2`).text(`${inputValue}`);
      $(`.${card}.front > .change `).hide();
    });
  };
  
  $('.front > .edit').on('click', function() {
    editFront(this);
  });

  const editBack = (elem) => {
    let card = elem.classList[0]
    $(`.${card}.back > .change`).show();
    $('.submit').on('click', function () {
      let textValue = $(`.${card}.back > .change > textarea`).val();
      $(`.${card} > p`).text(`${textValue}`);
      $(`.${card}.back > .change `).hide();
    });
  };

  $('.back > .edit').on('click', function() {
    editBack(this);
  });
  
  var count = 2
  
  $('body').on('click', '#add', function() {
    count = count + 1
    $('#cards').prepend($(`
    <div id="card${count}" class="c${count} card">
      <div class="c${count} front">
        <button class="c${count} show-back">Show Back</button>
        <button class="c${count} edit">Edit</button>
        <h2></h2>
        <div class="c${count} change">
          <input type="text" />
          <button class="c${count} submit">Submit</button>
        </div>
      </div>  
      <div class="c${count} back">
        <button class="c${count} show-front">Show Front</button>
        <button class="c${count} edit">Edit</button>
        <p></p>
        <div class="c${count} change">
          <textarea></textarea>
          <button class="c${count} submit">Submit</button>
        </div>
      </div>
      <button>Delete</button> 
    </div>  
    `));  
    
    $('.show-back').on('click', function() {
      showBack(this);
    });
    
    $('.show-front').on('click', function() {
      showFront(this);
    });   

    $('.front > .edit').on('click', function() {
      editFront(this);
    });

    $('.back > .edit').on('click', function() {
      editBack(this);
    });
  });
});