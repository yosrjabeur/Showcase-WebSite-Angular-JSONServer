import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { StateService } from '../crud/state.service';

export const authGuard: CanActivateFn = (route, state) => {  
  let st=inject(StateService);
  let router=inject(Router);
  if(st.authState.isAuthenticated==true)
  return true;
  else
  {
    router.navigate(['/login'])
    return false;
  }
}