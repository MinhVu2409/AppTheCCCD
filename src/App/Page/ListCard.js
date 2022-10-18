import React from "react";
import { Link, Outlet } from "react-router-dom";
import imgCCCD from "../../assets/img/cccd.jpg";

const Create = () => {
    return (
        <div className="px-[40px]  flex flex-wrap justify-between pb-[100px]">
            {
                [1, 2, 3, 4, 5, 6].map(e => (
                    <div className="w-[268px] mb-[30px]">
                        <img src={imgCCCD} className="w-[100%]"/>
                        <div className="text-[#566a7f] font-medium p-[24px]">
                            <h5 className="text-[18px] mb-[14px]">Phôi Philippins</h5>
                            <p className="mb-[16px]">Phôi chứng minh thư của Philippins - Dùng để gỡ Checkpoint (956 và 282) hoặc XMDT cho via Phi. Phôi này tỉ lệ về 80% riêng via Phi.</p>
                            <button className="w-[105px] h-[40px] bg-[#696cff] rounded-[5px] text-[#FFFFFF] text-[14px] leading-[25px] py-[7px] px-[20px] hover:bg-[#5f61e6]">
                                <Link to="./createcard" className="text-[#FFFFFF]">Tạo ngay</Link>
                            </button>
                        </div>
                    </div>
                )
                )
            }
            <Outlet />
        </div>
    );
}

export default Create;