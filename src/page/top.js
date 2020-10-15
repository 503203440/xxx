import React from 'react';
// 导入elementUI
import { Input, Menu } from 'element-react'
import 'element-theme-default';

import '../css/home.css';


class Top extends React.Component {

    handleIconClick(ev) {
        console.log('点击了我')
    }
    onSelect() {

    }

    render() {
        return (
            <div id="top">
                <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                    <Menu.Item index="1">java</Menu.Item>
                    <Menu.SubMenu index="2" title="前端">
                        <Menu.Item index="2-1">vue</Menu.Item>
                        <Menu.Item index="2-2">react</Menu.Item>
                        <Menu.Item index="2-3">angular</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item index="3">数据库</Menu.Item>
                    <Menu.Item index="4">
                        <Input
                            icon="search"
                            placeholder="搜索"
                            onIconClick={this.handleIconClick.bind(this)}
                        />
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Top;