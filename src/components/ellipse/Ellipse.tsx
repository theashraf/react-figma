import * as React from 'react';
import { DefaultShapeProps, CornerProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import {
    GeometryStyleProperties,
    transformGeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';

export interface EllipseProps extends DefaultShapeProps, CornerProps {
    style?: LayoutStyleProperties & GeometryStyleProperties & BlendStyleProperties;
    children?: undefined;
    arcData?: ArcData;
}

export const Ellipse: React.ElementType<EllipseProps> = props => {
    const yogaRef = React.useRef();

    const ellipseProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...props
    };
    const fills = useFillsPreprocessor(ellipseProps);
    const yogaChildProps = useYogaLayout({ yogaRef, ...ellipseProps });
    return <ellipse {...ellipseProps} {...yogaChildProps} {...(fills && { fills })} innerRef={yogaRef} />;
};
