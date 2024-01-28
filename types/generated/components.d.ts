import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicClass extends Schema.Component {
  collectionName: 'components_basic_classes';
  info: {
    displayName: 'Class';
  };
  attributes: {
    name: Attribute.String;
    startTime: Attribute.Decimal;
    endTime: Attribute.Decimal;
  };
}

export interface BasicDay extends Schema.Component {
  collectionName: 'components_basic_days';
  info: {
    displayName: 'Day';
    description: '';
  };
  attributes: {
    dayName: Attribute.String;
    classes: Attribute.Component<'basic.class', true>;
  };
}

export interface BasicFooter extends Schema.Component {
  collectionName: 'components_basic_footers';
  info: {
    displayName: 'Location';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    location: Attribute.String;
    address: Attribute.Text;
    telephone: Attribute.String;
    description: Attribute.Text;
    coords: Attribute.JSON;
  };
}

export interface BasicImage extends Schema.Component {
  collectionName: 'components_basic_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    src: Attribute.Media;
    alt: Attribute.String;
  };
}

export interface BasicLink extends Schema.Component {
  collectionName: 'components_basic_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    address: Attribute.String;
  };
}

export interface BasicQuestion extends Schema.Component {
  collectionName: 'components_basic_question';
  info: {
    displayName: 'Question';
    icon: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
    link: Attribute.Component<'basic.link'>;
  };
}

export interface BasicTextSegment extends Schema.Component {
  collectionName: 'components_basic_text_segments';
  info: {
    displayName: 'Text Segment';
    icon: 'pencil';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CardsCardCallToAction extends Schema.Component {
  collectionName: 'components_cards_card_call_to_actions';
  info: {
    displayName: 'card call to action';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    description: Attribute.Text;
    highlight: Attribute.Boolean;
    action: Attribute.String;
    footer: Attribute.String;
    link: Attribute.Component<'basic.link'>;
  };
}

export interface CardsCardWithImage extends Schema.Component {
  collectionName: 'components_cards_card_with_images';
  info: {
    displayName: 'Card with image';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    imgPosition: Attribute.String;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Component<'basic.image'>;
    link: Attribute.Component<'basic.link'>;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'basic.link', true>;
  };
}

export interface CardsPricingCards extends Schema.Component {
  collectionName: 'components_cards_pricing_cards';
  info: {
    displayName: 'Pricing Cards';
    icon: 'database';
  };
  attributes: {
    cards: Attribute.Component<'cards.card-call-to-action', true>;
    title: Attribute.String;
    subTitle: Attribute.String;
    link: Attribute.Component<'basic.link'>;
  };
}

export interface DynamicCarousel extends Schema.Component {
  collectionName: 'components_dynamic_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'play';
  };
  attributes: {
    displayButtons: Attribute.Boolean & Attribute.DefaultTo<false>;
    displayDots: Attribute.Boolean & Attribute.DefaultTo<false>;
    selectableChildren: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColours: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'cards.card-with-image', true>;
    dataType: Attribute.String & Attribute.DefaultTo<'carousel'>;
  };
}

export interface DynamicFaqs extends Schema.Component {
  collectionName: 'components_dynamic_faqs';
  info: {
    displayName: 'Faqs';
    icon: 'question';
  };
  attributes: {
    questions: Attribute.Component<'basic.question', true>;
    image: Attribute.Component<'basic.image'>;
  };
}

export interface DynamicFooter extends Schema.Component {
  collectionName: 'components_dynamic_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Locations: Attribute.Component<'basic.footer', true>;
    quickLinks: Attribute.Component<'basic.link', true>;
    image: Attribute.Media;
  };
}

export interface DynamicLocations extends Schema.Component {
  collectionName: 'components_dynamic_locations';
  info: {
    displayName: 'Locations';
    icon: 'pinMap';
  };
  attributes: {
    dataType: Attribute.String;
  };
}

export interface DynamicMeetTheCoaches extends Schema.Component {
  collectionName: 'components_dynamic_meet_the_coaches';
  info: {
    displayName: 'Meet the coaches';
    icon: 'information';
  };
  attributes: {
    dataType: Attribute.String;
  };
}

