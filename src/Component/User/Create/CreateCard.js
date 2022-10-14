import React from "react";

const CreateCard = () => {
    return (
        <div className="row">
            <div className="flex flex-col w-[1388px] rounded-[8px] bg-[red]">
                <div className="flex items-center ">
                    <h5 className="mb-0">Điền thông tin</h5>
                    <div className="col-xxl " style={{}}>
                        <img className="card-img-top" src="https://taophoi.com/assets/img/phoi/phoi2.jpg" style={{ height: '120px', width: '200px', marginLeft: '10%' }} alt="Card image cap" />
                    </div>
                    <small className="text-muted float-end">
                    </small>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-name">Họ</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="ho" placeholder="Nguyễn" />
                            </div>
                        </div>
                        <div className="row mb-3" style={{ display: 'none' }}>
                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-company">Tên đệm</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="tendem1" placeholder="Văn" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-email">Tên</label>
                            <div className="col-sm-10">
                                <div className="input-group input-group-merge">
                                    <input type="text" id="ten" className="form-control" placeholder="An" aria-describedby="basic-default-email2" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-phone">Link ảnh</label>
                            <div className="col-sm-5">
                                <input type="text" id="link" className="form-control phone-mask" placeholder aria-label="658 799 8941" aria-describedby="basic-default-phone" />
                            </div>
                            <div className="col-sm-5">
                                <label className="switch">
                                    <input id="checkBox" type="checkbox" />
                                    <span className="slider round" />
                                </label>
                                <label style={{ marginLeft: '10px' }} className htmlFor="basic-default-phone">Random Ảnh</label>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-phone">Giới tính</label>
                            <div className="col-sm-1">
                                <input readOnly type="text" id="txtGioiTinh" defaultValue="F" className="form-control phone-mask" placeholder aria-label="658 799 8941" aria-describedby="basic-default-phone" />
                            </div>
                            <div className="col-sm-5">
                                <label className="switch">
                                    <input id="gioitinhCheckbox" type="checkbox" />
                                    <span className="slider round" />
                                </label>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-2 col-form-label" htmlFor="basic-default-message">Ngày sinh</label>
                            <div className="col-sm-10">
                                <div id="ngaythangnamesinh" className="row margin-input" style={{ width: '400px', marginBottom: '10px' }}>
                                    <div className="col-sm-4 col-4">
                                        <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                            <input id="ngay" type="number" className="form-control" min={1} max={31} placeholder="Ngày" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-4">
                                        <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                            <input id="thang" type="number" className="form-control" min={1} max={12} placeholder="Tháng" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-4">
                                        <div className="form-group pmd-textfield pmd-textfield-floating-label">
                                            <input id="nam" type="number" className="form-control" placeholder="Năm" min={1900} max={2021} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="col-sm-10">
                                    <button onclick="xemTruoc()" id="btnReview" type="button" className="btn btn-primary"><span id="#spanReview" style={{ display: 'none' }} className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Xem trước</button>
                                    <button onclick="taiXuong()" id="btnDownload" type="button" className="btn btn-primary"><span id="#spanDownload" style={{ display: 'none' }} className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Tải xuống</button>
                                </div>
                            </div>
                        </div></form>
                </div>
            </div>
        </div>
    );
}

export default CreateCard;