var data = {
	"template": "<section class='align-horizontal' v-for='event in data'><button class='btn-schedule'></button><div class='align-vertical'><h2>{{ event.team_a_id + ' vs ' + event.team_b_id }}</h2><p>{{ event.description }}</p></div><button class='btn-expand'></button></section>",
	"data": [{
			"team_a_id": 1,
			"team_b_id": 3,
			"description": "Futbol lul.",
			"date": "2019-09-01-16T09:30+01:00",
			"img_url": "https://i.ytimg.com/vi/QoHrIm3ANFQ/maxresdefault.jpg",
			"location_id": 0,
			"is_scheduled": false
		},
		{
			"team_a_id": 2,
			"team_b_id": 1,
			"description": "Futbol lul.",
			"date": "2019-09-01-16T13:00+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 1,
			"is_scheduled": false
		},
		{
			"team_a_id": 4,
			"team_b_id": 5,
			"description": "Futbol lul.",
			"date": "2019-09-08-16T09:30+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 2,
			"is_scheduled": false
		},
		{
			"team_a_id": 5,
			"team_b_id": 0,
			"description": "Futbol lul.",
			"date": "2019-09-08-16T13:00+01:00",
			"img_url": "https://www.memesmonkey.com/images/memesmonkey/23/23b40e7789f8e6250c623b4d846a7511.jpeg",
			"location_id": 3,
			"is_scheduled": false
		},
		{
			"team_a_id": 2,
			"team_b_id": 4,
			"description": "Futbol lul.",
			"date": "2019-09-15-16T13:00+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 4,
			"is_scheduled": false
		},
		{
			"team_a_id": 2,
			"team_b_id": 4,
			"description": "Futbol lul.",
			"date": "2019-09-15-16T13:00+01:00",
			"img_url": "https://i.ytimg.com/vi/QoHrIm3ANFQ/maxresdefault.jpg",
			"location_id": 0,
			"is_scheduled": false
		},
		{
			"team_a_id": 0,
			"team_b_id": 2,
			"description": "Futbol lul.",
			"date": "2019-09-22-16T09:30+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 5,
			"is_scheduled": false
		},
		{
			"team_a_id": 0,
			"team_b_id": 2,
			"description": "Futbol lul.",
			"date": "2019-09-22-16T09:30+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 5,
			"is_scheduled": false
		},
		{
			"team_a_id": 1,
			"team_b_id": 5,
			"description": "Futbol lul.",
			"date": "2019-09-22-16T13:00+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 2,
			"is_scheduled": false
		},
		{
			"team_a_id": 3,
			"team_b_id": 4,
			"description": "Futbol lul.",
			"date": "2019-09-29-16T09:30+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 1,
			"is_scheduled": false
		},
		{
			"team_a_id": 1,
			"team_b_id": 4,
			"description": "Futbol lul.",
			"date": "2019-09-06-16T09:30+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 3,
			"is_scheduled": false
		},
		{
			"team_a_id": 0,
			"team_b_id": 5,
			"description": "Futbol lul.",
			"date": "2019-10-06-16T13:00+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 5,
			"is_scheduled": false
		},
		{
			"team_a_id": 2,
			"team_b_id": 3,
			"description": "Futbol lul.",
			"date": "2019-10-13-16T09:30+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 2,
			"is_scheduled": false
		},
		{
			"team_a_id": 4,
			"team_b_id": 0,
			"description": "Futbol lul.",
			"date": "2019-10-13-16T13:00+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 1,
			"is_scheduled": false
		},
		{
			"team_a_id": 5,
			"team_b_id": 2,
			"description": "Futbol lul.",
			"date": "2019-10-20-16T09:30+01:00",
			"img_url": "https://66.media.tumblr.com/a4429d9ae7a8954393f943a411608f39/tumblr_inline_n6up4m0epe1svnmki.jpg",
			"location_id": 4,
			"is_scheduled": false
		},
		{
			"team_a_id": 1,
			"team_b_id": 3,
			"description": "Futbol lul.",
			"date": "2019-10-20-16T13:00+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 3,
			"is_scheduled": false
		},
		{
			"team_a_id": 2,
			"team_b_id": 0,
			"description": "Futbol lul.",
			"date": "2019-10-27-16T09:30+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 0,
			"is_scheduled": false
		},
		{
			"team_a_id": 4,
			"team_b_id": 5,
			"description": "Futbol lul.",
			"date": "2019-10-27-16T13:00+01:00",
			"img_url": "https://vignette.wikia.nocookie.net/smashbroslawlorigins/images/0/0e/Jontron.png/revision/latest?cb=20130202205049",
			"location_id": 2,
			"is_scheduled": false
		}
	]
}