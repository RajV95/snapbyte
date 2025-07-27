import React from 'react'

const page = async({ params } : ParamsWithSearch) => {
    const { id } = await params;

    return (
    <main className='wrapper page'>
        Video ID - {id}
    </main>
  )
}

export default page