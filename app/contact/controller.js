import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	isEmailValid: computed("email", function () {
		let email = this.get("email");
		let regexMail = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
		if (regexMail.test(email)) {
			return true;
		}
		return false;
	}),
	actions: {
		sendForm() {
			let name = this.get("name");
			let email = this.get("email");
			let subject = this.get("subject");
			let message = this.get("message");
			this.set("invalidEmail",false);
			this.set("invalidMsg",false);
			let errors = false;
			if (!this.get("isEmailValid")) {
				this.set("invalidEmail",true);
				errors = true;
			}
			if (!message) {
				this.set("invalidMsg",true);
				errors = true;
			}
			if (errors) {
				return;
			}
			let contact = this.get("store").createRecord("contact",{
				name: name,
				email: email,
				subject: subject,
				message: message,
				createdAt: new Date()
			});

			contact.save();
		}
	}
});
