import Component from '@ember/component';
import { scheduleOnce, later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
	fastboot: service(),
	classNames: ["navbar", 'animated', 'headroom--top', 'responsive-header'],
	// classNameBindings: ['menuActive:active-menu'],
	tagName: "header",
	menuActive: false,

	actions: {
		scrollTo(target) {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
		},

		toggleMenu() {
			this.toggleProperty('menuActive');
			if (this.get("menuActive")) {
				this.$().addClass("header-open");
			} else {
				this.$().removeClass("header-open");
			}
		}
	},

	didInsertElement() {
		scheduleOnce('afterRender',this,function () {
			let isFastBoot = this.get('fastboot.isFastBoot');
			if (!isFastBoot) {
				this.$().headroom({
					'tolerance': {
						'down' : 5,
						'up' : 10
					},
					'offset' : 205,
					'classes': {
						'initial': 'headroom',
						'pinned': 'slideInDown',
						'unpinned': 'slideOutUp'
					},
					onUnpin: () => {
						later(() => {
							this.set('menuActive',false);
						}, 100);
					}
				});
			}
		});
	}
});
