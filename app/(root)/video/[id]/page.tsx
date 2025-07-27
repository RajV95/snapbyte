import React from 'react'

const page = async({ params } : ParamsWithSearch) => {
    const { id } = await params;

    return (
    <main className='wrapper page'>page - {id}</main>
  )
}

export default page