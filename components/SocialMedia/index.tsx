import { FC } from 'react';
import MUISvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import { makeADT, ofType } from '@morphic-ts/adt';
import * as t from 'io-ts';
import { pipe } from 'fp-ts/lib/pipeable';
import { fold } from 'fp-ts/lib/Either';
import { Icon } from '@material-ui/core';
import { Instagram, Linkedin, Github, SocialMedia } from './Svg';
import { capitalize } from '../../utils/string';

export const SocialIcon = makeADT('type')({
  Instagram: ofType<Instagram>(),
  Github: ofType<Github>(),
  Linkedin: ofType<Linkedin>(),
});

const matchSocial = SocialIcon.matchStrict({
  Instagram: () => <Instagram />,
  Github: () => <Github />,
  Linkedin: () => <Linkedin />,
});

const SocialString = t.union([
  t.literal('instagram'),
  t.literal('github'),
  t.literal('linkedin'),
]);

export type SocialString = t.TypeOf<typeof SocialString>;

const getSVG = (s: SocialString) => {
  const icons: Record<string, SocialMedia> = {
    'Instagram': SocialIcon.of.Instagram({}),
    'Github': SocialIcon.of.Github({}),
    'Linkedin': SocialIcon.of.Linkedin({}),
  }
  return matchSocial(icons[capitalize(s)])
}

type Props = {
  social: string,
  width: number,
  height: number
}

export const SocialSvgIcon: FC<Props & SvgIconProps> = ({
    social, width, height, ...svgProps
}) => {
  return pipe(
    SocialString.decode(social),
    fold(
      () => <Icon style={{ width, height }}>link</Icon>,
      s => (
        <MUISvgIcon
          style={{
            width,
            height
          }}
          viewBox={`0 0 24 24`} {...svgProps}
        >
          {getSVG(s)}
        </MUISvgIcon>
      )
    )
  ) 
}