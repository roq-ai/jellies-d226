const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-items': 'cart_item',
  companies: 'company',
  products: 'product',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
