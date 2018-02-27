import Route from '@ember/routing/route';
import { scheduleOnce, later } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Route.extend({
	fastboot: service(),
	model() {
		return [{
				name: "JUAN DAVID AGUDELO",
				charge: "CEO & COFOUNDER",
				image: "assets/imgs/team/juandavid_xs.jpg",
				linkedin: "https://www.linkedin.com/in/juandagudeloc",
				github: "https://github.com/agudelocjuan"
			}, {
				name: "CRISTIAN MARIN",
				charge: "CEO & COFOUNDER",
				image: "assets/imgs/team/cristian_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/"
			}, {
				name: "JAMES CARDONA",
				charge: "MANAGER",
				image: "assets/imgs/team/james_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
				// github: "https://github.com/"
			}, {
				name: "JUAN QUINTERO",
				charge: "ANDROID LEADER",
				image: "assets/imgs/team/juanquintero_xs.jpg",
				linkedin: "https://www.linkedin.com/in/juequinterore",
				// github: "https://github.com/"
			}, {
				name: "FEDERICO VELASQUEZ",
				charge: "DESIGN LEADER",
				image: "assets/imgs/team/federico_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/"
			}, {
				name: "ROBINSON RUEDA",
				charge: "FRONTEND LEADER",
				image: "assets/imgs/team/robinson_xs.jpg",
				linkedin: "https://www.linkedin.com/in/roruva",
				github: "https://github.com/roruva"
			}, {
				name: "JINME MIRABAL",
				charge: "BACKEND LEADER",
				image: "assets/imgs/team/jinme_xs.jpg",
				linkedin: "https://www.linkedin.com/in/mirabalj",
				github: "https://github.com/mirabalj"
			}, {
				name: "JESUS MARTINEZ",
				charge: "FRONTEND DEVELOPER",
				image: "assets/imgs/team/jesus_xs.jpg",
				linkedin: "https://www.linkedin.com/in/jesusda91/",
				github: "https://github.com/jesusda91"
			}, {
				name: "JEFFERSON ORTIZ",
				charge: "FRONTEND DEVELOPER",
				image: "assets/imgs/team/jeff_xs.jpg",
				linkedin: "https://www.linkedin.com/in/jefferson-ortiz-62b81524/",
				github: "https://github.com/jeffliveco",
			}, {
				name: "CRISTIAN ATEHORTUA",
				charge: "FRONTEND DEVELOPER",
				image: "assets/imgs/team/atehortua_xs.jpg",
				linkedin: "https://www.linkedin.com/in/cdatehortuab/",
				github: "https://github.com/cdatehortuab/"
			}, {
				name: "SANTIAGO SANCHEZ",
				charge: "DEVOPS",
				image: "assets/imgs/team/santiago_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
				// github: "https://github.com/"
			}, {
				name: "LEON PEÑA",
				charge: "BACKEND DEVELOPER",
				image: "assets/imgs/team/leon_xs.jpg",
				linkedin: "https://www.linkedin.com/in/ldpenal/",
				github: "https://github.com/ldpenal"
			}, {
				name: "SERGIO CRUZ",
				charge: "BACKEND DEVELOPER",
				image: "assets/imgs/team/sergio_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
				// github: "https://github.com/"
			}, {
				name: "MATEO CALLEJAS",
				charge: "UX PROTOTYPER",
				image: "assets/imgs/team/mateo_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "SEBASTIAN MARIN",
				charge: "ILLUSTRATOR DESIGN",
				image: "assets/imgs/team/sebastian_xs.jpg",
				linkedin: "https://www.linkedin.com/in/esemarino/",
			}, {
				name: "PEDRO CARDONA",
				charge: "COMMUNITY MANAGER",
				image: "assets/imgs/team/pepe_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "CAMILO RAMIREZ",
				charge: "CUSTOMER SERVICE",
				image: "assets/imgs/team/camilor_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "RYAN FAUSCIANA",
				charge: "CUSTOMER SERVICE",
				image: "assets/imgs/team/rayan_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "MELISSA MUÑOZ",
				charge: "IOT DEVELOPER",
				image: "assets/imgs/team/melissa_xs.jpg",
				linkedin: "https://www.linkedin.com/in/melissamunl/",
				github: "https://github.com/mmunozl"
			}, {
				name: "JUAN ORTIZ",
				charge: "MEDIALOP CEO",
				image: "assets/imgs/team/juanbernardo_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "JUAN CALLEJAS",
				charge: "CONTENT CURATOR",
				image: "assets/imgs/team/juanes_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "FELIPE SALDARRIAGA",
				charge: "CRYPTO TRADER",
				image: "assets/imgs/team/felipe_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "ESTEBAN MORA",
				charge: "CRYPTO TRADER",
				image: "assets/imgs/team/mora_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "MARIANO GARCIA",
				charge: "CRYPTO TRADER",
				image: "assets/imgs/team/mariano_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}, {
				name: "MAURICIO HENAO",
				charge: "CRYPTO TRADER",
				image: "assets/imgs/team/mauricio_xs.jpg",
				// linkedin: "https://www.linkedin.com/in/",
			}];
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
					delay: 70
				});
				scrollReveal.reveal('.point.bg-green',{
					origin:'right',
					distance: '80px',
					duration: 800,
					delay: 150
				});
				scrollReveal.reveal('.point.bg-red',{
					origin:'right',
					distance: '90px',
					duration: 800,
					delay: 250
				});
				scrollReveal.reveal('.point.bg-blue',{
					origin:'right',
					distance: '100px',
					duration: 800,
					delay: 350
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
			}
		});
	}
});
