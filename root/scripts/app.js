function initApp() {
  document.getElementById('app').innerHTML += data.template;

  let app = new Vue(
    {
      el: "#app",
      data: data
    }
  );
}

$(document).ready(initApp);