export interface DynamicPricing extends Schema.Component {
  collectionName: 'components_dynamic_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    title: Attribute.String;
    backgroundImage: Attribute.Media;
    subTitle: Attribute.Text;
    pricingCards: Attribute.Component<'cards.card-call-to-action', true>;
    link: Attribute.Component<'basic.link'>;
  };
}

export interface DynamicSchedule extends Schema.Component {
  collectionName: 'components_dynamic_schedules';
  info: {
    displayName: 'Schedule';
    description: '';
  };
  attributes: {
    dataType: Attribute.String;
  };
}

export interface DynamicSocial extends Schema.Component {
  collectionName: 'components_dynamic_socials';
  info: {
    displayName: 'Social';
    icon: 'volumeUp';
  };
  attributes: {
    image: Attribute.Component<'basic.image'>;
    link: Attribute.Component<'basic.link'>;
  };
}

export interface FormsFormInput extends Schema.Component {
  collectionName: 'components_forms_form_inputs';
  info: {
    displayName: 'Form Input';
    icon: 'information';
  };
  attributes: {
    label: Attribute.String;
    name: Attribute.String;
    placeholder: Attribute.String;
    input_type: Attribute.String;
    element_type: Attribute.String;
  };
}

export interface FormsForm extends Schema.Component {
  collectionName: 'components_forms_forms';
  info: {
    displayName: 'Form';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    url: Attribute.String;
  };
}

export interface IntrosClassIntro extends Schema.Component {
  collectionName: 'components_intros_class_intros';
  info: {
    displayName: 'Class Intro';
    icon: 'quote';
  };
  attributes: {
    questions: Attribute.Component<'basic.text-segment', true>;
  };
}

export interface IntrosFounder extends Schema.Component {
  collectionName: 'components_intros_founders';
  info: {
    displayName: 'Founder';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'basic.link'>;
    image: Attribute.Media;
  };
}

export interface IntrosIntro extends Schema.Component {
  collectionName: 'components_intros_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    text: Attribute.RichText;
    link: Attribute.Component<'basic.link'>;
    title: Attribute.String;
  };
}

export interface IntrosMainText extends Schema.Component {
  collectionName: 'components_intros_texts';
  info: {
    displayName: 'Main Text';
    icon: 'feather';
  };
  attributes: {
    intro_quote: Attribute.Text;
    quote_attribution: Attribute.String;
    question: Attribute.String;
    paragraphs: Attribute.Blocks;
    second_question: Attribute.String;
    answer_paragraph: Attribute.Blocks;
    images: Attribute.Media;
  };
}

export interface IntrosMeetTheFounders extends Schema.Component {
  collectionName: 'components_intros_meet_the_founders';
  info: {
    displayName: 'Meet the founders';
    icon: 'feather';
  };
  attributes: {
    Title: Attribute.String;
    Founders: Attribute.Component<'intros.founder', true> &
      Attribute.SetMinMax<{
        min: 2;
        max: 2;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basic.class': BasicClass;
      'basic.day': BasicDay;
      'basic.footer': BasicFooter;
      'basic.image': BasicImage;
      'basic.link': BasicLink;
      'basic.question': BasicQuestion;
      'basic.text-segment': BasicTextSegment;
      'cards.card-call-to-action': CardsCardCallToAction;
      'cards.card-with-image': CardsCardWithImage;
      'cards.card': CardsCard;
      'cards.pricing-cards': CardsPricingCards;
      'dynamic.carousel': DynamicCarousel;
      'dynamic.faqs': DynamicFaqs;
      'dynamic.footer': DynamicFooter;
      'dynamic.locations': DynamicLocations;
      'dynamic.meet-the-coaches': DynamicMeetTheCoaches;
      'dynamic.pricing': DynamicPricing;
      'dynamic.schedule': DynamicSchedule;
      'dynamic.social': DynamicSocial;
      'forms.form-input': FormsFormInput;
      'forms.form': FormsForm;
      'intros.class-intro': IntrosClassIntro;
      'intros.founder': IntrosFounder;
      'intros.intro': IntrosIntro;
      'intros.main-text': IntrosMainText;
      'intros.meet-the-founders': IntrosMeetTheFounders;
    }
  }
}
