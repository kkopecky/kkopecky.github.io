import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin, FaXing } from 'react-icons/fa';
import cx from 'classnames';

export interface SocialListProps {
	className?: string;
	classNameChildren?: string;
}

const SocialList = ({ className, classNameChildren }: SocialListProps) => {
	const socials = [
		{
			name: 'Github',
			icon: <FaGithub />,
			url: 'https://github.com/kkopecky',
		},
		{
			name: 'Gitlab',
			icon: <FaGitlab />,
			url: 'https://gitlab.com/k.kopecky',
		},
		{
			name: 'Linkedin',
			icon: <FaLinkedin />,
			url: 'https://www.linkedin.com/in/kai-kopecky-9365b122',
		},
		{
			name: 'Xing',
			icon: <FaXing />,
			url: 'https://www.xing.com/profile/Kai_Kopecky2',
		},
	];

	return (
		<ul className={cx('flex space-x-4', className)}>
			{socials.map((social, index) => (
				<li key={index}>
					<a
						href={social.url}
						className={cx(
							'hover:text-gray-400 transition duration-300 text-2xl',
							classNameChildren
						)}
					>
						{social.icon}
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialList;
