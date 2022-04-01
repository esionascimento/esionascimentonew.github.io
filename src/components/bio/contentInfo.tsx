import {
    Typography,
    Row, Col,
} from 'antd';
import {
    GithubOutlined, LinkedinOutlined, WhatsAppOutlined, createFromIconfontCN,
} from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import IconLink from './iconLink';

const { Paragraph, Text } = Typography;

function ContentInfo() {
    const { t } = useTranslation();

    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });

    return (
        <>
            <IconFont type="icon-javascript" />
            <IconFont type="icon-python" />
            <IconFont type="icon-java" />
            <div style={{ textAlign: 'justify' }}>
                <Paragraph>
                    {t('home-info:description-bio')}
                </Paragraph>
                <Paragraph>
                    {t('home-info:skills')}
                    :
                    <br />
                    {' '}
                    <Text mark>HTML5, CSS3, Bootstrap, JavaScript, React, Redux, Ant Design</Text>
                    <br />
                    {' '}
                    <Text mark>MongoDB, MySQL, NodeJS, Express</Text>
                    {' '}
                    <Text mark>Docker</Text>
                </Paragraph>
            </div>
            <Row justify="space-around">
                <Col flex="none">
                    <IconLink
                        src={<GithubOutlined />}
                        text="GitHub"
                        href="https://github.com/esionascimento"
                    />
                </Col>
                <Col flex="none">
                    <IconLink
                        src={<LinkedinOutlined />}
                        text="Linkedin"
                        href="https://www.linkedin.com/in/esionascimento/"
                    />
                </Col>
                <Col flex="none">
                    <IconLink
                        src={<WhatsAppOutlined />}
                        text="Whatsapp"
                        href="https://api.whatsapp.com/send?phone=5569992577460"
                    />
                </Col>
            </Row>
        </>
    );
}

export default ContentInfo;
