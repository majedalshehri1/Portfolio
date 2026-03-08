/**
 * Cloudinary Image CDN Configuration and Utilities
 *
 * This module provides utilities for optimizing and delivering images via Cloudinary CDN.
 * Cloudinary automatically optimizes images for performance with:
 * - Automatic format selection (WebP, AVIF for modern browsers)
 * - Responsive image sizing
 * - Quality optimization
 * - Lazy loading support
 * - Global CDN delivery
 */

// Cloudinary configuration
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'demo';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/`;

/**
 * Image transformation options for Cloudinary
 */
export interface CloudinaryTransformOptions {
  /** Width in pixels */
  width?: number;
  /** Height in pixels */
  height?: number;
  /** Crop/resize mode: 'fill', 'fit', 'scale', 'crop', 'thumb', 'pad' */
  crop?: 'fill' | 'fit' | 'scale' | 'crop' | 'thumb' | 'pad';
  /** Image quality (1-100, 'auto', 'auto:best', 'auto:good', 'auto:eco', 'auto:low') */
  quality?: number | 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low';
  /** Format: 'auto' lets Cloudinary choose best format (WebP, AVIF) */
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  /** Device pixel ratio for retina displays */
  dpr?: number | 'auto';
  /** Gravity for cropping: 'auto', 'face', 'center', etc. */
  gravity?: 'auto' | 'face' | 'center' | 'north' | 'south' | 'east' | 'west';
  /** Apply effects: 'blur:300', 'sharpen', etc. */
  effect?: string;
}

/**
 * Generate a Cloudinary URL with optimizations
 *
 * @param publicId - The image public ID in Cloudinary (e.g., 'portfolio/hero-image')
 * @param options - Transformation options
 * @returns Optimized Cloudinary URL
 *
 * @example
 * ```ts
 * // Basic usage with auto-optimization
 * const url = getCloudinaryUrl('portfolio/hero-image', {
 *   width: 800,
 *   quality: 'auto',
 *   format: 'auto'
 * });
 *
 * // Responsive image with retina support
 * const url = getCloudinaryUrl('portfolio/project-1', {
 *   width: 1200,
 *   dpr: 'auto',
 *   crop: 'fill',
 *   gravity: 'auto'
 * });
 * ```
 */
export const getCloudinaryUrl = (
  publicId: string,
  options: CloudinaryTransformOptions = {}
): string => {
  // If it's already a full URL (not a Cloudinary public ID), return as-is
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }

  // Remove leading slash if present
  const cleanPublicId = publicId.startsWith('/') ? publicId.slice(1) : publicId;

  // Default optimizations for best performance
  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    dpr = 'auto',
    gravity = 'auto',
    effect,
  } = options;

  // Build transformation string
  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);
  if (dpr) transformations.push(`dpr_${dpr}`);
  if (gravity) transformations.push(`g_${gravity}`);
  if (effect) transformations.push(`e_${effect}`);

  // Join transformations
  const transformString = transformations.join(',');

  // Return full Cloudinary URL
  return `${CLOUDINARY_BASE_URL}${transformString}/${cleanPublicId}`;
};

/**
 * Generate responsive image srcset for Cloudinary images
 * Useful for <img srcset="..."> or Next.js Image component
 *
 * @param publicId - The image public ID in Cloudinary
 * @param widths - Array of widths for responsive images
 * @param options - Base transformation options
 * @returns srcset string
 *
 * @example
 * ```ts
 * const srcset = getCloudinarySrcSet('portfolio/hero', [400, 800, 1200, 1600]);
 * // Returns: "https://...w_400/... 400w, https://...w_800/... 800w, ..."
 * ```
 */
export const getCloudinarySrcSet = (
  publicId: string,
  widths: number[] = [400, 800, 1200, 1600],
  options: CloudinaryTransformOptions = {}
): string => {
  return widths
    .map((width) => {
      const url = getCloudinaryUrl(publicId, { ...options, width });
      return `${url} ${width}w`;
    })
    .join(', ');
};

/**
 * Check if Cloudinary is properly configured
 */
export const isCloudinaryConfigured = (): boolean => {
  return CLOUDINARY_CLOUD_NAME !== 'demo';
};

/**
 * Get Cloudinary cloud name (useful for debugging)
 */
export const getCloudinaryCloudName = (): string => {
  return CLOUDINARY_CLOUD_NAME;
};
