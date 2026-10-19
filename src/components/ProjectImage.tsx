interface ProjectImageProps {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
}

export default function ProjectImage({ src, alt, fit = 'cover' }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: fit,
        objectPosition: 'top center',
      }}
    />
  );
}
