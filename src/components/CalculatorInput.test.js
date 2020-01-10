import React from 'react';
import { shallow } from 'enzyme';
import CalculatorInput from './CalculatorInput';


const setUp = (props={}) => {
    const component = shallow(<CalculatorInput {...props}/>);
    return component;
}

describe('CalculatorInput Component', ()=>{

    // Test 1
    it('Render User Input based on props', () =>{
        const props = {
        };

        const component = setUp(props);
        const wrapper = component.find('.userInput');
        expect(wrapper.length).toBe(1);

    });

});