import {Component, ViewChild, OnInit} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {Photos} from "../pages/photos/photos";
import {Species} from "../pages/species/species";
import {Animals} from "../pages/animals/animals";


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Photos;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {

  }

  ngOnInit(): void {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Fil d\'actualité', component: Photos},
      { title: 'Les animaux du Parc', component: Animals},
      { title: 'Les espèces du Parc', component: Species}
    ];
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
