import { ChakraProps, Icon, IconButton } from '@chakra-ui/react';
import React, { FC, HTMLAttributes } from 'react';

const ButtonIcon: FC<
  HTMLAttributes<HTMLButtonElement> &
    ChakraProps & { displayIcon: string; variant?: 'solid' | 'ghost' | 'outline' | 'semi-solid'; ariaLabel: string }
> = ({ ariaLabel, displayIcon, variant, ...props }) => {
  if (variant === 'semi-solid')
    return (
      <IconButton
        w={'10'}
        h={'10'}
        p={'2'}
        icon={<Icon as={displayIcon as any} />}
        border="2px solid"
        borderColor={'icon.border.50'}
        bg="icon.bg.ghost.default"
        _hover={{
          bg: 'icon.bg.ghost.hover',
        }}
        color="icon.border.200"
        borderRadius="50%"
        aria-label={ariaLabel}
        {...props}
      />
    );
  else if (variant === 'solid')
    return (
      <IconButton
        w={'10'}
        h={'10'}
        p={'2'}
        icon={
          <Icon
            color={'white'}
            stroke={'white'}
            as={displayIcon as any}
          />
        }
        border="2px solid"
        _hover={{
          bg: 'icon.bg.solid.hover',
        }}
        bg="black"
        color={'white'}
        borderRadius="50%"
        aria-label={ariaLabel}
        {...props}
      />
    );
  else if (variant === 'outline')
    return (
      <IconButton
        w={'10'}
        h={'10'}
        p={'2'}
        icon={
          <Icon
            color={'icon.border.200'}
            stroke={'icon.border.200'}
            as={displayIcon as any}
          />
        }
        border="2px solid"
        borderColor="icon.border.50"
        _hover={{
          bg: 'icon.bg.ghost.default',
        }}
        borderRadius="50%"
        aria-label={ariaLabel}
        {...props}
      />
    );

  return (
    <IconButton
      w={'10'}
      h={'10'}
      p={'2'}
      icon={
        <Icon
          color={'icon.border.100'}
          stroke={'icon.border.100'}
          as={displayIcon as any}
        />
      }
      _hover={{
        bg: 'icon.bg.ghost.default',
      }}
      borderRadius="50%"
      aria-label={ariaLabel}
      {...props}
    />
  );
};

export default ButtonIcon;
