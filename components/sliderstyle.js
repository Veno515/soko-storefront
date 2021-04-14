import React, { Component } from 'react';
import styled from 'styled-components';

export const StyledSlider = styled.div`
  #body {
    background-image: url(/frame55.jpg);
    width: 95%;
    margin-left: 30px;
    margin-right: 10px;
    align-content: center;
  }

  h3 {
    color: darkGrey;
    font-family: sans-serif;
  }

  @media screen and (max-width: 1024px) {
    #body {
      width: 83%;
    }
  }

  @media screen and (max-width: 700px) {
    #body {
      width: 88%;
    }
  }

  @media screen and (max-width: 450px) {
    #body {
      width: 85%;
    }
  }

  @media screen and (max-width: 360px) {
    #body {
      width: 83%;
    }
  }

  @media screen and (max-width: 330px) {
    #body {
      width: 60%;
    }
  }

`;

export function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue"}}
        onClick={onClick}
      />
    );
  }
  
export function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue"}}
        onClick={onClick}
      />
    );
  }
  
  