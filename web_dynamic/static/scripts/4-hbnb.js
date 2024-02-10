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

$(document).ready(function () {
  $.ajax({
      type: "POST",
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      contentType: "application/json",
      data: JSON.stringify({}),
      success: function (data) {
          for (let i = 0; i < data.length; i++) {
              const place = data[i];
              const articleTag = `<article>
                                      <div class="title_box">
                                          <h2>${place.name}</h2>
                                          <div class="price_by_night">$${place.price_by_night}</div>
                                      </div>
                                      <div class="information">
                                          <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                                          <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                                          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                                      </div>
                                      <div class="description">${place.description}</div>
                                  </article>`;
              $('.places').append(articleTag);
          }
      },
      error: function (xhr, status, error) {
          console.error("Error:", error);
      }
  });
});
