import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";

function Result({ result, i }) {
    console.log('result', result);

    return (
        <div style={{ display: 'inline-block' }}>
            <Spring
                from={{ opacity: 0, transform: 'tanslateY(30px)' }}
                to={{ opacity: 1, transform: 'tanslateY(0px)' }}
                config={{ delay: i * 100 }}>
                {springProps => <div style={springProps}>
                    <img src={result.toJS().images.original.url} alt='gif' />
                </div>
                }
            </Spring>
        </div>
    )
}

export default Result;