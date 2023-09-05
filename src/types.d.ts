export type ShopItem = {
	id: number;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	price: number;
};

export type CartItem = {
	quantity: number;
	item: ShopItem;
};
