import type { Schema, Struct } from '@strapi/strapi';

export interface CardCards extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    para: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.cards': CardCards;
    }
  }
}
