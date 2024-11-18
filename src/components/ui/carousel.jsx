
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Carousel1 = ({ slides = [], options, autoplayDelay = 3000 }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: autoplayDelay })
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const handleAutoplayState = () => setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on('autoplay:play', handleAutoplayState)
      .on('autoplay:stop', handleAutoplayState)
      .on('reInit', handleAutoplayState);

    return () => {
      emblaApi.off('autoplay:play', handleAutoplayState);
      emblaApi.off('autoplay:stop', handleAutoplayState);
      emblaApi.off('reInit', handleAutoplayState);
    };
  }, [emblaApi]);

  return (
    <Embla>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </Embla>
  );
};

Carousel1.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.number).isRequired,
  options: PropTypes.object,
  autoplayDelay: PropTypes.number
};

const Embla = styled.div`
  margin: auto;
  --slide-height: 40rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;

  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
    margin-left: calc(var(--slide-spacing) * -1);
    /* transition: transform 0.3s ease-in-out; Add smooth transitions for the sliding effect */
    width: 90vw;
  }

  .embla__slide {
    transform: translate3d(0, 0, 0);
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
    background-color: #868686;
    margin-left: 1rem;
  }

  .embla__slide__number {
    box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
    border-radius: 1.8rem;
    font-size: 4rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--slide-height);
    user-select: none;
  }
`;

export default Carousel1;
