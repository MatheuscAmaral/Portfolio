import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

const options = [
  { icon: <FaWhatsapp/>, text: 'Whatsapp' },
  { icon: <BiLogoGmail/>, text: 'E-mail' },
];

function RadioCard({ setSelectedValue }) {
  const [value, setValue] = React.useState('Whatsapp');

  const handleRadioChange = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    {console.log(newValue)}
  };

  return (
    <RadioGroup onChange={handleRadioChange} value={value}>
      <Stack direction='row' className='relative'>
        {options.map((o) => (
          <div key={o.id}>
            <Radio opacity={0} width={170} height={35} position={'absolute'} top={0} zIndex={10} key={o.text} value={o.text}></Radio>
            <button
              id={o.text}
              className={`py-2 px-10 shadow-sm flex gap-1 items-center rounded-md relative ${value === o.text ? 'bg-red-900 text-white' : 'bg-white text black'}`}
            >
              <span>{o.icon}</span>
              <span>{o.text}</span>
            </button>
          </div>
        ))}
      </Stack>
    </RadioGroup>
  );
}

export default RadioCard;
