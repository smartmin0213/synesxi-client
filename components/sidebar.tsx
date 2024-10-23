import Link from 'next/link';
import Image from 'next/image';

interface SidebarItemProps {
  icon: string;
  caption: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, caption, href }) => {
  return (
    <div className="w-[200px] mx-auto">
      <Link href={href} className="h-[44px] flex items-center">
        <div className="px-[16px]">
          <Image
            src={`/images/sidebar/${icon}.png`}
            alt={icon}
            width={16}
            height={16}
          />
        </div>
        <div>
          {caption}
        </div>
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[216px] h-[826px] border-r border-r-[rgba(220,222,224,0.2)] mr-[17px] flex flex-col">
      <div className="h-[154px] flex items-center justify-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={0}
          />
        </Link>
      </div>

      <div className="border-t border-t-[rgba(220,222,224,0.2)] flex flex-col space-y-2">
        <SidebarItem icon="discover" caption="Discover" href="discover" />
        <SidebarItem icon="tokens" caption="Tokens" href="tokens" />
        <SidebarItem icon="dapps" caption="DApps" href="dapps" />
        <SidebarItem icon="settings" caption="Settings" href="settings" />
        <SidebarItem icon="portfolio" caption="Portfolio" href="portfolio" />
      </div>

      <div className="border-t border-t-[rgba(220,222,224,0.2)] mt-auto">
        <SidebarItem icon="events" caption="Events" href="events" />
        <SidebarItem icon="help" caption="Need help?" href="help" />
      </div>
    </div>
  );
};

export default Sidebar;