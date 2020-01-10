import React from 'react';
import { shallow } from 'enzyme';
import CalculatorOutput from './CalculatorOutput';


const setUp = (props={}) => {
    const component = shallow(<CalculatorOutput {...props}/>);
    return component;
}

describe('CalculatorOutput Component', ()=>{

    // Test 1
    it('Render Error based on props', () =>{
        const props = {
            output: "1",
            error: true,
            errorMessage: "This is an error"
        };

        const component = setUp(props);
        const wrapper = component.find('.Error');
        expect(wrapper.length).toBe(1);

    });


    // Test 2
    it('Render Answer based on props', () =>{
        const props = {
            output: "1",
            error: false,
            errorMessage: ""
        };

        const component = setUp(props);
        console.log(component.debug());
        const wrapper = component.find('.Output');
        expect(wrapper.length).toBe(1);

    });

});