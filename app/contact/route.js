import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Route.extend({
	fastboot: service(),
	headData: service(),

	afterModel(){
		const headData = this.get('headData');
		headData.set('description', this.get('i18n').t('app.descriptionApp'));
		headData.set('title', this.get('i18n').t('app.contact'));
	},

	activate() {
		if (!this.get("fastboot.isFastBoot")) {
			scheduleOnce("afterRender",function () {
				$(".navbar").addClass("not-transparent");
			});
		}
	},
	deactivate() {
		if (!this.get("fastboot.isFastBoot")) {
			$(".navbar").removeClass("not-transparent");
		}
	},

});
