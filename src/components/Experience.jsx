import React from 'react'
const Experience = () => {
    const work = [
        {
            id: 1,
            src: 'https://w7.pngwing.com/pngs/92/303/png-transparent-amazon-com-amazon-web-services-cloud-computing-amazon-s3-nrf-2019-retail-s-big-show-expo-cloud-computing-text-trademark-service.png',
            title: "AWS",
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            src:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe6IR3EKgALq0lEUvpW3GmPH8rpAv1cK0_w&s',
            title: "Python",
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
            title: "Java",
            style: 'shadow-red-500'
        },
        {
            id: 4,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s',
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            title: "CSS",
            style: 'shadow-blue-700'
        },
        {
            id: 6,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXhjVqtRd6tiqcsSQ7rD6VF7NxI-3VvoR0w&s',
            title: "JavaScript",
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s',
            title: "React",
            style: 'shadow-blue-600'
        },
        {
            id: 8,
            src: 'https://logowik.com/content/uploads/images/azure-sql2162.jpg',
            title: "SQL",
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s',
            title: "GitHub",
            style: 'shadow-gray-700'
        },
    ]
    return (
        <>
        <div name="Experience" className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen home'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>
                    {
                        work.map(({ id, src, title, style }) => (
                            <div key={id} className={` bg-white ml-1 shadow-md hover:scale-105 duration-500 shadow-gray-600 rounded-lg ${style}`}>
                                <img src={src} alt="" srcset="" className='mix-blend-multiply w-20 mx-auto h-20 mt-2' />
                                <p align="center" className='mt-1 text-black'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Experience