import React from 'react';
import { TestIconProps } from '@components/icons/TestIcon';

// type DynamicComponent<T> = React.ComponentType<T>;

// type ItemProps<T> = {
//   icon: DynamicComponent<T>;
//   title: string;
// };

export interface ItemProps {
  icon: React.ComponentType<TestIconProps>;
  title: string;
}

const Item = ({ title, icon: IconComponent }: ItemProps) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-md cursor-pointer group/sidebar-item hover:bg-gray-200">
      <IconComponent css="w-6 h-6 text-gray-400 group-hover/sidebar-item:text-primary" />
      <h3 className="font-semibold group-hover/sidebar-item:text-primary">
        {title}
      </h3>
    </div>
  );
};

export default Item;
