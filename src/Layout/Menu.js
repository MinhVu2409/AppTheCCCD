import React, { useState } from "react";
import imgSetting from "../img/setting.png";
import imgTinTuc from "../img/tintuc.png";
import imgSeach from "../img/search.png";
import imgShare from "../img/share.png";

const Menus = ({ isAdmin }) => {
    return (
        <div className="flex flex-col  bg-[#FFFFFF] items-center ">
            <div className="w-[100%] flex justify-center border-b-[#D9D9D9] border-b-[2px] border-b-solid">
                <div className="flex flex-row w-[256px] h-[64px] items-center  ">
                    <input type="search" className="w-[210px] h-[32px] border-[1px] border-solid border-[#D9D9D9] outline-none rounded-l-[2px]" />
                    <button className="bg-[#1890FF] w-[46px] h-[32px] flex justify-center items-center rounded-r-[2px]"><img src={imgSeach} className="w-[13px] h-[13px]" /></button>
                </div>
            </div>
            <ul className="flex flex-col w-[256px] justify-center mt-[20px] ">
                <li className="flex flex-row items-center pl-[24px] h-[40px] mb-[8px] hover:bg-[#E6F7FF] hover:border-r-solid hover:border-r-[3px] hover:border-r-[#1890FF] hover:text-[#1890FF] cursor-pointer">
                    <img src={imgSetting} className="w-[14px] h-[14px] mr-[10px]" />
                    <p className="text-[14px] leading-[22px]">Tạo phôi</p>
                </li>
                <li className="flex flex-row items-center pl-[24px] h-[40px] mb-[8px] hover:bg-[#E6F7FF] hover:border-r-solid hover:border-r-[3px] hover:border-r-[#1890FF] cursor-pointer">
                    <img src={imgTinTuc} className="w-[14px] h-[14px] mr-[10px]" />
                    <p>Tin tức</p>
                </li>
                <li className="flex flex-row items-center pl-[24px] h-[40px] mb-[8px] hover:bg-[#E6F7FF] hover:border-r-solid hover:border-r-[3px] hover:border-r-[#1890FF] cursor-pointer">
                    <img src={imgShare} className="w-[14px] h-[14px] mr-[10px]" />
                    <p>Share Ads</p>
                </li>
                {
                    isAdmin && (
                        <>
                            <li className="flex flex-row items-center pl-[24px] h-[40px] mb-[8px] hover:bg-[#E6F7FF] hover:border-r-solid hover:border-r-[3px] hover:border-r-[#1890FF] cursor-pointer">
                                <img src={imgShare} className="w-[14px] h-[14px] mr-[10px]" />
                                <p>Thêm phôi</p>
                            </li>
                            <li className="flex flex-row items-center pl-[24px] h-[40px] mb-[8px] hover:bg-[#E6F7FF] hover:border-r-solid hover:border-r-[3px] hover:border-r-[#1890FF] cursor-pointer">
                                <img src={imgShare} className="w-[14px] h-[14px] mr-[10px]" />
                                <p>Quản lý phôi</p>
                            </li>
                        </>
                    )
                }
            </ul>
        </div>
    );
}

export default Menus;