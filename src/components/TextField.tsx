import React, { useState } from 'react'


interface Props {
     text:string
}

interface IUser {
  name: string;
}

export const TextField:React.FC<Props> = ()=> {

  const [value, setValue] = useState<number>(0);
  if(value===0){setValue(2)}

  return (
    <div>{value}</div>
  )
}


