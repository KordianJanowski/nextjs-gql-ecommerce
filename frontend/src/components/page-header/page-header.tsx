import React from 'react';

interface IProps {
  title: string;
  displayFilters?: boolean;
}

const PageHeader: React.FC<IProps> = ({ title, displayFilters = false }) => {
  return (
    <div className='flex flex-row items-center justify-between w-full mb-9'>
      <h3 className='text-3xl font-semibold'>{title}</h3>
      {
        displayFilters ?
          <div>Filters</div>
        : ''
      }
    </div>
  )
}

export default PageHeader;