import React from 'react';

import { FormWrapper, TextWrapper } from './styles';

function FormField({ label, type, name, value, onChange }) {
    return (
        <FormWrapper>

            {type === 'textarea' ?
                (
                    <textarea
                        placeholder={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                        required
                    />
                ) : (
                    <input
                        placeholder={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                        required
                    />
                )
            }
        </FormWrapper>
    )

}

// function FormTextArea({ label, type, name, value, onChange }) {
//     return (
//         <TextWrapper>
//             <textarea
//             cols={59}
//             rows={5}
//                 placeholder={label}
//                 type={type}
//                 value={value}
//                 name={name}
//                 onChange={onChange}
//             />
//         </TextWrapper>
//     )
// }

export default FormField;