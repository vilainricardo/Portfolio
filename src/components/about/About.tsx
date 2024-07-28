import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();


    const getAge = (): number => {
        const date1: Date = new Date('1984-11-03');
        const date2: Date = new Date();

        const yearDiff: number = date2.getFullYear() - date1.getFullYear();
        const monthDiff: number = date2.getMonth() - date1.getMonth();
        const dayDiff: number = date2.getDate() - date1.getDate();

        let totalYearDiff: number = yearDiff;
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            totalYearDiff -= 1;
        }
        return totalYearDiff;

    }
    return (
<>
            <Row >
                <Col style={{ display: 'flex', padding: '16px' }}>
                    <img src="/assets/images/photo.jpg"
                        width={"100px"}
                        height={"100px"}
                        alt="Profile" />
                </Col>
                <Col>
                        <Row style={{ display: 'flex', paddingTop: '18px' }}>{t('aboutMe.name')}: Ricardo Vilain de Melo</Row>
                        <Row style={{ display: 'flex', padding: '0px' }}>{t('aboutMe.age')}: {getAge()}</Row>
                        
                        <Row style={{ display: 'flex', padding: '0px' }}>{t('aboutMe.nationality')}: {t('aboutMe.nationality_Brazilian')}</Row>

                </Col>
            </Row>
            <Row>

                <h1>{t('aboutMe.aboutMe')}</h1>




            </Row>
            <Row>
                <h4>{t('aboutMe.aboutMe_part1')}</h4>
                <h4>{t('aboutMe.aboutMe_part2')}</h4>
                <h4>{t('aboutMe.aboutMe_WEG')}</h4>
            </Row>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
                <img src="/assets/images/photo.jpg"
                    width={"100px"}
                    height={"100px"}
                    alt="Profile" />
            </div> */}

       

</>

    );

}

export default About;

