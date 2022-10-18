import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ListCard from "../App/page/ListCard";
import MoreEbryos from "../App/page/MoreEmbryos";
import EmbryosManagement from "../App/page/EmbryoManagement";

import imgSetting from "../assets/img/setting.png";

const menuItem = [
    {
        key: "1",
        icon: null,
        label: <Link to="/" className="flex flex-row items-center"><img src={imgSetting} className="w-[13px] h-[14px] mr-[10px]"/>Tạo phôi</Link>
    },
    {
        key: "2",
        icon: "",
        label: <Link to="/themphoi">Thêm phôi</Link>
    },
    {
        key: "3",
        icon: "",
        label: <Link to="/quanlyphoi">Quản lý phôi</Link>
    },
    
]


const Main = ({ children }) => {
    const { Header, Sider, Content } = Layout;

    return (
        <Layout className="min-h-[100vh]">
            <Header className="header !bg-[red]" >
                <div className="logo" />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background" theme="light">
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={menuItem}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: "0 24px 24px"
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: "16px 0"
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Main;