import * as React from 'react';
const renderer = require('react-test-renderer');
import { Rectangle } from '../Rectangle';

describe('<Rectangle />', () => {
    it('Rectangle without props', () => {
        const tree = renderer.create(<Rectangle />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with layout style properties', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        width: 100,
                        height: 200,
                        top: 50,
                        left: 20
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with color background', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        backgroundColor: '#1bff00'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Rectangle with image background', () => {
        const tree = renderer
            .create(
                <Rectangle
                    style={{
                        backgroundColor: '#ff8b29',
                        backgroundSize: 'cover',
                        backgroundImage: './image.png'
                    }}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
