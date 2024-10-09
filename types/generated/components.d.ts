import type { Struct, Schema } from '@strapi/strapi';

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'logo';
    description: '';
  };
  attributes: {
    url: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<['LINK', 'PRIMARY', 'SECONDARY']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.logo': ElementsLogo;
      'elements.link': ElementsLink;
    }
  }
}
