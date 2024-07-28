import { Row } from "antd";
import { useTranslation } from "react-i18next";
import "./Education.css";

const Education = () => {
    const { t } = useTranslation();



    return (
        <div style={{paddingLeft:"20px", paddingRight:"20px", textAlign:"justify"}}>

        
            <h1>{t('aboutMe.academicEducation')}</h1>

            <Row>
                <h3>{t('aboutMe.education.graduation')} </h3>
                <h4 className="h4WithoutMargim" >{t('aboutMe.education.graduationDescription')}</h4>

                <h3>{t('aboutMe.education.master')}</h3>
                <h4 className="h4WithoutMargim">{t('aboutMe.education.masterDescription1')}</h4>
                <h4 className="h4WithoutMargim">{t('aboutMe.education.masterDescription2')}</h4>
                <h3>{t('aboutMe.education.phd')}</h3>
                <h4 className="h4WithoutMargim">{t('aboutMe.education.phdDescription1')}</h4>
                <h4 className="h4WithoutMargim">{t('aboutMe.education.phdDescription2')}</h4>
                
                
            </Row>
            </div>
    );
}
export default Education;