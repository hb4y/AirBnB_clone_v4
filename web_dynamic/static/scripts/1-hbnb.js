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
});
