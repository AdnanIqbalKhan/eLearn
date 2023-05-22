import React, { FC } from 'react';

interface CardProps {
  title: string;
  description: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ title, description, footer, children }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold ">
          {title}
        </h3>
        <p className="mt-2 text-gray-800 dark:text-gray-400">{description}</p>
        {children}
      </div>
      <div className="px-4 py-3 bg-gray-100 border-t rounded-b-xl md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
          {footer}
        </p>
      </div>
    </div>
  );
};

export default Card;
