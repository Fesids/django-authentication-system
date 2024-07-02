import { Menu } from '@headlessui/react';


import { classNames } from '../../../util/classAdder';
import { useFilterHooks } from '../../../hooks/useFilterHook';


const SortItems = ({ option }) => {
  const {handleFilterChange} = useFilterHooks();
  const { name, current } = option;
  return (
    <Menu.Item key={name}>
      {({ active }) => (
        <div
          title="sortBy"
          id="sortBy"
          onClick={handleFilterChange}
          className={classNames(
            current ? 'font-medium text-gray-900' : 'text-gray-500',
            active ? 'bg-gray-100' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {name}
        </div>
      )}
    </Menu.Item>
  );
};

export default SortItems;
