function ProductDetails({ product }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center pb-4">
        <img src={product.picture} alt={product.title} className="w-1/2" />
      </div>

      <a
        href=""
        className="flex p-2 border items-center border-neutral-600 w-3/4 rounded gap-2 hover:bg-neutral-700 my-2"
      >
        <img src={product.esrb_img} alt="ESRB Rating" className="w-12 h-12" />
        <div className="flex flex-col">
          <p className="font-semibold text-sm">{product.ESRB}</p>
          <p className="text-neutral-400 text-sm">{product.ESRB_desc}</p>
        </div>
      </a>

      <p className="bg-neutral-700 w-fit p-1 my-1 rounded text-sm text-neutral-300">
        BASE GAME
      </p>

      <p className="mt-1 mb-2">${product.Price}</p>

      <div className="flex flex-col gap-2">
        <button
          className="rounded py-3 transition-all ease-linear bg-blue-500 hover:bg-blue-400"
          style={product.color ? { backgroundColor: product.color } : null}
        >
          BUY NOW
        </button>
        <button className="border border-neutral-400 rounded py-3 transition-all ease-linear hover:bg-neutral-700">
          ADD TO CART
        </button>
        <button className="border border-neutral-400 text-sm rounded transition-all ease-linear hover:bg-neutral-700">
          {/* PlusCircleIcon */}ADD TO WISHLIST
        </button>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Refund Type</p>
        <p>{product.RefundType}</p>
        {/* add question mark icon */}
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Developer</p>
        <p>{product.Developer}</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Publisher</p>
        <p>{product.Publisher}</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Release Date</p>
        <p>{product.ReleaseDate}</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p className="text-neutral-400">Platform</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          style={{ fill: "#FFFFFF" }}
        >
          <path d="M12 16L3 16 3 23.75 12 24.988zM12 5L3 6.25 3 14 12 14zM14 4.75L14 14 27 14 27 3zM14 16L14 25.25 27 27 27 16z"></path>
        </svg>
      </div>

      <a href="#" className="flex gap-1 py-2 underline hover:no-underline">
        {/* add downward chevron icon */}
        See all Editions and Add-Ons
      </a>

      <div className="flex w-full gap-2 py-2">
        <button className="py-1 flex w-full justify-center rounded border border-neutral-400 transition-all ease-linear hover:bg-neutral-700">
          {/* ShareIcon */}
          SHARE
        </button>
        <button className="py-1 flex w-full justify-center rounded border border-neutral-400 transition-all ease-linear hover:bg-neutral-700">
          {/* FlagIcon */}
          REPORT
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
