var idWatcher;
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

        const timeLastPosition = new Date(position.timestamp);


        preciseP.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        preciseDetails.innerHTML = `accuracy: ${accuracy} en mètres sur longitude et latitude <BR>`;
        preciseDetails.innerHTML += `time of acquisition: ${timeLastPosition.toLocaleDateString()} `
        preciseDetails.innerHTML += ` ${timeLastPosition.getHours()} H ${timeLastPosition.getMinutes()} mn ${timeLastPosition.getSeconds()} s ${timeLastPosition.getMilliseconds()} ms<BR>`;
        preciseDetails.innerHTML += `altitude: ${altitude} m, altitude accuracy: ${altitudeAccuracy} en mètre <BR>`;
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
  
function watchPos() {

  const status = document.querySelector('#status-watch');
  const mapLink = document.querySelector('#map-link-watch');
  const preciseP = document.querySelector('#precise-loc-watch');
  const preciseDetails = document.querySelector('#precise-detail-watch');


  mapLink.href = '';
  mapLink.textContent = '';
  preciseP.textContent = 'try';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude= position.coords.altitude;
    const accuracy = position.coords.accuracy;
    const altitudeAccuracy = position.coords.altitudeAccuracy;
    const heading = position.coords.heading;
    const speed = position.coords.speed;

    const timeLastPosition = new Date(position.timestamp);

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    preciseP.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    preciseDetails.innerHTML = `accuracy: ${accuracy} en mètres sur longitude et latitude <BR>`;
    preciseDetails.innerHTML += `time of acquisition: ${timeLastPosition.toLocaleDateString()} `
    preciseDetails.innerHTML += ` ${timeLastPosition.getHours()} H ${timeLastPosition.getMinutes()} mn ${timeLastPosition.getSeconds()} s ${timeLastPosition.getMilliseconds()} ms<BR>`;
    preciseDetails.innerHTML += `altitude: ${altitude} m, altitude accuracy: ${altitudeAccuracy} en mètre <BR>`;
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

    const positionOptionsPrecise = {
      maximumAge: 3000,
      timeout: 2000,
      enableHighAccuracy: true
    }
    idWatcher = navigator.geolocation.watchPosition(success, error, positionOptionsPrecise);

  }

}

 function clearWatch(){
  const stopWatching = document.querySelector('#stop-watching');
  navigator.geolocation.clearWatch(idWatcher);
  currentTime = new Date();
  stopWatching.innerHTML = `Watcher stopped at ${currentTime.getHours()} h ${currentTime.getMinutes()} mn ${currentTime.getSeconds()} s `

 } 

  document.querySelector('#find-me').addEventListener('click', geoFindMe);
  document.querySelector('#start-watchPos').addEventListener('click', watchPos);
  document.querySelector('#stop-watchPos').addEventListener('click', clearWatch);
  