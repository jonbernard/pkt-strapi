import favicon from "./extensions/favicon.png";
import logo from "./extensions/logo.png";

export default {
  config: {
    auth: {
      logo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Phi Chapter",
        "Auth.form.welcome.title": "Welcome to the admin!",
        "Auth.form.welcome.subtitle": "Log in to the app",
      },
    },
  },
  bootstrap() {
    document.title = "Admin | Phi Chapter of Phi Kappa Tau";
  },
};
