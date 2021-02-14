export interface GeneralTemplate {
	/**
	 *
	 * @description children component to be rendered
	 *
	 */
	children: React.ReactNode;
	/**
	 *
	 * @description flag that indicates that this page need back button 
	 * or not
	 * 
	 * @default false
	 */
	isActive?: boolean
	/**
	 *
	 * @description flag that indicates that this page have bottom bar
	 * or not
	 * 
	 * @default false
	 */
	haveBottomBar?: boolean
	/**
*
* @description flag that indicates that cart shoudl be hide or not
* or not
* 
* @default false
*/
	hideCart?: boolean
}