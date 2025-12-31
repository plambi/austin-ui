"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "./ImageCarousel.css";

interface ImageCarouselProps {
    imagePaths: string[];
}

export function ImageCarousel({ imagePaths }: ImageCarouselProps) {
    return (
        <Carousel
            showArrows
            showStatus={false}
            showIndicators={false}
            swipeable
            emulateTouch
            thumbWidth={72}
            renderThumbs={() =>
                imagePaths.map((path, index) => (
                    // The thumb has a border sometimes on Safari and I have spent an hour trying to fix it and can't :(
                    <div
                        key={`thumb-${index}`}
                        className="relative aspect-square overflow-hidden rounded-lg"
                    >
                        <Image
                            src={path}
                            alt={`Thumbnail ${index}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))
            }
        >
            {imagePaths.map((path, index) => (
                <CarouselImage
                    key={`image-${path}`}
                    src={path}
                    alt={`image-${index}`}
                />
            ))}
        </Carousel>
    );
}

type CarouselImageProps = {
    src: string;
    alt: string;
};

function CarouselImage({ src, alt }: CarouselImageProps) {
    return (
        <div className="overflow-hidden">
            <Image src={src} width={350} height={350} alt={alt} />
        </div>
    );
}
