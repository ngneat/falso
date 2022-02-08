/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as falso from './falso.min';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {default as ReactJson} from "react-json-view";

const buttonStyle = {
  base: {
    backgroundColor: 'white',
    border: '1px solid',
    color: '#a395e3',
    borderRadius: 5,
    padding: 7,
    cursor: 'pointer',
    marginBottom: 10
  },
  hover: {
    backgroundColor: '#a395e3',
    color: 'white'
  }
};
function ChangeDataBtn(props) {
  const [hover, setHover] = React.useState(false);

  return <button
    {...props}
    onMouseEnter={()=>{
      setHover(true);
    }}
    onMouseLeave={()=>{
      setHover(false);
    }}
    style={{
      ...buttonStyle.base,
      ...(hover ? buttonStyle.hover : null)
    }}
  >
    Update Data
  </button>
}


const reactJsonStyle = {
  fontSize: 'inherit',
  fontFamily: 'inherit',
};

function Preview({source}) {
  return <BrowserOnly fallback={<div>...</div>}>
    {() => {
      const ReactJson = require('react-json-view').default;
      const [data, setData] = React.useState(source());

      let output = '';

      if( typeof data === 'string' ) {
        output = (<>
          <div>{data}</div>
        </>)
      }
      else if (data?.['getDate']) {
        output = (<>
          <div>{data.toString()}</div>
        </>)
      }
      else if(typeof data === 'object') {
        output = (<>
          <ReactJson style={reactJsonStyle} name={false} enableClipboard={false} src={data} />
        </>)
      }

      return (<>
        <ChangeDataBtn onClick={() => setData(source())}/>
        {output}
      </>);
    }}
  </BrowserOnly>;
}

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...falso,
  Preview,
};

export default ReactLiveScope;
