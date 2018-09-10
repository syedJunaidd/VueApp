"use strict"
//
//v-text : for text
//v-for : loop
//v-html : html in our dom
//v-model : using a model for data binding
// emojify returns the corresponding emoji image
// v-html="lumios(wizard)" = {{lumios(wizard)}}
function emojify(name) {
	var out = `<img src="emojis/` + name + `.png">`
	return out
}

function cast(emoji) {
	var magic =  emojify("magic");
    // if (!emoji) {
    //     emoji = "¯\\_(ツ)_/¯"
    // }
	return function (wizard) {
		return wizard + " " + magic + " " + emoji + " " + magic;
	}
}

// var app = new Vue({
// 	el: "#app",
//   data : {
//     wizard:emojify("wizard")
//   },
//   methods : {
//     lumos : cast (emojify("lumos")),
//     incendio: cast(emojify("incendio"))
//   }
// })

// Vue.component("harry",{
// 	template : `<p>` + emojify("harry") + `</p>`
// })
//
// Vue.component("ron",{
// 	template : `<p>` + emojify("ron") + `</p>`
// })
//
// Vue.component("hermione",{
// 	template : `<p>` + emojify("hermione") + `</p>`
// })

Vue.component("wizard", {
    props: ["name"],
    template: `<p v-html="name"></p>`
})

var app = new Vue({
	el: "#app",
	data: {
		msg : "Hi dear hpw are you?",
		wizard      : "",
		harry       : emojify("harry"      ),
		hedwig      : emojify("hedwig"     ),
		ron         : emojify("ron"        ),
		scabbers    : emojify("scabbers"   ),
		hermione    : emojify("hermione"   ),
		crookshanks : emojify("crookshanks")
	},
	methods: {
		// wizards: function () {
		// 	return [
		// 		{ name: this.harry   , pet: this.hedwig      },
		// 		{ name: this.ron     , pet: this.scabbers    },
		// 		{ name: this.hermione, pet: this.crookshanks }
		// 	]
		// }
		// oculus_reparo returns a spell (function) that repairs glasses
		oculus_reparo: cast(emojify("oculus-reparo")),
		// wingardium_leviosa returns a spell (function) that levitates an object
		wingardium_leviosa: cast(emojify("wingardium-leviosa")),
		// alohomora returns a spell (function) that unlocks a door
		alohomora: cast(emojify("alohomora"))
	}
})

app.wizard = app.ron
