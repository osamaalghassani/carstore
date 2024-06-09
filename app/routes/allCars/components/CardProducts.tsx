type State = {
  productId: number | null;
  showDetails: true | false;
};
type Props = {
  readonly isLoading: boolean;
  readonly products: Array<{
    carName: string;
    id: string;
    imageUrl: string;
    model: string;
    price: string;
  }>;
};

export const CardProducts = ({ isLoading, products }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1  sm:grid-cols-2  gap-5 lg:grid-cols-3 container   py-5 ">
        {products.length > 0 ? (
          products?.map((item) => (
            <CardProduct
              carId={item.id}
              description={item.model}
              image={item.imageUrl}
              key={item.id}
              price={item.price}
              title={item.carName}
            />
          ))
        ) : products.length === 0 && !isLoading ? (
          <div>لاتوجد بيانات</div>
        ) : (
          <>
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </>
        )}
      </div>
      {/* {ProductDetails.showDetails && (
        <ProductDetailsDaliog
          isOpen={ProductDetails.showDetails}
          onClose={() =>
            setProductDetails({ productId: null, showDetails: false })
          }
          productId={ProductDetails.productId}
        />
      )} */}
    </div>
  );
};
