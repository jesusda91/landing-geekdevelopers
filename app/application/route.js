import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

	fastboot: service(),

	beforeModel() {
		const isFastBoot = this.get('fastboot.isFastBoot');
		if (!isFastBoot) {
			let lang = this._calculateLocale();
			this.get("i18n").set("locale",lang);
		}
	},

	_calculateLocale() {
		let lang;
		if (window.localStorage) {
			if (localStorage.lang) {
				return localStorage.lang;
			}
		}
		lang = window.langPhantomJs || navigator.language || navigator.userLanguage || 'en';
		lang = lang.split('-')[0];
		if (lang === 'es') {
			return lang;
		}else{
			return 'en';
		}
	},
});
