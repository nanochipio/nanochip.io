
declare type I18n = {
  t: (Array<string>, ...values: Array<any>) => string,
}

declare type Props = {
  i18n: I18n,
  data: Object,
}
