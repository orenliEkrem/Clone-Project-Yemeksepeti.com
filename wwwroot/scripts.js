let autocomplete;
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["address"],
      componentRestrictions: { country: ["TR"] },
      fields: ["place_id", "geometry", "name"],
    }
  );

  autocomplete.addListener("place_changed", onPlaceChanged);
}

function onPlaceChanged() {
  var place = autocomplete.getPlace();

  if (!place.geometry) {
    document.getElementById("autocomplete").placeholder =
      "Örneğin: Esentepe Dede Korkut Sk. No:28/1";
  } else {
    console.log(place.geometry);
    document.getElementById("details").innerHTML = place.name;
    console.log(place.geometry);
  }
}
