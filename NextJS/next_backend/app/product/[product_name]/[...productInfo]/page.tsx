const page = ({
  params,
}: {
  params: {
    product_name: string;
    productInfo: string[];
  };
}) => {
  return (
    <div>
      <div>{params.product_name}</div>
      <div>{JSON.stringify(params.productInfo)}</div>
    </div>
  );
};

export default page;
