import Role from './role.enum';
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import {UserInterface} from './../user/user.interface';
 
const RoleGuard = (role: Role): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest<UserInterface>();
      const user = request.userType;
      return user.includes(role);
    }
  }
 
  return mixin(RoleGuardMixin);
}
 
export default RoleGuard;