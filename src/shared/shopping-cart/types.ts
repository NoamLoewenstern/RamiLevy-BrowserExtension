import { z } from 'zod';

export const ItemInfo = z.object({
  id: z.number(),
  shop_list_id: z.number(),
  item_id: z.number(),
  barcode: z.string(),
  quantity: z.number().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),

  name: z.string().optional(),
  quantityType: z.union([z.literal('weight'), z.literal('count')]).optional(),
  price: z.number().optional(),
  totalPrice: z.number().optional(),
  isAvailable: z.boolean().optional(),
  isOnSale: z.boolean().optional(),
});
export const ShoppingListMeta = z.object({
  id: z.number(),
  uuid: z.string(),
  name: z.string(),
  items_count: z.number(),
  customer_id: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});
export const ShoppingList = ShoppingListMeta.extend({
  items: z.array(ItemInfo).default([]).optional(),
});

export const ResponseShoppingLists = z.object({
  success: z.boolean(),
  data: z.array(ShoppingListMeta),
  message: z.string(),
});
export const ResponseSingleShoppingList = z.object({
  success: z.boolean(),
  data: ShoppingList.omit({ items_count: true }).extend({ items: z.array(ItemInfo) }),
  message: z.string(),
});