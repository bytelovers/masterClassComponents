import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/angular';

import { DefaultOutputModule } from "./output.module";

import { ParentAnnotationComponent } from './annotation-output/parent.component';

storiesOf('Outputs', module)
    .addDecorator(
        moduleMetadata({
            imports: [DefaultOutputModule]
        })
    )
    .addDecorator(withKnobs)
    .add('Default', () => ({
        component: ParentAnnotationComponent,
        props: {
            messageText: text('messageText', 'default message'),
            sendToLogger: e => action('Event sent')(e)
        }
    }));
