'use strict';

$(document).ready(init);

function init() {
  $('.btn').click(convert);
}

function convert() {
  $('.output').empty();

  var markdown = {markdown: $('.input').val()};

  console.log("markdown:", markdown);

  $.post('/markdown', markdown, function(data) {
    console.log(data);
    $('.output').html($.parseHTML(data));
  });
  
}