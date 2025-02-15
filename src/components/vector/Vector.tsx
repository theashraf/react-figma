import * as React from 'react';
import { DefaultShapeProps, VectorNodeProps, CornerProps } from '../../types';
import {
    LayoutStyleProperties,
    transformLayoutStyleProperties
} from '../../styleTransformers/transformLayoutStyleProperties';
import { useYogaLayout } from '../../hooks/useYogaLayout';
import { transformBlendProperties, BlendStyleProperties } from '../../styleTransformers/transformBlendProperties';
import { useFillsPreprocessor } from '../../hooks/useFillsPreprocessor';
import {
    transformGeometryStyleProperties,
    GeometryStyleProperties
} from '../../styleTransformers/transformGeometryStyleProperties';

export interface VectorProps extends VectorNodeProps, DefaultShapeProps, CornerProps {
    style?: LayoutStyleProperties & BlendStyleProperties & GeometryStyleProperties;
    children?: undefined;
}

export const Vector: React.ElementType<VectorProps> = props => {
    const yogaRef = React.useRef();
    const vectorProps = {
        ...transformLayoutStyleProperties(props.style),
        ...transformBlendProperties(props.style),
        ...transformGeometryStyleProperties(props.style),
        ...props
    };
    const fills = useFillsPreprocessor(vectorProps);
    const yogaProps = useYogaLayout({ yogaRef, ...vectorProps });
    // @ts-ignore
    return <vector {...vectorProps} {...yogaProps} {...(fills && { fills })} innerRef={yogaRef} />;
};
