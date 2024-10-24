'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
	target: string;
	caption: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ target, caption }) => {
	const pathname = usePathname();

	const active = pathname === `/${target}`;

	return (
		<div className='mx-auto'>
			<Link href={target} className={`w-[200px] h-[44px] flex items-center ${active ? 'bg-[#8B59A9]' : ''}`}>
				<div className='relative mx-[16px] w-4 h-4'>
					<Image
						src={`/assets/sidebar/${target}.png`}
						alt={target}
						fill={true}
					/>
				</div>
				<div>
					{caption}
				</div>
			</Link>
		</div>
	);
};

export default MenuItem;