import React from 'react';

import styled from 'styled-components';


const StyledImage = styled.div`
  color: pink;
`;

export interface ImageSizes {
  mediaQuery: string;
  type?: string;
  url: string;
  width: string;
  height: string;
}

export interface ImageProps {
  alt?: string;
  width?: string;
  height?: string
  url: string;
  sizes?: ImageSizes[]

}

export class Image extends React.Component<ImageProps> {

  constructor(props: ImageProps) {
      super(props)
  }

  renderPicture() {
      const props: ImageProps = this.props;
      const image = this.renderImage();
      return (
          <React.Fragment>
              <picture className="image-placeholder">
                  {
                      props.sizes.map((img) => {
                          return (<source srcSet={img.url} type={img.type} media={img.mediaQuery} />)
                      })
                  }
                  {image}
              </picture>
              <noscript>
                  {image}
              </noscript>
          </React.Fragment>
      );

  }
  renderImage() {
      const props: ImageProps = this.props;
      return (
          <img src={props.url} data-src={props.url} alt={props.alt} custom-name={props.alt} width={props.width} height={props.height} className="lazyload image-placeholder-item" />
      );
  }

  render() {
      if (this.props.sizes) {
          return this.renderPicture();
      }

      return this.renderImage();
  }
}
