import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { DonationDetailsComponent } from './components/donation-details/donation-details.component';
import { DonationsListComponent } from './components/donations-list/donations-list.component';

const routes: Routes = [
  { path: '', component: AddDonationComponent },
  { path: 'Add', component: AddDonationComponent },
  { path: 'Details', component: DonationDetailsComponent },
  { path: 'List', component: DonationsListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
