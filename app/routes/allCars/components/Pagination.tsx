import { useGetAllProductsQuery, useProductsStore } from '../store';
import { CardProducts } from './CardProducts';
import { FilterOption } from './FilterOption';
import { useStore } from 'zustand';

export const Pagination = () => {
  const { carState, model, query } = useStore(
    useProductsStore,
    (selector) => selector,
  );
  const { data: productsData, isLoading } = useGetAllProductsQuery(
    model,
    carState,
    query,
  );
  const products = productsData?.data || [];

  return (
    <div className="py-5 mx-auto ">
      <FilterOption />
      <CardProducts
        isLoading={isLoading}
        products={products}
      />

    </div>
  );
};
