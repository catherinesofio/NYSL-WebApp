import Vue from 'vue'
import VueRouter from 'vue-router'

router = new router( {
  routes: [
      {
        path: '/',
        name: 'index',
        component: 'Index'
      },
      {
        path: '/locations',
        name: 'locations',
        component: 'Locations'
      },
      {
        path: '/teams',
        name: 'teams',
        component: 'Teams'
      },
      {
        path: '/games',
        name: 'games',
        component: 'Games'
      },
      {
        path: '/event',
        name: 'event',
        component: 'Event'
      }
    ]
  }
);