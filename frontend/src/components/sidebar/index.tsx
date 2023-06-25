import Items from '@components/sidebar/Items';
import CompanyLogo from '@components/sidebar/CompanyLogo';
import TestIcon from '@components/icons/TestIcon';

const main_navigation = [
  { id: 1, title: 'Dashboard', icon: TestIcon, url: '/' },
  { id: 2, title: 'Team', icon: TestIcon, url: '/team' },
  { id: 3, title: 'Projects', icon: TestIcon, url: '/projects' },
  { id: 4, title: 'Calendar', icon: TestIcon, url: '#' },
  { id: 6, title: 'Documents', icon: TestIcon, url: '#' },
  { id: 5, title: 'Reports', icon: TestIcon, url: '#' },
];

const secondary_navigation = [
  { id: 1, title: 'Heroicons', icon: TestIcon, url: '#' },
  { id: 2, title: 'Tailwind Labs', icon: TestIcon, url: '#' },
  { id: 3, title: 'Workcation', icon: TestIcon, url: '#' },
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
