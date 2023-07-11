import { CartItemInterface } from 'interfaces/cart-item';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CartInterface {
  id?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  user?: UserInterface;
  _count?: {
    cart_item?: number;
  };
}

export interface CartGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
