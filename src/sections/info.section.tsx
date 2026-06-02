import { GlowLink } from '../components/glow-box-link';
import { HeroBg } from '../components/hero-bg';
import { TextHover } from '../components/text-hover.component';
import { personal, socialLinks } from '../data/portfolio';

export const InfoSection = () => {

	return (
		<div className='hero-section'>
			<HeroBg />
			{personal.showRepoStar && (
				<a
					href={personal.repoUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='github-ribbon'
				>
					<div>{personal.repoStarLabel}</div>
					<span></span>
				</a>
			)}
			{/* <div className='hero-personal' style={{display:'flex'}}>
				<div className='hero-img'>
					<img src={personal.avatar} alt={personal.name} />
				</div> */}
				<div>
					<p>{personal.greeting}</p>
					<TextHover
						text={personal.name}
						className='name'
					/>
					<p>{personal.title}</p>
				</div>
			{/* </div> */}
			<div className='blur'></div>
			<div className='bottom-bar'>
				{socialLinks.map((link) => (
					<GlowLink
						key={link.label}
						href={link.href}
						color={link.glowColor}
						icon={<link.icon color={link.iconColor} />}
						aria-label={link.label.toLowerCase()}
					/>
				))}
			</div>
		</div>
	);
};
