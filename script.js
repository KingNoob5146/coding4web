<script>
  // Initialize the globe
    const globe = Globe()
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .showAtmosphere(false);

  // Get user's geolocation
  navigator.geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords;

    // Add a red point for the user's location
    globe.pointOfView({lat: latitude, lng: longitude }, 0.1, {color: 'red' });

    // Append the globe to the container
    document.getElementById('globe-container').appendChild(globe.renderer().domElement);
  });
</script>
