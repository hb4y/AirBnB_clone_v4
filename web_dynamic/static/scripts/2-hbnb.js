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

  $.get('http://0.0.0.0:5001/api/v1/status/', (data, textStatus) => {
    if (textStatus === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
