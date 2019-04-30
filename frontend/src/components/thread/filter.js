import React, { Component } from 'react';
import { Layout, Menu, Checkbox, Icon, } from 'antd';
import '../../css/filter.css'

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class Filter extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider style={{ background: "#fff" }}
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="ligth" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="book" />
                                <span>Filter</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="pie-chart" /><span>Duration (in Days)</span></span>}
                            >
                                <Menu.Item key="2"> <Checkbox>1-5days</Checkbox></Menu.Item>
                                <Menu.Item key="3"><Checkbox>6-14days</Checkbox></Menu.Item>
                                <Menu.Item key="4"><Checkbox>more 14 days</Checkbox></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="user" /><span>Season</span></span>}
                            >
                                <Menu.Item key="5"><Checkbox>Jan-Feb-Mar</Checkbox></Menu.Item>
                                <Menu.Item key="6"><Checkbox>Apr-May-Jun</Checkbox></Menu.Item>
                                <Menu.Item key="7"><Checkbox>Jul-Aug-Sep</Checkbox></Menu.Item>
                                <Menu.Item key="8"><Checkbox>Oct-Nov-Dec</Checkbox></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={<span><Icon type="team" /><span>Activities</span></span>}
                            >
                                <Menu.Item key="9"><Checkbox>Adventrue</Checkbox></Menu.Item>
                                <Menu.Item key="10"><Checkbox>Nature</Checkbox></Menu.Item>
                                <Menu.Item key="11"><Checkbox>Religion</Checkbox></Menu.Item>
                                <Menu.Item key="12"><Checkbox>Mountain</Checkbox></Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={<span><Icon type="team" /><span>Budget per Person</span></span>}
                            >
                                <Menu.Item key="13"><Checkbox>?</Checkbox></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            {/* TODO */}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            {/* TODO */}
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
export default Filter;
