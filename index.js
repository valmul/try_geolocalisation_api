function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const preciseP = document.querySelector('#precise-loc');
    const preciseDetails = document.querySelector('#precise-detail');

  
    mapLink.href = '';
    mapLink.textContent = '';
    preciseP.textContent = 'try';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
    function successPrecise(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const altitude= position.coords.altitude;

        const accuracy = position.coords.accuracy;
        const altitudeAccuracy = position.coords.altitudeAccuracy;
        const heading = position.coords.heading;
        const speed = position.coords.speed;


        preciseP.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        preciseDetails.innerHTML = `accuracy: ${accuracy} <BR>`;
        preciseDetails.innerHTML += `altitude: ${altitude} m, altitude accuracy: ${altitudeAccuracy}  <BR>`;
        preciseDetails.innerHTML += `heading ${heading}, speed: ${speed}`;

      }
  
    function error( err ) {
      status.textContent = 'Unable to retrieve your location';
      alert(`Mon code erreur:${err.code} le message associé: ${err.message} `);
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      const positionOptions = {
          maximumAge: 3000, // age of thoe geolcalisation
          timeout: 2000, // timeout while acquiring the position
          enableHighAccuracy: false // ask for high accurracy more power consumption and time
        }
      navigator.geolocation.getCurrentPosition(success, error, positionOptions );
      const positionOptionsPrecise = {
        maximumAge: 3000,
        timeout: 2000,
        enableHighAccuracy: true
      }
      navigator.geolocation.getCurrentPosition(successPrecise, error, positionOptionsPrecise);

    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);