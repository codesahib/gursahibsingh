$(".item").each(function() {
  var img_url = $(this).find('img').attr('src');
  $(this).css({
    'background-size': 'cover',
    'background-image': 'url(' + img_url + ')',
    'background-position': '50% 50%'
  });
  $(this).find('img').hide();
});