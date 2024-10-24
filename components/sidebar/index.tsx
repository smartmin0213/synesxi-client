import Link from 'next/link';
import Image from 'next/image';
import MenuItem from './MenuItem';

const SideBar = () => {
  return (
    <div className="border-r border-r-[rgba(220,222,224,0.2)] flex flex-col h-full">
      <div className="h-[154px] flex items-center justify-center">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={166}
            height={44}
          />
        </Link>
      </div>

      <div className="border-t border-t-[rgba(220,222,224,0.2)] flex flex-col space-y-2">
        <MenuItem target="discover" caption="Discover" />
        <MenuItem target="tokens" caption="Tokens" />
        <MenuItem target="dapps" caption="DApps" />
        <MenuItem target="settings" caption="Settings" />
        <MenuItem target="portfolio" caption="Portfolio" />
      </div>

      <div className="border-t border-t-[rgba(220,222,224,0.2)] flex flex-col mt-auto">
        <MenuItem target="events" caption="Events" />
        <MenuItem target="help" caption="Need help?" />
      </div>
    </div>
  );
};

export default SideBar;