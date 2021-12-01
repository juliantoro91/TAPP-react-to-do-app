import React from "react";
import ContentLoader from "react-content-loader";

function ItemLoader(props) {

  return (
    <ContentLoader 
      speed={2}
      width={350}
      height={80}
      viewBox="0 0 350 80"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="37.5" cy="47.5" r="22.5" />
      <rect x="80" y="30" rx="3" ry="3" width="250" height="10" /> 
      <rect x="80" y="50" rx="3" ry="3" width="250" height="10" /> 
      <circle cx="330" cy="10" r="11" />
    </ContentLoader>
  );
}

function Loader() {
  return [
    <ItemLoader key="item-loader-1"/>,
    <ItemLoader key="item-loader-2"/>,
    <ItemLoader key="item-loader-3"/>,
    <ItemLoader key="item-loader-4"/>,
    <ItemLoader key="item-loader-5"/>,
    <ItemLoader key="item-loader-6"/>,
  ];
}

export { Loader };