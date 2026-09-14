import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'addagent',
    loadChildren: () => import('./addagent/addagent.module').then( m => m.AddagentPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
  {
    path: 'addpolicy',
    loadChildren: () => import('./addpolicy/addpolicy.module').then( m => m.AddpolicyPageModule)
  },
  {
    path: 'addpolicy-agent',
    loadChildren: () => import('./addpolicy-agent/addpolicy-agent.module').then( m => m.AddpolicyAgentPageModule)
  },
  {
    path: 'addclaim',
    loadChildren: () => import('./addclaim/addclaim.module').then( m => m.AddclaimPageModule)
  },
  {
    path: 'policyagent',
    loadChildren: () => import('./policy-agent/policy-agent.module').then( m => m.PolicyAgentPageModule)
  },
   {
    path: 'claim',
    loadChildren: () => import('./claim/claim.module').then( m => m.ClaimPageModule)
  },
  {
    path: 'policy',
    loadChildren: () => import('./policy/policy.module').then( m => m.PolicyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
