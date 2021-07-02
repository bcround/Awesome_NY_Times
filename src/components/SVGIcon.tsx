import { ReactComponent as Search } from '@/assets/Search.svg';
import { ReactComponent as HeartEmpty } from '@/assets/HeartEmpty.svg';
import { ReactComponent as HeartFilled } from '@/assets/HeartFilled.svg';

type SVGIconProps = {
  className: string;
  iconType: string;
};

interface SVGIcons {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}

const svgIcons: SVGIcons = {
  Search,
  HeartEmpty,
  HeartFilled,
};

const SVGIcon = ({ className, iconType }: SVGIconProps) => {
  const SVGIcon = svgIcons[iconType];

  return <SVGIcon className={className} />;
};

export default SVGIcon;
