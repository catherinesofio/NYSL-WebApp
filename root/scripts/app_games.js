function initApp() {
  let temp = data;

  let gamesComponent = Vue.component('gamesComp', { 
    props: ['title', 'events'],
    template: data.templates[0]
  });
  
  let eventComponent = Vue.component('eventComp', {
    props: ['title', 'currEvent'],
    template: data.templates[1]
  });
  
  let app = new Vue(
    {
      el: "#app",
      data: {
        title: "GAMES",
        events: temp.data,
        currEvent: null
      },
      methods: {
        scheduleEvent: function (event, e) {
          let value = !event.isScheduled;
          event.isScheduled = value;
          e.target.style.backgroundColor = 'var(--btn-color-' + value + ')';
        },
        changeToGames: function () {
          this.title = "GAMES";
        },
        changeToEvent: function (ev) {
          this.currEvent = ev;
          this.title = currEvent.team_a_id + " vs " + currEvent.team_b_id;
        }
      },
      components: {
        'gamesComp': gamesComponent,
        'eventComp': eventComponent
      }
    }
  );

  app.changeToGames();
}

$(document).ready(initApp);