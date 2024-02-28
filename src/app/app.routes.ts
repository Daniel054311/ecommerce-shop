import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Components/home/home.component';
import { WomenComponent } from './Pages/Components/women/women.component';
import { MenComponent } from './Pages/Components/men/men.component';
import { CombosComponent } from './Pages/Components/combos/combos.component';
import { JoggersComponent } from './Pages/Components/joggers/joggers.component';
import { ShopComponent } from './Pages/Components/shop/shop.component';
import { DetailsComponent } from './Pages/Components/details/details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'joggers', component: JoggersComponent },
  // { path: 'shop', component: ShopComponent },
  { path: 'details', component: DetailsComponent },
];
