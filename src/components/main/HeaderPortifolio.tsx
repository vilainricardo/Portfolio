import { Select } from "antd";
import { Header } from "antd/es/layout/layout";
import i18n from "../../i18n/i18n";


const options = [
  {
    value: 'en',
    label: (
      <div>
        <img
          src="https://flagcdn.com/us.svg"
          alt="English"
          style={{ width: '20px', marginRight: '8px' }}
        />
        English
      </div>
    ),
  },
  {
    value: 'pt',
    label: (
      <div>
        <img
          src="https://flagcdn.com/br.svg"
          alt="Português"
          style={{ width: '20px', marginRight: '8px' }}
        />
        Português
      </div>
    ),
  },
];

const HeaderPortfolio = () => {

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };


  
  return (


    <Header style={{ display: 'flex', alignItems: 'center' }}>

      <h1 style={{ color: "whitesmoke" }}>Portifólio: Ricardo Vilain de Melo</h1>

      <Select
        defaultValue="en"
        style={{ width: 130, marginLeft: 'auto' }}
        onChange={handleChange}
        options={options}
      />



    </Header>


  );

}

export default HeaderPortfolio;

