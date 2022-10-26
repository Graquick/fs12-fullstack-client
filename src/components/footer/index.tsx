import React from 'react'

const Footer = () => {

    let d: Date = new Date();
    let y: number = d.getFullYear();

  return (
    <footer className='self-center h-fit'>
      <p className="text-[9px] text-justify w-fit cursor-default">
        &copy; {y} Brima Freeman, All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer