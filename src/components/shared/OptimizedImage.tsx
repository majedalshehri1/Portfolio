import { memo, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { getCloudinaryUrl, getCloudinarySrcSet, type CloudinaryTransformOptions } from "@/lib/cloudinary";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  fullSize?: boolean;
  /** Enable Cloudinary CDN optimization (default: true if src doesn't start with http/https) */
  useCloudinary?: boolean;
  /** Cloudinary transformation options */
  cloudinaryOptions?: CloudinaryTransformOptions;
  /** Enable responsive srcset (default: true) */
  responsive?: boolean;
}

const OptimizedImage = memo(({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "aspect-[16/10]",
  fullSize = false,
  useCloudinary = true,
  cloudinaryOptions = {},
  responsive = true
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Determine if we should use Cloudinary
  const shouldUseCloudinary = useCloudinary && !src.startsWith('http://') && !src.startsWith('https://');

  // Generate optimized image URLs
  const imageSrc = shouldUseCloudinary
    ? getCloudinaryUrl(src, {
        quality: 'auto',
        format: 'auto',
        dpr: 'auto',
        ...cloudinaryOptions,
      })
    : src;

  const imageSrcSet = shouldUseCloudinary && responsive
    ? getCloudinarySrcSet(src, [400, 800, 1200, 1600, 2000], {
        quality: 'auto',
        format: 'auto',
        ...cloudinaryOptions,
      })
    : undefined;

  if (fullSize) {
    return (
      <div className={cn("relative w-full", containerClassName)}>
        <img
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes="100vw"
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          className={cn(
            "w-full h-auto transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", aspectRatio, containerClassName)}>
      <img
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
