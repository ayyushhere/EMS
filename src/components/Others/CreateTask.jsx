import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto p-6 mt-10'>
                <form className='bg-[#1a1a1a] rounded-lg p-8'>
                    <div className='flex gap-8'>
                        {/* Left Section */}
                        <div className='flex-1 space-y-4'>
                            <div>
                                <label className='block text-white text-sm mb-2'>Task Title</label>
                                <input
                                    type="text"
                                    placeholder='Make a UI design'
                                    className='w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400 text-white'
                                />
                            </div>

                            <div>
                                <label className='block text-white text-sm mb-2'>Date</label>
                                <input
                                    type="text"
                                    placeholder='dd/mm/yyyy'
                                    className='w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400 text-white'
                                />
                            </div>

                            <div>
                                <label className='block text-white text-sm mb-2'>Assign to</label>
                                <input
                                    type="text"
                                    placeholder='employee name'
                                    className='w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400 text-white'
                                />
                            </div>

                            <div>
                                <label className='block text-white text-sm mb-2'>Category</label>
                                <input
                                    type="text"
                                    placeholder='design, dev, etc'
                                    className='w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400 text-white'
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className='flex-1 space-y-4'>
                            <div>
                                <label className='block text-white text-sm mb-2'>Description</label>
                                <textarea
                                    rows="12"
                                    className='w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400 text-white resize-none'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-emerald-500 text-white py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-200'
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask