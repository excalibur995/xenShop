/**
 * @description structure data of the RootAction
 * which hold the data of action type and payload
 * for redux - generic type
 * 
 * @param type: Generic Type;
 * @param payload: Generic Payload;
 */
export interface RootAction<Type, Payload> {
  /**
   * @description type of action your reducer need to dispatch
   * @example type:"ADD_TO_CART"
   */
  type: Type,
  /**
   * @description payload of action your reducer need to dispatch
   * @example Product[]
   */
  payload: Payload
}