function initApp() {
  document.getElementById('app').innerHTML += data.template[0];

  let app = new Vue(
    {
      el: "#app",
      data: data,
      title: "",
      methods: {
        changeToGames() {
          document.getElementById('app').innerHTML = data.template[0];
        },
        changeToEvent(id) {
          this.changeTitle(data[id]);
          document.getElementById('app').innerHTML = data.template[1];
        },
        changeTitle (ev) {
          title = ev.team_a_id + " vs " + ev.team_b_id;
        }
      }
    }
  );

  //Agregar eventos
  // - Boton Schedule
  // - Boton Open
}

$(document).ready(initApp);