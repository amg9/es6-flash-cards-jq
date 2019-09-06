$(document).ready( function() {
  $('.show-back').click(function() {
    $(`.${this.classList[0]} > .front`).hide();
    $(`.${this.classList[0]} > .back`).show();
  });

  $('.show-front').click(function() {
    $(`.${this.classList[0]} > .back`).hide();
    $(`.${this.classList[0]} > .front`).show();
  });
});