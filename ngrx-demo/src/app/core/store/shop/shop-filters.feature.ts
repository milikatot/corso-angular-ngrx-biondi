import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { ShopFilters } from '../../../model/shop-filters';
import { ShopFiltersActions } from './shop-filters.actions';
import { selectList } from '../products/products.feature';

// 1. the initial state
const initialState: ShopFilters = {
  text: '',
  cost: 2,
  wood: true,
  plastic: true,
  paper: true
}

// 2. the reducer
export const shopFiltersFeature = createFeature({
  name: 'shopFilters',
  reducer: createReducer(
    initialState,
    on(ShopFiltersActions.update, (state, action) => ({
      ...state, ...action.filters
    })),
  ),
  extraSelectors: ({ selectShopFiltersState }) => ({
    selectFilteredList: createSelector(
      selectList,
      selectShopFiltersState,
      (list, filters) => list
        .filter(p => p.name.toLowerCase().includes(filters.text.toLowerCase()))
        .filter(p => p.cost <= filters.cost)
        .filter(p => {
          return (filters.wood && p.type === 'wood') ||
            (filters.paper && p.type === 'paper') ||
            (filters.plastic && p.type === 'plastic')
        })
    )
  })
});

// 3. export available selectors
// (one for each filter + the whole state)
export const {
  selectText,
  selectCost,
  selectWood,
  selectPlastic,
  selectPaper,
  selectFilteredList,
  selectShopFiltersState,
} = shopFiltersFeature;