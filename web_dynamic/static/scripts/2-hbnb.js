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

document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';
  const apiStatusElement = document.getElementById('api_status');

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK') {
        apiStatusElement.classList.add('available');
      } else {
        apiStatusElement.classList.remove('available');
      }
    })
    .catch(error => console.error('Error fetching API status:', error));
});
