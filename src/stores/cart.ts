/**
 * This module exports a NanoStore object named $cart, which stores the items added to the cart.
 * It also exports two functions, addItemToCart and removeItemFromCart, which add and remove items from the cart respectively.
 * The module also exports a computed value named subtotal, which calculates the subtotal of the items in the cart.
 * @packageDocumentation
 */

import { computed, map } from 'nanostores';

/**
 * A NanoStore object that stores the items added to the cart.
 * The keys of the object are the ids of the items, and the values are the CartItem objects.
 */
export const $cart = map<Record<number, CartStore>>({});

/**
 * Adds an item to the cart.
 * If the item is already in the cart, its quantity is incremented by 1.
 * @param item - The ShopItem object to add to the cart.
 */
export function addItemToCart(item: ShopItem) {
    const cartItem = $cart.get()[item.id];
    const quantity = cartItem ? cartItem.quantity : 0;

    $cart.setKey(item.id, {
        item,
        quantity: quantity + 1,
    });
}

/**
 * Removes an item from the cart.
 * @param itemId - The id of the item to remove from the cart.
 */
export function removeItemFromCart(itemId: number) {
    //@ts-ignore
    $cart.setKey(itemId, undefined);
}

/**
 * Calculates the subtotal of the items in the cart.
 * @param $cart - The cart object containing the entries.
 * @returns The subtotal of the items in the cart.
 */
export const subtotal = computed($cart, (entries) => {
    let subtotal = 0;
    Object.values(entries).forEach((entry) => {
        if (!entry) return;
        subtotal += entry.item.price * entry.quantity;
    });
    return subtotal;
});
