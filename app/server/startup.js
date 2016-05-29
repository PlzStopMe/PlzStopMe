// add these users with these emails address as admin
var admin = ['mybryan.li@mail.utoronto.ca', 'cecilia.lo@mail.utoronto.ca', 'hristina.iordanova@mail.utoronto.ca', 'adamo.carolli@mail.utoronto.ca'];
_.map(admin, function(email) {
	var user = Accounts.findUserByEmail(email)
	if(user) {
		if (user.roles != 'admin') {
			Meteor.users.update({_id:user._id}, {$set: {roles:'admin'}})
		}
	}
})

// initialize SEO for each page
SeoCollection.update(
	{
		route_name:"home"
	}, {
		$set: {
			route_name : "home",
			title : "PlzStopMe",
			meta: {
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses..."
			},
			og: {
				"title":"PlzStopMe",
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses...",
				"type":"website",
				"url":"http://plzstop.me",
				"site_name":"PlzStopMe",
				"image":"http://plzstop.me/icons/stop.png",
				"image:type":"image/png",
				"image:width":"1000",
				"image:height":"1000",
				"locale":"en_US"
			}
		}
	}, {
		upsert:true
	}
);

SeoCollection.update(
	{
		route_name:"profile"
	}, {
		$set: {
			route_name : "profile",
			title : "Profile | PlzStopMe",
			meta: {
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses..."
			},
			og: {
				"title":"Profile | PlzStopMe",
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses...",
				"type":"website",
				"url":"http://plzstop.me/profile",
				"site_name":"PlzStopMe",
				"image":"http://plzstop.me/icons/stop.png",
				"image:type":"image/png",
				"image:width":"1000",
				"image:height":"1000",
				"locale":"en_US"
			}
		}
	}, {
		upsert:true
	}
);

SeoCollection.update(
	{
		route_name:"createNewCourse"
	}, {
		$set: {
			route_name : "createNewCourse",
			title : "Create Course | PlzStopMe",
			meta: {
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses..."
			}
		}
	}, {
		upsert:true
	}
);

SeoCollection.update(
	{
		route_name:"settings"
	}, {
		$set: {
			route_name : "settings",
			title : "Settings | PlzStopMe",
			meta: {
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses..."
			}
		}
	}, {
		upsert:true
	}
);

SeoCollection.update(
	{
		route_name:"coursesList"
	}, {
		$set: {
			route_name : "coursesList",
			title : "Courses | PlzStopMe",
			meta: {
				"description": "A Web app that allows students to anonymously express their understanding of lecture material in real-time to the professor as the lecture progresses..."
			}
		}
	}, {
		upsert:true
	}
);