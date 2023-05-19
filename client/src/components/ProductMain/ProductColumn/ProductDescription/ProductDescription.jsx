function ProductDescription({ description, image }) {
  return (
    <div className="flex flex-col w-full mt-12">
      {image ? <img
        className="rounded pt-14 w-full"
        src={description}
        alt="Pic"
      /> : <div dangerouslySetInnerHTML={{__html: description}}></div>}
      <div>
        <div className="flex flex-row pt-1">
          <div className="flex flex-row justify-center items-center p-[10px] h-[35] bg-neutral-700 rounded w-full">
            SHOW MORE
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
