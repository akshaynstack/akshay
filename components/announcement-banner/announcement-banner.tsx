import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import {
  Banner,
  BannerActions,
  BannerContent,
  BannerDescription,
  BannerTitle,
} from "@saas-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { FallInPlace } from "../motion/fall-in-place";

export interface AnnouncementBannerProps {
  title: string;
  description: string;
  href: string;
  action?: string;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = (
  props
) => {
  const { title, description, href, action } = props;
  if (!title) {
    return null;
  }

  return (
    <></>
  );
};
