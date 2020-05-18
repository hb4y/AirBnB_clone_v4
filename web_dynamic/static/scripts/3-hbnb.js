$(document).ready(() => {
  const checkAmenities = {};

  $('INPUT:checkbox').change(
    function () {
      if ($(this).is(':checked')) {
        checkAmenities[($(this).attr('data_id'))] = $(this).attr('data-name');
      } else {
        delete checkAmenities[($(this).attr('data_id'))];
      }
    });

  $.get('http://127.0.0.1:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5001/api/v1/places_search/',
    data: '{}',
    contentType: 'application/json',
    success: function (data) {
      $.each(data, function (index, place) {
        $('SECTION.places').append('<article><div class="title_box"><h2>' + place.name +
        '</h2> <div class="price_by_night">$' + place.price_by_night +
        '</div></div><div class="information"><div class="max_guest">' +
        place.max_guest + (place.max_guest > 1 ? ' Guests' : ' Guest') +
        '</div><div class="number_rooms">' + place.number_rooms +
        (place.number_rooms > 1 ? ' Bedrooms' : ' Bedroom') + '</div><div class="number_bathrooms">' +
        place.number_bathrooms + (place.number_bathrooms > 1 ? ' Bathrooms' : ' Bathroom') +
        '</div></div><div class="description">' + place.description + '</div></article>');
      });
    }
  });
});
