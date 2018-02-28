import Component from '@ember/component';

export default Component.extend({
	classNames: ["footer"],
	tagName: "footer",

	actions: {
		changeLocale(lang) {
			this.get("i18n").set("locale",lang);
			if (window.localStorage) {
				localStorage.setItem("lang",lang);
			}
		},

		scrollTo(target) {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
		}
	},
});
