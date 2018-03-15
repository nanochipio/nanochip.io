// @flow

declare type I18n = {
  t: (Array<string>, ...values: Array<any>) => string,
}

declare type Props = {
  i18n: I18n,
  prefix: string,
  data: Object,
}

declare var graphql: any;
