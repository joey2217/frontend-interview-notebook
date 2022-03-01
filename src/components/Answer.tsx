import React, { memo, PropsWithChildren, useState } from 'react'

const Answer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [show, setShow] = useState(false)
  return (
    <section style={{}}>
      <div className="flex justify-between items-center cursor-pointer bg-gray p-2" onClick={()=>setShow(s=>!s)}>
        <div>查看答案</div>
        <div>{Down}</div>
      </div>
      {show && <div className='p-2'>{children}</div>}
    </section>
  )
}

export default memo(Answer)

const Down = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{
      width: '14px',
      height: '14px',
    }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
)
