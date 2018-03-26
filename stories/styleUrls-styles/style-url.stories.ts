import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { hrefTo } from '@storybook/addon-links';

import { ParentDefaultComponent } from './default-styles/parent.component';
import { ParentOverrideComponent } from './override-styles/parent.component';
import { StyleUrlModule } from './style-url.module';

storiesOf('Style URLs', module)
  .addDecorator(
    moduleMetadata({
      imports: [ StyleUrlModule ]
    })
  )
  .add('Default Styles', () => ({
    component: ParentDefaultComponent,
    props: {},
  }))
  .add('Override CSS Style files', () => ({
    component: ParentOverrideComponent,
    props: {}
  }));
