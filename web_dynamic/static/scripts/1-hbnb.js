$(document).ready(function () {
  const amenityIds = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      amenityIds[amenityId] = amenityName;
    } else {
      delete amenityIds[amenityId];
    }
    // update h4 tag
    const amenitiesList = Object.values(amenityIds).join(', ');
    $('div.Amenities h4').text('Amenities: ' + amenitiesList);
  });
});
