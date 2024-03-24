const CategoryMenuCard = ({ menu }) => {
  const { name, recipe, image, category, price } = menu;
  return (
    <div className="flex items-center gap-4 space-x-3">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[104px] h-[118px] border"
          src={image}
          alt=""
        />
      </div>

      <div>
        <h4 className="font-medium text-lg mb-2">
          {name} ------------------------
        </h4>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-[#D99904]">${price}</p>
      </div>
    </div>
  );
};

export default CategoryMenuCard;
