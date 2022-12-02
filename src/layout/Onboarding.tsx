import React from 'react';
import { Box, CircularProgress, CircularProgressLabel, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import BackButton from '../components/BackButton';
import ButtonIcon from '../components/ButtonIcon';
import { ReactComponent as BackIcon } from '../assets/Icons/ArrowBendUpLeft.svg';
import { HiArrowLeft } from 'react-icons/hi';

const OnboardingLayout = ({
  title,
  subtext,
  heading,
  currentStep,
  totalSteps,
  isBackButtonVisible = true,
  isStepNumberVisible = true,
  canSkip = false,
  children,
}: {
  title: string;
  subtext: string;
  heading?: string;
  currentStep: number;
  totalSteps: number;
  isBackButtonVisible: boolean;
  isStepNumberVisible: boolean;
  canSkip?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <Flex
      as={'section'}
      bgColor={'bg.onboarding'}
      h="100%"
      w="100%"
      color="white"
      flexDir={'column'}
    >
      <Box
        as="header"
        p="8"
      >
        <Text
          fontSize={'2rem'}
          fontWeight={500}
          as="h1"
          mb="0.75rem"
        >
          {title}
        </Text>
        <Text
          fontSize={'1rem'}
          fontWeight={400}
          as="h2"
          color="whiteAlpha.700"
        >
          {subtext}
        </Text>
      </Box>

      <Box
        p="0.625rem"
        pb="0.875rem"
        w="full"
        h="full"
        borderTopRadius={'1.25rem'}
        bgColor={'white'}
      >
        <Flex
          justify="space-between"
          mb="0.75rem"
        >
          {/* {isBackButtonVisible && <BackButton />} */}
          {isBackButtonVisible && (
            <>
              <ButtonIcon
                ariaLabel="Back"
                variant="ghost"
                // displayIcon={BackIcon as any}
                displayIcon={HiArrowLeft as any}
              />
              <ButtonIcon
                ariaLabel="Back"
                variant="solid"
                displayIcon={HiArrowLeft as any}
              />
              <ButtonIcon
                ariaLabel="Back"
                variant="outline"
                displayIcon={HiArrowLeft as any}
              />
            </>
          )}
          {heading}
          {isStepNumberVisible && (
            <CircularProgress
              value={(currentStep / totalSteps) * 100}
              color="black"
              size="10"
            >
              <CircularProgressLabel
                fontSize={'0.75rem'}
                fontWeight={800}
                color={'text.main.900'}
              >
                {currentStep}/{totalSteps}
              </CircularProgressLabel>
            </CircularProgress>
          )}
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default OnboardingLayout;
