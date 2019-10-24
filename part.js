import React from 'react';

const list = [1,2,3,4,5,6,7,7,8,8]
export const Part = <div>{list.map(i => <p> number {i} </p> )}</div>