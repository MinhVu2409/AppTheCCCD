const MoreEbryos = () => {
    return (
        <div className="w-[1056px] min-h-[100vh] bg-[#F5F5F5] flex flex-row pt-[65px] pl-[53px]">
            <div className="mr-[37px] flex flex-row justify-center w-[524px] bg-[#FFFFFF]">
                <div className="w-[434px] h-[204px] bg-[#D9D9D9] flex flex-row mt-[26px]" >
                    <div className="w-[84px] h-[116px] bg-[#FFFFFF] ml-[42px] mt-[37px] mr-[47px] mb-[51px]"></div>
                    <div className="h-[103px] w-[203px] flex flex-col justify-center items-center mt-[44px]">
                        <div className="w-[118px] h-[15px] mb-[16px] bg-[#FFFFFF] "></div>
                        <div className="w-[100%] h-[9px] mb-[12px] bg-[#FFFFFF]"></div>
                        <div className="w-[100%] h-[9px] mb-[12px] bg-[#FFFFFF]"></div>
                        <div className="w-[100%] h-[9px] mb-[12px] bg-[#FFFFFF]"></div>
                        <div className="w-[100%] h-[9px] mb-[12px] bg-[#FFFFFF]"></div>
                    </div>
                </div>
            </div>
            <div className="w-[350px] min-h-[724px] bg-[#FFFFFF] items-start text-left relative">
                <form className="px-[32px] flex flex-col  " >
                    <label for="img" className="mb-[11px] text-[Roboto]">Upload phôi ảnh</label>
                    <input type="file" id="img" name="img" accept="image/*" className="mb-[19px]"></input>
                    <label className="mb-[19px]">Vị trí avatar</label>
                    <div className="flex flex-row justify-between mb-[23px]">
                        <input className="w-[130px] h-[32px] outline-none border-[1px] border-solid border-[#D9D9D9] py-[5px] pl-[12px]" placeholder="Tọa độ x" />
                        <input className="w-[130px] h-[32px] outline-none border-[1px] border-solid border-[#D9D9D9] py-[5px] pl-[12px]" placeholder="Tọa độ y" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <input className="w-[130px] h-[32px] outline-none border-[1px] border-solid border-[#D9D9D9] py-[5px] pl-[12px]" placeholder="Chiều cao" />
                        <input className="w-[130px] h-[32px] outline-none border-[1px] border-solid border-[#D9D9D9] py-[5px] pl-[12px]" placeholder="Chiều rông" />
                    </div>
                    <p className="mt-[14px] mb-[17px]">Thêm trường thông tin</p>
                    <button className="text-[red] text-left mb-[160px]" >+Thêm trường</button>
                    <div className="flex flex-row justify-between absolute bottom-[27px]">
                        <button className="w-[120px] h-[32px] border-[1px] border-solid border-[#1890FF] rounded-[2px] text-[#1890FF]">Làm lại</button>
                        <button className="w-[120px] h-[32px] border-[1px] border-solid border-[#1890FF] rounded-[2px] text-[#1890FF]">Thêm phôi</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MoreEbryos;