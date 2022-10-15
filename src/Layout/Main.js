import { Layout, Breadcrumb, Menu } from "antd";
import React from "react";


const menuItem = [
    {
        key: "1",
        icon: "",
        label: "nav 1"
    },
    {
        key: "2",
        icon: "",
        label: "nav 2"
    },
    {
        key: "3",
        icon: null,
        label: "nav 3"
    }
]


const Main = ({ children }) => {
    const { Header, Sider, Content } = Layout;

    return (
        <Layout className="h-[100vh]">
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
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Main;