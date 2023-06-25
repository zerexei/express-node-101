import Items from '@components/sidebar/Items';
import CompanyLogo from '@components/sidebar/CompanyLogo';
import TestIcon from '@components/icons/TestIcon';

const main_navigation = [
  { id: 1, title: 'Dashboard', icon: TestIcon },
  { id: 2, title: 'Team', icon: TestIcon },
  { id: 3, title: 'Projects', icon: TestIcon },
  { id: 4, title: 'Calendar', icon: TestIcon },
  { id: 6, title: 'Documents', icon: TestIcon },
  { id: 5, title: 'Reports', icon: TestIcon },
];

const secondary_navigation = [
  { id: 1, title: 'Heroicons', icon: TestIcon },
  { id: 2, title: 'Tailwind Labs', icon: TestIcon },
  { id: 3, title: 'Workcation', icon: TestIcon },
];

const Sidebar = () => {
  return (
    <div className="p-4">
      <div className="space-y-6">
        <CompanyLogo />
        <Items items={main_navigation} />
        <Items items={secondary_navigation} />
      </div>
    </div>
  );
};

export default Sidebar;
