import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';

import { store } from '../../redux/store';

/**
* @author
* @function DefaultLayout
**/

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DefaultLayout = ({ routers }) => {

    const [collapsed, setCollapsed] = useState(false)
    const [counter, setCounter] = useState(0)

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    };

    // componentDidMount
    useEffect(() => {
        // setInterval(() => {
        //     setCounter(store.counter)
        // }, 100)
        let updateState = () => {
            let state = store.getState().counterData
            setCounter(state.counter)
        }
        store.subscribe(updateState)
    }, [])

    // const getMenusRender = () => {
    //     console.log(routers)
    //     let menus = routers.map(menu => {
    //         return (
    //             <Menu.Item key={menu.path} icon={menu.icon}>
    //                 <Link to={menu.path}>{menu.title}</Link>
    //             </Menu.Item>
    //         )
    //     })
    //     return menus
    // }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                    {
                        // getMenusRender() or
                        routers.map(menu => {
                            return (
                                menu.children ?
                                    (
                                        <SubMenu key={menu.path} icon={menu.icon} title={menu.title + counter}>
                                            {
                                                menu.children.map(subMenu => {
                                                    return (
                                                        <Menu.Item key={subMenu.path}>
                                                            <Link to={subMenu.path}>{subMenu.title}(12)</Link>
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                    )
                                    :
                                    (
                                        <Menu.Item key={menu.path} icon={menu.icon}>
                                            <Link to={menu.path}>{menu.title}({counter})</Link>
                                        </Menu.Item>
                                    )

                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes>
                            {
                                routers.map(menu => {
                                    return menu.children ?
                                        (
                                            menu.children.map(subMenu => {
                                                // console.log(subMenu)
                                                return (
                                                    <Route path={subMenu.path} element={subMenu.component}></Route>
                                                )
                                            })
                                        )
                                        :
                                        (<Route path={menu.path} element={menu.component}></Route>)
                                })
                            }
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
