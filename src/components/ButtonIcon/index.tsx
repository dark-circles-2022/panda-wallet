import { ChakraProps, Icon, IconButton } from '@chakra-ui/react';
import React, { FC, HTMLAttributes } from 'react';

const ButtonIcon: FC<
  HTMLAttributes<HTMLButtonElement> &
    ChakraProps & { displayIcon: any; variant?: 'solid' | 'ghost' | 'outline' | 'semi-solid'; ariaLabel: string }
> = ({ color, fontSize, ariaLabel, displayIcon, variant, ...props }) => {
  if (variant === 'semi-solid')
    return (
      <IconButton
        w={'10'}
        h={'10'}
        p={'2'}
        minW="4"
        icon={
          <Icon
            fontSize={fontSize}
            as={displayIcon as any}
            color={color ? color : 'icon.border.200'}
          />
        }
        border="2px solid"
        borderColor={'icon.border.50'}
        bg="icon.bg.ghost.default"
        _hover={{
          bg: 'icon.bg.ghost.hover',
        }}
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
        minW="4"
        icon={
          <Icon
            color={color ? color : 'white'}
            stroke={'white'}
            as={displayIcon as any}
            fontSize={fontSize}
          />
        }
        border="2px solid"
        _hover={{
          bg: 'icon.bg.solid.hover',
        }}
        bg="black"
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
        minW="4"
        icon={
          <Icon
            color={color ? color : 'icon.border.200'}
            stroke={'icon.border.200'}
            as={displayIcon as any}
            fontSize={fontSize}
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
      minW="4"
      icon={
        <Icon
          color={color ? color : 'icon.border.100'}
          stroke={color ? color : 'icon.border.100'}
          as={displayIcon as any}
          fontSize={fontSize}
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
