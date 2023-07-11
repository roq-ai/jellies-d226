import { CartItemInterface } from 'interfaces/cart-item';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    cart_item?: number;
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  company_id?: string;
}
