import Link from "next/link";
import Image from "next/image";

interface MenuItemProps {
	target: string;
	caption: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ target, caption }) => {
	return (
		<div className="mx-auto">
			<Link href={target} className="w-[200px] h-[44px] flex items-center">
				<div className="px-[16px]">
					<Image
						src={`/assets/sidebar/${target}.png`}
						alt={target}
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

export default MenuItem;