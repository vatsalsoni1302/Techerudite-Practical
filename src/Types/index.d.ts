interface ResponseTypeAXIOS<T> {
  status: number;
  data: T;
}
interface RootStackParamList {}
interface AppLoaderRefType {
  showLoader: (state: boolean) => void;
}
interface ListItem<T> {
  item: T;
  index: number;
}
