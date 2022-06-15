import { useAppDispatch, useAppSelector } from "@store";
import { IProductImage } from "@interfaces";
import { setProductColor } from "@slices";

export const ColorBoxes = ({
  productImages,
}: {
  productImages: IProductImage[];
}) => {
  const dispatch = useAppDispatch();
  const selectedColor = useAppSelector((state) => state.colorSelector.color);

  const colorSet = new Set(productImages.map((item) => item.color));
  const colors = Array.from(colorSet);

  const handleColorChange = (color: string) => {
    if (selectedColor === color) {
      dispatch(setProductColor(""));
    } else {
      dispatch(setProductColor(color));
    }
  };
  return (
    <div className="row">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-box m-2 text-white border rounded d-flex align-items-center justify-content-center ${
            selectedColor === color ? "border-primary" : ""
          }`}
          onClick={() => handleColorChange(color)}
        >
          <div
            className="color-circle rounded-circle border"
            style={{ backgroundColor: color }}
          ></div>
        </div>
      ))}
    </div>
  );
};
