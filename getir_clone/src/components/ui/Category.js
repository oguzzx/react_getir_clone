import React from "react";

function Category({ category }) {
  const { id, image, title } = category;
  return (
    <a
      href="#"
      className="flex flex-col gap-y-2 items-center text-center p-4 transition hover:bg-purple-50"
    >
      <img
        src={image}
        alt={title}
        className=" whitespace-nowrap w-12 h-12 rounded border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-600 tracking-tighter">
        {title}
      </span>
    </a>
  );
}

export default Category;
