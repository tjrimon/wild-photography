import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutID } = useParams()
    return (
        <div>
            <div className="mt-20">
                <h1 className="flex items-center justify-center font-bold text-blue-600 text-3xl">Wild Photography  {checkoutID}
                </h1>
            </div>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Give your address below
                        </h2>
                        <div className="justify-center w-full mx-auto" >
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Name</label>
                                        <input name="firstName" type="text" placeholder="First Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Address"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea
                                            className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="city"
                                            className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                        <input name="city" type="text" placeholder="City"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="text-lg bg-indigo-600 text-white py-2 px-8 rounded-full">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;