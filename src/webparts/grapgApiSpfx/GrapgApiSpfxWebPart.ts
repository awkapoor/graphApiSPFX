import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IWebPartContext, WebPartContext } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'GrapgApiSpfxWebPartStrings';
import GrapgApiSpfx from './components/GrapgApiSpfx';
import { IGrapgApiSpfxProps } from './components/IGrapgApiSpfxProps';

export interface IGrapgApiSpfxWebPartProps {
  description: string;
  context: WebPartContext;
}

export default class GrapgApiSpfxWebPart extends BaseClientSideWebPart<IGrapgApiSpfxWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGrapgApiSpfxProps> = React.createElement(
      GrapgApiSpfx,
      {
        description: this.properties.description,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
