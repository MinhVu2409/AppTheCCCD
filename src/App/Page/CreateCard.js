import React, { useState } from "react";
import { Col, Row, Switch } from 'antd';
import imgCCCD from "../../assets/img/cccd.jpg";
import { useFormik } from "formik";
const CreateCard = () => {
    const [valueForm, setValueForm ] = useState();
    const [valueSwitchLinkImg,setValueSwitchLinkImg] = useState(false)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            linkImg: '',
            gender: 'F',
            dateOfBirth: ''
        },
        onSubmit: values => {
            setValueForm(values)
        },
    });

    console.log(valueForm);
    return (
        <div className="">
            <form className="text-[#566a7f] w-[900px] bg-[#FFFFFF] p-[15px] mx-auto " onSubmit={formik.handleSubmit}>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2"><p className="text-[18px] font-bold">Điền thông tin</p></Col>
                    <Col flex="5"><img src={imgCCCD} className="w-[200px] h-[120px]" /></Col>
                </Row>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2"><label for="firstName">HỌ</label></Col>
                    <Col flex="5">
                        <input
                            className="w-[100%] h-[40px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px]"
                            placeholder="Nguyễn"
                            id="firstName"
                            type="text"
                            name="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </Col>
                </Row>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2"><label for="lastName">TÊN</label></Col>
                    <Col flex="5">
                        <input
                            className="w-[100%] h-[40px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px]"
                            placeholder="An"
                            id="lastName"
                            type="text"
                            name="lastName"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </Col>
                </Row>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2"><label for="linkImg">LINH ẢNH</label></Col>
                    <Col flex="5">
                        <div>
                            <input
                                className="w-[50%] h-[40px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px] mr-[25px]"
                                id="linkImg"
                                type="text"
                                name="linkImg"
                                onChange={formik.handleChange}
                                value={formik.values.linkImg}
                            />
                            <Switch  onClick={()=>setValueSwitchLinkImg(!valueSwitchLinkImg)}/>
                        </div>
                    </Col>
                </Row>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2"><label for="gender">GIỚI TÍNH</label></Col>
                    <Col flex="5">
                        <div>
                            <input
                                className="w-[15%] h-[40px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px] mr-[25px]"
                                id="gender"
                                type="text"
                                name="gender"
                                onChange={formik.handleChange}
                                value={formik.values.gender}
                            />
                            <Switch />
                        </div>
                    </Col>
                </Row>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2"><label>NGÀY SINH</label></Col>
                    <Col flex="5">
                        <input className="h-[40px] w-[100px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px] mr-[25px]" />
                        <input className="h-[40px] w-[100px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px] mr-[25px]" />
                        <input className="h-[40px] w-[100px] outline-none border-[1px] border-solid border-[#566a7f] rounded-[10px] px-[20px] py-[10px] mr-[25px]" />
                    </Col>
                </Row>
                <Row align="middle" className="my-[15px]">
                    <Col flex="2">
                        <div></div>
                    </Col>
                    <Col flex="5">
                        <div>
                            <button
                                className="bg-[#696cff] w-[80px] h-[30px] text-center text-[#FFFFFF] rounded-[5px] p-[5px] mr-[20px]"
                                type="submit"
                            >
                                Xem trước
                            </button>
                            <button className="bg-[#696cff] w-[80px] h-[30px] text-center text-[#FFFFFF] rounded-[5px] p-[5px]">Tải xuống</button>
                        </div>
                    </Col>
                </Row>

            </form>
            {
                valueForm && (
                    <Row className="text-[#566a7f] w-[900px] bg-[#FFFFFF] p-[15px] mx-auto mt-[20px]">
                        <Col flex="2">
                            <p>Ảnh xem trước</p>
                        </Col>
                        <Col flex="5">
                            <img src={imgCCCD} className="w-[380px] h-[240px]" />
                        </Col>
                    </Row>
                )
            }
        </div>
    );
}

export default CreateCard;