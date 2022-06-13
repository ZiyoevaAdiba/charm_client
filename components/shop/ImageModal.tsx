import React from "react";
import Image from "next/image";

export const ImageModal = ({ currentImage }: { currentImage: string }) => {
  return (
    <div
      className="modal fade"
      id="imageModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div
          className="modal-content p-3 "
          // style={{ width: "1000px", height: "1000px" }}
        >
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body py-0">
            {currentImage && (
              <Image
                src={currentImage}
                alt="product"
                objectFit="contain"
                width={1000}
                height={1000}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
