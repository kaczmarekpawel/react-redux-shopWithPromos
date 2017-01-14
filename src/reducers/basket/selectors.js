/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {getBestProductPromo} from '../promos/selectors'

export const getBasketProducts = (state) => (
	state.basket.map(p => {
		let promo = getBestProductPromo(state, p);
		return {
			code: p.code,
			price: promo.getPromoPrice(p),
			promo: promo.name
		};
	})
);
