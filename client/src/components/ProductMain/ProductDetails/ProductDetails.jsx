function ProductDetails() {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <img
          src="https://cdn2.unrealengine.com/egs-starwarsjedisurvivorstandardedition-respawnentertainment-ic1-400x400-9ff568e5738d.png?h=270&quality=medium&resize=1&w=480"
          alt="Star Wars Jedi: Survivor Standard Edition Logo"
        />
      </div>
      <div className="flex p-2 border rounded">
        <img
          src="https://cdn1.epicgames.com/gameRating/gameRating/ESRB_T_192_192x192-a0885066a34083cd647dc10db21717f1"
          alt="ESRB Rating"
          className="w-12 h-12"
        />
        <div className="flex flex-col">
          <p>Teen</p>
          <p>Violence, Mild Language</p>
        </div>
      </div>
      <div className="bg-neutral-700">
        <p>BASE GAME</p>
      </div>
      <p>$69.99</p>
      <div className="flex flex-col gap-2">
          <button className="bg-blue-500 rounded py-3">BUY NOW</button>
          <button className="border rounded py-3">ADD TO CART</button>
          <button className="border text-sm rounded">ADD TO WISHLIST</button>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p>Refund Type</p>
        <p>Self-Refundable</p>
        {/* add question mark icon */}
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p>Developer</p>
        <p>Respawn Entertainment</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p>Developer</p>
        <p>Respawn Entertainment</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p>Release Date</p>
        <p>04/27/23</p>
      </div>
      <div className="flex justify-between border-b py-1 border-neutral-700">
        <p>Platform</p>
        <div>
          {/* add platform icons */}
          <img src="" alt="" />
        </div>
      </div>
        <div className="flex">
          {/* add downward chevron icon */}
          <p>See all Editions and Add-Ons</p>
        </div>
        <div className="flex w-full gap-2">
          <button className="flex w-full justify-center rounded border">Share</button>
          <button className="flex w-full justify-center rounded border">Report</button>
        </div>
    </div>
  );
}

export default ProductDetails;
