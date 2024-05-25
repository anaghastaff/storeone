import React from 'react';
import { Box, Paper } from '@mui/material';
import Image from 'next/image';

import PlaceholderImage from 'medusa/modules/common/icons/placeholder-image';

type ThumbnailProps = {
  thumbnail?: string | null;
  images?: { url: string }[] | null;
  size?: 'small' | 'medium' | 'large' | 'full' | 'square';
  isFeatured?: boolean;
  className?: string;
  'data-testid'?: string;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = 'small',
  isFeatured,
  className,
  'data-testid': dataTestid,
}) => {
  const initialImage = thumbnail || images?.[0]?.url;

  const getSizeStyles = (size) => {
    switch (size) {
      case 'small':
        return { width: 48, aspectRatio: isFeatured ? '11/14' : '9/16' };
      case 'medium':
        return { width: 290, aspectRatio: isFeatured ? '11/14' : '9/16' };
      case 'large':
        return { width: 440, aspectRatio: isFeatured ? '11/14' : '9/16' };
      case 'full':
        return { width: '100%', aspectRatio: isFeatured ? '11/14' : '9/16' };
      case 'square':
        return { width: 96, aspectRatio: '1/1' };
      default:
        return { width: 180, aspectRatio: '9/16' };
    }
  };

  const sizeStyles = getSizeStyles(size);

  return (
    <Box
      className={className}
      data-testid={dataTestid}
      sx={{
        ...sizeStyles,
        position: 'relative',
        overflow: 'hidden',
        padding: 2,
        backgroundColor: 'grey.600',
        boxShadow: 1,
        borderRadius: 2,
        transition: 'box-shadow 0.15s ease-in-out',
        '&:hover': {
          boxShadow: 4,
        },
        margin:'auto'
      }}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
    </Box>
  );
};

const ImageOrPlaceholder = ({
  image,
  size,
}: Pick<ThumbnailProps, 'size'> & { image?: string }) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      fill
      style={{objectFit:'cover'}}  
      quality={75}
      sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
    />
  ) : (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <PlaceholderImage size={size === 'small' ? 16 : 24} />
    </Box>
  );
};

export default Thumbnail;
