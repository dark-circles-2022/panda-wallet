import React from 'react';
import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Text } from '@chakra-ui/react';
import ButtonIcon from '../components/ButtonIcon';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import PrimaryButton from '../components/common/Button';
import { FiArrowUpRight as Arrow } from 'react-icons/fi';

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
  const navigate = useNavigate();

  return (
    <Flex
      position={'relative'}
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

      <Flex
        p="1rem 1.25rem"
        pb="0.875rem"
        w="full"
        h="full"
        borderTopRadius={'1.25rem'}
        bgColor={'white'}
        color="black"
        justifyContent="space-between"
        flexDir="column"
      >
        <Flex
          justify="space-between"
          align={'center'}
          mb="0.75rem"
        >
          {isBackButtonVisible && (
            <>
              <ButtonIcon
                ariaLabel="Back"
                variant="semi-solid"
                displayIcon={HiArrowLeft as any}
                w="2rem"
                h="2rem"
                p="0.5rem"
                onClick={() => navigate(-1)}
              />
            </>
          )}
          <Text
            fontWeight={500}
            fontSize="1rem"
            color="text.main.900"
          >
            {heading}
          </Text>
          {isStepNumberVisible && (
            <CircularProgress
              value={(currentStep / totalSteps) * 100}
              color="black"
              size="2rem"
            >
              <CircularProgressLabel
                fontSize={'0.625rem'}
                fontWeight={600}
                color={'text.main.100'}
              >
                {currentStep}/{totalSteps}
              </CircularProgressLabel>
            </CircularProgress>
          )}
        </Flex>

        <Box px="4">{children}</Box>

        <Flex
          mt="auto"
          flexDir="column"
          w="full"
        >
          <Button
            variant="link"
            alignSelf="end"
            textDecor={'underline'}
            fontSize={'0.7rem'}
            color="blackAlpha.600"
            cursor={'pointer'}
            mr="0.5rem"
            mb="0.5rem"
          >
            need help?
          </Button>

          <Flex
            w="full"
            justifyContent="space-between"
          >
            <PrimaryButton
              justifySelf="end"
              ml="auto"
              icon={Arrow as any}
              prompt={'next'}
              color={'white'}
              bg={'black'}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OnboardingLayout;
