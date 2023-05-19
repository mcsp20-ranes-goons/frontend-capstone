function ProductNav({ achievements, addOns }) {
  return (
    <>
      {!achievements && !addOns ? null : (
        <div className="flex gap-6 my-2">
          <h3 className="text-xl border-b-2">Overview</h3>
          {addOns ? <h3 className="text-xl text-neutral-400 hover:border-b-2 hover:border-neutral-400 ease-linear duration-0">
            Add-Ons
          </h3> : null}
          {achievements ? <h3 className="text-xl text-neutral-400 hover:border-b-2 hover:border-neutral-400 ease-linear duration-0">
            Achievements
          </h3> : null}
        </div>
      )}
    </>
  );
}

export default ProductNav;
