"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';


interface Props {
    button: any // Пример структуры перевода
}

const ModalSlider: React.FC<Props> = ({ button }) => {

    const [file, setFile] = useState<File | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };


    async function onSubmit(e: any) {
        e.preventDefault()

        if (!file) {
            setMessage("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            // Проверяем на успешность и корректно обрабатываем ответ
            if (!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.message || "Image upload failed");
                return;
            }

            const data = await response.json();
            setMessage(data.message);


            const fm = new FormData(e.target)

            const slider: any = {}

            fm.forEach((val: any, key: any) => (slider[key] = val))

            slider.image = data.data

            slider.alt = slider.alt

            const res = await fetch(`http://localhost:3000/api/slider`, {
                method: "POST",
                body: JSON.stringify(slider),
                headers: {
                    "Content-Type": "application/json"
                }

            })

            console.log(res);


            if (res.status == 200 || res.status == 201) {
                alert("success")
            }
        } catch (error) {
            setMessage("Something went wrong: " + error);
        }
    }



    const [isOpend, setIsOpend] = useState(false)

    useEffect(() => {
        if (isOpend) {
            document.body.style.overflow = 'hidden'; // Отключаем скролл
        } else {
            document.body.style.overflow = ''; // Восстанавливаем скролл
        }

        // Восстанавливаем скролл при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpend]);

    return (
        <>
            <div onClick={() => setIsOpend(true)}>
                {button}
            </div>

            {isOpend && (

                <div
                    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[55]"
                    style={{
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(10px)"
                    }}>
                    <form className="w-[40%] relative flex-col p-[1%] pt-[2%] space-y-6 text-black bg-background rounded-[20px] shadow-md" onSubmit={onSubmit}>

                        <button className='absolute top-[2%] right-[1%] ' onClick={() => setIsOpend(false)}>
                            <Image src="/images/close.svg" alt="closebtn" width={25} height={25} />
                        </button>

                        <div className="flex flex-col gap-[1vh]">

                            <div className="w-full">
                                <label
                                    className="block mb-2 text-sm font-medium text-white"
                                    htmlFor="image"
                                >
                                    Upload Image
                                </label>
                                <input
                                    className="w-full  text-black  bg-gray-50 border border-gray-300 rounded-lg cursor-pointer file:w-[40%] file:p-3 file:mr-4 file:h-full file:rounded-lg file:border-0 file:font-medium file:bg-gray-300 file:text-black hover:file:bg-blue-100"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    name="image"
                                    id="image"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-white text-[18px] font-medium" htmlFor="image">Image title</label>
                                <input
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    type="text"
                                    name="alt"
                                    id="alt"
                                    placeholder="Enter your title for image"
                                    defaultValue={""}
                                />
                            </div>

                        </div>


                        <button
                            className="w-full text-[18px] px-4 py-2 text-black bg-gray-300 rounded-md hover:bg-gray-400 active:scale-[.9] transition-[.2s] "
                            type="submit"
                        >
                            Add Product
                        </button>
                    </form>


                </div>

            )}



        </>
    );
};

export default ModalSlider;