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
}