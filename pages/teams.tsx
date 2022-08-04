import type { NextPage } from 'next'
import { Layout, Menu, Breadcrumb, Table , TableProps} from 'antd';
import {teams, columns} from "../data/teams";
import 'antd/dist/antd.css';


const Teams: NextPage = () => {

  const { Header, Content} = Layout;

  const onChange: TableProps['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Layout>
    <Content className="site-layout">
      <div className="site-layout-background" style={{ minHeight: 380 }}>
       <div>
          <Table 
            dataSource={teams} 
            columns={columns} 
            bordered={true} 
            pagination={false}
            sticky={false}
            onChange={onChange}
            />
        </div> 
      </div>
    </Content>
  </Layout>
  )
}

export default Teams
