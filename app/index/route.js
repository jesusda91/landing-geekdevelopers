/*global ScrollReveal*/
import Route from '@ember/routing/route';
import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Route.extend({
	fastboot: service(),
	headData: service(),

	model() {

		return [{
				name: "JUAN DAVID AGUDELO",
				charge: this.get("i18n").t("charges.ceo"),
				image: "assets/imgs/team/juandavid_xs.jpg",
				linkedin: "https://www.linkedin.com/in/juandagudeloc",
				github: "https://github.com/agudelocjuan"
			}, {
				name: "CRISTIAN MARIN",
				charge: this.get("i18n").t("charges.ceo"),
				image: "assets/imgs/team/cristian_xs.jpg",
				linkedin: "https://www.linkedin.com/in/cristian-mar%C3%ADn-g%C3%B3mez-48953739/"
			}, {
				name: "JAMES CARDONA",
				charge: this.get("i18n").t("charges.manager"),
				image: "assets/imgs/team/james_xs.jpg",
				linkedin: "https://www.linkedin.com/in/jjcardonao",
				github: "https://github.com/jako43"
			}, {
				name: "JUAN QUINTERO",
				charge: this.get("i18n").t("charges.androidLeader"),
				image: "assets/imgs/team/juanquintero_xs.jpg",
				linkedin: "https://www.linkedin.com/in/juequinterore",
				// github: "https://github.com/"
			}, {
				name: "FEDERICO VELASQUEZ",
				charge: this.get("i18n").t("charges.designLeader"),
				image: "assets/imgs/team/federico_xs.jpg",
				linkedin: "https://www.linkedin.com/in/fvelasquez88"
			}, {
				name: "ROBINSON RUEDA",
				charge: this.get("i18n").t("charges.frontLeader"),
				image: "assets/imgs/team/robinson_xs.jpg",
				linkedin: "https://www.linkedin.com/in/roruva",
				github: "https://github.com/roruva"
			}, {
				name: "JINME MIRABAL",
				charge: this.get("i18n").t("charges.backLeader"),
				image: "assets/imgs/team/jinme_xs.jpg",
				linkedin: "https://www.linkedin.com/in/mirabalj",
				github: "https://github.com/mirabalj"
			}, {
				name: "JESUS MARTINEZ",
				charge: this.get("i18n").t("charges.frontDeveloper"),
				image: "assets/imgs/team/jesus_xs.jpg",
				linkedin: "https://www.linkedin.com/in/jesusda91/",
				github: "https://github.com/jesusda91"
			}, {
				name: "JEFFERSON ORTIZ",
				charge: this.get("i18n").t("charges.frontDeveloper"),
				image: "assets/imgs/team/jeff_xs.jpg",
				linkedin: "https://www.linkedin.com/in/jefferson-ortiz-62b81524/",
				github: "https://github.com/jeffliveco",
			}, {
				name: "CRISTIAN ATEHORTUA",
				charge: this.get("i18n").t("charges.frontDeveloper"),
				image: "assets/imgs/team/atehortua_xs.jpg",
				linkedin: "https://www.linkedin.com/in/cdatehortuab/",
				github: "https://github.com/cdatehortuab/"
			}, {
				name: "SANTIAGO SANCHEZ",
				charge: "DEVOPS",
				image: "assets/imgs/team/santiago_xs.jpg",
				linkedin: "https://www.linkedin.com/in/santiagost",
				github: "https://github.com/gh0stl1m"
			}, {
				name: "LEON PEÑA",
				charge: this.get("i18n").t("charges.backDeveloper"),
				image: "assets/imgs/team/leon_xs.jpg",
				linkedin: "https://www.linkedin.com/in/ldpenal/",
				github: "https://github.com/ldpenal"
			}, {
				name: "SERGIO CRUZ",
				charge: this.get("i18n").t("charges.backDeveloper"),
				image: "assets/imgs/team/sergio_xs.jpg",
				linkedin: "https://www.linkedin.com/in/sergioandrescruz",
				// github: "https://github.com/"
			}, {
				name: "MATEO CALLEJAS",
				charge: this.get("i18n").t("charges.uxPrototyper"),
				image: "assets/imgs/team/mateo_xs.jpg",
				linkedin: "https://www.linkedin.com/in/mateocallejas",
			}, {
				name: "SEBASTIAN MARIN",
				charge: this.get("i18n").t("charges.ilustrator"),
				image: "assets/imgs/team/sebastian_xs.jpg",
				linkedin: "https://www.linkedin.com/in/esemarino/",
				artstation: "https://www.artstation.com/esemarino",
			}, {
				name: "PEDRO CARDONA",
				charge: this.get("i18n").t("charges.communityManager"),
				image: "assets/imgs/team/pepe_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "CAMILO RAMIREZ",
				charge: this.get("i18n").t("charges.customerService"),
				image: "assets/imgs/team/camilor_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "RYAN FAUSCIANA",
				charge: this.get("i18n").t("charges.customerService"),
				image: "assets/imgs/team/rayan_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "MELISSA MUÑOZ",
				charge: this.get("i18n").t("charges.iotDeveloper"),
				image: "assets/imgs/team/melissa_xs.jpg",
				linkedin: "https://www.linkedin.com/in/melissamunl/",
				github: "https://github.com/mmunozl"
			}, {
				name: "JUAN ORTIZ",
				charge: this.get("i18n").t("charges.medialopCeo"),
				image: "assets/imgs/team/juanbernardo_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "JUAN CALLEJAS",
				charge: this.get("i18n").t("charges.contentCurator"),
				image: "assets/imgs/team/juanes_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "FELIPE SALDARRIAGA",
				charge: this.get("i18n").t("charges.digitalMarketing"),
				image: "assets/imgs/team/felipe_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "ESTEBAN MORA",
				charge: this.get("i18n").t("charges.creative"),
				image: "assets/imgs/team/mora_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "MARIANO GARCIA",
				charge: this.get("i18n").t("charges.creative"),
				image: "assets/imgs/team/mariano_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "MAURICIO HENAO",
				charge: this.get("i18n").t("charges.cryptoTrader"),
				image: "assets/imgs/team/mauricio_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}];
	},

	afterModel(){
		const headData = this.get('headData');
		headData.set('description', this.get('i18n').t('app.descriptionApp'));
		headData.set('title', this.get('i18n').t('app.titleApp'));
	},

	activate() {
		scheduleOnce('afterRender',this,function () {
			const isFastBoot = this.get('fastboot.isFastBoot');
			if (!isFastBoot) {
				const scrollReveal = ScrollReveal();
				scrollReveal.reveal('.point.bg-yellow',{
					origin:'right',
					distance: '70px',
					duration: 800,
					delay: 70,

				});
				scrollReveal.reveal('.point.bg-green',{
					origin:'right',
					distance: '80px',
					duration: 800,
					delay: 150,

				});
				scrollReveal.reveal('.point.bg-red',{
					origin:'right',
					distance: '90px',
					duration: 800,
					delay: 250,

				});
				scrollReveal.reveal('.point.bg-blue',{
					origin:'right',
					distance: '100px',
					duration: 800,
					delay: 350,

				});

				scrollReveal.reveal('.contact-text.text1',{
					origin:'right',
					distance: '70px',
					duration: 800,
					delay: 150
				});
				scrollReveal.reveal('.contact-text.text2',{
					origin:'right',
					distance: '80px',
					duration: 800,
					delay: 250
				});
				scrollReveal.reveal('.contact-text.text3',{
					origin:'right',
					distance: '90px',
					duration: 800,
					delay: 350
				});
				scrollReveal.reveal('.contact-text.text4',{
					origin:'right',
					distance: '100px',
					duration: 800,
					delay: 450
				});

				scrollReveal.reveal('.line.bg-yellow',{
					origin:'top',
					distance: '100px',
					duration: 800,
					delay: 350
				});
				scrollReveal.reveal('.line.bg-green',{
					origin:'top',
					distance: '100px',
					duration: 800,
					delay: 250
				});
				scrollReveal.reveal('.line.bg-red',{
					origin:'top',
					distance: '100px',
					duration: 800,
					delay: 150
				});
				scrollReveal.reveal('.line.bg-blue',{
					origin:'top',
					distance: '100px',
					duration: 800,
					delay: 70
				});

				scrollReveal.reveal('.circle-ctn', { duration: 2000 }, 50);
				scrollReveal.reveal('.appear-logo', { duration: 2000 }, 50);

			}
		});
	}
});
