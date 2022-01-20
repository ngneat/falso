/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactJson from 'react-json-view'
import * as Falso from './falso';

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

function Preview({source}) {
  const [data, setData] = React.useState(source());

  return (
    <>
      <ChangeDataBtn onClick={() => setData(source())}/>
      {typeof data === 'object' ? <ReactJson name={false} enableClipboard={false} src={data}/> : <div>{data}</div>}
    </>
  )
}

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ReactJson,
  ...React,
  ...Falso,
  ChangeDataBtn,
  Preview
};

export default ReactLiveScope;
