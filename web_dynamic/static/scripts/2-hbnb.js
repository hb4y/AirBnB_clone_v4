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
});
