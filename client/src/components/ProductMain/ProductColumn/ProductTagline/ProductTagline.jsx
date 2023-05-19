function ProductTagline({ data }) {
  return (
    <div className="flex flex-row pt-10">
      <div className="flex items-center">{data.Description}</div>
    </div>
  );
}

export default ProductTagline;
