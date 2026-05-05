export interface CurrentUserRoleModel {
  userRoleId: number;
  roleId: number;
  roleName: string;
  userId: number;
}

export interface CurrentUserBootstrapModel {
  userId: number;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImageUrl?: string;
  roles: CurrentUserRoleModel[];
}
