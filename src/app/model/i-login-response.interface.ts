import { IViewUser } from './i-view-user.interface';

export interface ILoginResponse extends IViewUser {
  accessToken: string;
}
