import React from "react";
import ContentLoader from "react-content-loader";

function ItemLoader(props) {

  let width = 350;
  const height = 80;

  // React.useEffect(() => {
  //   width = document.getElementById('todo-cards-list').offsetWidth;
  // },[])

  return (
    <ContentLoader 
      speed={2}
      width={width}
      height={height}
      viewBox={"0 0 "+width+" "+height}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="37.5" cy="37.5" r="22.5" />
      <rect x="80" y="30" rx="3" ry="3" width={width-45-20-30} height="10" /> 
      <rect x="80" y="50" rx="3" ry="3" width={width-45-20-30} height="10" /> 
      <circle cx={width-11} cy="10" r="11" />
    </ContentLoader>
  );
}

function Loader({ quantity }) {
  
  let keys = new Array();
  for(let i = 0; i < quantity; i++) {
    keys.push("item-loader-"+i);
  }

  return (
    keys.map((key) => (
      <ItemLoader key={key} />  
    ))
  );
}

export { Loader };