import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  name: string;
  content_manager_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content_manager_id?: string;
  organization_id?: string;
}
