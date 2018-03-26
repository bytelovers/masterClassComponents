import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text } from '@storybook/addon-knobs/angular';

import { DefaultInputModule } from "./input.module";

import { DefaultComponent } from './default-input/default.component';

storiesOf('Inputs', module)
    .addDecorator(
        moduleMetadata({
        imports: [DefaultInputModule]
        })
    )
    .addDecorator(withKnobs)
    .add('Default', () => ({
        component: DefaultComponent,
        props: {
            title: text('title', 'test title')
        }
    }));