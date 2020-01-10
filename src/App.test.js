import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


const setUp = () => {
    const component = shallow(<App/>);
    return component;
}

describe('App Component Rendering', ()=>{

    it('App should render a calculatorInput component', () =>{

        const component = setUp();
        const wrapper = component.find('calculatorInput');
        expect(wrapper.length).toBe(1);
    });


    it('App should render a calculatorOut component', () =>{

        const component = setUp();
        const wrapper = component.find('calculatorOutput');
        expect(wrapper.length).toBe(1);
    });
});



describe('Addition logic on App Component',()=>{

    it('Simple addition with commas', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "3,4",
            output: 7,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(7);

    });


    it('Simple addition with commas and new line', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "3,4\n5",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(12);

    });

    
    it('Simple addition with negative number error', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "3,4\n-5",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.error;
        expect(newState).toBe(true);

    });

    it('Simple addition with negative number error', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "3,4\n-5",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.error;
        expect(newState).toBe(true);

    });


    it('Simple custom delimeter', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "//*\n4\n5",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(9);

    });


    it('Complex custom delimeter', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "//[***]\n1,2,3\n1***1",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(8);

    });


    it('Complex multiple custom delimeter', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "//[***][r][n]\n1,2,3\n1***1\n1n1r1",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(11);

    });


    it('empty spaces with commas', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "1,,,,4",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(5);

    });


    it('Addition with number greater than 1000', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "1,,1001,,4",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(5);

    });


    it('Addition with 1000', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "1,,1000,,4",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(1005);

    });


    it('Incorrect simple custom format', ()=>{
        const wrapper = setUp();
        const appInstance = wrapper.instance();

        appInstance.setState({
            input: "///r\n3,4r1",
            output: 0,
            error: false,
            errorMessage: ""
        });

        appInstance.calculateHandler();
        const newState = appInstance.state.output;
        expect(newState).toBe(3);

    });
});