import React ,{useState} from "react";
import 'antd/dist/antd.css';
import { Space, Table, Tag } from 'antd';

const EmbryosManagement = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            render:(name) =><p className="text-[#1890FF] m-0">{name}</p>
        },
        {
            title: 'Số lần sử dụng',
            dataIndex: 'numberofuse',
            key: 'numberofuse',
            render:(numberofuse) =><p className="text-[#1890FF] m-0">{numberofuse}</p>
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status',
            render: (status) =>
                <span 
                    className=
                        {`border-[1px] border-solid px-[8px] py-[2px] rounded-[2px]
                          ${status === "Nháp" && "bg-[#F0F5FF] border-[#ADC6FF] text-[#2F54EB]"}
                          ${status === "Hoạt động" && "bg-[#F6FFED] border-[#B7EB8F] text-[#52C41A]"} 
                          ${status === "Dừng" && "bg-[#FFF2E8] border-[#FFBB96] text-[#FA541C]"}       
                        `}
                >
                    {status}
                </span>
            ,
        },
        {
            title: '',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <a className="text-[red]">Xóa</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: "Phôi thẻ căn cước",
            numberofuse: 32,
            status: 'Nháp',
        },
        {
            key: '2',
            name: 'Phôi chứng minh thư',
            numberofuse: 42,
            status: 'Hoạt động',
        },
        {
            key: '3',
            name: 'Phôi bằng lái xe',
            numberofuse: 32,
            status: 'Nháp',
        },
        {
            key: '4',
            name: 'Phôi thẻ bảo hiểm',
            numberofuse: 32,
            status: 'Dừng',

        },
    ];
    
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            // {
            //     key: 'odd',
            //     text: 'Select Odd Row',
            //     onSelect: (changableRowKeys) => {
            //         let newSelectedRowKeys = [];
            //         newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            //             if (index % 2 !== 0) {
            //                 return false;
            //             }
            //             return true;
            //         });
            //         setSelectedRowKeys(newSelectedRowKeys);
            //     },
            // },
            // {
            //     key: 'even',
            //     text: 'Select Even Row',
            //     onSelect: (changableRowKeys) => {
            //         let newSelectedRowKeys = [];
            //         newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            //             if (index % 2 !== 0) {
            //                 return true;
            //             }
            //             return false;
            //         });
            //         setSelectedRowKeys(newSelectedRowKeys);
            //     },
            // },
        ],
    };
    return (
        <div className="min-w-[1058px] min-h-[100vh] bg-[#F5F5F5] flex flex-col items-center">
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} className="w-[888px] text-[blue] mt-[138px]" />
        </div>
    );
}

export default EmbryosManagement;