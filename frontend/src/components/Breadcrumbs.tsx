import React from 'react';
import TestIcon from './icons/TestIcon';
type ItemType = {
  id: number;
  title: string;
};

const Breadcrumbs = () => {
  const items: ItemType[] = [
    { id: 1, title: 'Projects' },
    { id: 2, title: 'Hero' },
    { id: 3, title: 'Header' },
  ];

  return (
    <div>
      <div className="inline-flex items-center px-4 py-2 text-sm border border-gray-400 rounded-md">
        <a href="#">
          <TestIcon css="w-6 h-6 cursor-pointer hover:text-primary" />
        </a>
        {items.map((item: ItemType) => (
          <div key={item.id} className="flex">
            <span className="mx-4 font-bold text-gray-400">&gt;</span>
            <h5 className="font-semibold text-gray-500 cursor-pointer hover:text-primary">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
