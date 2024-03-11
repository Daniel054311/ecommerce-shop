import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Components/home/home.component';
import { WomenComponent } from './Pages/Components/women/women.component';
import { MenComponent } from './Pages/Components/men/men.component';
import { CombosComponent } from './Pages/Components/combos/combos.component';
import { JoggersComponent } from './Pages/Components/joggers/joggers.component';
import { ShopComponent } from './Pages/Components/shop/shop.component';
import { DetailsComponent } from './Pages/Components/details/details.component';
import { CartComponent } from './Pages/Components/cart/cart.component';
import { FavoriteDropdownComponent } from './Pages/Shared/favorite-dropdown/favorite-dropdown.component';
import { SignUpNavComponent } from './Pages/Shared/Navs/sign-up-nav/sign-up-nav.component';
import { SignUpComponent } from './Pages/Shared/sign-up/sign-up.component';
import { LoginComponent } from './Pages/Shared/login/login.component';
import { EmptyCartComponent } from './Pages/Shared/empty-cart/empty-cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'women', component: WomenComponent },
  { path: 'men', component: MenComponent },
  { path: 'combos', component: CombosComponent },
  { path: 'joggers', component: JoggersComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'favorite-dropdown', component: FavoriteDropdownComponent },
  { path: 'sign-up-nav', component: SignUpNavComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  {path:'empty-cart',component:EmptyCartComponent}
];
