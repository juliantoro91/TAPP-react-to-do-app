import React from "react";
import ContentLoader from "react-content-loader";
import './TodoItemLoader.css';

function TodoItemLoader({ languageSupport }) {

    let loaderDoneWidth = 45;
    let loaderDelWidth = 22;

    return (
        <li>
            <div className="loader-card-item">
                <ContentLoader
                    speed={2}
                    width={loaderDoneWidth}
                    height={loaderDoneWidth}
                    viewBox={"0 0 "+loaderDoneWidth+" "+loaderDoneWidth}
                    backgroundColor="#EEEEEE"
                    foregroundColor="#C2C2C2"
                >
                    <circle cx={loaderDoneWidth/2} cy={loaderDoneWidth/2} r={loaderDoneWidth/2} />
                </ContentLoader>

                <p>{languageSupport.one}</p>
            </div>
            
            <div className="deleteBtn">
                <ContentLoader
                    speed={2}
                    width={loaderDelWidth}
                    height={loaderDelWidth}
                    viewBox={"0 0 "+loaderDelWidth+" "+loaderDelWidth}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <circle cx={loaderDelWidth/2} cy={loaderDelWidth/2} r={loaderDelWidth/2} />
                </ContentLoader>
            </div>
        </li>
    );
}

export { TodoItemLoader };