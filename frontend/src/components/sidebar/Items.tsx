import React from 'react';
import Item, { ItemProps } from '@components/sidebar/Item';

type ItemsProps = {
  items: ItemProps[];
};

const Items = ({ items }: ItemsProps) => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
