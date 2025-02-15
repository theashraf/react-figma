import { baseNodeMixin } from '../mixins/baseNodeMixin';
import { geometryMixin } from '../mixins/geometryMixin';
import { layoutMixin } from '../mixins/layoutMixin';
import { saveStyleMixin } from '../mixins/saveStyleMixin';
import { propsAssign } from '../helpers/propsAssign';
import { refMixin } from '../mixins/refMixin';
import { exportMixin } from '../mixins/exportMixin';
import { TextProps } from '../components/text/Text';
import { blendMixin } from '../mixins/blendMixin';

const textNodePropsAssign = propsAssign<TextProps>([
    'textAlignHorizontal',
    'textAlignVertical',
    'textAlignVertical',
    'textAutoResize',
    'paragraphIndent',
    'paragraphSpacing',
    'autoRename',
    'fontSize',
    'fontName',
    'textCase',
    'textDecoration',
    'letterSpacing',
    'lineHeight'
]);

export const text = (node: TextNode) => (props: TextProps) => {
    const textNode = node || figma.createText();

    refMixin(textNode)(props);
    baseNodeMixin(textNode)(props);
    saveStyleMixin(textNode)(props);
    layoutMixin(textNode)(props);
    geometryMixin(textNode)(props);
    exportMixin(textNode)(props);
    blendMixin(textNode)(props);

    textNode.characters = props.characters;

    textNodePropsAssign(textNode)(props);

    return textNode;
};
