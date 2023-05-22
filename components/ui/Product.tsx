import Image from 'next/image';
import React from 'react';
import { Price, ProductWithPrice } from 'types';

function Product({
  product,
  bought,
  handleCheckout
}: {
  product: ProductWithPrice;
  bought: boolean;
  handleCheckout: (price: Price) => void;
}) {
  const price = product?.prices?.find((price) => price.active);
  if (!price) return null;
  const priceString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 0
  }).format((price?.unit_amount || 0) / 100);

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="flex flex-col items-center justify-center bg-blue-600 h-52 rounded-t-xl">
        <Image
          src={product.image!}
          alt={`${product.name}'s Image`}
          width={200}
          height={200}
        />
      </div>
      <div className="p-4 md:p-6">
        <span className="block mb-1 text-xs font-semibold text-blue-600 uppercase dark:text-blue-500">
          {priceString}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-black dark:text-white">
          {product.name}
        </h3>
        <p className="mt-3 text-gray-500">{product.description}</p>
      </div>
      <div
        className="flex items-center justify-center w-full px-4 py-3 mt-auto text-sm font-medium text-center text-gray-700 align-middle transition-all bg-white border-t border-gray-200 divide-x divide-gray-200 shadow-sm gap--al text dark:border-gray-700 dark:divide-gray-700 rounded-b-xl hover:bg-blue-600 hover:text-yellow-50 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-black dark:text-white dark:focus:ring-offset-gray-800"
        onClick={() =>
          bought ? alert('Course Already purchased') : handleCheckout(price)
        }
      >
        {bought ? 'Learn' : 'Buy'}
      </div>
    </div>
  );
}

export default Product;
