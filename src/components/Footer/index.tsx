import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '顾鱼个人出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '个人编程知识库',
          title: '个人编程知识库',
          href: 'https://www.yuque.com/acoofish/tech',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/guzhongqing',
          blankTarget: true,
        },
        {
          key: 'Gitee',
          title: 'Gitee',
          href: 'https://gitee.com/aGufish',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
